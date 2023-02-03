import React from 'react'
import * as L from 'components/commonUi/Layout';
import * as T from 'components/commonUi/Text';
import { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { ArrowRight, Close, OrderDelivery, OrderEnd, OrderEnd_Y, OrderNextIcon, OrderStandBy, OrderStandBy_Y, OrderSuccess, OrderSuccess_Y, Profile48 } from 'components/commonUi/Icon';
import Confirm from 'components/commonUi/Confirm';
import Overlay from 'components/layout/Overlay/Overlay';
import { S } from "./OrderListStyle";
import { useSelector } from 'react-redux';
import { orderCancel, orderList, orderSuccess, orderUnView } from 'service/order';
import { getDeliveryCertificate } from 'service/deliveryCertificate';
import LoadingBar from 'components/commonUi/LoadingBar';
import { OrderDelivery_Y } from '../../commonUi/Icon';
import dayjs from 'dayjs';
import Alert from 'components/commonUi/Alert';
import { orderName } from 'utils/utils';
const DELIVERYIMGURL = "https://ondongne-bucket.s3.ap-northeast-2.amazonaws.com/deliveryCertificate/";

const OrderListTest = () => {

    const auth = useSelector(state => state.auth);

    const [orderData, setOrderData] = useState(null);
    const [deliveryData, setDeliveryData] = useState(null);
    // ui
    const [delOrder, setDelOrder] = useState(-1);
    const [cancelOrder, setCancelOrder] = useState(-1);
    const [successOrder, setSuccessOrder] = useState(-1);
    const [alert, setAlert] = useState(null);

    // 
    const navigate = useNavigate();

    /* ==============================
        배송지, 상품, 결제 정보 등 요청
        params: 카트 고유 값 등
    ============================== */
    const loadData = async () => {
        const response = await orderList();
        if (response && response.data.data) {
            setOrderData(response.data.data);
        }
    };

    /* ==============================
        상품 수령 확인
    ============================== */
    const handleOrderSuccess = async () => {
        const response = await orderSuccess(successOrder);

        if (response && response.data.data) {
            loadData();
            setSuccessOrder(-1);
            return setAlert({
                contents: "상품 수령을 완료되었습니다.\n리뷰를 작성해주세요!",
                buttonText: "확인",
                onButtonClick: () => setAlert(false),
                onOverlayClick: () => setAlert(false),
            })
        }
    };

    /* ==============================
        배달&픽업 완료 데이터 불러오기
    ============================== */
    const getDeliveryAuth = async (id) => {
        const response = await getDeliveryCertificate(id);
        if (response && response.data.data) {
            console.log(response);
            setDeliveryData(response.data.data);
        }
    }

    /* ==============================
        주문 내역 삭제
    ============================== */
    const handleOrderDelete = async () => {
        const response = await orderUnView(delOrder);

        if (response && response.data.data) {
            loadData();
            setDelOrder(-1);
        }
    };

    /* ==============================
        주문 취소
    ============================== */
    const handleOrderCancel = async () => {
        const response = await orderCancel(cancelOrder);

        if (response && response.data.data) {
            loadData();
            setCancelOrder(-1);
        }
    };

    useEffect(() => {
        if (auth.isAuthenticated) {
            loadData();
        }
    }, [auth])

    return (
        <Overlay>
        <S.DeliveryPopup>
            <button
                className="close"
                style={{ background: '#FFF' }}
                // onClick={() => setDeliveryData(null)}
            >
                <Close />
            </button>
            <div className="top">
                        {/* <img className="img" /> */}
            </div>
            <div className="contents">
                <strong>
                    '{deliveryData.title}'
                </strong>
                <p>'{deliveryData.contents}'</p>
            </div>
        </S.DeliveryPopup>
    </Overlay>
//                     <L.Container _padding="8px 0 80px">

//                                 <L.Contents >
//                                     <L.FlexCols _gap={40}>
//                                         <L.FlexRows _content="space-between" _items="flex-start">
//                                             <L.FlexCols >
//                                                 <T.Text _size={18} _weight={500}>storeName</T.Text>
//                                                 <T.Text _size={15} _color="gray800">orderName</T.Text>
//                                                 <T.Text _size={13} _color="gray500">2023</T.Text>
//                                             </L.FlexCols>
//                                         </L.FlexRows>
//                                         {/* <L.FlexRows _gap={0} _content="space-evenly" _items='center'>
//                                             <L.FlexCols _width='auto'>
                             
                                                  
                                                
//                                                 <T.Text _size={12} _align='center'
//                                                     _weight={item.orderStatus == "결제완료" ? 600 : 400}
//                                                     _color={item.orderStatus == "결제완료" ? "green700" : "gray400"}>결제 완료</T.Text>
//                                             </L.FlexCols>
//                                             <ArrowRight />
//                                             <L.FlexCols _width='auto'>
                 
//                                                 <T.Text
//                                                     _align='center' _size={12}
//                                                     _weight={item.orderStatus == "상품준비" ? 600 : 400}
//                                                     _color={item.orderStatus == "상품준비" ? "green700" : "gray400"}>상품 준비</T.Text>
//                                             </L.FlexCols>
//                                             <ArrowRight />
                            
//                                                 <>
//                                                     <L.FlexCols _width='auto'>
//                                                         {
//                                                             item.orderStatus == "배송중"
//                                                                 ? <OrderDelivery_Y />
//                                                                 : <OrderDelivery />
//                                                         }
//                                                         <T.Text
//                                                             _align='center' _size={12}
//                                                             _weight={item.orderStatus == "배송중" ? 600 : 400}
//                                                             _color={item.orderStatus == "배송중" ? "green700" : "gray400"}>배송중</T.Text>
//                                                     </L.FlexCols>
//                                                     <ArrowRight />
//                                                 </>
                                            
//                                             <L.FlexCols _width='auto'>
                                                
                  
//                                                 <T.Text
//                                                     _align='center' _size={12}
//                                                     _weight={item.orderStatus == "픽업완료" || item.orderStatus == "배송완료" || item.orderStatus == "상품수령완료" ? 600 : 400}
//                                                     _color={item.orderStatus == "픽업완료" || item.orderStatus == "배송완료" || item.orderStatus == "상품수령완료" ? "green700" : "gray400"}>
//                                                     {item.recetiveType == "배달" ? '배송 완료' : '픽업 완료'}
//                                                 </T.Text>
//                                             </L.FlexCols>
//                                         </L.FlexRows> */}
//                                         <L.FlexCols _gap={8}>
       
//                                                 <L.FlexCols>
//                                                     <S.Action
//                                                         _type="cancel"
//                                                         // onClick={() => { setCancelOrder(item.orderId) }}
//                                                     >주문 취소</S.Action>
//                                                     <T.Text _size={13} _color='error'>※ 주문 취소는 상품준비 이후 불가합니다.</T.Text>
//                                                 </L.FlexCols>
                                     
//                                                 <S.Action
//                                                     _type="bg"
//                                                     // onClick={() => getDeliveryAuth(item.orderId)}
//                                                 >배달 인증 확인</S.Action>
// {/*                                    
//                                                 <S.Action
//                                                     _type="bg"
//                                                     onClick={() => setSuccessOrder()}
//                                                 >상품 수령</S.Action> */}
                  
//                                                 <S.Action
//                                                     _type="bg"
//                                                     // onClick={() => navigate("/member/review/upload", { state: { item: item } })}
//                                                 >리뷰작성</S.Action>
                                            
//                                             <S.Action
//                                                 as={Link}
//                                                 // to={`/order/details/${item.orderId}`}
//                                             >주문내역 보기</S.Action>

//                                                 <S.Action
//                                                     _type="cancel"
//                                                     // onClick={() => { setDelOrder}
//                                                 >주문 내역 삭제</S.Action>
                                     
//                                         </L.FlexCols>
//                                     </L.FlexCols>
//                                 </L.Contents>
                        
//                         <Confirm
//                             active={delOrder >= 0}
//                             contents={`주문내역을 정말로 삭제하시겠습니까? \n내역 삭제 전 나만의 단골집으로 등록해보세요!`}
//                             warn={true}
//                             confirmText="삭제"
//                             cancelText="취소"
//                             onConfirmClick={() => { handleOrderDelete() }}
//                             onCancelClick={() => { setDelOrder(-1) }}
//                         />
//                         <Confirm
//                             active={cancelOrder >= 0}
//                             contents={`주문을 정말로 취소하시겠습니까?`}
//                             warn={true}
//                             confirmText="네"
//                             cancelText="아니요"
//                             onConfirmClick={handleOrderCancel}
//                             onCancelClick={() => setCancelOrder(-1)}
//                         />
//                         <Confirm
//                             active={successOrder >= 0}
//                             contents={`정말로 상품을 수령하셨나요?\n상품을 수령하셨다면 확인버튼을 눌러주세요.`}
//                             warn={false}
//                             confirmText="네"
//                             cancelText="아니요"
//                             onConfirmClick={handleOrderSuccess}
//                             onCancelClick={() => setSuccessOrder(-1)}
//                         />
//                         {
//                             alert &&
//                             <Alert
//                                 title={alert.title}
//                                 contents={alert.contents}
//                                 desc={alert.desc}
//                                 buttonText={alert.buttonText}
//                                 onButtonClick={alert.onButtonClick}
//                                 onOverlayClick={alert.onOverlayClick}
//                             />
//                         }
       
//                             <Overlay>
//                                 <S.DeliveryPopup>
//                                     <button
//                                         className="close"
//                                         style={{ background: '#FFF' }}
//                                         // onClick={() => setDeliveryData(null)}
//                                     >
//                                         <Close />
//                                     </button>
//                                     <div className="top">
//                                                 {/* <img className="img" /> */}
//                                     </div>
//                                     <div className="contents">
//                                         <strong>
//                                             {deliveryData.title}
//                                         </strong>
//                                         <p>{deliveryData.contents}</p>
//                                     </div>
//                                 </S.DeliveryPopup>
//                             </Overlay>
                        
//                     </L.Container>





    )
}

export default OrderListTest