import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Layout from 'components/layout/Layout/Layout'
import * as L from 'components/commonUi/Layout';
import * as T from 'components/commonUi/Text';
import * as I from 'components/commonUi/Input';
import * as B from 'components/commonUi/Button';
import CheckBox from 'components/commonUi/CheckBox';
import { ButtonDiv, CheckStyle, CheckTitle, CheckTitleDiv } from 'pages/member/MemberWithdrawal/MemberWithdrawalStyle';
import { InfoBoxDiv, RightStyle, TitleInfo } from 'components/Buisness/BusinessManagement/BusinessManagementTabStyle';
import { ArrowTop, Down } from 'components/commonUi/Icon';
import { DetailTabInfo, DetailTabReview, Line, TabButtonStyle, TabContentStyle } from 'pages/main/DetailsPage/DetailsPageStyle';
import { ReactComponent as Check } from 'assets/login/checkgray.svg'
import { ReactComponent as Checked } from 'assets/login/checked.svg'
import { ToggleS } from 'components/Login/Password/ToggleDetail/ToggleDetailStyle';
import SimpleConfirm from 'components/commonUi/SimpleConfirm';
import { postInquiry } from 'service/border';



function InquiryPage() {
  const navigate = useNavigate();
  const [detailTab, setDetailTab] = useState(0)


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
            {/* =================== Tab버튼 ( 문의하기 / 문의내역 ) =================== */}
            <TabButtonStyle>
              <DetailTabInfo
                onClick={() => { setDetailTab(0); }}
                infocolor={detailTab === 0}
              >
                문의하기
              </DetailTabInfo>
              <DetailTabReview
                onClick={() => { setDetailTab(1); }}
                reviewcolor={detailTab === 1}
              >
                문의내역
              </DetailTabReview>
            </TabButtonStyle>

            <TabContentStyle>
              <TabInquiry detailTab={detailTab} />
            </TabContentStyle>
          </L.Contents>
        </L.Container>
      </Layout>
    </div>
  )
}


function TabInquiry(props){
  const [select, setSelect] = useState(false)
  const [confirm, setConfirm] = useState(false);
  const [show, setShow] = useState()
  const [btn, setBtn] = useState(false)
  const [check, setCheck] = useState(false)
  const openConfirm = () => {
    return setConfirm({
      contents: "고객님의 문의가 정상적으로 접수되었습니다.\n빠른 시간내에 답변 드리도록 하겠습니다.",
      buttonText: "확인",
      onButtonClick: () => setConfirm(null),
      onOverlayClick: () => setConfirm(null),
    })
  }





  // const [ inquiry, setInquiry ] = useState([]);
  // const requestData = {
  //   "_comment": "문의 = INQUIRY, voc = VOC",
  //   "category": "VOC",
  //   "type": "기능",
  //   "title": "이거 추가해 주세요.",
  //   "contents": "이 기능"
  // }
  // const getInquiry = async () => {
  //   const response = await postInquiry(requestData);
  //   const { data } = response.data;
  //   setInquiry(data);
  //   console.log(data);
  // }
  // useEffect(()=>{
  //   getInquiry()
  // }, [])




  // const handleChange = (e) => {
  //   const {name, value}=e.target;
  //   setInquiry((inquiry)=>({...inquiry, [name]: value}))
  // }
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  // }



  return[
//=====================1. Tab 문의하기=====================

<div>
{/* <div onSubmit={handleSubmit}> */}

      {/* <L.FlexCols _gap={24} _padding="8px 20px">
              
              <L.FlexCols>
                <T.Text _weight={600} _size={16} _color="gray900">분류</T.Text>
                <InfoBoxDiv onClick={() => setShow((s) => !s)}>
                  <TitleInfo>주문 및 배달문의</TitleInfo>
                  {show ? <ArrowTop/> : <Down/> }
                </InfoBoxDiv>
                {show && <Toggle/>}
             </L.FlexCols>
              <L.FlexCols>
                <T.Text _weight={600} _size={16} _color="gray900">제목</T.Text>
                  <I.TextInput
                    type='text'
                    name='title'
                    value={inquiry.title ?? ''}
                    required
                    onChange={handleChange}
                    _boccolor={'#FFFFFF'}
                  />
             </L.FlexCols>
              <L.FlexCols>
                <T.Text _weight={600} _size={16} _color="gray900">문의내용</T.Text>
                  <I.TextInput 
                    type='text'
                    name='contents'
                    value={inquiry.title ?? ''}
                    required
                    onChange={handleChange}
                    _boccolor={'#FFFFFF'} _height={140}
                  />
             </L.FlexCols>
              <L.FlexRows _content="flex-start" _items="center" >
              <CheckTitleDiv onClick={() => { setCheck((s) => !s); setBtn((s) => !s) }}>
                <CheckStyle
                  id="confirm"
                  type="button"
                >
                  {check ? <Checked /> : <Check />}
                </CheckStyle>
                <CheckTitle>개인정보 수집, 이용에 동의합니다.(필수)</CheckTitle>
              </CheckTitleDiv>
              </L.FlexRows>

      </L.FlexCols>

            <L.BottomCols>
              <ButtonDiv
                type="button"
                btn={btn}
                onClick={openConfirm}
              >문의하기
              </ButtonDiv>
            </L.BottomCols>
            {
          confirm &&
          <SimpleConfirm 
              warn={confirm.warn}
              contents={confirm.contents}
              confirmText={confirm.confirmText}
              onConfirmClick={confirm.onConfirmClick}
          />
      } */}

    </div>,
//=====================2. Tab 문의내역=====================
    <div>
      <L.FlexCols _gap='0px' _padding='0px 20px'>



        <L.FlexRows _items='center' _content='space-between' _height='86px'>
          <L.FlexCols _width='width: calc(100% - 100px);' _gap={4}>
            <T.Text _weight={600} _size={16} _color="gray800">문의사항 제목 문의사항 제목</T.Text>
            <T.Text _size={13} _color="gray500">2022/11/01</T.Text>
          </L.FlexCols>
          <B.Badge _size='14px' _color='gray600' _width='70px' _height='36px'>대기중</B.Badge>
        </L.FlexRows>
        
        <Line/>
        <L.FlexRows _items='center' _content='space-between' _height='86px'>
          <L.FlexCols _width='width: calc(100% - 100px);' _gap={4}>
            <T.Text _weight={600} _size={16} _color="gray800">문의사항 제목문의사항 제목문의사항 제목</T.Text>
            <T.Text _size={13} _color="gray500">2022/11/01</T.Text>
          </L.FlexCols>
          <B.Badge _size='14px'  _color='gray600' _width='70px' _height='36px'>대기중</B.Badge>
        </L.FlexRows>
        <Line/>
        <Link to='/service/inquiry/details/:id'>
        <L.FlexRows _items='center' _content='space-between' _height='86px'>
          <L.FlexCols _width='width: calc(100% - 100px);' _gap={4}>
            <T.Text _weight={600} _size={16} _color="gray800">문의사항 제목문의사항 제목</T.Text>
            <T.Text _size={13} _color="gray500">2022/11/01</T.Text>
          </L.FlexCols>
          <B.Badge _size='14px' _bg='green50' _color='green700' _width='70px' _height='36px'>답변 완료</B.Badge>
        </L.FlexRows>
        </Link>
        <Line/>


      </L.FlexCols>
    </div>
  ][props.detailTab]
}

function Toggle() {

  return (
    <div>
      <ToggleS>
        <L.FlexCols _gap='0px'>
          <L.FlexRows _padding='12px 16px' _height='48px' _items='center'><T.Text _weight={600} _size={15} _color="green700">주문 및 배달문의</T.Text></L.FlexRows>
          <L.FlexRows _padding='12px 16px' _height='48px' _items='center'><T.Text _size={15} _color="gray900">이용방법 및 회원정보 문의</T.Text></L.FlexRows>
          <L.FlexRows _padding='12px 16px' _height='48px' _items='center'><T.Text _size={15} _color="gray900">권리침해 신고</T.Text></L.FlexRows>
          <L.FlexRows _padding='12px 16px' _height='48px' _items='center'><T.Text _size={15} _color="gray900">기타문의</T.Text></L.FlexRows>
        </L.FlexCols>
      </ToggleS>
    </div>
  )
}
export default InquiryPage