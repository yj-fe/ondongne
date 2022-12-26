import React, { useEffect, useState } from 'react'
import FooterImg from '../../../assets/main/footerlogo.svg'
import BasicHeader from '../../../components/Main/Main/BasicHeader/BasicHeader'
import { MoreAccountButton, MoreAccountButtonDiv, MoreAccountDiv, MoreAccountImg, MoreAccountProfile, MoreAccountTextDiv, MoreContainer, MoreContainerDiv, MoreDiv, MoreNavBody, AccountBadge, AccountName, Footer, Logo, FooterText, MoreLoginDiv, MoreLoginText, MoreLoginButton, MoreAccountImgBox } from './MorePageStyle'
import { Link, useNavigate } from 'react-router-dom'
import { getMember, logout } from '../../../service/member'
import { useDispatch, useSelector } from 'react-redux'
import Alert from '../../../components/commonUi/Alert'
import { authActions } from '../../../store/slices/auth'
import { client } from '../../../service'
import Modal, { Body, Container } from '../../../components/layout/Modal/Modal'
import { AgreementDiv, Button, ModalBody, ModalDiv1, ModalDiv2, ModalOutside, ModalTitle, SpaceBet } from '../../../components/Main/More/ModalPageStyle'
import { Text } from '../../../components/commonUi/Text'
import CheckBox from '../../../components/commonUi/CheckBox'
import CheckBoxTitle from '../../../components/commonUi/CheckBoxTitle'
import { Line } from '../DetailsPage/DetailsPageStyle'
import { ArrowRight } from '../../../components/commonUi/Icon'
import { RowDiv } from '../../../components/Buisness/BusinessManagement/BusinessManagementTabStyle'

function MorePage() {
  const navigate = useNavigate()
  const [member, setMember] = useState({});
  const auth = useSelector(state => state.auth);
  const dispatch = useDispatch();
  const [alert, setAlert] = useState(null);
  const [coachmark, setCoachmark] = useState(null);
  const [agreementModal, setAgreementModal] = useState(false);

  const memberLogout = async () => {
    await logout()
      .then(response => {
        if (response.status === 200) {
          dispatch(authActions.logout())
          client.defaults.headers.common['Authorization'] = '';
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
      })

  }

  const getMemberProfile = async () => {
    await getMember()
      .then(response => {
        const { data, message } = response.data;
        setMember(data);
      })
  }

  useEffect(() => {
    if (auth.isAuthenticated) {
      getMemberProfile()
    }
  }, [auth])

  return (
    <div>
      <BasicHeader title="더보기" />
      <MoreNavBody>


        <MoreContainer>
          {
            auth.isAuthenticated &&
            <MoreAccountDiv>
              <MoreAccountProfile>
                {member.profile && <MoreAccountImg src={member.profile} />}
                {!member.profile && <MoreAccountImgBox />}
                <MoreAccountTextDiv>
                  <AccountBadge>{member.role == 'MEMBER' ? '일반회원' : '비즈회원'}</AccountBadge>
                  <AccountName>{member.nickname}</AccountName>
                </MoreAccountTextDiv>
              </MoreAccountProfile>
              <MoreAccountButtonDiv>
                <MoreAccountButton>회원정보 관리</MoreAccountButton>
                <MoreAccountButton
                  onClick={()=>setCoachmark(true)}
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

        </MoreContainer>

        <MoreContainer>
          <MoreDiv>
            <MoreContainerDiv>My 주문</MoreContainerDiv>
            <MoreContainerDiv>My 단골</MoreContainerDiv>
            <MoreContainerDiv>내가 쓴 리뷰</MoreContainerDiv>
            <MoreContainerDiv>쿠폰함</MoreContainerDiv>
          </MoreDiv>
        </MoreContainer>

        <MoreContainer>
          <MoreDiv>
            <Link to="/service">
              <MoreContainerDiv>고객센터</MoreContainerDiv>
            </Link>
            <Link to="/terms">
              <MoreContainerDiv
              >약관 및 정책</MoreContainerDiv>
            </Link>
            <Link to="/configuration">
              <MoreContainerDiv>환경설정</MoreContainerDiv>
            </Link>
            <MoreContainerDiv>공지사항</MoreContainerDiv>
            {
              auth.isAuthenticated &&
              <MoreContainerDiv onClick={memberLogout}>로그아웃</MoreContainerDiv>
            }
          </MoreDiv>
        </MoreContainer>

        <Footer>
          <Logo src={FooterImg} />
          <FooterText>
            <span>하이퍼로컬리티</span><br />
            {/* <span>대표자: 윤원규 / 사업자등록번호: 893-62-00579 / 통신판매신고: 김포마산-1234</span><br />
            <span>주소: 경기도 김포시 김포한강8로 173-28 108동 103호 / 개인정보관리책임자: 홍길동</span><br />
            <span>고객센터: 123-456-78912 / 이메일문의: example@email.com</span> */}
            <span>대표자: 윤원규 / 사업자등록번호: 893-62-00579</span><br/>
            <span>주소: 경기도 김포시 김포한강8로 173-28 108동 103호 / 개인정보관리책임자: 윤원규</span><br/>
            <span>고객센터: 010-2481-2002 / 이메일문의: pay.hyperlocality@gmail.com</span>
          </FooterText>
        </Footer>
      </MoreNavBody>

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
        <Modal/>
      }
{/* ============= 2. 비즈회원약관동의 ============= */}
      {
        agreementModal &&
        <BusinessAgreementModal/>
      }
{/* ============= 3-4 비즈회원신청페이지 => <BusinessApplication/> ============= */}
    </div>
  )
}

function BusinessAgreementModal (){
  // 체크버튼
  const [requestSave, setRequestSave] = useState(false);
  const [servicerequestSave, setServiceRequestSave] = useState(false);
  const [privrequestSave, setPrivRequestSave] = useState(false);
  const [snsrequestSave, setSnsRequestSave] = useState(false);

  return(
    <div>
      <ModalOutside>
        <ModalBody>
          <ModalDiv1/>
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
            onChange={e => {setRequestSave(e.currentTarget.checked)}}
          />
          <Line/>
          <SpaceBet>
            <CheckBox
              label="[필수] 비즈회원 이용약관"
              name="servicerequestSave"
              checked={servicerequestSave}
              onChange={e => {setServiceRequestSave(e.currentTarget.checked)}}
            />
            <ArrowRight/>
          </SpaceBet>
          <SpaceBet>
            <CheckBox
              label="[필수] 개인정보 수집 이용 동의"
              name="privrequestSave"
              checked={privrequestSave}
              onChange={e => {setPrivRequestSave(e.currentTarget.checked)}}
            />
            <ArrowRight/>
          </SpaceBet>
          <SpaceBet>
            <CheckBox
              label="[선택] 마케팅 수신 동의"
              name="snsrequestSave"
              checked={snsrequestSave}
              onChange={e => {setSnsRequestSave(e.currentTarget.checked)}}
            />
            <ArrowRight/>
          </SpaceBet>

          <Button>확인</Button>



          </AgreementDiv>
          
        </ModalBody>
      </ModalOutside>
    </div>
  )
}
export default MorePage