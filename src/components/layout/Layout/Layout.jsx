import React from "react";
import PropTypes from "prop-types";
import Header from "../Header/Header";
import { S } from "./LayoutStyle";
import FloatingUi from "components/commonUi/Floating/FloatingUi";

const Layout = (props) => {
    return (
        <S.Wrapper>
            <Header {...props} />
            <S.Main as="main">
                {props.children}
                {props.floating && <FloatingUi footer={props.footer} />}
            </S.Main>
        </S.Wrapper>
    );
};

Layout.defaultProps = {
    floating: true,
    footer: false,
};

Layout.props = {
    title: PropTypes.string,
    search: PropTypes.bool,
    bell: PropTypes.bool,
    cart: PropTypes.bool,
    back: PropTypes.bool,
    completed: PropTypes.bool,
    floating: PropTypes.bool,
    backArrow: PropTypes.bool,
    titleCenter: PropTypes.bool,
    onBackClick: PropTypes.func,
    backPath: PropTypes.string,
    bottom: PropTypes.string,
    footer: PropTypes.bool,
};

export default Layout;
