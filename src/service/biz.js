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
	data.append("description", bizData.description);
	data.append("businessNumber", bizData.businessNumber);
	data.append("bank", bizData.bank);
	data.append("accountNumber", bizData.accountNumber);

	data.categories.forEach((category) => {
		data.append("categories", category);
	});

	data.deliveries.forEach((delivery) => {
		data.append("deliveries", delivery);
	});

	bizData.files.forEach((file) => {
		data.append("files", file);
	});

	return client.post(urls.signup, data, { headers });
}

/* ==============================
   비즈 사업자 정보 수정
============================== */
export function bizUpdate(bizData, updateFiles, deleteFiles) {
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

	updateFiles.forEach((file) => {
		formData.append("files", file);
	});

	deleteFiles.forEach((file) => {
		formData.append("deleteFileIds", file);
	});

	return client.post(urls.update, formData, { headers });
}
