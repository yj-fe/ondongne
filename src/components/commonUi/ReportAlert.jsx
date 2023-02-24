import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { FlexCols, Parents, Child } from "./Layout";
import { Text } from "./Text";
import { SimpleClose } from "./Icon";
import { FlexRows } from "./BuisinessLayout";
import CheckBox from "./CheckBox";
import { Textarea } from "./Input";
import { report } from "service/report";
import Alert from "./Alert";
import Overlay from "components/layout/Overlay/Overlay";

const ReportAlert = ({ ...props }) => {
    const [alert, setAlert] = useState(null);
    const [active, setActive] = useState(false);
    const [data, setData] = useState([
        {
            id: 1,
            title: "주문과 관련 없는 비방 내용",
            checked: false,
            value: "주문과 관련 없는 비방 내용",
        },
        {
            id: 2,
            title: "음란, 욕설 등 부적절한 내용",
            checked: false,
            value: "음란, 욕설 등 부적절한 내용",
        },
        {
            id: 3,
            title: "부적절한 오보 또는 광고",
            checked: false,
            value: "부적절한 오보 또는 광고",
        },
        {
            id: 4,
            title: "상점에 대한 후기가 아님",
            checked: false,
            value: "상점에 대한 후기가 아님",
        },
        {
            id: 5,
            title: "개인정보 유출 위험",
            checked: false,
            value: "개인정보 유출 위험",
        },
        {
            id: 6,
            title: "저작권 불법 도용",
            checked: false,
            value: "저작권 불법 도용",
        },
        { id: 7, title: "기타", checked: false, value: "" },
    ]);

    const checkHandler = (id) => {
        setData(
            data.map((item) =>
                id === 7
                    ? item.id === id
                        ? { ...item, checked: !item.checked }
                        : { ...item, checked: false }
                    : item.id === id
                    ? { ...item, checked: !item.checked }
                    : { ...item, checked: item.id === 7 ? false : item.checked }
            )
        );
    };

    const onSubmit = async () => {
        const contents = data
            .filter((item) => item.checked === true && item.value)
            .map((item) => item.value);

        const response = await report({
            contents: contents.join(","),
            targetId: props.id,
            type: props.type,
        });

        if (response && response.status === 200) {
            return setAlert({
                contents: `신고가 접수되었습니다.`,
                buttonText: "확인",
                onButtonClick: props.onOverlayClick,
            });
        }
    };

    useEffect(() => {
        const check = data.filter(
            (item) => item.checked === true && item.value
        );
        if (check.length > 0) {
            setActive(true);
        } else {
            setActive(false);
        }
    }, [data]);

    return (
        <Overlay onOverlayClick={props.onOverlayClick}>
            <S.AlertBox>
                <S.Header _content="space-between">
                    <FlexRows _content="center">
                        <Text
                            as="span"
                            _size={18}
                            _weight={600}
                            _align="center"
                        >
                            리뷰 신고
                        </Text>
                    </FlexRows>
                    <div className="close" onClick={props.onOverlayClick}>
                        <SimpleClose />
                    </div>
                </S.Header>

                <FlexCols _gap={4} _padding={"48px 0"}>
                    <Text as="span" _size={20} _weight={500} _align="left">
                        해당 리뷰에 문제가 있나요?
                    </Text>
                    <Text
                        as="span"
                        _color="gray600"
                        _size={14}
                        _weight={400}
                        _align="left"
                    >
                        신고 사유를 선택해주세요!
                    </Text>
                </FlexCols>
                <S.Scroll>
                    <FlexCols _gap={20}>
                        {data.map((item, i) => (
                            <div key={i} onClick={() => checkHandler(item.id)}>
                                <CheckBox
                                    name={`reportdatachecked${i}`}
                                    label={item.title}
                                    checked={item.checked}
                                    onChange={(e) => console.log(e)}
                                />
                            </div>
                        ))}
                        {data[6].checked && (
                            <Parents>
                                <Textarea
                                    _height="120"
                                    value={data[6].value}
                                    onChange={(e) =>
                                        setData(
                                            data.map((item) =>
                                                item.id === data[6].id
                                                    ? {
                                                          ...item,
                                                          value: e.target.value,
                                                      }
                                                    : item
                                            )
                                        )
                                    }
                                    placeholder="신고사유를 입력해주세요."
                                    maxLength={500}
                                />
                                <Child _bottom="10px" _right="10px">
                                    <Text _color="gray600" _size="12">
                                        {data[6].value?.length ?? 0}/500
                                    </Text>
                                </Child>
                            </Parents>
                        )}
                    </FlexCols>
                </S.Scroll>
                <S.Button
                    _active={active}
                    disabled={!active}
                    onClick={onSubmit}
                >
                    신고하기
                </S.Button>
            </S.AlertBox>
            {alert && (
                <Alert
                    contents={alert.contents}
                    buttonText={alert.buttonText}
                    onButtonClick={alert.onButtonClick}
                />
            )}
        </Overlay>
    );
};

const S = {
    AlertBox: styled.div`
        width: 384px;
        height: 726px;
        padding: 24px;
        background-color: #ffffff;
        border-radius: 12px;
        position: relative;
        @media screen and (max-width: 728px) {
            width: 100vw;
            height: 100vh;
            border-radius: 0;
        }
        @media screen and (max-height: 726px) {
            width: 100vw;
            height: 100vh;
            border-radius: 0;
        }
    `,
    Header: styled.div`
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;

        .close {
            position: absolute;
            top: 0;
            right: 0;
        }
    `,
    Scroll: styled.div`
        overflow: scroll;
        margin-bottom: 58px;
        &::-webkit-scrollbar {
            display: none;
        }
    `,
    Button: styled.button`
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        text-align: center;
        height: 48px;
        line-height: 48px;
        color: #fff;
        background: ${(props) => (props._active ? "#0b806f" : "#E0E0E0")};
        border-bottom-left-radius: 12px;
        border-bottom-right-radius: 12px;
        @media screen and (max-width: 728px) {
            border-radius: 0;
        }
        @media screen and (max-height: 726px) {
            border-radius: 0;
        }
    `,
};

ReportAlert.propTypes = {
    title: PropTypes.string,
    titledesc2: PropTypes.string,
    contents: PropTypes.string,
    desc: PropTypes.string,
    placedesc: PropTypes.string,
    buttonText: PropTypes.string,
    onOverlayClick: PropTypes.func,
    onButtonClick: PropTypes.func,
    onCloseClick: PropTypes.func,
    active: PropTypes.bool,
    isSearch: PropTypes.bool,
};

export default ReportAlert;
