import { client } from ".";

const urls = {
	list: "/item/list",
};

/* ==============================
   상품 목록
============================== */
export function getItemList(category, local, type, page, sort) {
	return client.get(
		`${urls.list}?category=${category}&local=${local}&type=${type}&page=${page}&sort=${sort}`
	);
}
