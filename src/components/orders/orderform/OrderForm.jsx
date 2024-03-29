import React, { useState, useEffect } from "react";
import { loadTossPayments } from "@tosspayments/payment-sdk";
import * as L from "components/commonUi/Layout";
import * as T from "components/commonUi/Text";
import * as B from "components/commonUi/Button";
import * as Tb from "components/commonUi/Table";
import * as IP from "components/commonUi/Input";
import * as P from "components/commonUi/ProfileAvatar";
import { useNavigate, useSearchParams } from "react-router-dom";
import CheckBox from "components/commonUi/CheckBox";
import LayerSelect from "components/commonUi/LayerSelect";
import Alert from "components/commonUi/Alert";
import {
    numberFormat,
    orderName,
    orderTotalPrice,
    phoneFormatter,
} from "utils/utils";
import { useDispatch, useSelector } from "react-redux";
import { getMember } from "service/member";
import DaumPost from "components/DaumPost";
import { requestPayment } from "service/order";
import { orderActions } from "store/slices/order";

const IMGURL = "https://cdn.ondongnemarket.com/store/";

const OrderForm = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const auth = useSelector((state) => state.auth);
    const orderItems = useSelector((state) => state.order.items);
    const [member, setMembre] = useState();
    const backTo = useSelector((state) => state.order.to);

    const [orderData, setOrderData] = useState({
        memberId: "",
        cartId: "",
        storeId: "",
        nickname: "",
        phone: "",
        address: "",
        addressDetails: "",
        deliveryContents: "",
        items: [],
        deliveryPrice: 0,
        parcelPrice: 0,
        recetiveType: "배달",
        payType: "카드",
        requestSave: false,
    });

    // ui
    const [isDaumPost, setIsDaumPost] = useState(false);
    const [orderSelect, setOrderSelect] = useState(false);
    const [paySelect, setPaySelect] = useState(false);
    const [alert, setAlert] = useState(null);

    const [searchParams, setSearchParams] = useSearchParams();
    const status = searchParams.get("status");

    /* ==============================
        비정상 데이터 예외처리
    ============================== */
    const goBack = (to, message) => {
        navigate(to, { state: { error: message } });
    };

    /* ==============================
        수령 방법 초기설정
    ============================== */
    const getRecetiveType = () => {
        const recetiveType = orderItems[0]?.recetiveType;

        const arr = recetiveType.includes(",")
            ? recetiveType.split(",")
            : Array.of(recetiveType);

        return arr[0];
    };

    /* ==============================
        수령 방법 옵션
    ============================== */
    const recetiveOption = () => {
        if (orderData.items.length === 0) {
            return;
        }
        const recetiveType = orderData.items[0].recetiveType;
        const types = recetiveType.includes(",")
            ? recetiveType.split(",")
            : Array.of(recetiveType);
        const tpyeArr = types.map((t) => ({ text: t, value: t }));

        return tpyeArr;
    };

    /* ==============================
        회원 조회 및 데이터 바인딩
    ============================== */
    const dataHandler = async () => {
        if (orderItems.length === 0) {
            return goBack(backTo || "/", "이미 처리된 주문 상품입니다.");
        }

        const response = await getMember();
        if (response && response.data.data) {
            const member = response.data.data;
            setMembre(member);
            setOrderData({
                ...orderData,
                memberId: member.memberId,
                cartId: orderItems[0].cartId,
                storeId: orderItems[0].storeId,
                nickname: member.nickname,
                phone: member.phone,
                address: member.address === null ? "" : member.address,
                addressDetails:
                    member.addressDetails === null ? "" : member.addressDetails,
                deliveryContents:
                    member.deliveryContents === null
                        ? ""
                        : member.deliveryContents,
                items: orderItems,
                recetiveType: getRecetiveType(),
                deliveryPrice: orderItems[0].deliveryPrice ?? 0,
                parcelPrice: orderItems[0].parcelPrice ?? 0,
                amount: totalOrderPrice(),
                orderName: orderName(orderItems),
                timeSaleId:
                    orderItems[0].timeSaleStatus && orderItems[0].timeSale
                        ? orderItems[0].timeSale.timeSaleId
                        : null,
            });
        } else {
            return goBack("/", "회원 전용 페이지입니다.");
        }
    };

    // 총가격
    const totalOrderPrice = () => {
        if (orderData.recetiveType === "배달") {
            return Number(
                orderItems[0]?.deliveryPrice + orderTotalPrice(orderItems)
            );
        }
        if (orderData.recetiveType === "택배") {
            return Number(
                orderItems[0]?.parcelPrice + orderTotalPrice(orderItems)
            );
        }
        if (orderData.recetiveType === "픽업") {
            return Number(orderTotalPrice(orderItems));
        }
    };

    /* ==============================
        결제하기 SUBMIT 
        - 결제 api 요청
    ============================== */
    const handleSubmit = async (event) => {
        event.preventDefault();

        if (
            (orderData.recetiveType === "배달" ||
                orderData.recetiveType === "택배") &&
            (orderData.address === "" || orderData.addressDetails === "")
        ) {
            return setAlert({
                title: "배송지 입력",
                contents: "상세 주소를 입력해 주세요",
                buttonText: "확인",
                onButtonClick: () => {
                    setAlert(null);
                },
                onOverlayClick: () => {
                    setAlert(null);
                },
            });
        }

        const response = await requestPayment(orderData);
        if (response && response.data.data) {
            const data = response.data.data;

            loadTossPayments(data.clientKey).then((tossPayments) => {
                tossPayments
                    .requestPayment(orderData.payType, {
                        amount: data.amount,
                        orderId: data.orderKey,
                        orderName: data.orderName,
                        customerName: orderData.items[0].storeName,
                        successUrl: data.successUrl,
                        failUrl: data.failUrl,
                    })
                    .catch((error) => {
                        if (error.code === "USER_CANCEL") {
                            return setAlert({
                                title: "결제 취소",
                                contents: "결제가 취소되었습니다.",
                                buttonText: "확인",
                                onButtonClick: () => {
                                    setAlert(null);
                                },
                                onOverlayClick: () => {
                                    setAlert(null);
                                },
                            });
                        } else if (error.code === "INVALID_CARD_COMPANY") {
                            return setAlert({
                                title: "결제 취소",
                                contents: "유효하지 않은 카드 코드입니다.",
                                buttonText: "확인",
                                onButtonClick: () => {
                                    setAlert(null);
                                },
                                onOverlayClick: () => {
                                    setAlert(null);
                                },
                            });
                        }
                    });
            });
        }
    };

    const orderSuccess = () => {
        setAlert({
            title: JSON.parse(status) ? "주문 완료" : "주문 실패",
            contents: JSON.parse(status)
                ? "주문이 완료되었습니다."
                : "주문을 취소하였습니다!",
            buttonText: "확인",
            onButtonClick: JSON.parse(status)
                ? () => {
                      dispatch(orderActions.remove());
                      navigate("/order/all", { replace: true });
                  }
                : () => {
                      dispatch(orderActions.remove());
                      navigate(backTo, { replace: true });
                  },
            onOverlayClick: null,
        });
    };

    useEffect(() => {
        if (status !== undefined && status !== null) orderSuccess();
    }, [status]);

    useEffect(() => {
        if (auth && orderItems.length > 0) {
            dataHandler();
        }
    }, [auth]);

    useEffect(() => {
        setOrderData({
            ...orderData,
            amount: totalOrderPrice(),
        });
    }, [orderData.recetiveType]);

    return orderData ? (
        <L.Container as="form" _padding="8px 0 68px">
            {/* 배송지 정보 */}
            <L.Contents>
                <L.FlexCols as="fieldset" _gap={16}>
                    <T.Text as="label" _size={18} _weight={600}>
                        배송지
                    </T.Text>
                    <L.FlexCols _gap={8}>
                        <L.FlexCols _gap={8}>
                            <T.Text _size={15} _color="gray600">
                                {orderData.nickname}
                            </T.Text>
                            <T.Text _size={15} _color="gray600">
                                {phoneFormatter(orderData.phone)}
                            </T.Text>
                            {orderData.recetiveType == "택배" &&
                                !orderData.address && (
                                    <L.FlexRows>
                                        <IP.TextInput
                                            placeholder="배송 받으실 주소를 검색해주세요."
                                            onClick={() => setIsDaumPost(true)}
                                            readOnly
                                        />
                                    </L.FlexRows>
                                )}
                            {orderData.recetiveType == "택배" &&
                                orderData.address && (
                                    <L.FlexCols _gap={8}>
                                        <L.FlexRows>
                                            <T.Text _size={15} _color="gray600">
                                                {orderData.address}
                                            </T.Text>
                                            <B.Badge
                                                type="button"
                                                onClick={() =>
                                                    setIsDaumPost(true)
                                                }>
                                                주소 변경
                                            </B.Badge>
                                        </L.FlexRows>
                                        <IP.TextInput
                                            placeholder="상세주소를 입력해주세요."
                                            value={
                                                orderData.addressDetails ?? ""
                                            }
                                            onChange={(e) =>
                                                setOrderData({
                                                    ...orderData,
                                                    addressDetails:
                                                        e.target.value,
                                                })
                                            }
                                        />
                                    </L.FlexCols>
                                )}
                            {orderData.recetiveType == "배달" &&
                                !orderData.address && (
                                    <L.FlexRows>
                                        <IP.TextInput
                                            placeholder="배송 받으실 주소를 검색해주세요."
                                            onClick={() => setIsDaumPost(true)}
                                            readOnly
                                        />
                                    </L.FlexRows>
                                )}
                            {orderData.recetiveType == "배달" &&
                                orderData.address && (
                                    <L.FlexCols _gap={8}>
                                        <L.FlexRows>
                                            <T.Text _size={15} _color="gray600">
                                                {orderData.address}
                                            </T.Text>
                                            <B.Badge
                                                type="button"
                                                onClick={() =>
                                                    setIsDaumPost(true)
                                                }>
                                                주소 변경
                                            </B.Badge>
                                        </L.FlexRows>
                                        <IP.TextInput
                                            placeholder="상세주소를 입력해주세요."
                                            value={
                                                orderData.addressDetails ?? ""
                                            }
                                            onChange={(e) =>
                                                setOrderData({
                                                    ...orderData,
                                                    addressDetails:
                                                        e.target.value,
                                                })
                                            }
                                        />
                                    </L.FlexCols>
                                )}
                        </L.FlexCols>
                    </L.FlexCols>
                    <B.LayerOptionButton
                        type="button"
                        active={orderSelect}
                        onClick={() =>
                            setOrderSelect((orderSelect) => !orderSelect)
                        }>
                        {orderData.recetiveType}(으)로 주문
                    </B.LayerOptionButton>
                    <LayerSelect
                        active={orderSelect}
                        close={true}
                        selected={orderData.recetiveType}
                        name="recetiveType"
                        selectName="주문 방식"
                        options={recetiveOption()}
                        onChange={(e) => {
                            e.preventDefault();
                            setOrderData({
                                ...orderData,
                                recetiveType: e.currentTarget.value,
                                address:
                                    e.currentTarget.value == "택배"
                                        ? ""
                                        : member.address,
                                addressDetails:
                                    e.currentTarget.value == "택배"
                                        ? ""
                                        : member.addressDetails,
                            });
                            setOrderSelect(false);
                        }}
                        onOverlayClick={() => {
                            setOrderSelect(false);
                        }}
                    />
                </L.FlexCols>
            </L.Contents>
            {/* 요청 사항 */}
            <L.Contents>
                <L.FlexCols _gap={16}>
                    <T.Text _weight={600}>요청사항</T.Text>
                    <IP.TextInput
                        value={orderData.deliveryContents}
                        onChange={(e) =>
                            setOrderData({
                                ...orderData,
                                deliveryContents: e.target.value,
                            })
                        }
                        placeholder="언제나 고객님의 요청에 귀 기울입니다."
                    />
                    <CheckBox
                        label="다음에도 사용"
                        name="requestSave"
                        checked={orderData.requestSave}
                        onChange={(e) =>
                            setOrderData({
                                ...orderData,
                                requestSave: e.currentTarget.checked,
                            })
                        }
                    />
                </L.FlexCols>
            </L.Contents>
            {/* 상품 목록 */}
            {orderData.items.length > 0 && (
                <>
                    <L.FlexCols _gap={2}>
                        <L.Contents>
                            <L.FlexRows _gap={16}>
                                <P.CameraStyle
                                    src={
                                        orderData.items[0].storeProfile &&
                                        IMGURL + orderData.items[0].storeProfile
                                    }
                                />
                                <T.Text _weight={600}>
                                    {orderData.items[0].storeName}
                                </T.Text>
                            </L.FlexRows>
                        </L.Contents>
                        {orderData.items.length > 0 &&
                            orderData.items.map((o) => (
                                <L.Contents key={o.itemId}>
                                    <L.FlexCols _gap={8}>
                                        <L.FlexCols _gap={8}>
                                            <T.Text _weight={600}>
                                                {o.itemName}
                                            </T.Text>
                                            <L.FlexCols _gap={4}>
                                                <T.Text _color="gray600">
                                                    수량: {o.count}개
                                                </T.Text>
                                                <T.Text _color="gray600">
                                                    기본:{" "}
                                                    {numberFormat(
                                                        Number(
                                                            o.timeSaleStatus &&
                                                                o.timeSale
                                                                ? o.timeSale
                                                                      .price
                                                                : o.salePrice
                                                        ) * o.count
                                                    )}{" "}
                                                    원
                                                </T.Text>
                                            </L.FlexCols>
                                        </L.FlexCols>
                                    </L.FlexCols>
                                </L.Contents>
                            ))}
                    </L.FlexCols>
                    {/* 결제 금액 */}
                    <L.Contents>
                        <L.FlexCols _gap={16}>
                            <T.Text _size={18} _weight={600}>
                                결제 금액
                            </T.Text>
                            <Tb.ReciptTable>
                                <tbody>
                                    <tr>
                                        <th>상품 주문 금액</th>
                                        <td>
                                            {numberFormat(
                                                orderTotalPrice(orderData.items)
                                            )}{" "}
                                            원
                                        </td>
                                    </tr>
                                    {orderData.recetiveType == "배달" && (
                                        <tr>
                                            <th>배달비</th>
                                            <td>
                                                {numberFormat(
                                                    orderData.deliveryPrice
                                                )}{" "}
                                                원
                                            </td>
                                        </tr>
                                    )}
                                    {orderData.recetiveType == "택배" && (
                                        <tr>
                                            <th>택배비</th>
                                            <td>
                                                {numberFormat(
                                                    orderData.parcelPrice
                                                )}{" "}
                                                원
                                            </td>
                                        </tr>
                                    )}
                                    {/* <tr>
                                    <th>결제 수단</th>
                                    <td>{ payType }</td>
                                </tr> */}
                                </tbody>
                                <tfoot>
                                    <tr>
                                        <th>총 결제금액</th>
                                        <td>
                                            {numberFormat(orderData.amount) +
                                                "원"}
                                        </td>
                                    </tr>
                                </tfoot>
                            </Tb.ReciptTable>
                        </L.FlexCols>
                    </L.Contents>
                </>
            )}
            {/* 결제 수단 */}
            <L.Contents>
                <L.FlexCols _gap={16}>
                    <T.Text _size={18} _weight={600}>
                        결제 수단
                    </T.Text>
                    <B.LayerOptionButton
                        type="button"
                        onClick={() => setPaySelect((paySelect) => !paySelect)}>
                        {orderData.payType}
                    </B.LayerOptionButton>
                </L.FlexCols>
                <LayerSelect
                    active={paySelect}
                    close={true}
                    selected={orderData.payType}
                    name="payType"
                    selectName="결제 수단"
                    options={[
                        { text: "카드 결제", value: "카드" },
                        // { text: "계좌이체", value: "계좌이체" },
                    ]}
                    onChange={(e) => {
                        e.preventDefault();
                        setOrderData({
                            ...orderData,
                            payType: e.currentTarget.value,
                        });
                        setPaySelect(false);
                    }}
                    onOverlayClick={(e) => {
                        setPaySelect(false);
                    }}
                />
            </L.Contents>
            <B.FixedActionButton onClick={handleSubmit}>
                결제하기
            </B.FixedActionButton>
            {isDaumPost && (
                <DaumPost
                    closeModel={() => setIsDaumPost(false)}
                    setAddress={(address) =>
                        setOrderData({
                            ...orderData,
                            address: address,
                        })
                    }
                    active={orderData.recetiveType == "택배"}
                />
            )}
            {alert && (
                <Alert
                    title={alert.title}
                    contents={alert.contents}
                    buttonText={alert.buttonText}
                    onButtonClick={alert.onButtonClick}
                    onOverlayClick={alert.onOverlayClick}
                />
            )}
        </L.Container>
    ) : (
        <></>
    ); // loading
};

export default OrderForm;
