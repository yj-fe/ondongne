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

// 사진 객체 반환
export const fileFormatter = async (url, name, defaultType = "image/jpeg") => {
	const response = await fetch(url);
	const data = await response.blob();
	return new File([data], name, {
		type: data.type || defaultType,
	});
};

// 숫자 쉼표 처리
export const numberFormatter = (value) => {
	if (!value) return;

	if (value.charAt(0) == 0) return "";

	const num = value.toString().replaceAll(",", "");
	const valid = !/[^0-9]/g.test(num);

	if (!valid) return "";

	return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
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

export const totalPrice = (price, rate) => {
	if (!price) return 0;
	if (!rate) return price;

	const originPrice = Number(price.replaceAll(",", ""));

	const result = numberFormatter(
		(originPrice - originPrice * (Number(rate) / 100)).toString()
	);

	return result ? result : "0";
};
