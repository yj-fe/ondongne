import React from 'react'
import * as L from '../commonUi/Layout';
import * as T from '../commonUi/Text';
import * as Tb from '../commonUi/Table';
import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useState } from 'react';
import { Profile48 } from '../commonUi/Icon';
import styled from 'styled-components';
import Confirm from '../commonUi/Confirm';
import Alert from '../commonUi/Alert';

const S = {
    Actions: styled.div`
        display: flex;
        flex-direction: column;
        gap: 8px;
        width: 100%;
        padding: 16px;
    `,
    Action: styled.button`
        width: 100%;
        height: 48px;
        line-height: 48px;
        border-radius: 4px;
        text-align: center;
        background-color: #FFF;
        font-weight: 500;
        font-size: 15px;
        color: ${props => props.theme.color[props._color || 'gray900']};
    `,
    State: styled.span`
        position: absolute;
    `
};

const dummyData = JSON.stringify({
    userName: '아이덴잇',
    userTel: '010-1234-5678',
    userAddress : '서울특별시 강서구 가양동 173-22',
    prdPrice: '27,200',
    totalPrice: '29,200',
    deliveryFee: '2,000',
    orderType: '배달',
    pay: '카드 결제'
});

const OrderDetails = props => {

    // id parameter
    const { id } = useParams();
    const [ orderData, setOrderData ] = useState(null);
    // ui - alert (나중에 global로 관리)
    const [alert, setAlert] = useState(null);
    const [confirm, setConfirm] = useState(null);
    // 
    const navigate = useNavigate();

    /* ==============================
        주문 정보 등 요청
        params: 주문항목 고유 id 등
    ============================== */
    const loadData = async (prodId) => {
        await fetch('../../data/orders.json', {
            headers : { 
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        })
            .then(res => res.json())
            .then(data => {
                const oData = data.orders.filter(item => item.no === Number(prodId))[0];
                setOrderData(oData);
            })
    };

    const onPickUpClick = e => {
        e.preventDefault();
        setConfirm({
            contents: `정말로 상품을 수령하셨나요? \n 상품을 수령하셨다면 확인버튼을 눌러주세요.`,
            onConfirmClick: () => {
                handlePickUp();
                setConfirm(null);
            },
            onCancelClick: () => {
                setConfirm(null);
            }
        });
    };

    const onDeleteClick = e => {
        e.preventDefault();
        setConfirm({
            warn: true,
            contents: `주문내역을 정말로 삭제하시겠습니까? \n내역 삭제 전 나만의 단골집으로 등록해보세요!`,
            confirmText: "삭제",
            cancelText: "취소",
            onConfirmClick: () => {
                handleDelete();
                setConfirm(null);
            },
            onCancelClick: () => {
                setConfirm(null);
            }
        });
    }


    /* ==============================
        주문 내역 삭제
    ============================== */
    const handleDelete = () => {
        setAlert({
            title:"삭제 완료",
            contents:"주문 내역이 삭제되었습니다.",
            buttonText:"확인",
            onButtonClick: () => {navigate('/order/all')}, 
            onOverlayClick: () => {navigate('/order/all')}, 
        })
    };

    /* ==============================
        상점 수령
    ============================== */
    const handlePickUp = () => {
        setAlert({
            title:"수령 완료",
            contents:"주문 내역이 수령 완료 처리되었습니다.",
            buttonText:"확인",
            onButtonClick: () => {navigate('/order/all')}, 
            onOverlayClick: () => {navigate('/order/all')}, 
        })
    };

    useEffect(() => {
        loadData(id);
    }, [id])

    return (
        orderData
        ?<L.Container>
            {/* 주문 완료 */}
            <L.Contents>
                <L.FlexCols _gap={24}>
                    <L.FlexRows _gap={0} _content="space-between">
                        <L.FlexRows _gap={16} _width="auto" _items="center">
                            <Profile48 />
                            <L.FlexCols _width="auto" _gap={4}>
                                <T.Text _size={18} _weight={600}>{orderData.market}</T.Text>
                                <T.Text _size={15} _color="gray800">{orderData.order}</T.Text>
                            </L.FlexCols>
                        </L.FlexRows>
                        <T.Text _size={14} _weight={500} _color="gray800">{orderData.state}</T.Text>
                    </L.FlexRows>
                    <L.FlexCols _gap={4}>
                        <L.FlexCols _gap={4}>
                            <T.Text _size={14} _color="gray600">주문 일시: { orderData.date }</T.Text>
                            <T.Text _size={14} _color="gray600">주문 번호: { orderData.orderNo}</T.Text>
                            <T.Text _size={14} _color="gray600">수령 방법: { orderData.orderSort }</T.Text>
                        </L.FlexCols>
                    </L.FlexCols>
                </L.FlexCols>
            </L.Contents>
            {/* 배송지 / 요청 사항 */}
            <L.Contents>
                <L.FlexCols _gap={16}>
                    <L.FlexCols _gap={4}>
                        <T.Text _weight={600}>배송지 주소</T.Text>
                        <T.Text _size={15} _color="gray800">{orderData.address}</T.Text>
                    </L.FlexCols>
                    <L.FlexCols _gap={4}>
                        <T.Text _weight={600}>요청사항</T.Text>
                        <T.Text _size={15} _color="gray800">{orderData.request}</T.Text>
                    </L.FlexCols>
                </L.FlexCols>
            </L.Contents>
            {/* 주문 상품 */}
            <L.Contents>
                <L.FlexCols _gap={16}>
                    <T.Text _weight={600} _size={18}>인싸과일 세트 1개</T.Text>
                    <L.FlexCols _gap={4}>
                        <T.Text _color="gray800">기본: 18,000원</T.Text>
                        <T.Text _color="gray800">추가 선택: 2,000원</T.Text>
                    </L.FlexCols>
                </L.FlexCols>
            </L.Contents>
            <L.Contents>
                <L.FlexCols _gap={16}>
                    <T.Text _weight={600} _size={18}>{orderData.item}</T.Text>
                    <L.FlexCols _gap={4}>
                        <T.Text _color="gray800">기본: {orderData.itemPrice}</T.Text>
                        <T.Text _color="gray800">추가 선택: {orderData.itemOption}</T.Text>
                    </L.FlexCols>
                </L.FlexCols>
            </L.Contents>
            {/* 결제 금액 */}
            <L.Contents>
                <L.FlexCols _gap={16}>
                    <T.Text _size={18} _weight={600}>결제 금액</T.Text>
                    <Tb.ReciptTable>
                        <tbody>
                            <tr>
                                <th>상품 주문 금액</th>
                                <td>{ orderData.price } 원</td>
                            </tr>
                            <tr>
                                <th>배달비</th>
                                <td>{ orderData.deliveryFee } 원</td>
                            </tr>
                            <tr>
                                <th>결제 수단</th>
                                <td>{ orderData.pay }</td>
                            </tr>
                        </tbody>
                        <tfoot>
                            <tr>
                                <th>총 결제금액</th>
                                <td>{orderData.totalPrice} 원</td>
                            </tr>
                        </tfoot>
                    </Tb.ReciptTable>
                </L.FlexCols>
            </L.Contents>
            <S.Actions>
                {
                    orderData.orderSort === '픽업' &&
                    <S.Action
                        onClick={onPickUpClick}
                    >상점 수령</S.Action>
                }
                <S.Action
                    onClick={onDeleteClick}
                    _color="error"
                >주문 내역 삭제</S.Action>
            </S.Actions>
            {/* CONFIRMS */}
            {
                confirm &&
                <Confirm 
                    warn={confirm.warn}
                    contents={confirm.contents}
                    confirmText={confirm.confirmText}
                    cancelText={confirm.cancelText}
                    onConfirmClick={confirm.onConfirmClick}
                    onCancelClick={confirm.onCancelClick}
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
        :<></>
    )
}

export default OrderDetails