import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Layout from 'components/layout/Layout/Layout'
import * as L from 'components/commonUi/Layout';
import * as T from 'components/commonUi/Text';
import { Line } from 'components/Login/Signup/agreement/AgreementStyle';

function NoticePage() {
  const navigate = useNavigate();
  return (
    <div>
      <Layout
        title="공지사항"
        cart={false}
        bell={false}
        onBackClick={() => navigate(-1)}
      >
        <L.Container _padding="0px 0px 8px" 
        >
          <Link to='/notice/details/:id'>
          <L.Contents  _height='100vh'>
            <L.FlexCols _gap={20} _padding="8px 20px">
              <L.FlexCols _gap={4}>
                <T.Text _weight={500} _size={16} _color="gray900">사기를 주의하세요.</T.Text>
                <T.Text _weight={400} _size={13} _color="gray500">2022/10/10</T.Text>
             </L.FlexCols>
             <Line/>
              <L.FlexCols _gap={4}>
                <T.Text _weight={500} _size={16} _color="gray900">사기를 주의하세요.</T.Text>
                <T.Text _weight={400} _size={13} _color="gray500">2022/10/10</T.Text>
             </L.FlexCols>
            <Line/>
              <L.FlexCols _gap={4}>
                <T.Text _weight={500} _size={16} _color="gray900">사기를 주의하세요.</T.Text>
                <T.Text _weight={400} _size={13} _color="gray500">2022/10/10</T.Text>
             </L.FlexCols>
            <Line/>
              <L.FlexCols _gap={4}>
                <T.Text _weight={500} _size={16} _color="gray900">사기를 주의하세요.</T.Text>
                <T.Text _weight={400} _size={13} _color="gray500">2022/10/10</T.Text>
             </L.FlexCols>
            <Line/>
              <L.FlexCols _gap={4}>
                <T.Text _weight={500} _size={16} _color="gray900">사기를 주의하세요.</T.Text>
                <T.Text _weight={400} _size={13} _color="gray500">2022/10/10</T.Text>
             </L.FlexCols>
            <Line/>
             </L.FlexCols>

          </L.Contents>
        </Link>
        </L.Container>
      </Layout>
    </div>
  )
}

export default NoticePage