import React, { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Layout from 'components/layout/Layout/Layout'
import * as L from 'components/commonUi/Layout';
import * as T from 'components/commonUi/Text';
import * as B from 'components/commonUi/Button';
import * as C from 'components/commonUi/CommonStyles';
import * as I from 'components/commonUi/Input';
import { Down, Delete, Camera, ArrowTop, } from 'components/commonUi/Icon';
import { InfoBoxDiv, TitleInfo } from 'components/Buisness/BusinessManagement/BusinessManagementTabStyle';
import { AbsoluteTopDiv, ImgSizeLayout, RelativDiv } from 'components/layout/Img/ImgSizeLayout';
import maindata from 'assets/data/maindata'
import { ToggleS } from 'components/Login/Password/ToggleDetail/ToggleDetailStyle';
import SimpleConfirm from 'components/commonUi/SimpleConfirm';

function OrderManagementDetailsAuthPage() {
  const navigate = useNavigate();
  let [item] = useState(maindata)
  const [show, setShow] = useState()
  
  const [alert1, setAlert1] = useState('')
  const [alert2, setAlert2] = useState('')
  const openAlert1 = () => {
    return setAlert1({
      contents: "텍스트를 입력해주세요.",
      confirmText: "확인",
      onConfirmClick: () => setAlert1(null),
      active: () => setAlert1(null),
    })
  }
  const openAlert2 = () => {
    return setAlert2({
      contents: "배달/픽업이 완료처리 되었습니다.",
      confirmText: "확인",
      onConfirmClick: () => setAlert2(null),
      active: () => setAlert2(null),
    })
  }

  return (
    <div>
      <Layout
        title='사진 등록'
        cart={false}
        bell={false}
        onBackClick={() => navigate(-1)}
      >

        <L.Container _padding="0px 0px 60px" >
          <L.Contents _height='100vh'>
            <L.FlexCols _gap={40} _padding="8px 20px">
              <L.FlexCols _gap={16}>
                <T.Text _weight={600} _size={16} _color="gray900">판매 종류</T.Text>
                <L.FlexRows _gap={16}>
                  <B.LayerTextButton _width='100px' _height='100px'>
                    <L.FlexCols _gap={4}>
                      <L.FlexRows _content='center'>
                        <Camera/>
                      </L.FlexRows>
                      <T.Text _align='center' _size={14}>파일 첨부</T.Text>
                    </L.FlexCols>
                  </B.LayerTextButton>

                  <RelativDiv>
                    <ImgSizeLayout _width={100} _height={100} _bdr={4} src={item[0].img}/>
                    <AbsoluteTopDiv _left='90px' >
                      <Delete/>
                    </AbsoluteTopDiv>
                  </RelativDiv>
                </L.FlexRows>
              </L.FlexCols>

              <L.FlexCols _gap={16}>
                <T.Text _weight={600} _size={16} _color="gray900">배달/픽업 인증 내용</T.Text>
                <InfoBoxDiv onClick={() => setShow((s) => !s)}>
                  <TitleInfo>예시문구</TitleInfo>
                  {show ? <ArrowTop/> : <Down/> }
                </InfoBoxDiv>
                {show && <Toggle/>}
                <I.TextInput
                  placeholder='텍스트를 입력해 주세요.'
                 _boccolor={'#FFFFFF'} _height={140}
                />
              </L.FlexCols>

            </L.FlexCols>


            <B.FixedActionButton
              type='button'
              onClick={openAlert1}
            >
              배달/픽업 완료
            </B.FixedActionButton>
          </L.Contents>
        </L.Container>
      </Layout>
      {
        alert1 &&
        <SimpleConfirm
          contents={alert1.contents}
          confirmText={alert1.confirmText}
          onConfirmClick={alert1.onConfirmClick}
          active={alert1.active}
        />
      }
      {
        alert2 &&
        <SimpleConfirm
          contents={alert2.contents}
          confirmText={alert2.confirmText}
          onConfirmClick={alert2.onConfirmClick}
          active={alert2.active}
        />
      }

    </div>
  )
}

function Toggle() {

  return (
    <div>
      <ToggleS>
        <L.FlexCols _gap='0px'>
          <L.FlexRows _padding='12px 16px' _height='48px' _items='center'><T.Text _weight={600} _size={15} _color="green700">예시문구</T.Text></L.FlexRows>
          <L.FlexRows _padding='12px 16px' _height='48px' _items='center'><T.Text _size={15} _color="gray900">고객님, 오늘도 맛있는 저희 상품 구매해주셔서 감사합니다.</T.Text></L.FlexRows>
          <L.FlexRows _padding='12px 16px' _height='48px' _items='center'><T.Text _size={15} _color="gray900">배달 완료 인증해드립니다. 확인 부탁드려요~</T.Text></L.FlexRows>
          <L.FlexRows _padding='12px 16px' _height='48px' _items='center'><T.Text _size={15} _color="gray900">주문해주셔서 감사합니다~</T.Text></L.FlexRows>
        </L.FlexCols>
      </ToggleS>
    </div>
  )
}

export default OrderManagementDetailsAuthPage