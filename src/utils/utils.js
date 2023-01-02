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
export const fileFormatter = async (url, name, defaultType = 'image/jpeg') => {	
    const response = await fetch(url);
    const data = await response.blob();
    return new File([data], name, {
      type: data.type || defaultType,
    });
  }

export const numberFormatter = value => {
	if(!value) return;

	if(value.charAt(0) == 0) return '';

	const num = value.toString().replaceAll(',', '');
	const valid = !/[^0-9]/g.test(num);

	if(!valid) return '';
	
	return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

export const hourValidtion = (value) => {
	const valid = /[^0-9]/g.test(value);

	if(!valid) return false;


	
}
export const minValidtion = (value) => {
	const valid = /[^0-9]/g.test(value);

	if(!valid) return false;

}
