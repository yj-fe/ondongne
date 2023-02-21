import { client } from ".";

const urls = {
	details: "/store/details",
	categoryList: "/store/category/list",
	searchList: "/store/search/list",
	map: "/store/map/list",
};
/* ==============================
   상점 상세
============================== */
export function getStoreDetails(id) {
	return client.get(`${urls.details}/${id}`);
}

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

export function storeMapList(data) {
	return client.get(`${urls.map}?x=${data.x}&y=${data.y}`);
}
