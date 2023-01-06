import { client } from ".";

const urls = {
	categoryList: "/store/category/list",
	searchList: "/store/search/list",
};

/* ==============================
   상점 목록
============================== */
export function getStoreCategoryList(category, local, page, sort) {
	const data = {
		category,
		address: local.address,
		x: local.x,
		y: local.y,
		page,
		sort,
	};

	return client.post(urls.categoryList, data);
}

/* ==============================
   상점 검색 목록
============================== */
export function searchStoreList(search, sort, page, x, y) {
	return client.get(
		`${urls.searchList}?search=${search}&sort=${sort}&page=${page}&x=${x}&y=${y}`
	);
}
