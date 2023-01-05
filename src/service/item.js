import { client } from ".";

const urls = {
	categoryList: "/item/category/list",
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
