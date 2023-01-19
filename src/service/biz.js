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

	// 상점
	data.append("storeName", bizData.storeName);

	// 사업자 번호
	data.append("businessNumber", bizData.businessNumber);

	//카테고리
	const categories = bizData.category.split(",");
	categories.forEach((category) => {
		data.append("categories", category);
	});

	//활동지역
	const deliveries = bizData.delivery.split(",");
	deliveries.forEach((delivery) => {
		data.append("deliveries", delivery);
	});

	//파일
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
