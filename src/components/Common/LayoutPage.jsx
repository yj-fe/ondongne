import React from 'react'
import { BackStyle, LoginNavDiv, LoginNavTitle, MainFooterDiv, TitleStyle } from '../Main/Main/BasicHeader/BasicHeaderStyle'
import { useNavigate } from 'react-router-dom'
import { ReactComponent as Arrow } from "../../assets/login/Arrow.svg";
import { Body, Container, Div } from './LayoutPageStyle'


function LayoutPage({title, to=-1}) {
  const navigate = useNavigate()
  return (
    <div>
{/* 헤더 */}
      <MainFooterDiv>
        <LoginNavDiv>
          <TitleStyle>
            <BackStyle onClick={()=>{ navigate(to)}}>
              <Arrow />
            </BackStyle>
            <LoginNavTitle>{title}</LoginNavTitle>
          </TitleStyle>
        </LoginNavDiv>
      </MainFooterDiv>
{/* 화면꽉차는 배경레이아웃 */}
      {/* <Body>
        <Container>
<Div>

        </Container>

      </Body> */}

    </div>
  )
}

export default LayoutPage