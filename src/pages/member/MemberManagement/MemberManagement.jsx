import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

import {
    NameToggleInput,
    MemberBar,
    MemberLinkText,
    MemberLinkDiv,
    MemberProfileDiv,
    TextEmail,
    TextName,
    TitleText,
    ProfileTextDiv,
    Input,
    ChangeButton,
    InputForm,
} from "./MemberManagementStyle";
import Alert from "components/commonUi/Alert";
import MemberPhone from "components/Login/Member/MemberPhone/MemberPhone";
import SimpleConfirm from "components/commonUi/SimpleConfirm";
import MemberPwd from "components/Login/Member/MemberPwd/MemberPwd";
import ProfileAvatar from "components/commonUi/ProfileAvatar";
import { useDispatch, useSelector } from "react-redux";
import { getMember, logout, memberNicknameChange } from "service/member";
import { authActions } from "store/slices/auth";
import { Text } from "components/commonUi/Text";
import Layout from "components/layout/Layout/Layout";
import * as L from "components/commonUi/Layout";
import { Scroll } from "components/Login/Password/ToggleDetail/ToggleDetailStyle";
import Confirm from "components/commonUi/Confirm";

function MemberManagement() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [showNameToggle, setShowNameToggle] = useState(true);
    const [member, setMember] = useState({});
    const auth = useSelector((state) => state.auth);
    const [alert, setAlert] = useState(null);
    const [confirm, setConfirm] = useState(false);

    const getMemberProfile = async () => {
        const response = await getMember();
        if (response && response.data) {
            const { data } = response.data;
            setMember(data);
        }
    };

    const Logout = async () => {
        setConfirm(false);
        dispatch(authActions.logout());
        setAlert({
            title: "로그아웃 성공",
            contents: "로그아웃 되었습니다.",
            buttonText: "확인",
            onButtonClick: () => navigate("/more", { replace: true }),
            onOverlayClick: () => navigate("/more", { replace: true }),
        });
    };

    useEffect(() => {
        if (auth.isAuthenticated) {
            getMemberProfile();
        }
    }, [auth]);

    return (
        <Layout
            title="회원정보 관리"
            cart={false}
            bell={false}
            onBackClick={() => navigate(-1, { replace: true })}
        >
            <L.Container _cursor="default" _height="calc(100vh - 60px)">
                <L.Contents _height="calc(100vh - 52px)">
                    <L.FlexCols _padding={0} _gap={0}>
                        {/* ============ 회원정보관리 ============ */}
                        <MemberProfileDiv>
                            <ProfileAvatar profile={member.profile} />
                            <ProfileTextDiv>
                                <TextName>{member.nickname}</TextName>
                                <TextEmail>{member.email}</TextEmail>
                            </ProfileTextDiv>
                        </MemberProfileDiv>

                        <Scroll _height="calc(100vh - 282px)">
                            <L.FlexCols _gap={24}>
                                {/* =========================== 닉네임 =========================== */}
                                <L.FlexCols>
                                    <TitleText>닉네임</TitleText>

                                    {showNameToggle ? (
                                        <NameResetToggle
                                            namevalue={member.nickname}
                                            setToggle={() =>
                                                setShowNameToggle(false)
                                            }
                                        />
                                    ) : (
                                        <NameToggle
                                            namevalue={member.nickname}
                                            setToggle={() =>
                                                setShowNameToggle(true)
                                            }
                                            getMemberProfile={getMemberProfile}
                                        />
                                    )}
                                </L.FlexCols>

                                {/* ========================== 전화번호 ========================== */}
                                <L.FlexCols>
                                    <TitleText>전화번호</TitleText>
                                    <MemberPhone
                                        phone={member.phone}
                                        getMemberProfile={getMemberProfile}
                                    />
                                </L.FlexCols>

                                {/* ========================== 비밀번호 ========================== */}
                                <L.FlexCols>
                                    <TitleText>비밀번호 변경</TitleText>
                                    <MemberPwd />
                                </L.FlexCols>
                            </L.FlexCols>

                            <MemberLinkDiv>
                                <Link to="/member/withdrawal">
                                    <MemberLinkText>회원탈퇴</MemberLinkText>
                                </Link>
                                <MemberBar />
                                <MemberLinkText
                                    onClick={() => setConfirm(true)}
                                >
                                    로그아웃
                                </MemberLinkText>
                            </MemberLinkDiv>
                            <L.FlexRows _height="50px"></L.FlexRows>
                            {alert && (
                                <Alert
                                    title={alert.title}
                                    contents={alert.contents}
                                    buttonText={alert.buttonText}
                                    onButtonClick={alert.onButtonClick}
                                    onOverlayClick={alert.onOverlayClick}
                                />
                            )}
                            {confirm && (
                                <Confirm
                                    contents="정말 로그아웃 하시겠습니까?"
                                    confirmText="네"
                                    cancelText="아니오"
                                    onConfirmClick={() => Logout()}
                                    onCancelClick={() => setConfirm(false)}
                                />
                            )}
                        </Scroll>
                    </L.FlexCols>
                </L.Contents>
            </L.Container>
        </Layout>
    );
}

// 닉네임 변경전
function NameResetToggle({ setToggle, namevalue }) {
    return (
        <div>
            <InputForm>
                <Input disabled value={namevalue} />
                <ChangeButton _width="25px" onClick={setToggle}>
                    변경
                </ChangeButton>
            </InputForm>
        </div>
    );
}

// 닉네임 변경 토글
function NameToggle({ namevalue, setToggle, getMemberProfile }) {
    const [confirm, setConfirm] = useState(null);
    const [nickname, setNickname] = useState("");
    const [error, setError] = useState("");

    const onSubmit = async () => {
        setError("");

        const response = await memberNicknameChange(nickname);
        const { data, message } = response.data;

        if (!data) {
            return setError(message);
        }

        setConfirm({
            contents: message,
            confirmText: "확인",
            onConfirmClick: () => {
                setToggle();
                getMemberProfile();
            },
        });
    };

    return (
        <>
            <InputForm _bg="#fff">
                <NameToggleInput
                    type="text"
                    value={nickname}
                    onChange={(e) => setNickname(e.target.value)}
                    placeholder={namevalue}
                />
                <ChangeButton type="button" onClick={onSubmit}>
                    적용
                </ChangeButton>
            </InputForm>
            {error && (
                <Text style={{ marginTop: 8, color: "#D32F2F" }} _size={14}>
                    {error}
                </Text>
            )}
            {confirm && (
                <SimpleConfirm
                    contents={confirm.contents}
                    confirmText={confirm.confirmText}
                    onConfirmClick={confirm.onConfirmClick}
                    warn={confirm.warn}
                    active={confirm.active}
                />
            )}
        </>
    );
}

export default MemberManagement;
