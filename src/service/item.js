import { client } from ".";

const urls = {
	categoryList: "/item/category/list",
	bestItemList: "/item/best/list",
	searchList: "/item/search/list",
};

/* ==============================
   상품 목록
============================== */
export function getItemCategoryList(category, local, page, type, sort) {
	const data = {
		category,
		address: local.address,
		x: local.x,
		y: local.y,
		page,
		type,
		sort,
	};

	return client.post(urls.categoryList, data);
}

/* ==============================
   상품 검색 목록
============================== */
export function searchItmeList(search, sort, page, x, y) {
	return client.get(
		`${urls.searchList}?search=${search}&sort=${sort}&page=${page}&x=${x}&y=${y}`
	);
}

/* ==============================
   우리 동네 인기 추천 상품 리스트
============================== */
export function getBestItemList(x, y) {
	return client.get(`${urls.bestItemList}?x=${x}&y=${y}`);
}
