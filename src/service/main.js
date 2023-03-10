import { client } from ".";

const urls = {
    timeSale: "/item/timeSale/list",
    group: "/item/group/list",
    bestCoupon: "/store/coupon/list",
    bestItem: "/item/best/list",
    newstore: "/store/new/list",
    mystore: "/mystore/best/list",
    banner: "/banner",
};

/* ==============================
   배너 목록
============================== */
export async function getBanners() {
    const response = await client.get(urls.banner);
    return response.data.data;
}

/* ==============================
    메인 페이지 쿠폰 상점 리스트
============================== */
export function getStoreCouponList(local, limit = 9, page = 1) {
    return client.get(
        `${urls.bestCoupon}?x=${local.x}&y=${local.y}&page=${page}&limit=${limit}`
    );
}

/* ==============================
   우리동네 타임세일 상품 리스트
============================== */
export function getTimeSaleItemList(local, limit = 9, page = 1) {
    return client.get(
        `${urls.timeSale}?x=${local.x}&y=${local.y}&page=${page}&limit=${limit}`
    );
}

/* ==============================
   공동 구매 마지막 찬스 상품 리스트
============================== */
export function getLastGroupItemList(local, limit = 9, page = 1) {
    return client.get(
        `${urls.group}?x=${local.x}&y=${local.y}&page=${page}&limit=${limit}`
    );
}

/* ==============================
   우리동네 인기 추천 상품 리스트
============================== */
export function bestItemList(local, limit = 9, page = 1) {
    return client.get(
        `${urls.bestItem}?x=${local.x}&y=${local.y}&page=${page}&limit=${limit}`
    );
}

/* ==============================
   MY단골 인기 상품 리스트
============================== */
export function MyStoreBestItem(local, limit = 9, page = 1) {
    return client.get(
        `${urls.mystore}?x=${local.x}&y=${local.y}&page=${page}&limit=${limit}`
    );
}

/* ==============================
   우리동네 신규 입점 상점 리스트
============================== */
export function newStoreList(local, limit = 9, page = 1) {
    return client.get(
        `${urls.newstore}?x=${local.x}&y=${local.y}&page=${page}&limit=${limit}`
    );
}
