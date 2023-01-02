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
export function storeUpdate(data) {
	return client.post(urls.update, data);
}

