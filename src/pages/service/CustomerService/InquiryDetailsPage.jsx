import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Layout from 'components/layout/Layout/Layout'
import * as L from 'components/commonUi/Layout';
import * as T from 'components/commonUi/Text';
import * as I from 'components/commonUi/Input';
import * as B from 'components/commonUi/Button';
import { Line } from 'components/Login/Signup/agreement/AgreementStyle';
import { MarketCommentsStyle } from 'pages/main/DetailsPage/DetailsPageStyle';

function InquiryDetailsPage() {
  const navigate = useNavigate();
  return (
    <div>
      <Layout
          title="1:1 문의"
          cart={false}
          bell={false}
          onBackClick={() => navigate(-1)}
      >
        <L.Container _padding="0px 0px 8px" >
          <L.Contents _padding="0" _height={'100vh'}>
            <L.FlexCols>

                <L.FlexRows _gap='0px' _padding='20px' _items='center' _content='space-between' _height='86px'>
                  <L.FlexCols _width='width: calc(100% - 100px);' _gap={4}>
                    <T.Text _weight={600} _size={16} _color="gray800">문의사항 제목 문의사항 제목</T.Text>
                    <T.Text _size={13} _color="gray500">2022/11/01 14:00</T.Text>
                  </L.FlexCols>
                  <B.Badge _size='14px' _bg='green50' _color='green700' _width='70px' _height='36px'>답변 완료</B.Badge>
                </L.FlexRows>
              <Line/>
              
              <L.FlexCols _gap={28}  _padding='20px' >
                <T.Text _size={15} ><p>문의 내용입니다. 문의 내용입니다. 문의 내용입니다. 문의 내용입니다. 문의 내용입니다. 문의 내용입니다. 문의 내용입니다. 문의 내용입니다. 문의 내용입니다. 문의 내용입니다. 문의 내용입니다. 문의 내용입니다. 문의 내용입니다.</p></T.Text>
                <MarketCommentsStyle>
                  <L.FlexCols _padding='4px'>
                    <L.FlexRows  _content='space-between'>
                      <T.Text _size={15} _weight={600} _color="gray900">답변 내용</T.Text>
                      <T.Text _size={13} _color="gray500">2022/11/01 14:00</T.Text>
                    </L.FlexRows>
                      <T.Text _size={15} ><p>문의 내용입니다. 문의 내용입니다. 문의 내용입니다. 문의 내용입니다. </p><p>문의 내용입니다. 문의 내용입니다. 문의 내용입니다. 문의 내용입니다. 문의 내용입니다. 문의 내용입니다. </p><p>문의 내용입니다. 문의 내용입니다. 문의 내용입니다.</p><br/><p>문의 내용입니다. 문의 내용입니다. 문의 내용입니다. 문의 내용입니다. </p><p>문의 내용입니다. 문의 내용입니다. 문의 내용입니다. 문의 내용입니다. 문의 내용입니다. 문의 내용입니다. </p><p>문의 내용입니다. 문의 내용입니다. 문의 내용입니다.</p></T.Text>
                  </L.FlexCols>
                </MarketCommentsStyle>
              </L.FlexCols>
            </L.FlexCols>
          </L.Contents>
        </L.Container>
      </Layout>
    </div>
  )
}

export default InquiryDetailsPage