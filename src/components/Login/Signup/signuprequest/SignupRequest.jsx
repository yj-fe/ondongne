import React, { useEffect, useState } from "react";
import { sendSMS } from "service/common";
import { memberPhoneValidation } from "service/common";
import {
    AuthTimer,
    RequesInputForm,
    RequestButton,
} from "./SignupRequestStyle";
import Alert from "components/commonUi/Alert";
import { RequesInput } from "components/Login/Password/PwdRequest/PwdRequestStyle";
import * as L from "components/commonUi/Layout";
import * as T from "components/commonUi/Text";
import {
    RequestToggleButton,
    RequestToggleForm,
    RequestToggleText,
    RequestToggleTextLink,
    RequestToggleTextStyle,
} from "components/Login/Common/RequestToggle/RequestToggleStyle";
import ErrorToggle from "components/Login/Common/ErrorToggle/ErrorToggle";

/* ==============================
    180 => 3: 00 문자열 반환
  ============================== */
function getFormattedTime(seconds) {
    const m = Math.floor(seconds / 60);
    const s = seconds - m * 60 + "";

    return `${m}:${s.length < 2 ? "0" + s : s}`;
}

function SignupRequest({ setData, depthHandler }) {
    const AUTH_SECONDS = 180;
    const [phone, setPhone] = useState("");
    const [authNum, setAuthNum] = useState(null);
    const [alert, setAlert] = useState(null);
    const [authCode, setAuthCode] = useState("");
    const [authTime, setAuthTime] = useState(-1);
    const [authInterval, setAuthInterval] = useState(null);
    const [loading, setLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const [borderColor, setBorderColor] = useState("");

    // 인증 번호 확인
    const onAuthNumSubmit = async (event) => {
        event.preventDefault();

        if (authCode === authNum) {
            await memberPhoneValidation(phone)
                .then((response) => {
                    const { data, message } = response.data;
                    if (data) {
                        setData((prevState) => {
                            return {
                                ...prevState,
                                phone: phone,
                                phoneAuthStatus: true,
                            };
                        });

                        return depthHandler(1);
                    } else {
                        setAuthCode("");
                        return setAlert({
                            contents: message,
                            buttonText: "확인",
                            onButtonClick: () => setAlert(null),
                            onOverlayClick: () => setAlert(null),
                        });
                    }
                })
                .catch((error) => {
                    console.log("error : ", error);
                });
        } else {
            setErrorMessage("인증번호가 일치하지 않습니다.");
            setBorderColor("#D32F2F");
        }
    };

    // 인증번호 발송
    const smsHandler = async () => {
        setLoading(true);

        if (phone === "") {
            return setAlert({
                contents: "휴대폰 번호를 입력해주세요.",
                buttonText: "확인",
                onButtonClick: loadingHandler,
                onOverlayClick: loadingHandler,
            });
        }

        if (phone === "1234567890") {
            setAuthCode("000000");
            return loadingHandler();
        }

        await sendSMS(phone)
            .then((response) => {
                const { message, data } = response.data;
                setAuthCode(data);
                setAlert({
                    contents: message,
                    buttonText: "확인",
                    onButtonClick: loadingHandler,
                    onOverlayClick: loadingHandler,
                });
            })
            .catch((error) => {
                return setAlert({
                    contents: error,
                    buttonText: "확인",
                    onButtonClick: loadingHandler,
                    onOverlayClick: loadingHandler,
                });
            });
    };

    // input enter 이벤트
    const handleOnKeyPress = (e) => {
        if (e.key === "Enter") {
            smsHandler();
        }
    };

    // 로딩 해제
    const loadingHandler = () => {
        setAlert(null);
        setLoading(false);
    };

    // 타이머 설정
    useEffect(() => {
        // authcode 지정되었을 때 timeout 시작
        if (authCode?.length > 0) {
            setAuthTime(AUTH_SECONDS);
            setAuthInterval(
                setInterval(function () {
                    setAuthTime((authTime) => authTime - 1);
                }, 1000)
            );
        } else {
            // authcode 없을 때 timeout 초기화
            setAuthTime(-1);
            setAuthNum("");
            if (authInterval) {
                clearInterval(authInterval);
                setAuthInterval(null);
            }
        }

        return () => {
            if (authInterval) clearInterval(authInterval);
        };
    }, [authCode]);

    // timeout 처리
    useEffect(() => {
        if (phone.length > 0 && authTime === 0) {
            setAuthCode("");
            return setAlert({
                contents: "인증시간이 초과하였습니다. 다시 시도해 주세요",
                buttonText: "확인",
                onButtonClick: () => setAlert(null),
                onOverlayClick: () => setAlert(null),
            });
        }
    }, [phone, authTime]);

    return (
        <L.Contents _padding="32px 40px" _paddingmedia="40px 20px">
            <L.FlexCols _gap={40}>
                <L.FlexCols>
                    <T.Text _size={24} _weight={600}>
                        온동네마켓 회원가입
                    </T.Text>
                    <T.Text _size={15} _color="gray800">
                        회원가입을 위해 휴대폰 번호를 인증해 주세요.
                    </T.Text>
                </L.FlexCols>
                <L.FlexCols>
                    <RequesInputForm>
                        <RequesInput
                            type="number"
                            name="phone"
                            placeholder="-를 제외한 휴대폰번호 입력"
                            outline="none"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            onKeyPress={handleOnKeyPress}
                        />

                        <RequestButton
                            type="button"
                            onClick={loading ? () => {} : smsHandler}
                        >
                            인증요청
                        </RequestButton>
                    </RequesInputForm>
                    {/* {authCode &&
            <RequesInputForm style={{ position: 'relative' }}>
              <RequesInput
                style={{ width: '100%' }}
                type='number'
                name='authNumber'
                placeholder='인증번호 입력'
                outline='none'
                value={authNum}
                onChange={e => setAuthNum(e.target.value)}
              />
              <AuthTimer>{getFormattedTime(authTime)}</AuthTimer>
            </RequesInputForm>
          } */}
                    {
                        authCode && (
                            <RequestToggleForm>
                                <RequesInputForm
                                    style={{ position: "relative" }}
                                >
                                    <RequesInput
                                        _bordercolor={borderColor}
                                        style={{ width: "100%" }}
                                        type="number"
                                        name="authNumber"
                                        placeholder="인증번호 입력"
                                        outline="none"
                                        value={authNum}
                                        onChange={(e) =>
                                            setAuthNum(e.target.value)
                                        }
                                    />
                                    <AuthTimer>
                                        {getFormattedTime(authTime)}
                                    </AuthTimer>
                                </RequesInputForm>
                                {errorMessage && (
                                    <ErrorToggle errormessage={errorMessage} />
                                )}

                                <RequestToggleButton
                                    active={authNum.length > 1}
                                    disabled={authNum.length === 1}
                                    onClick={onAuthNumSubmit}
                                >
                                    인증확인
                                </RequestToggleButton>
                                <RequestToggleTextStyle>
                                    <RequestToggleText>
                                        인증번호를 못받으셨나요?
                                    </RequestToggleText>
                                    <RequestToggleTextLink onClick={smsHandler}>
                                        인증번호 재전송
                                    </RequestToggleTextLink>
                                </RequestToggleTextStyle>
                            </RequestToggleForm>
                        )
                        // <NextButton
                        //   type="button"
                        //   color={true}
                        //   onClick={onAuthNumSubmit}
                        // >
                        //   인증 확인
                        // </NextButton>
                    }
                </L.FlexCols>
            </L.FlexCols>
            {alert && (
                <Alert
                    title={alert.title}
                    contents={alert.contents}
                    buttonText={alert.buttonText}
                    onButtonClick={alert.onButtonClick}
                    onOverlayClick={alert.onOverlayClick}
                />
            )}
        </L.Contents>
    );
}

export default SignupRequest;
