import { client } from ".";

const urls = {
	group: "/item/group/list",
	bestItem: "/item/best/list",
	newstore: "/store/new/list",
	mystore: "/mystore/best/list",
	banner: "/banner",
};

/* ==============================
   배너 목록
============================== */
export function getBanners() {
	return client.get(urls.banner);
}

/* ==============================
   공동 구매 마지막 찬스 상품 리스트
============================== */
export function getLastGroupItemList(local) {
	return client.get(`${urls.group}?x=${local.x}&y=${local.y}`);
}

/* ==============================
   MY단골 인기 상품 리스트
============================== */
export function MyStoreBestItem(local) {
	return client.get(`${urls.mystore}?x=${local.x}&y=${local.y}`);
}

/* ==============================
   우리동네 인기 추천 상품 리스트
============================== */
export function bestItemList(local) {
	return client.get(`${urls.bestItem}?x=${local.x}&y=${local.y}`);
}

/* ==============================
   우리동네 신규 입점 상점 리스트
============================== */
export function newStoreList(local) {
	return client.get(`${urls.newstore}?x=${local.x}&y=${local.y}`);
}
