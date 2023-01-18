import React from 'react'
import * as L from 'components/commonUi/Layout';
import * as T from 'components/commonUi/Text';
import { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { Close, More, OrderDelivery, OrderEnd, OrderEnd_Y, OrderNextIcon, OrderStandBy, OrderStandBy_Y, OrderSuccess, OrderSuccess_Y, Profile48 } from 'components/commonUi/Icon';
import LayerSelect from 'components/commonUi/LayerSelect';
import Confirm from 'components/commonUi/Confirm';
import Overlay from 'components/layout/Overlay/Overlay';
import { S } from "./OrderListStyle";
import { useSelector } from 'react-redux';
import { orderList } from 'service/order';
import LoadingBar from 'components/commonUi/LoadingBar';
import { OrderDelivery_Y } from './../../commonUi/Icon';
import dayjs from 'dayjs';
const IMGURL = "https://ondongne-bucket.s3.ap-northeast-2.amazonaws.com/store/";


const OrderList = () => {

    const auth = useSelector(state => state.auth);

    const [loading, setLoading] = useState(false);
    const [orderData, setOrderData] = useState(null);
    // ui
    const [moreMenu, setMoreMenu] = useState(-1);
    const [delOrder, setDelOrder] = useState(-1);
    const [deliveryPopup, setDeliveryPopup] = useState(false);
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
            setLoading(false);
        }
    };

    const handleMoreMenuChange = (e) => {
        const value = e.currentTarget.value;

        if (value === '주문내역 삭제') {
            setDelOrder(moreMenu);
            setMoreMenu(-1);
        } else {
            alert('마켓 가기');
            setMoreMenu(-1);
        }
    };


    const handleOrderDelete = () => {
        alert(`${delOrder}번 오더 삭제`);
        setDelOrder(-1);
    };

    const handleMarketShow = (e) => {
        e.preventDefault();
        setDelOrder(-1);
    }

    const toTossOrderName = (item) => {
        if (item.orderItems.length > 1) {
            return `${item.orderItems[0].name} 외 ${item.orderItems.length - 1}개`
        } else {
            return `${item.orderItems[0].name}`
        }
    }

    useEffect(() => {
        if (auth.isAuthenticated) {
            setLoading(true);
            loadData();
        }
    }, [auth])

    return (
        orderData
            ? (
                orderData.length > 0
                    ? <L.Container _padding="8px 0 80px">
                        {
                            orderData.map((item, idx) => (
                                <L.Contents key={idx}>
                                    <L.FlexCols _gap={40}>
                                        <L.FlexRows _content="space-between" _items="flex-start">
                                            <L.FlexCols _gap={4}>
                                                <T.Text _size={18} _weight={500}>{item.storeName}</T.Text>
                                                <T.Text _size={15} _color="gray800">{toTossOrderName(item)}</T.Text>
                                                <T.Text _size={13} _color="gray500">{dayjs(item.createDate).format('YYYY-MM-DD')}</T.Text>
                                            </L.FlexCols>
                                            <button
                                                onClick={() => { setMoreMenu(item.orderId) }}
                                            ><More /></button>
                                        </L.FlexRows>
                                        <L.FlexRows _align="center">
                                            <L.FlexCols _items="center" _content="center">
                                                {
                                                    item.orderStatus == "주문완료"
                                                        ? <OrderSuccess_Y />
                                                        : <OrderSuccess />
                                                }
                                                <T.Text _size={12}
                                                    _weight={item.orderStatus == "주문완료" ? 600 : 400}
                                                    _color={item.orderStatus == "주문완료" ? "green700" : "gray400"}>결제 완료</T.Text>
                                            </L.FlexCols>
                                            <L.Icon>
                                                <OrderNextIcon />
                                            </L.Icon>
                                            <L.FlexCols _items="center" _content="center">
                                                {
                                                    item.orderStatus == "상품준비"
                                                        ? <OrderStandBy_Y />
                                                        : <OrderStandBy />
                                                }
                                                <T.Text _size={12}
                                                    _weight={item.orderStatus == "상품준비" ? 600 : 400}
                                                    _color={item.orderStatus == "상품준비" ? "green700" : "gray400"}>상품 준비</T.Text>
                                            </L.FlexCols>
                                            <L.Icon>
                                                <OrderNextIcon />
                                            </L.Icon>
                                            {
                                                item.recetiveType === '배달' &&
                                                <>
                                                    <L.FlexCols _items="center" _content="center">
                                                        {
                                                            item.orderStatus == "배송중"
                                                                ? <OrderDelivery_Y />
                                                                : <OrderDelivery />
                                                        }
                                                        <T.Text _size={12}
                                                            _weight={item.orderStatus == "배송중" ? 600 : 400}
                                                            _color={item.orderStatus == "배송중" ? "green700" : "gray400"}>배송중</T.Text>
                                                    </L.FlexCols>
                                                    <L.Icon>
                                                        <OrderNextIcon />
                                                    </L.Icon>
                                                </>
                                            }
                                            <L.FlexCols _items="center" _content="center">
                                                {
                                                    item.orderStatus == "픽업완료" || item.orderStatus == "배송완료"
                                                        ? <OrderEnd_Y />
                                                        : <OrderEnd />
                                                }
                                                <T.Text _size={12}
                                                    _weight={item.orderStatus == "픽업완료" || item.orderStatus == "배송완료" ? 600 : 400}
                                                    _color={item.orderStatus == "픽업완료" || item.orderStatus == "배송완료" ? "green700" : "gray400"}>
                                                    {item.recetiveType == "배달" ? '배송 완료' : '픽업 완료'}
                                                </T.Text>
                                            </L.FlexCols>
                                        </L.FlexRows>
                                        <L.FlexCols _gap={8}>
                                            {
                                                item.orderStatus === '상품수령완료' &&
                                                <S.Action
                                                    _type="bd"
                                                    onClick={() => { alert('리뷰 쓰기') }}
                                                >리뷰 쓰기</S.Action>
                                            }
                                            {
                                                item.orderStatus === '배송완료' &&
                                                item.orderStatus === '픽업완료' &&
                                                <S.Action
                                                    _type="bg"
                                                    onClick={() => { setDeliveryPopup(true) }}
                                                >상품 수령</S.Action>
                                            }
                                            {
                                                item.orderStatus === '주문완료' &&
                                                <S.Action
                                                    _type="cancel"
                                                    onClick={() => { setDelOrder(item.orderId) }}
                                                >주문 취소</S.Action>
                                            }
                                            <S.Action
                                                as={Link}
                                                to={`/order/details/${item.orderId}`}
                                            >주문내역 보기</S.Action>
                                        </L.FlexCols>
                                    </L.FlexCols>
                                </L.Contents>
                            ))
                        }
                        <LayerSelect
                            active={moreMenu >= 0}
                            name="orderMore"
                            selectName="더보기"
                            options={[
                                { text: <T.Text _color="error">주문내역 삭제</T.Text>, value: '주문내역 삭제' },
                                { text: '상점 보기', value: '상점 보기' }
                            ]}
                            onChange={handleMoreMenuChange}
                            onOverlayClick={() => { setMoreMenu(-1) }}
                            close={true}
                        />
                        <Confirm
                            active={delOrder >= 0}
                            contents={`주문내역을 정말로 삭제하시겠습니까? \n내역 삭제 전 나만의 단골집으로 등록해보세요!`}
                            warn={true}
                            confirmText="삭제"
                            cancelText="취소"
                            onConfirmClick={() => { handleOrderDelete() }}
                            onCancelClick={() => { setDelOrder(-1) }}
                        />
                        {
                            deliveryPopup &&
                            <Overlay>
                                <S.DeliveryPopup>
                                    <button
                                        className="close"
                                        style={{ background: '#FFF' }}
                                        onClick={() => { setDeliveryPopup(false) }}
                                    >
                                        <Close />
                                    </button>
                                    <div className="top">
                                        <div className="img" />
                                    </div>
                                    <div className="contents">
                                        <strong>
                                            배송이 완료되었습니다.
                                        </strong>
                                        <p>
                                            고객님, 오늘도 맛있는 저희 상품을 구매해주셔서 감사합니다.
                                        </p>
                                    </div>
                                </S.DeliveryPopup>
                            </Overlay>
                        }
                    </L.Container>
                    : <L.Container
                        _height="100%"
                    >
                        <L.Contents
                            _padding="80px 20PX"
                            _height="calc(100vh - 80px)"
                        >
                            <T.Text _align="center" _color="gray600" _size={15} _weight={300}>
                                주문 내역이 없습니다
                                <br />
                                내 주변 마켓을 이용해보세요.
                            </T.Text>
                        </L.Contents>
                    </L.Container>
            )

            : <LoadingBar />
    )
}

export default OrderList