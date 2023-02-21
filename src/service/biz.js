import { client } from ".";

const urls = {
	getMember: "/biz/getMember",
	getBiz: "/biz/getBiz",
	dashboard: "/biz/dashboard",
	signup: "/biz/signup",
	update: "/biz/update",
};

/* ==============================
   비즈 회원 조회
============================== */
export function getBizMember() {
	return client.get(urls.getMember);
}

/* ==============================
   비즈 회원 대시보드
============================== */
export function getDashboard() {
	return client.get(urls.dashboard);
}

/* ==============================
   비즈 사업자 정보 조회
============================== */
export function getBiz() {
	return client.get(urls.getBiz);
}

/* ==============================
   비즈 신청
============================== */
export function bizSignup(bizData) {
	const headers = { "Content-Type": "multipart/form-data" };
	const data = new FormData();

	data.append("storeName", bizData.storeName);
	data.append("address", bizData.address);
	data.append("addressDetails", bizData.addressDetails);
	data.append("businessNumber", bizData.businessNumber);
	data.append("ceo", bizData.ceo);
	data.append("bank", bizData.bank);
	data.append("accountNumber", bizData.accountNumber);

	bizData.categories.forEach((category) =>
		data.append("categories", category)
	);

	bizData.delivery.forEach((d) => data.append("deliveries", d));

	bizData.files.forEach((file) => data.append("files", file));

	return client.post(urls.signup, data, { headers });
}

/* ==============================
   비즈 사업자 정보 수정
============================== */
export function bizUpdate(bizData) {
	const headers = { "Content-Type": "multipart/form-data" };

	const formData = new FormData();
	formData.append("bizId", bizData.bizId);
	formData.append("ceo", bizData.ceo);
	formData.append("phone", bizData.phone);
	formData.append("address", bizData.address);
	formData.append("addressDetails", bizData.addressDetails);
	formData.append("businessNumber", bizData.businessNumber);
	formData.append("bank", bizData.bank);
	formData.append("accountNumber", bizData.accountNumber);

	bizData.files.forEach((file) => formData.append("files", file));

	bizData.deleteFiles.forEach((file) =>
		formData.append("deleteFileIds", file)
	);

	return client.post(urls.update, formData, { headers });
}
