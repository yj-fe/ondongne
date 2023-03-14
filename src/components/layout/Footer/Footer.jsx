import React, { useState } from "react";
import { Footer, FooterText } from "pages/main/MorePage/MorePageStyle";
import { FooterDiv } from "pages/business/BusinessPage/BusinessPageStyle";
import { Down, FooterLogo, ArrowTop } from "components/commonUi/Icon";

function FooterLayout() {
    const [open, isOpen] = useState(true);

    return (
        <FooterDiv>
            <Footer>
                <div className="footer_logo">
                    <FooterLogo />
                    <button type="button" onClick={() => isOpen(!open)}>
                        {open ? (
                            <Down color="#BDBDBD" width={32} height={32} />
                        ) : (
                            <ArrowTop color="#BDBDBD" width={32} height={32} />
                        )}
                    </button>
                </div>
                <FooterText _dp={open}>
                    <span>하이퍼로컬리티</span>
                    <span>대표자: 윤원규 / 사업자등록번호: 893-62-00579</span>
                    <span>주소: 서울시 강서구 등촌동 14-7 1111호</span>
                    <span>개인정보관리책임자: 손종현</span>
                    <span>고객센터: 02-6954-1685</span>
                    <span>이메일문의: cs.hyperlocality@gmail.com</span>
                    <p>Copyright 2023. 온동네마켓 All rights reserved.</p>
                </FooterText>
            </Footer>
        </FooterDiv>
    );
}

export default React.memo(FooterLayout);
