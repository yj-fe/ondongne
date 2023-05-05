// 활동 지역 문자열 외.. 처리
export function deliveryToString(string) {
  const result = [];

  const list = string.split(",");

  list.forEach((item) => {
    const [dong] = item.split(" ");
    result.push(dong);
  });

  if (result.length > 3) {
    return `${result[0]}, ${result[1]}, ${result[2]} 외 ${result.length - 3}개`;
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

// 이메일 형식
export const isEmail = (email) => {
  const regExp =
    /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;
  return regExp.test(email);
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

// 이미지 체크
export const imageValidation = (file) => {
  if (!file) return false;
  const fileSize = file.size;
  const maxSize = 10 * 1024 * 1024;
  const reg = /(.*?)\.(jpg|jpeg|png)$/;

  if (!file.name.toLowerCase().match(reg)) {
    return "jpg|jpeg|png 형식의 파일을 첨부해주세요.";
  }

  if (fileSize > maxSize) {
    return "사진 용량은 10MB 이내로 등록 가능합니다.";
  }
};

// 파일 체크
export const fileValidation = (file) => {
  if (!file) return false;
  const fileSize = file.size;
  const maxSize = 10 * 1024 * 1024;
  const reg = /(.*?)\.(jpg|jpeg|png|pdf)$/;

  if (!file.name.toLowerCase().match(reg)) {
    return "pdf, jpg, png형식의 파일을 첨부해주세요.";
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

// 총 가격
export const storeTotalPrice = (values) => {
  let price = 0;
  values.map(
    (item) =>
      (price +=
        Number(item.price) * item.count -
        Number(item.price) * item.count * (Number(item.salePercent) / 100))
  );

  return price;
};

// 주문 총 가격
export const orderTotalPrice = (values) => {
  let price = 0;
  values.map(
    (item) =>
      (price +=
        Number(
          item.timeSaleStatus && item.timeSale
            ? item.timeSale.price
            : item.salePrice
        ) * item.count)
  );
  return price;
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
  if (filter === "reviewLike") return "리뷰 도움 순";
  if (filter === "newstore") return "신규 매장 순";
  if (filter === "like") return "단골 많은 순";
  if (filter === "coupon") return "쿠폰 인기 순";
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

// 전화번호 포맷
export const phoneFormatter = (input) => {
  const cleanInput = input.replaceAll(/[^0-9]/g, "");
  let result = "";
  const length = cleanInput.length;
  if (length === 8) {
    result = cleanInput.replace(/(\d{4})(\d{4})/, "$1-$2");
  } else if (cleanInput.startsWith("02") && (length === 9 || length === 10)) {
    result = cleanInput.replace(/(\d{2})(\d{3,4})(\d{4})/, "$1-$2-$3");
  } else if (!cleanInput.startsWith("02") && (length === 10 || length === 11)) {
    result = cleanInput.replace(/(\d{3})(\d{3,4})(\d{4})/, "$1-$2-$3");
  } else {
    result = undefined;
  }
  return result;
};

// 주문 이름
export const orderName = (item) => {
  if (item.length > 1) {
    return `${item[0].itemName} 외 ${item.length - 1}개`;
  } else {
    return `${item[0].itemName}`;
  }
};

// 퍼센트 구하기
export const disRate = (price, disPrice) => {
  if (!price) return 0;

  const originPrice = Number(price.toString().replaceAll(",", ""));

  const result = 100 - (disPrice / originPrice) * 100;

  return result ? Math.floor(result) : "0";
};

// 글자 수 넘길 시
export const overNaming = (name, max) => {
  return name.length > max ? name.substring(0, max) + "..." : name;
};

export function base64toFile(base_data, filename) {
  var arr = base_data.split(","),
    mime = arr[0].match(/:(.*?);/)[1],
    bstr = atob(arr[1]),
    n = bstr.length,
    u8arr = new Uint8Array(n);

  while (n--) {
    u8arr[n] = bstr.charCodeAt(n);
  }

  return new File([u8arr], filename, { type: mime });
}
