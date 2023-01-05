import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Layout from 'components/layout/Layout/Layout'
import * as L from 'components/commonUi/Layout';
import * as T from 'components/commonUi/Text';
import { ArrowTop, Down } from 'components/commonUi/Icon';
import { ToggleBody, ToggleDiv } from 'components/Login/Password/ToggleDetail/ToggleDetailStyle';

function FrequentlyAskedQuestion() {
  const navigate = useNavigate();
  const [show, setShow] = useState()


  return (
    <div>
       <Layout
          title="자주하는 질문"
          cart={false}
          bell={false}
          onBackClick={() => navigate(-1)}
      >
        <L.Container>
          <L.Contents _height="100vh">
            <L.FlexCols _gap='0px' _padding="0px" _items="center">
              <L.FlexRows onClick={() => setShow((s) => !s)} _height='56px' _content="space-between" _items="center" _padding="0px ">
                <T.Text _weight={400} _size={16} _color="gray900">회원 탈퇴를 하고 싶어요.</T.Text>
                {show ? <ArrowTop/> : <Down/> }
              </L.FlexRows>
              {show && <Toggle/>}
              <L.FlexRows _height='56px' _content="space-between" _items="center" _padding="0px ">
                <T.Text _weight={400} _size={16} _color="gray900">회원 가입은 어떻게 하나요?</T.Text>
                <Down/>
              </L.FlexRows>
              <L.FlexRows _height='56px' _content="space-between" _items="center" _padding="0px ">
                <T.Text _weight={400} _size={16} _color="gray900">주문건 중 메뉴 또는 수량을 변경하고 싶어요.</T.Text>
                <Down/>
              </L.FlexRows>
              <L.FlexRows _height='56px' _content="space-between" _items="center" _padding="0px ">
                <T.Text _weight={400} _size={16} _color="gray900">주문 내역은 어디서 확인이 가능한가요?</T.Text>
                <Down/>
              </L.FlexRows>
              <L.FlexRows _height='56px' _content="space-between" _items="center" _padding="0px ">
                <T.Text _weight={400} _size={16} _color="gray900">배달할 곳의 위치 설정을 변경하고 싶어요.</T.Text>
                <Down/>
              </L.FlexRows>
              <L.FlexRows _height='56px' _content="space-between" _items="center" _padding="0px ">
                <T.Text _weight={400} _size={16} _color="gray900">쿠폰 사용은 어떻게 하나요?</T.Text>
                <Down/>
              </L.FlexRows>
              <L.FlexRows _height='56px' _content="space-between" _items="center" _padding="0px ">
                <T.Text _weight={400} _size={16} _color="gray900">픽업은 어떻게 하나요?</T.Text>
                <Down/>
              </L.FlexRows>
              <L.FlexRows _height='56px' _content="space-between" _items="center" _padding="0px ">
                <T.Text _weight={400} _size={16} _color="gray900">직접 받고 싶으면 어떻게 하나요?</T.Text>
                <Down/>
              </L.FlexRows>
              <L.FlexRows _height='56px' _content="space-between" _items="center" _padding="0px ">
                <T.Text _weight={400} _size={16} _color="gray900">결제 수단은 어떤게 있나요?</T.Text>
                <Down/>
              </L.FlexRows>
              <L.FlexRows _height='56px' _content="space-between" _items="center" _padding="0px ">
                <T.Text _weight={400} _size={16} _color="gray900">로그아웃은 어떻게 하나요?</T.Text>
                <Down/>
              </L.FlexRows>
            </L.FlexCols>
          </L.Contents>

        </L.Container>
      </Layout>
    </div>
  )
}

function Toggle() {

  return (
    <div>
      <ToggleBody>
        <ToggleDiv _padding='16px'>
          <T.Text>
            <p>화면을 통하여 진행할 수 있습니다.</p><br/>
            <p>회원 탈퇴 시 우리동네 이용이 더 이상 불가능 합니다.</p>
          </T.Text>
        </ToggleDiv>
      </ToggleBody>
    </div>
  )
}

export default FrequentlyAskedQuestion