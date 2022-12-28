import React, { useState } from 'react'
import * as L from 'components/commonUi/Layout';
import * as T from 'components/commonUi/Text';
import Layout from 'components/layout/Layout/Layout';
import { Link, useNavigate } from 'react-router-dom'
import { Down } from 'components/commonUi/Icon';


function ReviewPage() {
  const navigate = useNavigate()


  return (
    <div>
      <Layout
        title="내가 쓴 리뷰"
        bell={false}
        cart={false}
        onBackClick={() => navigate(-1)}
      >
        <L.Container >
          <L.Contents  _height={'100vh'}>

            {/* 리뷰 없을 때 */}
            {/* <L.FlexCols _gap={80} >
              <L.FlexRows >
                  <T.Text _size={15} _weight={400} _color='gray900'>전체 0건</T.Text>
              </L.FlexRows>
              <L.FlexRows  _content='center' _item='center'>
                <T.Text _size={15} _weight={300} _color='gray600'>아직 작성하신 리뷰가 없습니다.</T.Text>
              </L.FlexRows>

            </L.FlexCols> */}

            {/* 리뷰 있을 때 */}
            <L.FlexCols _gap={4}>
              <L.FlexRows >
                    <T.Text _size={15} _weight={400} _color='gray900'>전체 3건</T.Text>
                </L.FlexRows>
              </L.FlexCols>
          </L.Contents>
        </L.Container>
      </Layout>

    </div>
  )
}




export default ReviewPage