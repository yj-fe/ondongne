import React, { useState } from 'react'
import * as L from 'components/commonUi/Layout';
import * as T from 'components/commonUi/Text';
import Layout from 'components/layout/Layout/Layout';
import { Link, useNavigate } from 'react-router-dom'
import { ArrowRight, Down, More, OrderDe, OrderDeC, OrderFin, OrderFinC, OrderPay, OrderPayC, OrderReady, OrderReadyC } from 'components/commonUi/Icon';
import { S } from 'components/orders/orderlist/OrderListStyle';
import Confirm from 'components/commonUi/Confirm';
import LayoutBiz from 'components/layout/Layout/LayoutBiz';

function OrderManagement() {
  const navigate = useNavigate()
  const [totalCount, setTotalCount] = useState(0)
  const [ delOrder, setDelOrder ] = useState(null);
  const openDelete = () =>{
    return setDelOrder({
      contents: "해당 고객의 주문을 취소하시겠습니까?",
      confirmText: "주문 취소",
      cancelText: "아니요",
      onConfirmClick: () => setDelOrder(null),
      onCancelClick: () => setDelOrder(null),
      active: () => setDelOrder(null),
      warn: () => setDelOrder(null),
    })
  }
  return (
    <div>
      <LayoutBiz
        title="주문 관리"
        bell={false}
        cart={false}
        onBackClick={() => navigate(-1)}
      >
        <L.Container >
          <L.Contents >
            <L.FlexCols _gap={80} >
              <L.FlexRows _gap={16} _content='space-between'>
                  <div>
                    <T.Text _size={16} _weight={600} _color='gray900'>전체 {totalCount}</T.Text>
                  </div>
                  <L.FlexRows _gap={4} _content='flex-end' _width='100px'>
                      <T.Text _size={13} _weight={400} _color='gray900'>최근 주문 순</T.Text>
                      <button
                        type='button'
                      >
                        <Down />
                      </button>
                  </L.FlexRows>
              </L.FlexRows>
        {/* 주문 없을 때 */}
              {/* <L.FlexRows  _height='calc(100vh - 68px)'  _content='center' _item='center'>
                <T.Text _align='center' _size={15} _weight={300} _color='gray600'><p>주문 내역이 없습니다.</p><p>내 주변 마켓을 이용해보세요!</p></T.Text>
              </L.FlexRows> */}

            </L.FlexCols>
          </L.Contents>


        {/* 주문 있을 때 */}
          {/* ===== 1-1. 배달- 결제 완료 ===== */}
          <L.Contents _padding='20px'>
                <L.FlexCols _gap={40}>
                    <L.FlexRows _gap={0} _content="space-between">
                        <L.FlexCols _width="auto" _gap={4}>
                          <T.Text _size={18} _weight={600}>인싸과일</T.Text>
                          <T.Text _size={15} _color="gray800">샤인머스켓 500g 외 1개</T.Text>
                          <T.Text _weight={500} _size={13} _color="gray500">2022/10/10 19:00</T.Text>
                        </L.FlexCols>
                        <More/>
                    </L.FlexRows>
              {/* === 주문현황Icon === */}
                    <L.FlexRows _gap={0} _content="space-evenly" _items='center'>
                      <L.FlexCols _width="auto">
                        <OrderPayC/>
                        <T.Text _align='center' _weight={600} _size={12} _color="green700">결제 완료</T.Text>
                      </L.FlexCols>
                      <ArrowRight/>
                      <L.FlexCols _width="auto">
                        <OrderReady/>
                        <T.Text _align='center' _weight={600} _size={12} _color="gray400">상품 준비</T.Text>
                      </L.FlexCols>
                      <ArrowRight/>
                      <L.FlexCols _width="auto">
                        <OrderDe/>
                        <T.Text _align='center' _weight={600} _size={12} _color="gray400">배송중</T.Text>
                      </L.FlexCols>
                      <ArrowRight/>
                      <L.FlexCols _width="auto">
                        <OrderFin/>
                        <T.Text _align='center' _weight={600} _size={12} _color="gray400">배송 완료</T.Text>
                      </L.FlexCols>
                    </L.FlexRows>

              {/* === 주문관리버튼 === */}
                    <L.FlexCols>
                      <S.Action 
                        _type="bgb"
                      >주문 확인</S.Action>
                      <S.Action
                      >주문내역 보기</S.Action>
                      <S.Action 
                        _type="cancel"
                        onClick={openDelete}
                      >주문 취소</S.Action>
                    </L.FlexCols>

                </L.FlexCols>
            </L.Contents>

          {/* ===== 1-2. 배달- 상품 준비 ===== */}
          <L.Contents _padding='20px'>
                <L.FlexCols _gap={40}>
                    <L.FlexRows _gap={0} _content="space-between">
                        <L.FlexCols _width="auto" _gap={4}>
                          <T.Text _size={18} _weight={600}>인싸과일</T.Text>
                          <T.Text _size={15} _color="gray800">샤인머스켓 500g 외 1개</T.Text>
                          <T.Text _weight={500} _size={13} _color="gray500">2022/10/10 19:00</T.Text>
                        </L.FlexCols>
                        <More/>
                    </L.FlexRows>
              {/* === 주문현황Icon === */}
                    <L.FlexRows _gap={0} _content="space-evenly" _items='center'>
                      <L.FlexCols _width="auto">
                        <OrderPay/>
                        <T.Text _align='center' _weight={600} _size={12} _color="gray400">결제 완료</T.Text>
                      </L.FlexCols>
                      <ArrowRight/>
                      <L.FlexCols _width="auto">
                        <OrderReadyC/>
                        <T.Text _align='center' _weight={600} _size={12} _color="green700">상품 준비</T.Text>
                      </L.FlexCols>
                      <ArrowRight/>
                      <L.FlexCols _width="auto">
                        <OrderDe/>
                        <T.Text _align='center' _weight={600} _size={12} _color="gray400">배송중</T.Text>
                      </L.FlexCols>
                      <ArrowRight/>
                      <L.FlexCols _width="auto">
                        <OrderFin/>
                        <T.Text _align='center' _weight={600} _size={12} _color="gray400">배송 완료</T.Text>
                      </L.FlexCols>
                    </L.FlexRows>

              {/* === 주문관리버튼 === */}
                    <L.FlexCols>
                      <S.Action 
                        _type="bg"
                      >배달 진행</S.Action>
                      <S.Action
                      >주문내역 보기</S.Action>
                    </L.FlexCols>

                </L.FlexCols>
            </L.Contents>

          {/* ===== 1-3. 배달- 배송중 ===== */}
          <L.Contents _padding='20px'>
                <L.FlexCols _gap={40}>
                    <L.FlexRows _gap={0} _content="space-between">
                        <L.FlexCols _width="auto" _gap={4}>
                          <T.Text _size={18} _weight={600}>인싸과일</T.Text>
                          <T.Text _size={15} _color="gray800">샤인머스켓 500g 외 1개</T.Text>
                          <T.Text _weight={500} _size={13} _color="gray500">2022/10/10 19:00</T.Text>
                        </L.FlexCols>
                        <More/>
                    </L.FlexRows>
              {/* === 주문현황Icon === */}
                    <L.FlexRows _gap={0} _content="space-evenly" _items='center'>
                      <L.FlexCols _width="auto">
                        <OrderPay/>
                        <T.Text _align='center' _weight={600} _size={12} _color="gray400">결제 완료</T.Text>
                      </L.FlexCols>
                      <ArrowRight/>
                      <L.FlexCols _width="auto">
                        <OrderReady/>
                        <T.Text _align='center' _weight={600} _size={12} _color="gray400">상품 준비</T.Text>
                      </L.FlexCols>
                      <ArrowRight/>
                      <L.FlexCols _width="auto">
                        <OrderDeC/>
                        <T.Text _align='center' _weight={600} _size={12} _color="green700">배송중</T.Text>
                      </L.FlexCols>
                      <ArrowRight/>
                      <L.FlexCols _width="auto">
                        <OrderFin/>
                        <T.Text _align='center' _weight={600} _size={12} _color="gray400">배송 완료</T.Text>
                      </L.FlexCols>
                    </L.FlexRows>

              {/* === 주문관리버튼 === */}
                    <L.FlexCols>
                      <S.Action 
                        _type="bg"
                      >배달/픽업 인증</S.Action>
                      <S.Action
                      >주문내역 보기</S.Action>
                    </L.FlexCols>

                </L.FlexCols>
            </L.Contents>

          {/* ===== 1-4. 배달- 배송 완료 ===== */} 
          <L.Contents _padding='20px'>
                <L.FlexCols _gap={40}>
                    <L.FlexRows _gap={0} _content="space-between">
                        <L.FlexCols _width="auto" _gap={4}>
                          <T.Text _size={18} _weight={600}>인싸과일</T.Text>
                          <T.Text _size={15} _color="gray800">샤인머스켓 500g 외 1개</T.Text>
                          <T.Text _weight={500} _size={13} _color="gray500">2022/10/10 19:00</T.Text>
                        </L.FlexCols>
                        <More/>
                    </L.FlexRows>
              {/* === 주문현황Icon === */}
                    <L.FlexRows _gap={0} _content="space-evenly" _items='center'>
                      <L.FlexCols _width="auto">
                        <OrderPay/>
                        <T.Text _align='center' _weight={600} _size={12} _color="gray400">결제 완료</T.Text>
                      </L.FlexCols>
                      <ArrowRight/>
                      <L.FlexCols _width="auto">
                        <OrderReady/>
                        <T.Text _align='center' _weight={600} _size={12} _color="gray400">상품 준비</T.Text>
                      </L.FlexCols>
                      <ArrowRight/>
                      <L.FlexCols _width="auto">
                        <OrderDe/>
                        <T.Text _align='center' _weight={600} _size={12} _color="gray400">배송중</T.Text>
                      </L.FlexCols>
                      <ArrowRight/>
                      <L.FlexCols _width="auto">
                        <OrderFinC/>
                        <T.Text _align='center' _weight={600} _size={12} _color="green700">배송 완료</T.Text>
                      </L.FlexCols>
                    </L.FlexRows>

              {/* === 주문관리버튼 === */}
                    <L.FlexCols>
                      <S.Action
                      >주문내역 보기</S.Action>
                    </L.FlexCols>

                </L.FlexCols>
            </L.Contents>

          {/* ===== 2-1. 픽업- 결제 완료 ===== */}
          <L.Contents _padding='20px'>
                <L.FlexCols _gap={40}>
                    <L.FlexRows _gap={0} _content="space-between">
                        <L.FlexCols _width="auto" _gap={4}>
                          <T.Text _size={18} _weight={600}>인싸과일</T.Text>
                          <T.Text _size={15} _color="gray800">샤인머스켓 500g 외 1개</T.Text>
                          <T.Text _weight={500} _size={13} _color="gray500">2022/10/10 19:00</T.Text>
                        </L.FlexCols>
                        <More/>
                    </L.FlexRows>
              {/* === 주문현황Icon === */}
                    <L.FlexRows _gap={0} _content="space-evenly" _items='center'>
                      <L.FlexCols _width="auto">
                        <OrderPayC/>
                        <T.Text _align='center' _weight={600} _size={12} _color="green700">결제 완료</T.Text>
                      </L.FlexCols>
                      <ArrowRight/>
                      <L.FlexCols _width="auto">
                        <OrderReady/>
                        <T.Text _align='center' _weight={600} _size={12} _color="gray400">상품 준비</T.Text>
                      </L.FlexCols>
                      <ArrowRight/>
                      <L.FlexCols _width="auto">
                        <OrderFin/>
                        <T.Text _align='center' _weight={600} _size={12} _color="gray400">픽업 완료</T.Text>
                      </L.FlexCols>
                    </L.FlexRows>

              {/* === 주문관리버튼 === */}
                    <L.FlexCols>
                      <S.Action 
                        _type="bgb"
                      >주문 확인</S.Action>
                      <S.Action
                      >주문내역 보기</S.Action>
                      <S.Action 
                        _type="cancel"
                        onClick={openDelete}
                      >주문 취소</S.Action>
                    </L.FlexCols>

                </L.FlexCols>
            </L.Contents>

          {/* ===== 2-2. 픽업- 상품 준비 ===== */}
          <L.Contents _padding='20px'>
                <L.FlexCols _gap={40}>
                    <L.FlexRows _gap={0} _content="space-between">
                        <L.FlexCols _width="auto" _gap={4}>
                          <T.Text _size={18} _weight={600}>인싸과일</T.Text>
                          <T.Text _size={15} _color="gray800">샤인머스켓 500g 외 1개</T.Text>
                          <T.Text _weight={500} _size={13} _color="gray500">2022/10/10 19:00</T.Text>
                        </L.FlexCols>
                        <More/>
                    </L.FlexRows>
              {/* === 주문현황Icon === */}
                    <L.FlexRows _gap={0} _content="space-evenly" _items='center'>
                      <L.FlexCols _width="auto">
                        <OrderPay/>
                        <T.Text _align='center' _weight={600} _size={12} _color="gray400">결제 완료</T.Text>
                      </L.FlexCols>
                      <ArrowRight/>
                      <L.FlexCols _width="auto">
                        <OrderReadyC/>
                        <T.Text _align='center' _weight={600} _size={12} _color="green700">상품 준비</T.Text>
                      </L.FlexCols>
                      <ArrowRight/>
                      <L.FlexCols _width="auto">
                        <OrderFin/>
                        <T.Text _align='center' _weight={600} _size={12} _color="gray400">픽업 완료</T.Text>
                      </L.FlexCols>
                    </L.FlexRows>

              {/* === 주문관리버튼 === */}
                    <L.FlexCols>
                      <S.Action 
                        _type="bg"
                      >배달/픽업 인증</S.Action>
                      <S.Action
                      >주문내역 보기</S.Action>
                    </L.FlexCols>

                </L.FlexCols>
            </L.Contents>

          {/* ===== 2-3. 픽업- 픽업 완료 ===== */}
          <L.Contents _padding='20px'>
                <L.FlexCols _gap={40}>
                    <L.FlexRows _gap={0} _content="space-between">
                        <L.FlexCols _width="auto" _gap={4}>
                          <T.Text _size={18} _weight={600}>인싸과일</T.Text>
                          <T.Text _size={15} _color="gray800">샤인머스켓 500g 외 1개</T.Text>
                          <T.Text _weight={500} _size={13} _color="gray500">2022/10/10 19:00</T.Text>
                        </L.FlexCols>
                        <More/>
                    </L.FlexRows>
              {/* === 주문현황Icon === */}
                    <L.FlexRows _gap={0} _content="space-evenly" _items='center'>
                      <L.FlexCols _width="auto">
                        <OrderPay/>
                        <T.Text _align='center' _weight={600} _size={12} _color="gray400">결제 완료</T.Text>
                      </L.FlexCols>
                      <ArrowRight/>
                      <L.FlexCols _width="auto">
                        <OrderReady/>
                        <T.Text _align='center' _weight={600} _size={12} _color="gray400">상품 준비</T.Text>
                      </L.FlexCols>
                      <ArrowRight/>
                      <L.FlexCols _width="auto">
                        <OrderFinC/>
                        <T.Text _align='center' _weight={600} _size={12} _color="green700">픽업 완료</T.Text>
                      </L.FlexCols>
                    </L.FlexRows>

              {/* === 주문관리버튼 === */}
                    <L.FlexCols>
                      <S.Action
                      >주문내역 보기</S.Action>
                    </L.FlexCols>

                </L.FlexCols>
            </L.Contents>

      </L.Container>
      </LayoutBiz>
      {delOrder&&
      <Confirm
          contents={delOrder.contents}
          confirmText={delOrder.confirmText}
          cancelText={delOrder.cancelText}
          onConfirmClick={delOrder.onConfirmClick}
          onCancelClick={delOrder.onCancelClick}
          active={delOrder.active}
          warn={delOrder.warn}
      />}
    </div>
  )
}

export default OrderManagement