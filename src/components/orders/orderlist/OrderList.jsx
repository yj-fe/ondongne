import React from 'react'
import * as L from 'components/commonUi/Layout';
import * as T from 'components/commonUi/Text';
import { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { Close, More, Profile48 } from 'components/commonUi/Icon';
import styled from 'styled-components';
import LayerSelect from 'components/commonUi/LayerSelect';
import Confirm from 'components/commonUi/Confirm';
import Overlay from 'components/layout/Overlay/Overlay';
import { S } from "./OrderListStyle";


const OrderList = props => {

    const [ orderData, setOrderData ] = useState(null);
    // ui
    const [ moreMenu, setMoreMenu ] = useState(-1);
    const [ delOrder, setDelOrder ] = useState(-1);
    const [ deliveryPopup, setDeliveryPopup ] = useState(false);
    // 
    const navigate = useNavigate();

    /* ==============================
        배송지, 상품, 결제 정보 등 요청
        params: 카트 고유 값 등
    ============================== */
    const loadData = async (prodId) => {
        await fetch('../../data/orders.json')
            .then(res => res.json())
            .then(data => {
                setOrderData(data.orders);
            })
    };

    const handleMoreMenuChange = (e) => {
        const value = e.currentTarget.value;

        if(value === '주문내역 삭제') {
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

    useEffect(() => {
        loadData();
    }, [])

    return (
        orderData
        ? (
            orderData.length > 0
            ? <L.Container _padding="8px 0 80px">
                {/* 주문 완료 */}
                {
                    orderData.map((item, idx) => (
                        <L.Contents key={idx}>
                            <L.FlexCols _gap={24}>
                                <L.FlexRows _content="space-between">
                                    <L.FlexRows _content="start" _items="center" _gap={6}>
                                        <T.Text _size={14} _color="gray500">{item.date}</T.Text>
                                        <T.Text _color="gray500">&#183;</T.Text>
                                        <T.Text 
                                            _weight={500} 
                                            _color={
                                                item.state === '배송 준비중'
                                                || item.state === '픽업 예정'
                                                ? 'green700'
                                                : item.state === '주문 취소'
                                                ? 'error'
                                                : 'gray500'
                                            }
                                        >{item.state}</T.Text>
                                    </L.FlexRows>
                                    <button
                                        onClick={() => { setMoreMenu(item.no) }}
                                    ><More /></button>
                                </L.FlexRows>
                                <L.FlexRows _gap={16} _items="center">
                                    <Profile48 />
                                    <L.FlexCols _gap={4}>
                                        <T.Text _size={18} _weight={500}>{item.market}</T.Text>
                                        <T.Text _size={15} _color="gray800">{item.order}</T.Text>
                                    </L.FlexCols>
                                </L.FlexRows>
                                <L.FlexCols _gap={8}>
                                    {
                                        item.state === '상품 수령 완료' &&
                                        <S.Action 
                                            _type="bd"
                                            onClick={() => {alert('리뷰 쓰기')}}
                                        >리뷰 쓰기</S.Action>
                                    }
                                    {
                                        item.state === '배송 완료' &&
                                        <S.Action  
                                            _type="bg"
                                            onClick={() => {setDeliveryPopup(true)}}
                                        >상품 수령</S.Action>
                                    }
                                    {
                                        item.state === '주문 완료' &&
                                        <S.Action 
                                            _type="cancel"
                                            onClick={() => {setDelOrder(item.no)}}
                                        >주문 취소</S.Action>
                                    }
                                    <S.Action
                                        as={Link}
                                        to={`/order/details/${item.no}`}
                                    >주문내역 보기</S.Action>
                                </L.FlexCols>
                            </L.FlexCols>
                        </L.Contents>
                    ))
                }
                <LayerSelect
                    active={ moreMenu >= 0 }
                    name="orderMore"
                    selectName="더보기"
                    options={[
                        { text: <T.Text _color="error">주문내역 삭제</T.Text>, value: '주문내역 삭제' },
                        { text: '상점 보기', value: '상점 보기' }
                    ]}
                    onChange={handleMoreMenuChange}
                    onOverlayClick={() => {setMoreMenu(-1)}}
                    close={true}
                />
                <Confirm
                    active={delOrder >= 0}
                    contents={`주문내역을 정말로 삭제하시겠습니까? \n내역 삭제 전 나만의 단골집으로 등록해보세요!`}
                    warn={true}
                    confirmText="삭제"
                    cancelText="취소"
                    onConfirmClick={() => {handleOrderDelete()}}
                    onCancelClick={ () => {setDelOrder(-1)}}
                />
                {
                    deliveryPopup &&
                    <Overlay>
                        <S.DeliveryPopup>
                            <button 
                                className="close"
                                style={{background: '#FFF'}}
                                onClick={() => {setDeliveryPopup(false)}}
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
        
        :<></> // loading
    )
}

export default OrderList