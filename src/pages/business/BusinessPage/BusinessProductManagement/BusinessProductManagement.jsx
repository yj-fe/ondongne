import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Layout from 'components/layout/Layout/Layout'
import * as L from 'components/commonUi/Layout';
import * as T from 'components/commonUi/Text';

function BusinessProductManagement() {
  
  const navigate = useNavigate();
  const [modal, setConfirm] = useState(null)

  return (
    <div>
      <Layout
          title="상품관리"
          cart={false}
          bell={false}
          onBackClick={() => navigate('/')}
      >


        <L.Container _padding="24px 20px 80px" _gap="32">
          <L.Contents>
            <L.FlexRows _content="space-between">
                  <T.Text _weight={600} _size={16} _color="gray900">전체 150</T.Text>
                  <T.Text _weight={400} _size={13} _color="gray900">최신 순</T.Text>
            </L.FlexRows>
            <L.FlexCols _gap={24}>
              <L.FlexRows _content="start" _items="center" _gap={20} _width={216}>
                <L.FlexCols _gap={12}>
                  <T.Text _weight={400} _size={14} _color="gray900">공동구매 특가 찬스!! 사과 구매 시 1+1 한개 더</T.Text>
                  <L.FlexRows _content="start" _items="center" _gap={4}>
                    <T.Text _weight={400} _size={13} _color="gray500">40%</T.Text>
                    <T.Text _weight={600} _size={15} _color="red">25,200원</T.Text>
                  </L.FlexRows> 
                    <T.Text _weight={600} _size={16} _color="gray900">18,000원</T.Text>
                </L.FlexCols>
              </L.FlexRows>
            </L.FlexCols>
          </L.Contents>


        </L.Container>
      </Layout>

    </div>
  )
}

export default BusinessProductManagement