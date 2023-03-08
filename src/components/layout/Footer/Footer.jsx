import React from "react";
import { Footer, FooterText } from "pages/main/MorePage/MorePageStyle";
import { FooterDiv } from "pages/business/BusinessPage/BusinessPageStyle";
import { FooterLogo } from "components/commonUi/Icon";

function FooterLayout() {
    return (
        <FooterDiv>
            <Footer>
                <div>
                    <FooterLogo />
                </div>
                <FooterText>
                    <span>하이퍼로컬리티</span>
                    <br />
                    <span>대표자: 윤원규 / 사업자등록번호: 893-62-00579</span>
                    <br />
                    <span>주소: 서울시 강서구 등촌동 14-7 1111호</span>
                    <br />
                    <span>개인정보관리책임자: 손종현</span>
                    <br />
                    <span>고객센터: 02-6954-1685</span>
                    <br />
                    <span>이메일문의: cs.hyperlocality@gmail.com</span>
                </FooterText>
            </Footer>
        </FooterDiv>
    );
}

export default FooterLayout;
