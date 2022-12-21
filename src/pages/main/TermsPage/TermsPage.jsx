import React from 'react'
import BasicHeader from '../../../components/Main/Main/BasicHeader/BasicHeader'
import {TermsBody,TermsContainer,TermsDiv,TermsTitle,TermsIconStyle} from './TermsPageStyle'
import { ReactComponent as Right } from "../../../assets/main/right.svg";
import { Link } from 'react-router-dom';
function TermsPage() {
  return (
    <div>
      <BasicHeader title="약관 및 정책"/>
      <TermsBody>
        <TermsContainer>
          <TermsDiv>
            <TermsTitle>서비스 이용약관</TermsTitle>
            <Link to="/main/terms/service">
              <TermsIconStyle><Right/></TermsIconStyle>
            </Link>
          </TermsDiv>
          <TermsDiv>
            <TermsTitle>위치기반 서비스 이용약관</TermsTitle>
            <Link to="/main/terms/location">
              <TermsIconStyle><Right/></TermsIconStyle>
            </Link>
          </TermsDiv>
          <TermsDiv>
            <TermsTitle>개인정보 처리방침</TermsTitle>
            <Link to="/main/terms/privacy">
              <TermsIconStyle><Right/></TermsIconStyle>
            </Link>
          </TermsDiv>
        </TermsContainer>
      </TermsBody>
    </div>
  )
}

export default TermsPage