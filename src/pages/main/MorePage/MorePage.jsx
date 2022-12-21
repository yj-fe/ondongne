import React, { useEffect, useState } from 'react'
import FooterImg from '../../../assets/main/footerlogo.svg'
import BasicHeader from '../../../components/Main/Main/BasicHeader/BasicHeader'
import { MoreAccountButton, MoreAccountButtonDiv, MoreAccountDiv, MoreAccountImg, MoreAccountProfile, MoreAccountTextDiv, MoreContainer, MoreContainerDiv, MoreDiv, MoreNavBody, AccountBadge, AccountName, Footer, Logo, FooterText, MoreLoginDiv, MoreLoginText, MoreLoginButton, MoreAccountImgBox } from './MorePageStyle'
import { Link, useNavigate } from 'react-router-dom'
import { getMember } from '../../../service/member'
import { useSelector } from 'react-redux'

function MorePage() {
  const navigate = useNavigate()
  const [member, setMember] = useState({});
  const auth = useSelector(state => state.auth);

  const getMemberProfile = async () => {
    await getMember()
      .then(response => {
        const {data, message} = response.data;
        setMember(data);
      })
  }

  useEffect(() => {
    if(auth.isAuthenticated) {
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
                <MoreAccountButton>비즈회원 전환</MoreAccountButton>
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
          </MoreDiv>
        </MoreContainer>

        <Footer>
          <Logo src={FooterImg} />
          <FooterText>
            <span>하이퍼로컬리티</span><br />
            <span>대표자: 윤원규 / 사업자등록번호: 893-62-00579 / 통신판매신고: 김포마산-1234</span><br />
            <span>주소: 경기도 김포시 김포한강8로 173-28 108동 103호 / 개인정보관리책임자: 홍길동</span><br />
            <span>고객센터: 123-456-78912 / 이메일문의: example@email.com</span>
          </FooterText>
        </Footer>
      </MoreNavBody>



    </div>
  )
}

export default MorePage