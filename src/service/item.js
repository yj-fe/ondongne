import { client } from ".";

const urls = {
	insert: "/biz/item/insert",
};

/* ==============================
   비즈 상점 프로필 이미지 수정
============================== */
export function createItem(data) {
	console.log(data);

	const headers = { "Content-Type": "multipart/form-data" };
	const formData = new FormData();
	formData.append("type", data.type);
	formData.append("name", data.name);
	formData.append("description", data.description);
	formData.append("price", data.price);
	formData.append("salePercent", data.salePercent);
	formData.append("minCount", data.minCount);
	formData.append("maxCount", data.maxCount);
	formData.append("endDate", data.endDate);
	formData.append("recetiveType", data.recetiveType.join(","));

	data.categories.forEach((category) => {
		formData.append("categories", category);
	});

	data.files.forEach((file) => {
		formData.append("files", file);
	});

	return client.post(urls.insert, formData, { headers });
}
