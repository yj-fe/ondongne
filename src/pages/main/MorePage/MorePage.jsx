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

        // 비즈 신청하기
        if (!data) {
            return setBizModal(true);
        }

        // 비즈 심사 대기 중
        if (data.bizStatus === 0) {
            return setAlert({
                title: "비즈 심사 대기 중입니다.",
                contents:
                    "관리자 검토 후 2영업일 이내로\n승인 처리 예정입니다.\n승인이 완료되면 알림으로 알려드립니다.",
                buttonText: "확인",
                onButtonClick: () => setAlert(false),
                onOverlayClick: () => setAlert(false),
            });
        }

        // 비즈 심사 반려
        if (data.bizStatus === -1) {
            return setAlert({
                title: "심사가 반려되었습니다.",
                contents: "자세한 내용은 1:1문의를 이용해주세요.",
                buttonText: "확인",
                onButtonClick: () => setAlert(false),
                onOverlayClick: () => setAlert(false),
            });
        }

        // 비즈 홈
        if (data.bizStatus === 1) {
            return navigate("/business");
        }
    };

    // 회원 권한 확인 후 페이지 이동
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
                title="더보기"
                cart={false}
                bell={false}
                onBackClick={() => navigate("/")}
            >
                <L.Container _cursor="default" style={{ minHeight: "100vh" }}>
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
                                                ? "일반회원"
                                                : "비즈회원"}
                                        </AccountBadge>
                                        <AccountName>
                                            {member.nickname}
                                        </AccountName>
                                    </MoreAccountTextDiv>
                                </L.FlexRows>
                                <BubbleModal isBiz={auth.role === "ROLE_BIZ"} />
                            </MoreAccountProfile>

                            <MoreAccountButtonDiv>
                                <MoreAccountButton
                                    type="button"
                                    onClick={goToMember}
                                >
                                    회원정보 관리
                                </MoreAccountButton>
                                <MoreAccountButton
                                    _bg={"#0B806F"}
                                    _color={"#fff"}
                                    type="button"
                                    onClick={bizMember}
                                >
                                    비즈회원 전환
                                </MoreAccountButton>
                            </MoreAccountButtonDiv>
                        </MoreAccountDiv>
                    )}
                    {!auth.isAuthenticated && (
                        <MoreLoginDiv>
                            <MoreLoginText>
                                <p>회원가입 하고</p>
                                <p>내 주변 상점을 둘러보세요!</p>
                            </MoreLoginText>
                            <MoreLoginButton onClick={() => navigate("/login")}>
                                로그인/회원가입
                            </MoreLoginButton>
                        </MoreLoginDiv>
                    )}

                    <MoreDiv>
                        <MoreContainerDiv
                            onClick={() => memberRoleRouter("/order/all")}
                        >
                            My 주문
                        </MoreContainerDiv>
                        <MoreContainerDiv
                            onClick={() => memberRoleRouter("/member/market")}
                        >
                            My 단골
                        </MoreContainerDiv>
                        <MoreContainerDiv
                            onClick={() => memberRoleRouter("/member/review")}
                        >
                            내가 쓴 리뷰
                        </MoreContainerDiv>
                        <MoreContainerDiv
                            onClick={() => memberRoleRouter("/member/coupon")}
                        >
                            쿠폰함
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
                                        <p>마케팅 활용 동의</p>
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
                                        <p>Push 수신 동의</p>
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
                            <MoreContainerDiv>고객센터</MoreContainerDiv>
                        </Link>
                        <Link to="/notice">
                            <MoreContainerDiv>공지사항</MoreContainerDiv>
                        </Link>
                        <Link to="/service/terms">
                            <MoreContainerDiv>약관 및 정책</MoreContainerDiv>
                        </Link>
                        <L.FlexRows
                            _height="52px"
                            _content="space-between"
                            _items="center"
                            _padding="0px"
                        >
                            <T.Text _weight={500} _size={16} _color="gray900">
                                앱 버전 정보
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
                    contents="로그인 후 이용가능합니다. 로그인 페이지로 이동하시겠습니까?"
                    confirmText="네"
                    cancelText="아니오"
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
            {/* ============= 비즈회원 가입 모달창 ============= */}
            {bizModal && <BizSignupForm close={() => setBizModal(false)} />}
        </div>
    );
}

export default MorePage;
