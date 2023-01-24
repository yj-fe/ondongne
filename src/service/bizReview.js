import { client } from ".";

const urls = {
	list: "/biz/review/list",
	update: "/biz/review/update",
};

/* ==============================
    리뷰 리스트
============================== */
export function bizReviewList(id) {
	return client.get(`${urls.list}/${id}`);
}

/* ==============================
    리뷰 사장님 댓글
============================== */
export function updateReviewComment(id, comment, orderId) {
	const headers = { "Content-Type": "multipart/form-data" };
	const formData = new FormData();

	formData.append("reviewId", id);

	formData.append("comment", comment);

	formData.append("orderId", orderId);
	
	return client.patch(urls.update, formData, { headers });
}
