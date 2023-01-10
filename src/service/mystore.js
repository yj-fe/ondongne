import { client } from ".";

const urls = {
	list: "/mystore/list",
	process: "/mystore",
};

/* ==============================
   단골 상점 리스트
============================== */
export function getMyStores(page, sort) {
	return client.get(`${urls.list}?page=${page}&sort=${sort}`);
}

/* ==============================
   단골 찜
============================== */
export function storeLike(id) {
	return client.post(`${urls.process}/${id}`);
}
