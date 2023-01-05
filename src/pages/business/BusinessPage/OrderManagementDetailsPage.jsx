import React from 'react'
import Layout from 'components/layout/Layout/Layout';
import * as L from 'components/commonUi/Layout';
import * as T from 'components/commonUi/Text';
import * as Tb from 'components/commonUi/Table';
import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useState } from 'react';
import { Profile48 } from 'components/commonUi/Icon';
import Confirm from 'components/commonUi/Confirm';
import Alert from 'components/commonUi/Alert';
import { S } from 'components/orders/orderdetails/OrderDetailsStyle'




function OrderManagementDetailsPage() {
  
   
  return (
    <div>
        <Layout
          title="주문내역 상세"
        >
<L.Container>
            {/* 주문 완료 */}
            <L.Contents>
                <L.FlexCols _gap={24}>
                    <L.FlexRows _gap={0} _content="space-between">
                        <L.FlexRows _gap={16} _width="auto" _items="center">
                            <Profile48 />
                            <L.FlexCols _width="auto" _gap={4}>
                                <T.Text _size={18} _weight={600}>인싸과일</T.Text>
                                <T.Text _size={15} _color="gray800">샤인머스켓 500g 외 1개</T.Text>
                            </L.FlexCols>
                        </L.FlexRows>
                        <T.Text _size={14} _weight={500} _color="gray800">배달 완료</T.Text>
                    </L.FlexRows>
                    <L.FlexCols _gap={4}>
                        <L.FlexCols _gap={4}>
                            <T.Text _size={14} _color="gray600">주문 일시: 2022.10.10</T.Text>
                            <T.Text _size={14} _color="gray600">주문 번호: 1afsf515af1a21f3</T.Text>
                            <T.Text _size={14} _color="gray600">수령 방법: 배달</T.Text>
                        </L.FlexCols>
                    </L.FlexCols>
                </L.FlexCols>
            </L.Contents>
            {/* 배송지 / 요청 사항 */}
            <L.Contents>
                <L.FlexCols _gap={16}>
                    <L.FlexCols _gap={4}>
                        <T.Text _weight={600}>배송지 주소</T.Text>
                        <T.Text _size={15} _color="gray800">서울특별시 강서구 가양동 173-22, 3층</T.Text>
                    </L.FlexCols>
                    <L.FlexCols _gap={4}>
                        <T.Text _weight={600}>요청사항</T.Text>
                        <T.Text _size={15} _color="gray800">신선한 과일로 부탁드립니다~</T.Text>
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
                    <T.Text _weight={600} _size={18}>샤인머스켓 500g</T.Text>
                    <L.FlexCols _gap={4}>
                        <T.Text _color="gray800">기본: 9,000원</T.Text>
                        <T.Text _color="gray800">추가 선택: 3,000원</T.Text>
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
                                <td>27,000 원</td>
                            </tr>
                            <tr>
                                <th>배달비</th>
                                <td>2,000 원</td>
                            </tr>
                            <tr>
                                <th>결제 수단</th>
                                <td>카드결제</td>
                            </tr>
                        </tbody>
                        <tfoot>
                            <tr>
                                <th>총 결제금액</th>
                                <td>29,000 원</td>
                            </tr>
                        </tfoot>
                    </Tb.ReciptTable>
                </L.FlexCols>
            </L.Contents>

        </L.Container>
       
        </Layout>
    </div>
  )
}

export default OrderManagementDetailsPage