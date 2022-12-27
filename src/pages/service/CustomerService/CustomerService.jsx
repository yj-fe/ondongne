import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Layout from 'components/layout/Layout/Layout'
import * as L from 'components/commonUi/Layout';
import * as T from 'components/commonUi/Text';
import { ArrowRight } from 'components/commonUi/Icon';

function CustomerService() {
  const navigate = useNavigate();


  return (
    <div>
       <Layout
          title="고객센터"
          cart={false}
          bell={false}
          onBackClick={() => navigate(-1)}
      >
        <L.Container _padding="0px 0px 8px">
          <L.Contents  >
            <L.FlexCols _gap={24} _padding="8px 20px">
              <L.FlexRows _content="space-between" _items="center" _padding="16px 0px">
                <T.Text _weight={500} _size={16} _color="gray900">자주하는 질문</T.Text>
                <Link to='/service/faq'>
                  <ArrowRight/>
                </Link>
              </L.FlexRows>
              <L.FlexRows _content="space-between" _items="center" _padding="16px 0px">
                <T.Text _weight={500} _size={16} _color="gray900">1:1 문의</T.Text>
                <Link to='/service/inquiry'>
                  <ArrowRight/>
                </Link>
              </L.FlexRows>
              <L.FlexRows _content="space-between" _items="center" _padding="16px 0px">
                <T.Text _weight={500} _size={16} _color="gray900">Voc 의견</T.Text>
                <Link to='/service/voc'>
                  <ArrowRight/>
                </Link>
              </L.FlexRows>
            </L.FlexCols>
          </L.Contents>

          <L.Contents >
            <L.FlexCols _gap={24} _padding="8px 20px">
              <L.FlexRows _content="space-between" _items="center" _width={688} _padding="8px 0px">
                <T.Text _weight={400} _size={14} _color="gray800">우리동네 고객센터</T.Text>
                <T.Text _weight={400} _size={14} _color="gray800">070-1234-5678</T.Text>
              </L.FlexRows>
              <L.FlexRows _content="space-between" _items="center" _width={688} _padding="8px 0px">
                <T.Text _weight={400} _size={14} _color="gray800">이메일</T.Text>
                <T.Text _weight={400} _size={14} _color="gray800">sosangoin@email.com</T.Text>
              </L.FlexRows>
            </L.FlexCols>
          </L.Contents>
        </L.Container>
      </Layout>
    </div>
  )
}

export default CustomerService