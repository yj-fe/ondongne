// 활동 지역 문자열 외.. 처리
export function deliveryToString(string) {
	const result = [];

	const list = string.split(",");

	list.forEach((item) => {
		const [si, gu, dong] = item.split(" ");
		result.push(dong);
	});

	if (result.length > 3) {
		return `${result[0]}, ${result[1]}, ${result[2]} 외 ${
			result.length - 3
		}개`;
	}

	return result.join(", ");
}

// 사업자 등록 번호 정규식
export const businessNumberFormatter = (value) => {
	if (!/^[0-9]+$/.test(value)) {
		return "";
	}

	let num = "";
	num = value.replace(/(\d{3})(\d{2})(\d{5})/, "$1-$2-$3");
	return num;
};

// 숫자 정규식 검사 후 쉼표 처리
export const numberFormatter = (value) => {
	if (!value) return;

	if (value.charAt(0) == "0") return "";

	const num = value.toString().replaceAll(",", "");
	const valid = !/[^0-9]/g.test(num);

	if (!valid) return "";

	return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

// 숫자 쉼표 처리
export const numberFormat = (value) => {
	if (!value) return;

	return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

// 파일 체크
export const imageValidation = (file) => {
	const fileSize = file.size;
	const maxSize = 10 * 1024 * 1024;
	const reg = /(.*?)\.(jpg|jpeg|png)$/;

	if (!file.name.toLowerCase().match(reg)) {
		return ".jpg/.jpeg/.png 형식의 파일을 첨부해주세요.";
	}

	if (fileSize > maxSize) {
		return "사진 용량은 10MB 이내로 등록 가능합니다.";
	}
};

// 총 가격
export const totalPrice = (price, rate) => {
	if (!price) return 0;
	if (!rate)
		return price.toString().includes(",") ? price : numberFormat(price);

	const originPrice = Number(price.toString().replaceAll(",", ""));

	const result = numberFormatter(
		(originPrice - originPrice * (Number(rate) / 100)).toString()
	);

	return result ? result : "0";
};

// 상품 정렬 한글화
export const sortFormatter = (filter) => {
	if (filter === "all") return "상품 전체";
	if (filter === "normal") return "일반 상품";
	if (filter === "group") return "공동구매 상품";
	if (filter === "create") return "기본 순";
	if (filter === "order") return "주문 많은 순";
	if (filter === "orderDesc") return "최근 주문 순";
	if (filter === "review") return "리뷰 별점 순";
	if (filter === "newstore") return "신규 매장 순";
	if (filter === "like") return "단골 많은 순";
};

// 데이터 상점 리스트 그룹화
export const groupBy = (data, key) => {
	return data.reduce((list, item) => {
		const group = item[key];

		if (list[group] === undefined) {
			list[group] = [];
		}

		list[group].push(item);

		return list;
	}, {});
};

export const isEmptyObj = (obj) => {
	if (obj.constructor === Object && Object.keys(obj).length === 0) {
		return true;
	}

	return false;
};
