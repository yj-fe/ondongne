import React, {useRef, useState, useEffect} from 'react'
import { loadTossPayments } from '@tosspayments/payment-sdk'
import * as L from '../../commonUi/Layout';
import * as T from '../../commonUi/Text';
import * as B from '../../commonUi/Button'
// import * as B from '../../commonUi/Button';
import * as Tb from '../../commonUi/Table';
import * as IP from '../../commonUi/Input';
import { useNavigate, useParams, useSearchParams } from 'react-router-dom';
import CheckBox from '../../commonUi/CheckBox';
import { Profile32 } from '../../commonUi/Icon';
import LayerSelect from '../../commonUi/LayerSelect';
import Alert from '../../commonUi/Alert';
import Confirm from '../../commonUi/Confirm';

const dummyData = JSON.stringify({
    userName: '아이덴잇',
    userTel: '010-1234-5678',
    userAddress : '서울특별시 강서구 가양동 173-22',
    prdPrice: '18,000',
    totalPrice: '20,000',
    deliveryFee: '2,000',
    pay: '카드 결제'
});

const OrderForm = props => {

    // id parameter
    const { id } = useParams();
    const [ orderData, setOrderData ] = useState(null);
    // form
    const [orderType, setOrderType] = useState('배달');
    const [payType, setPayType] = useState('카드 결제');
    const addressRef = useRef(null);
    const [requestSave, setRequestSave] = useState(false);
    const requestRef = useRef(null);
    // ui
    const [orderSelect, setOrderSelect] = useState(false);
    const [paySelect, setPaySelect] = useState(false);
    const [alert, setAlert] = useState(null);
    // 
    const navigate = useNavigate();

    const clientKey = 'test_ck_d26DlbXAaV0KNDOejNd3qY50Q9RB'

    const [searchParams, setSearchParams] = useSearchParams();
    const status = searchParams.get('status');

    /* ==============================
        배송지, 상품, 결제 정보 등 요청
        params: 카트 고유 값 등
    ============================== */
    const loadData = async (prodId) => {
        
        await fetch('../../data/order.json')
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setOrderData(data);
            })

    };
    
    /* ==============================
        배달로 주문
    ============================== */
    const onDeliveryClick = event => {
        event.preventDefault();
        setOrderSelect(orderSelect => !orderSelect);
    };

    /* ==============================
        카드로 결제
    ============================== */
    const onCreditClick = event => {
        event.preventDefault();
        setPaySelect(paySelect => !paySelect);
    };

    /* ==============================
        결제하기 SUBMIT 
        - 결제 api 요청
    ============================== */
    const handleSubmit = (event) => {
        event.preventDefault();
        if(orderType === '배달' && addressRef.current.value.length <= 0) {
            setAlert({
                title:"배송지 입력",
                contents:"상세 주소를 입력해 주세요",
                buttonText:"확인",
                onButtonClick: () => {setAlert(null)}, 
                onOverlayClick: () => {setAlert(null)}, 
            })
        } else {

            // 토스
            loadTossPayments(clientKey).then(tossPayments => {
                tossPayments.requestPayment('카드', { // 결제 수단 파라미터
                    // 결제 정보 파라미터
                    amount: 20000,
                    orderId: 'MGBqsi2t-uitzPyJaVXdw',
                    orderName: '샤인머스켓',
                    customerName: '인싸과일',
                    successUrl: 'http://localhost:8080/payment/call-back/success',
                    failUrl: 'http://localhost:8080/payment/call-back/fail',
                  })
                  .catch(function (error) {
                    if (error.code === 'USER_CANCEL') {
                      // 결제 고객이 결제창을 닫았을 때 에러 처리
                    } else if (error.code === 'INVALID_CARD_COMPANY') {
                      // 유효하지 않은 카드 코드에 대한 에러 처리
                    }
                  })
            })



            // setAlert({
            //     title:"주문 완료",
            //     contents:"주문이 완료되었습니다.",
            //     buttonText:"확인",
            //     onButtonClick: () => {navigate('/order/all')}, 
            //     onOverlayClick: () => {setAlert(null)}, 
            // })
        }
    };

    const orderSuccess = () => {
        setAlert({
            title: status ? "주문 완료" : "주문 실패",
            contents: status ? "주문이 완료되었습니다." : "주문이 실패되었습니다.",
            buttonText:"확인",
            onButtonClick: () => {status ? navigate('/order/all') : setAlert(null)}, 
            onOverlayClick: () => {setAlert(null)}, 
        })
    }

    useEffect(() => {
        loadData(id);
    }, [id])

    useEffect(() => {
        if(status) orderSuccess();
    }, [status])

    return (
        orderData
        ?<L.Container as="form" _padding="8px 0 68px">
            {/* 배송지 정보 */}
            <L.Contents>
                <L.FlexCols as="fieldset" _gap={16}>
                    <T.Text as="label" _size={18} _weight={600}>배송지</T.Text>
                    <L.FlexCols _gap={8}>
                        <L.FlexCols _gap={4}>
                            <T.Text _size={15} _color="gray600">{ orderData.userName }</T.Text>
                            <T.Text _size={15} _color="gray600">{ orderData.userTel }</T.Text>
                            <T.Text _size={15} _color="gray600">{ orderData.userAddress }</T.Text>
                        </L.FlexCols>
                        <IP.TextInput 
                            placeholder="상세주소를 입력해주세요."
                            ref={addressRef}
                        />
                    </L.FlexCols>
                    <B.LayerOptionButton
                        active={orderSelect}
                        onClick={onDeliveryClick}
                    >{orderType}(으)로 주문</B.LayerOptionButton>
                    <LayerSelect
                        active={orderSelect}
                        selected={orderType}
                        name="orderType"
                        selectName="주문 방식"
                        options={[
                            { text: '배달', value: '배달' },
                            { text: '방문 포장', value: '방문 포장' },
                        ]}
                        onChange={e => { 
                            setOrderType(e.currentTarget.value);
                            setOrderSelect(false);
                        }}
                        onOverlayClick={() => {setOrderSelect(false)}}
                    />
                </L.FlexCols>
            </L.Contents>
            {/* 요청 사항 */}
            <L.Contents>
                <L.FlexCols _gap={16}>
                    <T.Text _weight={600}>요청사항</T.Text>
                    <CheckBox
                        label="다음에도 사용"
                        name="requestSave"
                        checked={requestSave}
                        onChange={e => {setRequestSave(e.currentTarget.checked)}}
                    />
                    <IP.TextInput 
                        placeholder="언제나 고객님의 요청에 귀 기울입니다."
                    />
                </L.FlexCols>
            </L.Contents>
            {/* 주문 내역 */}
            <L.FlexCols _gap={2}>
                <L.Contents>
                    <L.FlexRows _gap={16}>
                        <Profile32 />
                        <T.Text _weight={600}>{orderData.market}</T.Text>
                    </L.FlexRows>
                </L.Contents>
                <L.Contents>
                    <L.FlexCols _gap={8}>
                        <L.FlexCols _gap={8}>
                                <T.Text _weight={600}>{orderData.item}</T.Text>
                                <L.FlexCols _gap={4}>
                                    <T.Text _color="gray600">기본: {orderData.itemPrice} 원</T.Text>
                                    <T.Text _color="gray600">배달팁: {orderData.itemDeliveryFee} 원</T.Text>
                                </L.FlexCols>
                            </L.FlexCols>
                    </L.FlexCols>
                </L.Contents>
            </L.FlexCols>
            {/* 결제 금액 */}
            <L.Contents>
                <L.FlexCols _gap={16}>
                    <T.Text _size={18} _weight={600}>결제 금액</T.Text>
                    <Tb.ReciptTable>
                        <tbody>
                            <tr>
                                <th>상품 주문 금액</th>
                                <td>{ orderData.prdPrice } 원</td>
                            </tr>
                            <tr>
                                <th>배달비</th>
                                <td>{ orderData.deliveryFee } 원</td>
                            </tr>
                            <tr>
                                <th>결제 수단</th>
                                <td>{ payType }</td>
                            </tr>
                        </tbody>
                        <tfoot>
                            <tr>
                                <th>총 결제금액</th>
                                <td>{orderData.totalPrice}</td>
                            </tr>
                        </tfoot>
                    </Tb.ReciptTable>
                </L.FlexCols>
            </L.Contents>
            {/* 결제 수단 */}
            <L.Contents>
                <L.FlexCols _gap={16}>
                    <T.Text _size={18} _weight={600}>결제 수단</T.Text>
                    <B.LayerOptionButton
                        onClick={onCreditClick}
                    >{payType}</B.LayerOptionButton>
                </L.FlexCols>
                <LayerSelect
                    active={paySelect}
                    selected={payType}
                    name="payType"
                    selectName="결제 수단"
                    options={[
                        { text: '카드 결제', value: '카드 결제' },
                        // { text: '방문 결제', value: '방문 결제' },
                    ]}
                    onChange={e => { 
                        setPayType(e.currentTarget.value);
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
            {/* 나중에 삭제하고, global로 대치 */}
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
        :<></>// loading
    )
}

export default OrderForm