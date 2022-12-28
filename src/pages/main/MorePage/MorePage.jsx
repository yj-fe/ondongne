import React, { useEffect, useState } from 'react'
import FooterImg from 'assets/main/footerlogo.svg'
import BasicHeader from 'components/Main/Main/BasicHeader/BasicHeader'
import { MoreAccountButton, MoreAccountButtonDiv, MoreAccountDiv, MoreAccountImg, MoreAccountProfile, MoreAccountTextDiv, MoreContainer, MoreContainerDiv, MoreDiv, MoreNavBody, AccountBadge, AccountName, Footer, Logo, FooterText, MoreLoginDiv, MoreLoginText, MoreLoginButton, MoreAccountImgBox } from './MorePageStyle'
import { Link, useNavigate } from 'react-router-dom'
import { getMember, logout } from 'service/member'
import { useDispatch, useSelector } from 'react-redux'
import Alert from 'components/commonUi/Alert'
import { authActions } from 'store/slices/auth'
import { client } from 'service'
import Modal, { Body, Container } from 'components/layout/Modal/Modal'
import { AgreementDiv, Button, ModalBody, ModalDiv1, ModalDiv2, ModalOutside, ModalTitle, SpaceBet } from 'components/Main/More/ModalPageStyle'
import { Text } from 'components/commonUi/Text'
import CheckBox from 'components/commonUi/CheckBox'
import CheckBoxTitle from 'components/commonUi/CheckBoxTitle'
import { Line } from '../DetailsPage/DetailsPageStyle'
import { ArrowRight } from 'components/commonUi/Icon'
import { RowDiv } from 'components/Buisness/BusinessManagement/BusinessManagementTabStyle'



import Layout from 'components/layout/Layout/Layout'
import * as L from 'components/commonUi/Layout';
import * as T from 'components/commonUi/Text';
import * as I from 'components/commonUi/Input';
import * as B from 'components/commonUi/Button';
import FooterLayout from 'components/layout/Footer/Footer'


function MorePage() {
  const navigate = useNavigate()
  const [member, setMember] = useState({});
  const auth = useSelector(state => state.auth);
  const dispatch = useDispatch();
  const [alert, setAlert] = useState(null);
  const [coachmark, setCoachmark] = useState(null);
  const [agreementModal, setAgreementModal] = useState(false);

  const memberLogout = async () => {
    const response = await logout();
    if (response.status === 200) {
      dispatch(authActions.logout())
      setAlert({
        title: "로그아웃 성공",
        contents: "로그아웃 되었습니다.",
        buttonText: "확인",
        onButtonClick: () => setAlert(false),
        onOverlayClick: () => setAlert(false),
      })
    } else {
      setAlert({
        title: "로그아웃 실패",
        contents: "다시 한번 시도해주세요.",
        buttonText: "확인",
        onButtonClick: () => setAlert(false),
        onOverlayClick: () => setAlert(false),
      })
    }
  }

  const getMemberProfile = async () => {
    const response = await getMember()
    const { message, data } = response.data;
    if (data) setMember(data);
  }

  useEffect(() => {
    if (auth.isAuthenticated) {
      getMemberProfile()
    }
  }, [auth])


  return (
    <div style={{ position: 'relative' }}>
      <Layout
        title="더보기"
        cart={false}
        bell={false}
        onBackClick={() => navigate('/')}
      >
        <L.Container _padding="0px 0px 8px" >

          {
            auth.isAuthenticated &&
            <MoreAccountDiv>
              <MoreAccountProfile>
                {member.profile && <MoreAccountImg src={member.profile} />}
                {!member.profile && <MoreAccountImgBox />}
                <MoreAccountTextDiv>
                  <AccountBadge>{member.role === 'MEMBER' ? '일반회원' : '비즈회원'}</AccountBadge>
                  <AccountName>{member.nickname}</AccountName>
                </MoreAccountTextDiv>
              </MoreAccountProfile>
              <MoreAccountButtonDiv>
                <Link to="/member/management">
                  <MoreAccountButton>회원정보 관리</MoreAccountButton>
                </Link>
                <MoreAccountButton
                  onClick={() => setCoachmark(true)}
                >비즈회원 전환</MoreAccountButton>
              </MoreAccountButtonDiv>
            </MoreAccountDiv>
          }
          {
            !auth.isAuthenticated &&
            <MoreLoginDiv>
              <MoreLoginText><p>회원가입 하고</p><p>내 주변 상점을 둘러보세요!</p></MoreLoginText>
              <MoreLoginButton onClick={() => navigate('/login')}>로그인/회원가입</MoreLoginButton>
            </MoreLoginDiv>
          }

          <MoreDiv>
            <MoreContainerDiv>My 주문</MoreContainerDiv>
            <Link to="/member/market">
              <MoreContainerDiv>My 단골</MoreContainerDiv>
            </Link>
            <MoreContainerDiv>내가 쓴 리뷰</MoreContainerDiv>
            <Link to="/member/coupon">
              <MoreContainerDiv>쿠폰함</MoreContainerDiv>
            </Link>
          </MoreDiv>
          <MoreDiv>


            <Link to="/service">
              <MoreContainerDiv>고객센터</MoreContainerDiv>
            </Link>
            <Link to="/service/terms">
              <MoreContainerDiv
              >약관 및 정책</MoreContainerDiv>
            </Link>
            <Link to="/setting">
              <MoreContainerDiv>환경설정</MoreContainerDiv>
            </Link>
            <Link to="/notice">
              <MoreContainerDiv>공지사항</MoreContainerDiv>
            </Link>
            {
              auth.isAuthenticated &&
              <MoreContainerDiv onClick={memberLogout}>로그아웃</MoreContainerDiv>
            }
          </MoreDiv>

        </L.Container>

        <FooterLayout />


      </Layout>

      {
        alert &&
        <Alert
          title={alert.title}
          contents={alert.contents}
          buttonText={alert.buttonText}
          onButtonClick={alert.onButtonClick}
          onOverlayClick={alert.onOverlayClick}
        />
      }
      {/* ============= 1. 비즈회원코치모달 ============= */}
      {
        coachmark &&
        <Modal
          setAgreementModal={setAgreementModal}
          closeModel={() => setCoachmark(false)}
        />
      }
      {/* ============= 2. 비즈회원약관동의 ============= */}
      {
        agreementModal &&
        <BusinessAgreementModal />
      }
      {/* ============= 3-4 비즈회원신청페이지 => <BusinessApplication/> ============= */}
    </div>
  )
}

function BusinessAgreementModal() {
  // 체크버튼
  const [requestSave, setRequestSave] = useState(false);
  const [servicerequestSave, setServiceRequestSave] = useState(false);
  const [privrequestSave, setPrivRequestSave] = useState(false);
  const [snsrequestSave, setSnsRequestSave] = useState(false);
  // 버튼 활성화 여부
  const [active, setActive] = useState(false);
  const navigate = useNavigate();

  const allChecked = () => {
    setRequestSave(!requestSave)
    setServiceRequestSave(!servicerequestSave)
    setPrivRequestSave(!privrequestSave)
    setSnsRequestSave(!snsrequestSave)
  }

  useEffect(() => {
    if(servicerequestSave && privrequestSave) {
      setActive(true)
    } else {
      setActive(false)
    }

  }, [servicerequestSave, privrequestSave])

  return (
    <ModalOutside>
      <ModalBody>
        <ModalDiv1 />
        <ModalDiv2>
          <ModalTitle>
            <Text _size={18} _weight={500} _color={'gray900'}><p>비즈회원으로 전환하시려면</p><p>약관동의가 필요합니다.</p></Text>
          </ModalTitle>
        </ModalDiv2>
        <AgreementDiv>

          <CheckBoxTitle
            label="모두 동의합니다"
            name="requestSave"
            checked={requestSave}
            onChange={allChecked}
          />
          <Line />
          <SpaceBet>
            <CheckBox
              label="[필수] 비즈회원 이용약관"
              name="servicerequestSave"
              checked={servicerequestSave}
              onChange={e => { setServiceRequestSave(e.currentTarget.checked) }}
            />
            <ArrowRight />
          </SpaceBet>
          <SpaceBet>
            <CheckBox
              label="[필수] 개인정보 수집 이용 동의"
              name="privrequestSave"
              checked={privrequestSave}
              onChange={e => { setPrivRequestSave(e.currentTarget.checked) }}
            />
            <ArrowRight />
          </SpaceBet>
          <SpaceBet>
            <CheckBox
              label="[선택] 마케팅 수신 동의"
              name="snsrequestSave"
              checked={snsrequestSave}
              onChange={e => { setSnsRequestSave(e.currentTarget.checked) }}
            />
            <ArrowRight />
          </SpaceBet>

          <Button 
            active={active}
            type='button'
            disabled={!active}
            onClick={() => navigate('/business/application')}
          >
            확인
          </Button>



        </AgreementDiv>

      </ModalBody>
    </ModalOutside>
  )
}
export default MorePage