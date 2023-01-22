import { client } from ".";

const urls = {
	get: "/review/details",
	list: "/review/list",
	itemList: "/review/item/list",
	save: "/review/save",
	update: "/review/update",
	like: "/review/like",
	delete: "/review/delete",
};

/* ==============================
    리뷰 상세
============================== */
export function getReview(id) {
	return client.get(`${urls.get}/${id}`);
}

/* ==============================
    상품 리뷰 리스트
============================== */
export function itemReviewList(id, sort) {
	return client.get(`${urls.itemList}/${id}?sort=${sort}`);
}

/* ==============================
    리뷰 리스트
============================== */
export function reviewList() {
	return client.get(urls.list);
}

/* ==============================
    리뷰 작성
============================== */
export function insertReview(data) {
	const headers = { "Content-Type": "multipart/form-data" };
	const formData = new FormData();
	formData.append("orderId", data.orderId);
	formData.append("storeId", data.storeId);
	formData.append("rating", data.rating);
	formData.append("contents", data.contents);
	data.items.forEach((item) => {
		formData.append("itemIds", item.itemId);
	});
	data.files.forEach((file) => {
		formData.append("files", file);
	});

	return client.post(urls.save, formData, { headers });
}

/* ==============================
    리뷰 수정
============================== */
export function updateReview(data) {
	const headers = { "Content-Type": "multipart/form-data" };
	const formData = new FormData();

	formData.append("reviewId", data.reviewId);

	if (data.contents) {
		formData.append("contents", data.contents);
	}
	if (data.rating) {
		formData.append("rating", data.rating);
	}

	data.deleteFileId.forEach((id) => {
		formData.append("deleteFileId", id);
	});

	data.files.forEach((file) => {
		formData.append("files", file);
	});

	return client.patch(urls.update, formData, { headers });
}

/* ==============================
    리뷰 좋아요
============================== */
export function likeReview(id) {
	return client.post(`${urls.like}/${id}`);
}

/* ==============================
    리뷰 삭제
============================== */
export function deleteReview(id) {
	return client.delete(`${urls.delete}/${id}`);
}
