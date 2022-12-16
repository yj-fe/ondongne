import React from 'react'
import styled from 'styled-components'
import FooterImg from '../assets/main/footerlogo.svg'
import BasicHeader from '../components/Main/BasicHeader'
import Avatar from '../assets/common/avatar.png'

const MoreNavBody = styled.div`
  margin-top: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #E0E0E0;
  flex-direction: column;
  gap: 8px;
  padding-bottom: 56px;
`
const MoreContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #6e6868;
  width: 728px;
  height: auto;
  /* margin-top: 60px; */
  padding: 0px;

  > div {
    /* max-width: 728px; */
    width: 100%;

    @media only screen and (max-width: 728px) { 
      width: 100%;
    }
  }
`
const MoreLoginDiv = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 20px;
  gap: 24px;
  width: 728px;
  height: auto;
  background: #FFFFFF;
  border-bottom: 1px solid #EEEEEE;
`
const MoreAccountDiv = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 20px;
  gap: 24px;
  width: 728px;
  height: auto;
  background: #FFFFFF;
  border-bottom: 1px solid #EEEEEE;
`
const MoreAccountProfile = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px;
  gap: 16px;

  width: 688px;
  height: 52px;
`
const MoreAccountImg = styled.img`
width: 52px;
height: 52px;
border-radius: 50%;
`
const MoreAccountTextDiv = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
padding: 0px;
gap: 4px;

width: auto;
height: 52px;
`
const AccountBadge = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 2px 6px;
  gap: 4px;
  width: 54px;
  height: 22px;
  background: #E1F3F2;
  border-radius: 4px;
  font-weight: 600;
  font-size: 12px;
  line-height: 18px;
  color: #0B806F;
`
const AccountName = styled.p`
  font-weight: 600;
  font-size: 18px;
  line-height: 26px;
  color: #212121;
`
const MoreAccountButtonDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0px;
  gap: 12px;

  width: 688px;
  height: 44px;
`
const MoreAccountButton = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 4px;
  gap: 4px;
  width: 338px;
  height: 44px;
  background: #F5F5F5;
  border-radius: 99px;
  font-weight: 500;
  font-size: 15px;
  line-height: 20px;
  text-align: center;
  color: #424242;
`
const MoreLoginText = styled.p`
  width: 688px;
  font-weight: 400;
  font-size: 18px;
  line-height: 26px;
  text-align: center;
  color: #212121;
`
const MoreLoginButton = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 4px;
  gap: 4px;
  width: 688px;
  height: 52px;
  background: #0B806F;
  border-radius: 4px;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  text-align: center;
  color: #FFFFFF;
`

const MoreDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 20px;
  width: 728px;
  height: auto;
  background: #FFFFFF;
`
const MoreContainerDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 16px 0px;
  width: 688px;
  height: 56px;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  text-align: center;
  color: #212121;
`
const Logo = styled.img`
  width: 72px;
  height: 32px;
`
const Footer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  width: 728px;
  height: 156px;
  padding: 20px;
  gap: 12px;
  
  > div {
    max-width: 728px;
    width: 100%;

    @media only screen and (max-width: 728px) { 
      width: 100vw;
    }
  }
`
const FooterText = styled.div`
  font-weight: 500;
  font-size: 11px;
  line-height: 18px;
  color: #BDBDBD;
`

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