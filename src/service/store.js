import { client } from ".";

const urls = {
	get: "/biz/store/get",
    imageUpdate: 'biz/store/image',
	update: "/biz/store/update",
};

/* ==============================
   비즈 상점 조회
============================== */
export function getBizStore() {
	return client.get(urls.get);
}

/* ==============================
   비즈 상점 프로필 이미지 수정
============================== */
export function storeImageProfileUpdate(file, id) {
    const headers = { "Content-Type": "multipart/form-data" };
	const data = new FormData();
    data.append("storeId", id);
    data.append("storeImageType", "PROFILE");
	data.append("file", file);
    return client.post(urls.imageUpdate, data, { headers });
}

/* ==============================
   비즈 상점 배너 이미지 수정
============================== */
export function storeImageBannerUpdate(file, id) {
    const headers = { "Content-Type": "multipart/form-data" };
	const data = new FormData();
    data.append("storeId", id);
    data.append("storeImageType", "BANNER");
	data.append("file", file);
    return client.post(urls.imageUpdate, data, { headers });
}

/* ==============================
   비즈 상점 정보 수정
============================== */
export function storeUpdate(bizData, updateFiles, deleteFiles) {
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

