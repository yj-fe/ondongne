import React from 'react'
import BasicHeader from 'components/Main/Main/BasicHeader/BasicHeader'
import {TermsBody,TermsContainer,TermsDiv,TermsTitle,TermsIconStyle} from './TermsPageStyle'
import { ReactComponent as Right } from "assets/main/right.svg";
import { Link } from 'react-router-dom';
function TermsPage() {
  return (
    <div>
      <BasicHeader title="약관 및 정책"/>
      <TermsBody>
        <TermsContainer>
          <Link to="/service/terms/service">
            <TermsDiv>
              <TermsTitle>서비스 이용약관</TermsTitle>
              <TermsIconStyle><Right/></TermsIconStyle>
            </TermsDiv>
          </Link>
          <Link to="/service/terms/location">
            <TermsDiv>
              <TermsTitle>위치기반 서비스 이용약관</TermsTitle>
                <TermsIconStyle><Right/></TermsIconStyle>
            </TermsDiv>
          </Link>
          <Link to="/service/terms/privacy">
            <TermsDiv>
              <TermsTitle>개인정보 처리방침</TermsTitle>
                <TermsIconStyle><Right/></TermsIconStyle>
            </TermsDiv>
          </Link>
        </TermsContainer>
      </TermsBody>
    </div>
  )
}

export default TermsPage