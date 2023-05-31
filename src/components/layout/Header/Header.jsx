import React, { useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import PropTypes from "prop-types";
import {
    ArrowLeft_tail,
    ArrowLeft,
    More,
    Bell,
} from "components/commonUi/Icon";
import { useNavigate } from "react-router-dom";
import Cart from "assets/icons/utils/Cart.svg";
import Share from "assets/icons/utils/Share.svg";
import { ReactComponent as Home } from "assets/hearderHome.svg";
import { S } from "./HeaderStyle";
import { MoreStyle } from "pages/main/DetailsPage/DetailsPageStyle";
import ModalMorePage from "components/Main/More/ModalMorePage";
import ModalShare from "components/commonUi/ModalShare";
import { Text } from "components/commonUi/Text";
import { isMobile, isAndroid } from "react-device-detect";
import { ShareAndroid } from "components/share/share";
import ShareMobile from "components/share/share";
import ReportAlert from "components/commonUi/ReportAlert";
import { Search } from "./../../commonUi/Icon";

const Header = ({
    title = "title",
    description = "",
    img = "img",
    bell = false,
    cart = false,
    back = true,
    search = false,
    more = false,
    completed = false,
    share = false,
    backArrow = true,
    bottom = "",
    ...props
}) => {
    const navigate = useNavigate();
    const location = useLocation();
    const history = window.history;
    const { id } = useParams();
    const [report, setReport] = useState(false);

    /* ====================
        click action or path or prev url
    ==================== */
    const handleBackClick = (e) => {
        e.preventDefault();
        if (props.onBackClick) {
            props.onBackClick();
        } else {
            navigate(props.backPath || -1);
        }
    };

    const [modal, setModal] = useState(false);
    const [shareModal, setShareModal] = useState(false);
    const ShowMoreModal = () => {
        setModal(!modal);
    };
    const PropsModal = () => {
        setModal(!modal);
    };
    const ShowShareModal = () => {
        setShareModal(!shareModal);
    };
    const getUserAgent = () => {
        var userAgent = navigator.userAgent;
        return userAgent.indexOf("APP_ANDROID") > -1;
    };

    return (
        <S.Header _bbot={bottom}>
            <S.Inner>
                <S.Block>
                    {back && (
                        <S.UtilBtn
                            onClick={
                                history.length === 1
                                    ? () => navigate("/")
                                    : handleBackClick
                            }>
                            {history.length === 1 ? (
                                <Home fill={"#333333"} />
                            ) : backArrow ? (
                                <ArrowLeft_tail />
                            ) : (
                                <ArrowLeft />
                            )}
                        </S.UtilBtn>
                    )}
                    {title && <S.Title>{title}</S.Title>}
                </S.Block>
                <S.Block>
                    {search && (
                        <S.UtilBtn as={Link} to="/search/detailpage">
                            <Search width={24} height={24} />
                        </S.UtilBtn>
                    )}
                    {bell && (
                        <S.UtilBtn as={Link} to="/member/news">
                            <Bell />
                        </S.UtilBtn>
                    )}
                    {share && (
                        <S.UtilBtn
                            onClick={
                                getUserAgent()
                                    ? () =>
                                          ShareAndroid(
                                              title,
                                              description,
                                              window.location.href
                                          )
                                    : isMobile
                                    ? () =>
                                          ShareMobile({
                                              title,
                                              text: description,
                                              url: window.location.href,
                                          })
                                    : ShowShareModal
                            }>
                            <img src={Share} alt="공유" />
                        </S.UtilBtn>
                    )}
                    {cart && (
                        <S.UtilBtn as={Link} to="/cart">
                            <img src={Cart} alt="장바구니" />
                        </S.UtilBtn>
                    )}
                    {more && (
                        <MoreStyle type="button" onClick={ShowMoreModal}>
                            <More />
                        </MoreStyle>
                    )}
                    {completed && (
                        <S.UtilBtn
                            _displaymedia="none"
                            _width="30px"
                            as={Link}
                            to="/">
                            <Text _size={15} _weight={500} _color="green700">
                                {" "}
                                완료
                            </Text>
                        </S.UtilBtn>
                    )}
                </S.Block>
            </S.Inner>
            {modal && (
                <ModalMorePage
                    PropsModal={PropsModal}
                    report={() => setReport(true)}
                />
            )}
            {shareModal && (
                <ModalShare
                    title="공유하기"
                    ShowShareModal={ShowShareModal}
                    itemName={title}
                    description={description}
                    img={img}
                />
            )}
            {report && (
                <ReportAlert
                    onOverlayClick={() => setReport(null)}
                    onCloseClick={() => setReport(null)}
                    id={id}
                    type={
                        location.pathname.includes("market") ? "STORE" : "ITEM"
                    }
                />
            )}
        </S.Header>
    );
};

Header.propTypes = {
    title: PropTypes.string,
    bell: PropTypes.bool,
    search: PropTypes.bool,
    share: PropTypes.bool,
    more: PropTypes.bool,
    completed: PropTypes.bool,
    cart: PropTypes.bool,
    back: PropTypes.bool,
    backArrow: PropTypes.bool,
    titleCenter: PropTypes.bool,
    onBackClick: PropTypes.func,
    backPath: PropTypes.string,
};

export default Header;
