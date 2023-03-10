import React, { useEffect, useState } from "react";
import {
    MoreAccountButton,
    MoreAccountButtonDiv,
    MoreAccountDiv,
    MoreAccountImg,
    MoreAccountProfile,
    MoreAccountTextDiv,
    MoreContainerDiv,
    MoreDiv,
    AccountBadge,
    AccountName,
    MoreLoginDiv,
    MoreLoginText,
    MoreLoginButton,
} from "./MorePageStyle";
import { Link, useNavigate } from "react-router-dom";
import { getMember, memberAgreeStatusChange } from "service/member";
import { useSelector } from "react-redux";
import Alert from "components/commonUi/Alert";
import "pages/main/MorePage/MorePage.css";
import { SwitchC, Switch } from "components/commonUi/Icon";
import * as L from "components/commonUi/Layout";
import * as T from "components/commonUi/Text";
import FooterLayout from "components/layout/Footer/Footer";
import { getBizMember } from "service/biz";
import Layout from "components/layout/Layout/Layout";
import Confirm from "components/commonUi/Confirm";
import defaultProfile from "assets/common/Profile.png";
import BubbleModal from "./BubbleModal";
import BizSignupForm from "components/BizSignup/BizSignupForm";

function MorePage() {
    const navigate = useNavigate();
    const [member, setMember] = useState({});
    const auth = useSelector((state) => state.auth);
    const [alert, setAlert] = useState(null);
    const [confirm, setConfirm] = useState(false);
    const [bizModal, setBizModal] = useState(false);

    const getMemberProfile = async () => {
        const response = await getMember();
        const { data } = response.data;
        if (data) setMember(data);
    };

    const memberStatusChange = async (key, value) => {
        const response = await memberAgreeStatusChange(key, value);
        if (response && response.data) {
            getMemberProfile();
        }
    };

    const goToMember = () => {
        navigate("/member/management");
    };

    const bizMember = async () => {
        const response = await getBizMember();
        const { data } = response.data;

        // ?????? ????????????
        if (!data) {
            return setBizModal(true);
        }

        // ?????? ?????? ?????? ???
        if (data.bizStatus === 0) {
            return setAlert({
                title: "?????? ?????? ?????? ????????????.",
                contents:
                    "????????? ?????? ??? 2????????? ?????????\n?????? ?????? ???????????????.\n????????? ???????????? ???????????? ??????????????????.",
                buttonText: "??????",
                onButtonClick: () => setAlert(false),
                onOverlayClick: () => setAlert(false),
            });
        }

        // ?????? ?????? ??????
        if (data.bizStatus === -1) {
            return setAlert({
                title: "????????? ?????????????????????.",
                contents: "????????? ????????? 1:1????????? ??????????????????.",
                buttonText: "??????",
                onButtonClick: () => setAlert(false),
                onOverlayClick: () => setAlert(false),
            });
        }

        // ?????? ???
        if (data.bizStatus === 1) {
            return navigate("/business");
        }
    };

    // ?????? ?????? ?????? ??? ????????? ??????
    const memberRoleRouter = (to) => {
        if (!auth.isAuthenticated) {
            return setConfirm(true);
        }
        navigate(to);
    };

    useEffect(() => {
        if (auth.isAuthenticated) {
            getMemberProfile();
        }
    }, [auth]);

    return (
        <div style={{ position: "relative" }}>
            <Layout
                title="?????????"
                cart={false}
                bell={false}
                onBackClick={() => navigate("/")}
            >
                <L.Container _cursor="default">
                    {auth.isAuthenticated && (
                        <MoreAccountDiv>
                            <MoreAccountProfile>
                                <L.FlexRows _gap={16} _content="flex-start">
                                    <MoreAccountImg
                                        src={member.profile ?? defaultProfile}
                                    />
                                    <MoreAccountTextDiv>
                                        <AccountBadge>
                                            {member.role === "MEMBER"
                                                ? "????????????"
                                                : "????????????"}
                                        </AccountBadge>
                                        <AccountName>
                                            {member.nickname}
                                        </AccountName>
                                    </MoreAccountTextDiv>
                                </L.FlexRows>
                                <BubbleModal />
                            </MoreAccountProfile>

                            <MoreAccountButtonDiv>
                                <MoreAccountButton
                                    type="button"
                                    onClick={goToMember}
                                >
                                    ???????????? ??????
                                </MoreAccountButton>
                                <MoreAccountButton
                                    type="button"
                                    onClick={bizMember}
                                >
                                    ???????????? ??????
                                </MoreAccountButton>
                            </MoreAccountButtonDiv>
                        </MoreAccountDiv>
                    )}
                    {!auth.isAuthenticated && (
                        <MoreLoginDiv>
                            <MoreLoginText>
                                <p>???????????? ??????</p>
                                <p>??? ?????? ????????? ???????????????!</p>
                            </MoreLoginText>
                            <MoreLoginButton onClick={() => navigate("/login")}>
                                ?????????/????????????
                            </MoreLoginButton>
                        </MoreLoginDiv>
                    )}

                    <MoreDiv>
                        <MoreContainerDiv
                            onClick={() => memberRoleRouter("/order/all")}
                        >
                            My ??????
                        </MoreContainerDiv>
                        <MoreContainerDiv
                            onClick={() => memberRoleRouter("/member/market")}
                        >
                            My ??????
                        </MoreContainerDiv>
                        <MoreContainerDiv
                            onClick={() => memberRoleRouter("/member/review")}
                        >
                            ?????? ??? ??????
                        </MoreContainerDiv>
                        <MoreContainerDiv
                            onClick={() => memberRoleRouter("/member/coupon")}
                        >
                            ?????????
                        </MoreContainerDiv>
                    </MoreDiv>
                    <MoreDiv>
                        {auth.isAuthenticated && (
                            <>
                                <MoreContainerDiv>
                                    <L.FlexRows
                                        _content="space-between"
                                        onClick={() =>
                                            memberStatusChange(
                                                "sms",
                                                !member.emailSmsAgreeStatus
                                            )
                                        }
                                    >
                                        <p>????????? ?????? ??????</p>
                                        {member.emailSmsAgreeStatus ? (
                                            <SwitchC />
                                        ) : (
                                            <Switch />
                                        )}
                                    </L.FlexRows>
                                </MoreContainerDiv>
                                <MoreContainerDiv>
                                    <L.FlexRows
                                        _content="space-between"
                                        onClick={() =>
                                            memberStatusChange(
                                                "push",
                                                !member.pushAgreeStatus
                                            )
                                        }
                                    >
                                        <p>Push ?????? ??????</p>
                                        {member.pushAgreeStatus ? (
                                            <SwitchC />
                                        ) : (
                                            <Switch />
                                        )}
                                    </L.FlexRows>
                                </MoreContainerDiv>
                            </>
                        )}

                        <Link to="/service">
                            <MoreContainerDiv>????????????</MoreContainerDiv>
                        </Link>
                        <Link to="/notice">
                            <MoreContainerDiv>????????????</MoreContainerDiv>
                        </Link>
                        <Link to="/service/terms">
                            <MoreContainerDiv>?????? ??? ??????</MoreContainerDiv>
                        </Link>
                        <L.FlexRows
                            _height="52px"
                            _content="space-between"
                            _items="center"
                            _padding="0px"
                        >
                            <T.Text _weight={500} _size={16} _color="gray900">
                                ??? ?????? ??????
                            </T.Text>
                            <T.Text _weight={400} _size={14} _color="gray800">
                                1.0
                            </T.Text>
                        </L.FlexRows>
                    </MoreDiv>

                    <FooterLayout />
                </L.Container>
            </Layout>

            {confirm && (
                <Confirm
                    contents="????????? ??? ?????????????????????. ????????? ???????????? ?????????????????????????"
                    confirmText="???"
                    cancelText="?????????"
                    onConfirmClick={() => {
                        navigate("/login");
                    }}
                    onCancelClick={() => {
                        setConfirm(false);
                    }}
                />
            )}
            {alert && (
                <Alert
                    title={alert.title}
                    contents={alert.contents}
                    buttonText={alert.buttonText}
                    onButtonClick={alert.onButtonClick}
                    onOverlayClick={alert.onOverlayClick}
                />
            )}
            {/* ============= ???????????? ?????? ????????? ============= */}
            {bizModal && <BizSignupForm close={() => setBizModal(false)} />}
        </div>
    );
}

export default MorePage;
