import React from 'react'
import { TermsDiv, TermsTitle, TermsIconStyle } from './TermsPageStyle'
import { ReactComponent as Right } from "assets/main/right.svg";
import { Link } from 'react-router-dom'
import Layout from 'components/layout/Layout/Layout'
import * as L from 'components/commonUi/Layout';

function TermsPage() {
  return (
    <Layout
      title="약관 및 정책"
      cart={false}
      bell={false}
    >
      <L.Container>
        <L.Contents _height='calc(100vh - 68px)'>
          <Link to="/service/terms/service">
            <TermsDiv>
              <TermsTitle>서비스 이용약관</TermsTitle>
              <TermsIconStyle><Right /></TermsIconStyle>
            </TermsDiv>
          </Link>
          <Link to="/service/terms/location">
            <TermsDiv>
              <TermsTitle>위치기반 서비스 이용약관</TermsTitle>
              <TermsIconStyle><Right /></TermsIconStyle>
            </TermsDiv>
          </Link>
          <Link to="/service/terms/privacy">
            <TermsDiv>
              <TermsTitle>개인정보 처리방침</TermsTitle>
              <TermsIconStyle><Right /></TermsIconStyle>
            </TermsDiv>
          </Link>
        </L.Contents>
      </L.Container>
    </Layout>
  )
}

export default TermsPage