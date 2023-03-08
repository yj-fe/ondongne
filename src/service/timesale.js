import dayjs from "dayjs";
import { client } from ".";

const urls = {
    get: "/timeSale/get",
    list: "/biz/item/timeSale/list",
    create: "/timeSale/create",
    update: "/timeSale/update",
    delete: "/timeSale/delete",
};

/* ==============================
   타임세일 리스트
============================== */
export function getTimesaleList(data) {
    return client.get(`${urls.list}?storeId=${data.storeId}&sort=${data.sort}`);
}

/* ==============================
   비즈 타임세일 리스트
============================== */
export function getBizTimesaleList(data) {
    return client.get(`${urls.list}?storeId=${data.storeId}&sort=${data.sort}`);
}

/* ==============================
   타임세일 단건조회
============================== */
export function getTimeSale(id) {
    return client.get(`${urls.get}/${id}`);
}

/* ==============================
   타임세일 등록
============================== */
export function createTimesale(data) {
    const body = {
        itemId: data.item[0].itemId,
        price: data.price.replaceAll(",", ""),
        count: data.count.replaceAll(",", ""),
        startDateTime: dayjs(data.startDateTime).format("YYYY-MM-DDTHH:mm:ss"),
        endDateTime: dayjs(data.endDateTime).format("YYYY-MM-DDTHH:mm:ss"),
    };
    return client.post(urls.create, body);
}

/* ==============================
   타임세일 수정
============================== */
export function updateTimesale(data) {
    const body = {
        timeSaleId: data.timeSaleId,
        itemId: data.item[0].itemId,
        price: data.price.replaceAll(",", ""),
        count: data.count.replaceAll(",", ""),
        startDateTime: dayjs(data.startDateTime).format("YYYY-MM-DDTHH:mm:ss"),
        endDateTime: dayjs(data.endDateTime).format("YYYY-MM-DDTHH:mm:ss"),
    };

    console.log("수정할 body : ", body);
    return client.patch(urls.update, body);
}

/* ==============================
   타임세일 삭제
============================== */
export function deleteTimesale(id) {
    return client.delete(`${urls.delete}/${id}`);
}
