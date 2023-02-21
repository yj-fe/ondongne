import { client } from ".";

const urls = {
	report: "/report",
};

/* ==============================
    신고하기
============================== */
export function report(data) {
	return client.post(urls.report, data);
}
