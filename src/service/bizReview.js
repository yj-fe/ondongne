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
    리뷰 댓글 수정
============================== */
export function updateReviewComment(data) {
	const headers = { "Content-Type": "multipart/form-data" };
	const formData = new FormData();

	formData.append("reviewId", data.reviewId);

	if (data.comment) {
		formData.append("comment", data.comment);
	}

	return client.post(urls.update, formData, { headers });
}
