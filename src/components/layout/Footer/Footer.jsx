import React from 'react'
import {  Footer, FooterText,} from 'pages/main/MorePage/MorePageStyle'
import * as L from 'components/commonUi/Layout';
import { FooterDiv } from 'pages/business/BusinessPage/BusinessPageStyle';
import { FooterLogo } from 'components/commonUi/Icon';
import { ImgSizeLayout } from '../Img/ImgSizeLayout';


function FooterLayout() {
  return (
    <div>
      <FooterDiv>
        <Footer>
<div>
          <FooterLogo/>
</div>

          <FooterText>
            <span>하이퍼로컬리티</span><br />
            <span>대표자: 윤원규 / 사업자등록번호: 893-62-00579</span><br/>
            <span>주소: 경기도 김포시 김포한강8로 173-28 108동 103호 / 개인정보관리책임자: 윤원규</span><br/>
            <span>고객센터: 010-2481-2002 / 이메일문의: pay.hyperlocality@gmail.com</span>
          </FooterText>
        </Footer>
        </FooterDiv>
    </div>
  )
}

export default FooterLayout