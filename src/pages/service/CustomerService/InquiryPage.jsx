import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Layout from 'components/layout/Layout/Layout'
import * as L from 'components/commonUi/Layout';
import * as T from 'components/commonUi/Text';
import * as I from 'components/commonUi/Input';
import * as B from 'components/commonUi/Button';
import { ButtonDiv, CheckStyle, CheckTitle, CheckTitleDiv } from 'pages/member/MemberWithdrawal/MemberWithdrawalStyle';
import { InfoBoxDiv, TitleInfo } from 'components/Buisness/BusinessManagement/BusinessManagementTabStyle';
import { ArrowTop, Down } from 'components/commonUi/Icon';
import { DetailTabInfo, DetailTabReview, Line, TabButtonStyle, TabContentStyle } from 'pages/main/DetailsPage/DetailsPageStyle';
import { ReactComponent as Check } from 'assets/login/checkgray.svg'
import { ReactComponent as Checked } from 'assets/login/checked.svg'
import { ToggleS } from 'components/Login/Password/ToggleDetail/ToggleDetailStyle';
import SimpleConfirm from 'components/commonUi/SimpleConfirm';
import { postInquiry } from 'service/border';
import { useSelector } from 'react-redux';



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
          <L.Contents _padding="0" _height='calc(100vh - 68px)'>
            {/* =================== Tab버튼 ( 문의하기 / 문의내역 ) =================== */}
            <TabButtonStyle>
              <DetailTabInfo
                width='50%'
                onClick={() => { setDetailTab(0); }}
                infocolor={detailTab === 0}
              >
                문의하기
              </DetailTabInfo>
              <DetailTabReview
                width='50%'
                onClick={() => { setDetailTab(1); }}
                reviewcolor={detailTab === 1}
              >
                문의내역
              </DetailTabReview>
            </TabButtonStyle>

            <TabContentStyle>
              <TabInquiry detailTab={detailTab} tabHandler={setDetailTab}/>
            </TabContentStyle>
          </L.Contents>
        </L.Container>
      </Layout>
    </div>
  )
}


function TabInquiry({detailTab, tabHandler}){
  const [confirm, setConfirm] = useState(false);
  const [show, setShow] = useState()
  const [btn, setBtn] = useState(false)
  const isAuthenticated = useSelector(state => state.auth.isAuthenticated);

  const [data, setData] = useState({
    category: "INQUIRY",
    type: "주문 및 배달문의",
    title: "",
    contents: "",
    check: false
  })
  
// 선택한 분류로 바꾸기
  const dataChecked = type => {
    setData({...data, type: type})
  }
  
  //
  const handleChange = (e) => {
    const {name, value}=e.target;
    setData(item => ({...item, [name]: value}))
  }

  // 체크 박스 핸들러
  const checkHandler = (e) => {
    e.preventDefault();
    setData(item => ({...item, check: !data.check}))
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    if(!isAuthenticated) {
      return setConfirm({
        contents: "로그인해주세요.",
        buttonText: "확인",
        onConfirmClick: () => setConfirm(null),
        onOverlayClick: () => setConfirm(null),
      })
    }

    const response = await postInquiry(data);
    // console.log(response)

    if(response && response.data.data) {
      return setConfirm({
        contents: "고객님의 문의가 정상적으로 접수되었습니다.\n빠른 시간내에 답변 드리도록 하겠습니다.",
        buttonText: "확인",
        onConfirmClick: () => tabHandler(1),
        onOverlayClick: () => setConfirm(null),
      })
    }
  }

  useEffect(() => {
    if(data.check && data.contents && data.title) {
      setBtn(true);
    } else {
      setBtn(false);
    }
  }, [data])

  return[
//=====================1. Tab 문의하기=====================

<div>
      <L.FlexCols _gap={24} _padding="8px 20px">
              
              <L.FlexCols>
                <T.Text _weight={600} _size={16} _color="gray900">분류</T.Text>
                <InfoBoxDiv onClick={() => setShow((s) => !s)}>
                  <TitleInfo>{data.type}</TitleInfo>
                  {show ? <ArrowTop/> : <Down/> }
                </InfoBoxDiv>
                {show && <Toggle type={data.type} handler={dataChecked} closeSelector={() => setShow(false)}/>}
             </L.FlexCols>
              <L.FlexCols>
                <T.Text _weight={600} _size={16} _color="gray900">제목</T.Text>
                  <I.TextInput
                    type='text'
                    name='title'
                    value={data.title}
                    required
                    onChange={handleChange}
                    _boccolor={'#FFFFFF'}
                  />
             </L.FlexCols>
              <L.FlexCols>
                <T.Text _weight={600} _size={16} _color="gray900">문의내용</T.Text>
                  <I.Textarea 
                    type='text'
                    name='contents'
                    value={data.contents}
                    required
                    onChange={handleChange}
                    _boccolor={'#FFFFFF'} _height={140}
                  />
                  
             </L.FlexCols>
              <L.FlexRows _content="flex-start" _items="center" >
              <CheckTitleDiv onClick={checkHandler}>
                <CheckStyle
                  id="confirm"
                  type="button"
                >
                  {data.check ? <Checked /> : <Check />}
                </CheckStyle>
                <CheckTitle>개인정보 수집, 이용에 동의합니다.(필수)</CheckTitle>
              </CheckTitleDiv>
              </L.FlexRows>

      </L.FlexCols>

            <L.BottomCols>
              <ButtonDiv
                type="button"
                btn={btn}
                disabled={!btn}
                onClick={handleSubmit}
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
            onOverlayClick={confirm.onOverlayClick}
        />
      }

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
          <B.Badge _items='center' _size='14px' _bg='green50' _color='green700' _width='70px' _height='36px'>답변 완료</B.Badge>
        </L.FlexRows>
        </Link>
        <Line/>


      </L.FlexCols>
    </div>
  ][detailTab]
}



//분류 토글
function Toggle({ type, handler, closeSelector }) {

  const [data, setData] = useState([
    {
      id: 0,
      name: "주문 및 배달문의",
      checked: false
    },
    {
      id: 1,
      name: "이용방법 및 회원정보 문의",
      checked: false
    },
    {
      id: 2,
      name: "권리침해 신고",
      checked: false
    },
    {
      id: 3,
      name: "기타문의",
      checked: false
    }
  ])

  const clickHandler = name => {
    setData(
      data.map(item => 
          item.name === name 
            ? {...item, checked: !item.checked} 
            : {...item, checked: false} 
      )
    )
    handler(name);
    closeSelector();
  }

  useEffect(() => {
    setData(
      data.map(item => 
          item.name === type 
            ? {...item, checked: !item.checked} 
            : item
      )
    )
  }, []);

  return (
    <div>
      <ToggleS>
        <L.FlexCols _gap='0px'>

          {
            data.map(item => (
              <L.FlexRows 
                key={item.id}
                 _padding='12px 16px' 
                 _height='48px' 
                 _items='center'
                 onClick={() => clickHandler(item.name)}>
                <T.Text 
                  _weight={item.checked ? 600 : 400} 
                  _size={15} 
                  _color={item.checked ? "green700" : "gray900"}
                >
                  {item.name}
                </T.Text>
              </L.FlexRows>
            ))
          }
        </L.FlexCols>
      </ToggleS>
    </div>
  )
}
export default InquiryPage