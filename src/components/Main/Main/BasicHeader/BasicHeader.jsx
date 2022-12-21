import React from 'react'
import { ReactComponent as Arrow } from "../../../../assets/login/Arrow.svg";
import { useNavigate } from 'react-router-dom'

import {MainFooterDiv,LoginNavDiv,TitleStyle,BackStyle,LoginNavTitle} from './BasicHeaderStyle'

function BasicHeader({title, to=-1}) {
  const navigate = useNavigate()

  return (
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
  )
}

export default BasicHeader

