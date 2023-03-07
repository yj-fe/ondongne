import { client } from ".";

const urls = {
    list: "/timesale/list",
    create: "/timesale/create",
    update: "/timesale/update",
    delete: "/timesale/delete",
};

/* ==============================
   타임세일 리스트
============================== */
export function getTimesaleList(data) {
    return client.get(
        `${urls.list}?storeId=${data.storeId ?? null}&sort=${
            data.sort ?? null
        }&limit=${data.limit ?? null}&page=${data.page ?? null}`
    );
}

/* ==============================
   타임세일 리스트
============================== */
export function getBizTimesaleList(data) {
    return client.get(`${urls.list}?storeId=${data.storeId}&sort=${data.sort}`);
}

/* ==============================
   타임세일 등록
============================== */
export function createTimesale(data) {
    return client.post(urls.create, data);
}

/* ==============================
   타임세일 수정
============================== */
export function updateTimesale(data) {
    return client.patch(urls.update, data);
}

/* ==============================
   타임세일 삭제
============================== */
export function deleteTimesale(id) {
    return client.delete(`${urls.delete}/${id}`);
}
