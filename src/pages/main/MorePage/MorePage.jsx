import React from 'react'
import FooterImg from '../../../assets/main/footerlogo.svg'
import BasicHeader from '../../../components/Main/Main/BasicHeader/BasicHeader'
import Avatar from '../../../assets/common/avatar.png'
import {MoreAccountButton,MoreAccountButtonDiv,MoreAccountDiv,MoreAccountImg,MoreAccountProfile,MoreAccountTextDiv,MoreContainer,MoreContainerDiv,MoreDiv,MoreNavBody,AccountBadge,AccountName,Footer,Logo,FooterText} from './MorePageStyle'

function MorePage() {
  return (
    <div>
      <BasicHeader title="더보기"/>
      <MoreNavBody>


        <MoreContainer>
          {/* <MoreLoginDiv>
            <MoreLoginText><p>회원가입 하고</p><p>내 주변 상점을 둘러보세요!</p></MoreLoginText>
            <MoreLoginButton>로그인/회원가입</MoreLoginButton>
          </MoreLoginDiv> */}
          <MoreAccountDiv>
            <MoreAccountProfile>
              <MoreAccountImg  src={Avatar}/>
              <MoreAccountTextDiv>
                <AccountBadge>일반회원</AccountBadge>
                <AccountName>아이덴잇</AccountName>
              </MoreAccountTextDiv>
            </MoreAccountProfile>
            <MoreAccountButtonDiv>
              <MoreAccountButton>회원정보 관리</MoreAccountButton>
              <MoreAccountButton>비즈회원 전환</MoreAccountButton>
            </MoreAccountButtonDiv>
          </MoreAccountDiv>
          
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
            <MoreContainerDiv>고객센터</MoreContainerDiv>
            <MoreContainerDiv>약관 및 정책</MoreContainerDiv>
            <MoreContainerDiv>환경설정</MoreContainerDiv>
            <MoreContainerDiv>공지사항</MoreContainerDiv>
          </MoreDiv>
        </MoreContainer>

      <Footer>
        <Logo src={FooterImg}/>
        <FooterText>
          <span>(주)우리동네</span><br/>
          <span>대표자: 윤원규 / 사업자등록번호: 893-62-00579 / 통신판매신고: 김포마산-1234</span><br/>
          <span>주소: 경기도 김포시 김포한강8로 173-28 108동 103호 / 개인정보관리책임자: 홍길동</span><br/>
          <span>고객센터: 123-456-78912 / 이메일문의: example@email.com</span>
        </FooterText>
      </Footer>
      </MoreNavBody>



    </div>
  )
}

export default MorePage