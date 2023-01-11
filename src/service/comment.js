import { client } from ".";

const urls = {
	list: "/item/comment/list",
	writer: "/item/comment/writer",
	update: "/item/comment/update",
	delete: "/item/comment/delete",
};

/* ==============================
    댓글 리스트
============================== */
export function getCommentList(id) {
	return client.get(`${urls.list}/${id}`);
}

/* ==============================
    댓글 작성
============================== */
export function commentWriter(data) {
	return client.post(urls.writer, data);
}

/* ==============================
    댓글 수정
============================== */
export function commentUpdate(data) {
	return client.patch(urls.update, data);
}

/* ==============================
    댓글 삭제
============================== */
export function commentDelete(id) {
	return client.delete(`${urls.delete}/${id}`);
}
