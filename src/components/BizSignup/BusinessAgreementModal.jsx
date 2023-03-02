import React, { useState, useEffect } from "react";
import TermsModal from "components/service/TermsPage/TermsModal";
import { useNavigate } from "react-router-dom";
import {
    AgreementDiv,
    Button,
    ModalBody,
    ModalDiv1,
    ModalDiv2,
    ModalOutside,
    SpaceBet,
    Line,
} from "components/Main/More/ModalPageStyle";
import { Text } from "components/commonUi/Text";
import * as L from "components/commonUi/Layout";
import CheckBox from "components/commonUi/CheckBox";
import CheckBoxTitle from "components/commonUi/CheckBoxTitle";
import { ArrowRight, Close } from "components/commonUi/Icon";

function BusinessAgreementModal({ closeModel }) {
    const [service, setService] = useState(null);
    // 체크버튼
    const [requestSave, setRequestSave] = useState(false);
    const [servicerequestSave, setServiceRequestSave] = useState(false);
    const [privrequestSave, setPrivRequestSave] = useState(false);
    const [snsrequestSave, setSnsRequestSave] = useState(false);

    // 버튼 활성화 여부
    const [active, setActive] = useState(false);
    const navigate = useNavigate();

    const allChecked = () => {
        if (requestSave) {
            setRequestSave(false);
            setServiceRequestSave(false);
            setPrivRequestSave(false);
            setSnsRequestSave(false);
        } else {
            setRequestSave(true);
            setServiceRequestSave(true);
            setPrivRequestSave(true);
            setSnsRequestSave(true);
        }
    };

    useEffect(() => {
        if (servicerequestSave && privrequestSave) {
            setActive(true);
        } else {
            setActive(false);
        }
    }, [servicerequestSave, privrequestSave]);

    return (
        <ModalOutside
        // onClick={closeModel}
        >
            {service === null && (
                <ModalBody>
                    <ModalDiv1 />
                    <ModalDiv2>
                        <L.FlexRows
                            _padding="0 24px"
                            _content="space-between"
                            _bg="#fff"
                        >
                            <Text _size={18} _weight={500} _color={"gray900"}>
                                <p>비즈회원으로 전환하시려면</p>
                                <p>약관동의가 필요합니다.</p>
                            </Text>
                            <button onClick={closeModel}>
                                <Close />
                            </button>
                        </L.FlexRows>
                    </ModalDiv2>
                    <AgreementDiv>
                        <CheckBoxTitle
                            label="모두 동의합니다"
                            name="requestSave"
                            checked={requestSave}
                            onChange={allChecked}
                        />
                        <Line />
                        <SpaceBet>
                            <CheckBox
                                label="[필수] 비즈회원 이용약관"
                                name="servicerequestSave"
                                checked={servicerequestSave}
                                onChange={(e) => {
                                    setServiceRequestSave(
                                        e.currentTarget.checked
                                    );
                                }}
                            />
                            <button type="button" onClick={() => setService(0)}>
                                <ArrowRight />
                            </button>
                        </SpaceBet>
                        <SpaceBet>
                            <CheckBox
                                label="[필수] 개인정보 수집 이용 동의"
                                name="privrequestSave"
                                checked={privrequestSave}
                                onChange={(e) => {
                                    setPrivRequestSave(e.currentTarget.checked);
                                }}
                            />
                            <button type="button" onClick={() => setService(1)}>
                                <ArrowRight />
                            </button>
                        </SpaceBet>
                        <SpaceBet>
                            <CheckBox
                                label="[선택] 마케팅 활용 동의"
                                name="snsrequestSave"
                                checked={snsrequestSave}
                                onChange={(e) => {
                                    setSnsRequestSave(e.currentTarget.checked);
                                }}
                            />
                            <button type="button" onClick={() => setService(2)}>
                                <ArrowRight />
                            </button>
                        </SpaceBet>

                        <Button
                            active={active}
                            type="button"
                            disabled={!active}
                            onClick={() => navigate("/business/application")}
                        >
                            확인
                        </Button>
                    </AgreementDiv>
                </ModalBody>
            )}
            {service === 0 && (
                <TermsModal type={"USE"} closeModel={() => setService(null)} />
            )}
            {service === 1 && (
                <TermsModal
                    type={"PRIVACY"}
                    closeModel={() => setService(null)}
                />
            )}
            {service === 2 && (
                <TermsModal
                    type={"MARKETING"}
                    closeModel={() => setService(null)}
                />
            )}
        </ModalOutside>
    );
}

export default BusinessAgreementModal;
