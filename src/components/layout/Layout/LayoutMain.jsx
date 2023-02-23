import React from "react";
import PropTypes from "prop-types";

import { S } from "./LayoutStyle";
import MainNav from "components/Main/Main/MainNav/MainNav";
import FloatingUi from "components/commonUi/Floating/FloatingUi";

const LayoutMain = (props) => {
    return (
        <S.Wrapper>
            <MainNav />
            {/* <Header {...props}/> */}
            {/* <Header {...props} itemtitle={itemtitle}/> */}
            <S.Main as="main">
                {/* parent component로 사용할 때: Outlet */}
                {/* { <Outlet /> } */}
                {props.children}
                <FloatingUi />
            </S.Main>
        </S.Wrapper>
    );
};

LayoutMain.props = {
    title: PropTypes.string,
    search: PropTypes.bool,
    bell: PropTypes.bool,
    cart: PropTypes.bool,
    back: PropTypes.bool,
    backArrow: PropTypes.bool,
    titleCenter: PropTypes.bool,
    onBackClick: PropTypes.func,
    backPath: PropTypes.string,
};

export default LayoutMain;
