import React, { useState } from 'react'
import * as L from 'components/commonUi/Layout';
import * as T from 'components/commonUi/Text';
import Layout from 'components/layout/Layout/Layout';
import { Link, useNavigate } from 'react-router-dom'
import { ArrowRight, Down, More, OrderPayC } from 'components/commonUi/Icon';

function OrderManagement() {
  const navigate = useNavigate()
  const [totalCount, setTotalCount] = useState(0)


  return (
    <div>
      <Layout
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
              {/* <L.FlexRows  _height={'100vh'}  _content='center' _item='center'>
                <T.Text _align='center' _size={15} _weight={300} _color='gray600'><p>주문 내역이 없습니다.</p><p>내 주변 마켓을 이용해보세요!</p></T.Text>
              </L.FlexRows> */}

            </L.FlexCols>
          </L.Contents>


        {/* 주문 있을 때 */}
          {/* 주문 완료 */}
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
                    <L.FlexRows _gap={0} _content="space-evenly" _items='center'>
                      <L.FlexCols _width="auto">
                        <OrderPayC/>
                        <T.Text _align='center' _weight={600} _size={12} _color="green700">결제 완료</T.Text>
                      </L.FlexCols>
                      <ArrowRight/>
                      <L.FlexCols _width="auto">
                        <OrderPayC/>
                        <T.Text _align='center' _weight={600} _size={12} _color="gray400">상품 준비</T.Text>
                      </L.FlexCols>
                      <ArrowRight/>
                      <L.FlexCols _width="auto">
                        <OrderPayC/>
                        <T.Text _align='center' _weight={600} _size={12} _color="gray400">배송중</T.Text>
                      </L.FlexCols>
                      <ArrowRight/>
                      <L.FlexCols _width="auto">
                        <OrderPayC/>
                        <T.Text _align='center' _weight={600} _size={12} _color="gray400">배송 완료</T.Text>
                      </L.FlexCols>
                    </L.FlexRows>

                    <L.FlexCols _gap={4}>
                        <L.FlexCols _gap={4}>
                        </L.FlexCols>
                    </L.FlexCols>
                </L.FlexCols>
            </L.Contents>


      </L.Container>
      </Layout>
    </div>
  )
}

export default OrderManagement