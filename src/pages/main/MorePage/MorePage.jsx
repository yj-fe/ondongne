import React, { useEffect, useState } from 'react'
import { MoreAccountButton, MoreAccountButtonDiv, MoreAccountDiv, MoreAccountImg, MoreAccountProfile, MoreAccountTextDiv, MoreContainerDiv, MoreDiv, AccountBadge, AccountName, MoreLoginDiv, MoreLoginText, MoreLoginButton, MoreAccountImgBox, Sticky } from './MorePageStyle'
import { Link, useNavigate } from 'react-router-dom'
import { getMember } from 'service/member'
import { useSelector } from 'react-redux'
import Alert from 'components/commonUi/Alert'
import Modal from 'components/layout/Modal/Modal'
import { AgreementDiv, Button, ModalBody, ModalDiv1, ModalDiv2, ModalOutside, SpaceBet } from 'components/Main/More/ModalPageStyle'
import 'pages/main/MorePage/MorePage.css'
import { Text } from 'components/commonUi/Text'
import CheckBox from 'components/commonUi/CheckBox'
import CheckBoxTitle from 'components/commonUi/CheckBoxTitle'
import { Line } from '../DetailsPage/DetailsPageStyle'
import { ArrowRight, Bubble, Close, Switch, SwitchC } from 'components/commonUi/Icon'
import * as L from 'components/commonUi/Layout';
import * as T from 'components/commonUi/Text';
import FooterLayout from 'components/layout/Footer/Footer'
import { getBizMember } from 'service/biz'
import Layout from 'components/layout/Layout/Layout'
import Confirm from 'components/commonUi/Confirm'
import TermsModal from 'components/service/TermsPage/TermsModal'
import { AbsoluteDiv, RelativDiv } from 'components/layout/Img/ImgSizeLayout'
import defaultProfile from 'assets/common/Profile.png'
import { useCookies } from "react-cookie";
import moment from "moment";


function MorePage() {
  const navigate = useNavigate()
  const [member, setMember] = useState({});
  const auth = useSelector(state => state.auth);
  const [alert, setAlert] = useState(null);
  const [confirm, setConfirm] = useState(false);
  const [coachmark, setCoachmark] = useState(null);
  const [agreementModal, setAgreementModal] = useState(false);

  const COOKIE_BUBBLE_KEY = "bubbleNeverWatch";
  const [cookiesBubble, setCookieBubble] = useCookies([COOKIE_BUBBLE_KEY]);
  // 2차범위
  const [checkMarketing, setCheckMarketing] = useState(false);
  const [checkPush, setCheckPush] = useState(false);

  const getMemberProfile = async () => {
    const response = await getMember()
    const { message, data } = response.data;
    if (data) setMember(data);
  }

  const goToMember = () => {
    navigate('/member/management');
  }

  // 다시보지않기 이벤트
  const close = () => {
    const decade = moment();
    decade.add(7, 'd');  //일주일보지않기
    setCookieBubble(COOKIE_BUBBLE_KEY, 'true', {
      path: '/',
      expires: decade.toDate(),
    });
  };

  const bizMember = async () => {
    const response = await getBizMember();
    const { data } = response.data;

    // 비즈 신청하기
    if (!data) {
      return setCoachmark(true)
    }

    // 비즈 심사 대기 중
    if (!data.bizStatus) {
      return setAlert({
        title: "비즈 심사 대기 중입니다.",
        contents: "관리자 검토 후 2영업일 이내로\n승인 처리 예정입니다.\n승인이 완료되면 알림으로 알려드립니다.",
        buttonText: "확인",
        onButtonClick: () => setAlert(false),
        onOverlayClick: () => setAlert(false),
      })
    }

    // 비즈 홈
    if (data.bizStatus) {
      return navigate("/business");
    }

  }

  // 회원 권한 확인 후 페이지 이동
  const memberRoleRouter = (to) => {
    if (!auth.isAuthenticated) {
      return setConfirm(true);
    }
    navigate(to);
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
        <L.Container _cursor='default' _height="calc(100vh - 60px)">
          {
            auth.isAuthenticated &&
            <MoreAccountDiv>
              <MoreAccountProfile>
                <L.FlexRows _width='calc(100% - 200px)' _gap={16} _content='flex-start'>
                  <MoreAccountImg src={member.profile ?? defaultProfile} />
                  <MoreAccountTextDiv>
                    <AccountBadge>{member.role === 'MEMBER' ? '일반회원' : '비즈회원'}</AccountBadge>
                    <AccountName>{member.nickname}</AccountName>
                  </MoreAccountTextDiv>
                </L.FlexRows>

                {/*====== 비즈회원전환 말풍선 ======*/}
                {
                  cookiesBubble[COOKIE_BUBBLE_KEY] ? null :
                    <Sticky>
                      <RelativDiv _width={199} _height={100} _widthmedia='170px' >
                        <Bubble />
                        <AbsoluteDiv
                          _pd='6px' _width={20} _height={20} _right='9%' _top='10%' _rightmedia='-10%'
                          onClick={close}
                        >
                          <T.Text _size={13} _weight={600} _color='white' _align='center'>X</T.Text>
                        </AbsoluteDiv>
                        <AbsoluteDiv _width={190} _height={80} _left='30px'>
                          <T.Text _size={12} _weight={600} _color='white' _align='center'><p>상품 판매가 가능한<p></p>비즈 회원으로 전환해 보세요!</p></T.Text>
                        </AbsoluteDiv>
                      </RelativDiv>
                    </Sticky>
                }
              </MoreAccountProfile>

              <MoreAccountButtonDiv>
                <MoreAccountButton onClick={goToMember}>회원정보 관리</MoreAccountButton>
                <MoreAccountButton
                  onClick={bizMember}
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
            <MoreContainerDiv onClick={() => memberRoleRouter("/order/all")}>My 주문</MoreContainerDiv>
            <MoreContainerDiv onClick={() => memberRoleRouter("/member/market")}>My 단골</MoreContainerDiv>
            <MoreContainerDiv onClick={() => memberRoleRouter("/member/review")}>내가 쓴 리뷰</MoreContainerDiv>
            {/* <MoreContainerDiv onClick={() => memberRoleRouter("/member/coupon")}>쿠폰함</MoreContainerDiv> */}
          </MoreDiv>
          <MoreDiv>


            {/*  2차범위
              <MoreContainerDiv>
                <L.FlexRows  _content='space-between' onClick={() => setCheckMarketing(!checkMarketing)}>
                  <p>마케팅 활용 동의</p>
                  { checkMarketing ?  <SwitchC/> : <Switch/> }
                </L.FlexRows>
              </MoreContainerDiv>
              <MoreContainerDiv>
                <L.FlexRows  _content='space-between' onClick={() => setCheckPush(!checkPush)}>
                  <p>Push 수신 동의</p>
                  { checkPush ?  <SwitchC/> : <Switch/> }
                </L.FlexRows>
              </MoreContainerDiv> */}

            <Link to="/service">
              <MoreContainerDiv>고객센터</MoreContainerDiv>
            </Link>
            <Link to="/notice">
              <MoreContainerDiv>공지사항</MoreContainerDiv>
            </Link>
            <Link to="/service/terms">
              <MoreContainerDiv>약관 및 정책</MoreContainerDiv>
            </Link>
            {/* <Link to="/setting">
              <MoreContainerDiv>환경설정</MoreContainerDiv>
            </Link> */}
            {/* <L.FlexRows _height='52px' _content="space-between" _items="center" _padding="0px">
              <T.Text _weight={500} _size={16} _color="gray900">앱 버전 정보</T.Text>
              <T.Text _weight={400} _size={14} _color="gray800">1.1.1</T.Text>
            </L.FlexRows> */}
          </MoreDiv>

          <FooterLayout />
        </L.Container>

      </Layout>

      {
        confirm &&
        <Confirm
          contents="로그인 후 이용가능합니다. 로그인 페이지로 이동하시겠습니까?"
          confirmText="네"
          cancelText="아니오"
          onConfirmClick={() => { navigate('/login') }}
          onCancelClick={() => {
            setConfirm(false)
          }}
        />
      }
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
        <BusinessAgreementModal closeModel={() => setAgreementModal(false)} />
      }
      {/* ============= 3-4 비즈회원신청페이지 => <BusinessApplication/> ============= */}
    </div>
  )
}

function BusinessAgreementModal({ closeModel }) {
  const [service, setService] = useState(null);
  // 체크버튼
  const [requestSave, setRequestSave] = useState(false);
  const [servicerequestSave, setServiceRequestSave] = useState(false);
  const [privrequestSave, setPrivRequestSave] = useState(false);
  const [snsrequestSave, setSnsRequestSave] = useState(false);

  // 버튼 활성화 여부
  const [active, setActive] = useState(false);
  const navigate = useNavigate();


  const allChecked = () => {
    if (requestSave) {
      setRequestSave(false)
      setServiceRequestSave(false)
      setPrivRequestSave(false)
      setSnsRequestSave(false)
    } else {
      setRequestSave(true)
      setServiceRequestSave(true)
      setPrivRequestSave(true)
      setSnsRequestSave(true)
    }
  }

  useEffect(() => {
    if (servicerequestSave && privrequestSave) {
      setActive(true)
    } else {
      setActive(false)
    }

  }, [servicerequestSave, privrequestSave])

  return (
    <ModalOutside
    // onClick={closeModel}
    >
      {
        service === null &&
        <ModalBody>
          <ModalDiv1 />
          <ModalDiv2>
            <L.FlexRows _padding='0 24px' _content='space-between' _bg='#fff'>
              <Text _size={18} _weight={500} _color={'gray900'}><p>비즈회원으로 전환하시려면</p><p>약관동의가 필요합니다.</p></Text>
              <button onClick={closeModel}>
                <Close />
              </button>
            </L.FlexRows>
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
              <button type='button' onClick={() => setService(0)}>
                <ArrowRight />
              </button>
            </SpaceBet>
            <SpaceBet>
              <CheckBox
                label="[필수] 개인정보 수집 이용 동의"
                name="privrequestSave"
                checked={privrequestSave}
                onChange={e => { setPrivRequestSave(e.currentTarget.checked) }}
              />
              <button type='button' onClick={() => setService(1)}>
                <ArrowRight />
              </button>
            </SpaceBet>
            <SpaceBet>
              <CheckBox
                label="[선택] 마케팅 활용 동의"
                name="snsrequestSave"
                checked={snsrequestSave}
                onChange={e => { setSnsRequestSave(e.currentTarget.checked) }}
              />
              <button type='button' onClick={() => setService(2)}>
                <ArrowRight />
              </button>
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
      }
      {
        service === 0 &&
        <TermsModal
          type={"USE"}
          closeModel={() => setService(null)} />
      }
      {
        service === 1 &&
        <TermsModal
          type={"PRIVACY"}
          closeModel={() => setService(null)}
        />
      }
      {
        service === 2 &&
        <TermsModal
          type={"MARKETING"}
          closeModel={() => setService(null)}
        />
      }
    </ModalOutside>
  )
}



export default MorePage