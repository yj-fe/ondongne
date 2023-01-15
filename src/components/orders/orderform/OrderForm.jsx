import React, { useState, useEffect } from 'react'
import { loadTossPayments } from '@tosspayments/payment-sdk'
import * as L from 'components/commonUi/Layout';
import * as T from 'components/commonUi/Text';
import * as B from 'components/commonUi/Button'
import * as Tb from 'components/commonUi/Table';
import * as IP from 'components/commonUi/Input';
import * as P from 'components/commonUi/ProfileAvatar';
import { useNavigate, useSearchParams } from 'react-router-dom';
import CheckBox from 'components/commonUi/CheckBox';
import LayerSelect from 'components/commonUi/LayerSelect';
import Alert from 'components/commonUi/Alert';
import { numberFormat, phoneFormatter, storeTotalPrice, totalPrice } from 'utils/utils';
import { useSelector } from 'react-redux';
import { getMember } from 'service/member';
import DaumPost from 'components/DaumPost';
import { requestPayment } from 'service/payment';
const IMGURL = 'https://ondongne-bucket.s3.ap-northeast-2.amazonaws.com/store/';

const OrderForm = ({ data }) => {

    const navigate = useNavigate();
    const auth = useSelector(state => state.auth);
    const orderItems = useSelector(state => state.order.items);

    const [orderData, setOrderData] = useState({
        memberId: '',
        cartId: '',
        storeId: '',
        nickname: '',
        phone: '',
        address: '',
        addressDetails: '',
        deliveryContents: '',
        items: [],
        deliveryPrice: 0,
        amount: 0,
        recetiveType: '배달',
        payType: '카드',
        requestSave: false,
    })

    // ui
    const [isDaumPost, setIsDaumPost] = useState(false);
    const [orderSelect, setOrderSelect] = useState(false);
    const [paySelect, setPaySelect] = useState(false);
    const [alert, setAlert] = useState(null);

    const [searchParams, setSearchParams] = useSearchParams();
    const status = searchParams.get('status');

    /* ==============================
        비정상 데이터 예외처리
    ============================== */
    const goHome = () => {
        navigate("/", { state: { error: "회원전용 페이지입니다." } })
    }

    /* ==============================
        회원 조회 및 데이터 바인딩
    ============================== */
    const dataHandler = async () => {

        if (!data && !orderItems) return goHome();

        const response = await getMember();
        if (response && response.data.data) {
            const member = response.data.data;

            setOrderData({
                ...orderData,
                memberId: member.memberId,
                cartId: orderItems[0].cartId,
                storeId: orderItems[0].storeId,
                nickname: member.nickname,
                phone: member.phone,
                address: member.address === null ? '' : member.address,
                addressDetails: member.addressDetails === null ? '' : member.addressDetails,
                items: orderItems,
                amount: Number(orderItems[0].deliveryPrice + storeTotalPrice(orderItems)),
                deliveryPrice: orderItems[0].deliveryPrice,
            })
        } else {
            return goHome();
        }
    }

    /* ==============================
        결제하기 SUBMIT 
        - 결제 api 요청
    ============================== */
    const handleSubmit = async (event) => {
        event.preventDefault();

        if (orderData.recetiveType === '배달'
            && orderData.address === ""
            && orderData.addressDetails === "") {
            return setAlert({
                title: "배송지 입력",
                contents: "상세 주소를 입력해 주세요",
                buttonText: "확인",
                onButtonClick: () => { setAlert(null) },
                onOverlayClick: () => { setAlert(null) },
            })
        }

        console.log(orderData);

        const response = await requestPayment(orderData);
        if (response && response.data.data) {

            const data = response.data.data;

            loadTossPayments(data.clientKey).then(tossPayments => {
                tossPayments.requestPayment(orderData.payType, {
                    amount: data.amount,
                    orderId: data.orderKey,
                    orderName: toTossOrderName(),
                    customerName: orderData.items[0].storeName,
                    successUrl: data.successUrl,
                    failUrl: data.failUrl,
                })
                    .catch(function (error) {
                        if (error.code === 'USER_CANCEL') {
                            return setAlert({
                                title: "결제 취소",
                                contents: "결제가 취소되었습니다.",
                                buttonText: "확인",
                                onButtonClick: () => { setAlert(null) },
                                onOverlayClick: () => { setAlert(null) },
                            })
                        } else if (error.code === 'INVALID_CARD_COMPANY') {
                            return setAlert({
                                title: "결제 취소",
                                contents: "유효하지 않은 카드 코드입니다.",
                                buttonText: "확인",
                                onButtonClick: () => { setAlert(null) },
                                onOverlayClick: () => { setAlert(null) },
                            })
                        }
                    })
            })
        }



    };

    const toTossOrderName = () => {
        if (orderData.items.length > 0) {
            return `${orderData.items[0].itemName} 외 ${orderData.items[0].length - 1}개`
        } else {
            return `${orderData.items[0].itemName}`
        }
    }

    const orderSuccess = () => {
        setAlert({
            title: status ? "주문 완료" : "주문 실패",
            contents: status ? "주문이 완료되었습니다." : "주문이 실패되었습니다.",
            buttonText: "확인",
            onButtonClick: () => { status ? navigate('/order/all', { replace: true }) : setAlert(null) },
            onOverlayClick: () => { setAlert(null) },
        })
    }

    useEffect(() => {
        if (status) orderSuccess();
    }, [status])

    useEffect(() => {
        if (auth) {
            dataHandler();
        }
    }, [auth])

    return (
        orderData
            ? <L.Container as="form" _padding="8px 0 68px">
                {/* 배송지 정보 */}
                <L.Contents>
                    <L.FlexCols as="fieldset" _gap={16}>
                        <T.Text as="label" _size={18} _weight={600}>배송지</T.Text>
                        <L.FlexCols _gap={8}>
                            <L.FlexCols _gap={8}>
                                <T.Text _size={15} _color="gray600">{orderData.nickname}</T.Text>
                                <T.Text _size={15} _color="gray600">{phoneFormatter(orderData.phone)}</T.Text>
                                {
                                    !orderData.address &&
                                    <L.FlexRows>
                                        <IP.TextInput
                                            placeholder="배송 받으실 주소를 검색해주세요."
                                            onClick={() => setIsDaumPost(true)}
                                            readOnly
                                        />
                                    </L.FlexRows>
                                }
                                {
                                    orderData.address &&
                                    <L.FlexCols _gap={8}>
                                        <L.FlexRows>
                                            <T.Text _size={15} _color="gray600">{orderData.address}</T.Text>
                                            <B.Badge
                                                type="button"
                                                onClick={() => setIsDaumPost(true)}
                                            >
                                                주소 변경
                                            </B.Badge>
                                        </L.FlexRows>
                                        <IP.TextInput
                                            placeholder="상세주소를 입력해주세요."
                                            value={orderData.addressDetails ?? ''}
                                            onChange={e => setOrderData({ ...orderData, addressDetails: e.target.value })}
                                        />
                                    </L.FlexCols>
                                }
                            </L.FlexCols>
                        </L.FlexCols>
                        <B.LayerOptionButton
                            type='button'
                            active={orderSelect}
                            onClick={() => setOrderSelect(orderSelect => !orderSelect)}
                        >{orderData.recetiveType}(으)로 주문</B.LayerOptionButton>
                        <LayerSelect
                            active={orderSelect}
                            selected={orderData.recetiveType}
                            name="recetiveType"
                            selectName="주문 방식"
                            options={[
                                { text: '배달', value: '배달' },
                                // { text: '방문 포장', value: '방문 포장' },
                            ]}
                            onChange={e => {
                                e.preventDefault();
                                setOrderData({
                                    ...orderData,
                                    recetiveType: e.currentTarget.value
                                })
                                setOrderSelect(false);
                            }}
                            onOverlayClick={() => { setOrderSelect(false) }}
                        />
                    </L.FlexCols>
                </L.Contents>
                {/* 요청 사항 */}
                <L.Contents>
                    <L.FlexCols _gap={16}>
                        <T.Text _weight={600}>요청사항</T.Text>
                        <IP.TextInput
                            value={orderData.deliveryContents}
                            onChange={e => setOrderData({ ...orderData, deliveryContents: e.target.value })}
                            placeholder="언제나 고객님의 요청에 귀 기울입니다."
                        />
                        <CheckBox
                            label="다음에도 사용"
                            name="requestSave"
                            checked={orderData.requestSave}
                            onChange={e => setOrderData({ ...orderData, requestSave: e.currentTarget.checked })}
                        />
                    </L.FlexCols>
                </L.Contents>
                {/* 상품 목록 */}
                {
                    orderData.items.length > 0 &&
                    <>
                        <L.FlexCols _gap={2}>
                            <L.Contents>
                                <L.FlexRows _gap={16}>
                                    <P.CameraStyle src={orderData.items[0].storeProfile && IMGURL + orderData.items[0].storeProfile} />
                                    <T.Text _weight={600}>{orderData.items[0].storeName}</T.Text>
                                </L.FlexRows>
                            </L.Contents>
                            {
                                orderData.items.length > 0 &&
                                orderData.items.map(o => (
                                    <L.Contents key={o.itemId}>
                                        <L.FlexCols _gap={8}>
                                            <L.FlexCols _gap={8}>
                                                <T.Text _weight={600}>{o.itemName}</T.Text>
                                                <L.FlexCols _gap={4}>
                                                    <T.Text _color="gray600">기본: {totalPrice(Number(o.price) * o.count, o.salePercent)} 원</T.Text>
                                                </L.FlexCols>
                                            </L.FlexCols>
                                        </L.FlexCols>
                                    </L.Contents>
                                ))
                            }
                        </L.FlexCols>
                        {/* 결제 금액 */}
                        <L.Contents>
                            <L.FlexCols _gap={16}>
                                <T.Text _size={18} _weight={600}>결제 금액</T.Text>
                                <Tb.ReciptTable>
                                    <tbody>
                                        <tr>
                                            <th>상품 주문 금액</th>
                                            <td>{numberFormat(storeTotalPrice(orderData.items))} 원</td>
                                        </tr>
                                        <tr>
                                            <th>배달비</th>
                                            <td>{numberFormat(orderData.deliveryPrice)} 원</td>
                                        </tr>
                                        {/* <tr>
                                    <th>결제 수단</th>
                                    <td>{ payType }</td>
                                </tr> */}
                                    </tbody>
                                    <tfoot>
                                        <tr>
                                            <th>총 결제금액</th>
                                            <td>{numberFormat(orderData.amount)} 원</td>
                                        </tr>
                                    </tfoot>
                                </Tb.ReciptTable>
                            </L.FlexCols>
                        </L.Contents>
                    </>
                }
                {/* 결제 수단 */}
                <L.Contents>
                    <L.FlexCols _gap={16}>
                        <T.Text _size={18} _weight={600}>결제 수단</T.Text>
                        <B.LayerOptionButton
                            type='button'
                            onClick={() => setPaySelect(paySelect => !paySelect)}
                        >{orderData.payType}</B.LayerOptionButton>
                    </L.FlexCols>
                    <LayerSelect
                        active={paySelect}
                        selected={orderData.payType}
                        name="payType"
                        selectName="결제 수단"
                        options={[
                            { text: '카드 결제', value: '카드' },
                            // { text: '방문 결제', value: '방문 결제' },
                        ]}
                        onChange={e => {
                            e.preventDefault();
                            setOrderData({
                                ...orderData,
                                payType: e.currentTarget.value
                            })
                            setPaySelect(false);
                        }}
                        onOverlayClick={e => {
                            setPaySelect(false);
                        }}
                    />
                </L.Contents>
                <B.FixedActionButton
                    onClick={handleSubmit}
                >결제하기</B.FixedActionButton>
                {
                    isDaumPost &&
                    <DaumPost
                        closeModel={() => setIsDaumPost(false)}
                        setAddress={(address) => setOrderData({
                            ...orderData,
                            address: address
                        })}
                    />
                }
                {
                    alert &&
                    <Alert
                        title={alert.title}
                        contents={alert.contents}
                        buttonText={alert.buttonText}
                        onButtonClick={alert.onButtonClick}
                        onOverlayClick={alert.onOverlayClick}
                    />
                }
            </L.Container>
            : <></>// loading
    )
}

export default OrderForm