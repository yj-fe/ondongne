import React, { useState } from "react";
import PropTypes from "prop-types";
import Overlay from "../layout/Overlay/Overlay";
import styled from "styled-components";
import { FlexCols, FlexRows } from "./Layout";
import { Text } from "./Text";
import { SimpleClose, EmptyCheck, InputValue, EmptyUnCheck } from "./Icon";
import { TextInput } from "./Input";
import { Line } from "pages/login/LocationSetting/LocationSettingStyle";
import { BorderBox } from "./Button";
import {
    DayBox,
    Input,
    InputBox,
} from "components/Buisness/BusinessManagement/BusinessManagementTabStyle";
import { LoginNavTitle } from "components/Login/Common/LoginHeader/LoginHeaderStyle";
import CalendarModel from "./CalendarModel";
import dayjs from "dayjs";
import Alert from "./Alert";

const S = {
    AlertBox: styled.div`
        display: flex;
        flex-direction: column;
        align-items: "center";
        justify-content: "center";
        padding: 0px;
        width: ${(props) => props._width || "390px"};
        height: "688px";
        border-radius: 16px;
        background: #ffffff;
        @media screen and (max-width: 450px) {
            width: 100%;
            height: 100%;
            border-radius: 0px;
        }
    `,
    Body: styled.div`
        padding: ${(props) => props._pd || "24px 24px 32px"};
        text-align: center;
        background-color: #fff;
    `,
    Button: styled.button`
        width: 100%;
        text-align: center;
        height: 48px;
        line-height: 48px;
        color: #fff;
        border-radius: 0px 0px 16px 16px;
        background-color: ${(props) => props.theme.color.green700};
        position: static;
        @media screen and (max-width: 450px) {
            position: ${(props) => props._position};
            bottom: ${(props) => props._bottom};
            border-radius: 0;
        }
    `,
    SearchBox: styled.div`
        width: 310px;
        height: 48px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        padding: 12px;
        border-bottom: 1px solid #eeeeee;
        gap: 12px;
        color: #9e9e9e;
        &:focus {
            color: #212121;
        }
    `,
};

const CouponAlert = ({ active = true, data, setData, ...props }) => {
    const [alert, setAlert] = useState(null);
    const [calendar, setCalendar] = useState(false);
    const [couponData, setCouponData] = useState({
        type: data.type,
        coupon: data.coupon,
        endDate: data.endDate,
        limitStatus: data.limitStatus,
        maxCount: data.maxCount,
        isCoupon: data.isCoupon,
    });

    const isValid = () => {
        if (couponData.type.length === 0) {
            return "?????? ????????? ??????????????????.";
        }
        if (couponData.coupon.length === 0) {
            return "?????? ????????? ??????????????????.";
        }
        if (couponData.endDate.length === 0) {
            return "?????? ??????????????? ??????????????????.";
        }
        if (
            !couponData.limitStatus &&
            (couponData.maxCount === "" || couponData.maxCount === 0)
        ) {
            return "?????? ??????????????? ??????????????????.";
        }
        return "";
    };

    const onSubmit = () => {
        const valid = isValid();
        if (valid) {
            return setAlert({
                contents: valid,
                buttonText: "??????",
                onButtonClick: () => setAlert(false),
                onOverlayClick: () => setAlert(false),
            });
        }
        setData({
            ...data,
            ...couponData,
            isCoupon: true,
        });
        props.onOverlayClick();
    };

    if (active) {
        return (
            <Overlay onOverlayClick={props.onOverlayClick}>
                <S.AlertBox>
                    <FlexCols>
                        <FlexRows
                            _padding="24px 20px 0px 20px"
                            _content="space-between"
                        >
                            <FlexRows _content="center">
                                <LoginNavTitle _transform="translateX(+20px)">
                                    ?????? ??????
                                </LoginNavTitle>
                            </FlexRows>
                            <button
                                type="button"
                                onClick={() => props.onOverlayClick}
                            >
                                <SimpleClose />
                            </button>
                        </FlexRows>

                        <Line />

                        <FlexCols _gap={32} _padding="16px 20px">
                            <FlexCols _gap={16}>
                                <Text as="p">?????? ??????</Text>
                                <FlexRows>
                                    <DayBox
                                        onClick={() => {
                                            setCouponData({
                                                ...couponData,
                                                type: "??????",
                                            });
                                        }}
                                        color={couponData.type === "??????"}
                                        _width="108px"
                                        _height="40px"
                                    >
                                        ?????? ??????
                                    </DayBox>
                                    <DayBox
                                        onClick={() => {
                                            setCouponData({
                                                ...couponData,
                                                type: "??????",
                                            });
                                        }}
                                        color={couponData.type === "??????"}
                                        _width="108px"
                                        _height="40px"
                                    >
                                        ?????? ??????
                                    </DayBox>
                                </FlexRows>
                            </FlexCols>
                            <FlexCols _gap={16}>
                                <Text as="p">?????? ??????</Text>
                                <FlexCols>
                                    <TextInput
                                        _boccolor="#FFFFFF"
                                        value={couponData.coupon}
                                        onChange={(e) =>
                                            setCouponData({
                                                ...couponData,
                                                coupon: e.target.value,
                                            })
                                        }
                                        placeholder="????????? ????????? ?????????."
                                        maxLength={12}
                                    />
                                    {!couponData.coupon && (
                                        <Text _color="error" _size={13} as="p">
                                            ?????? ????????? ????????? ?????????.(??????
                                            12???)
                                        </Text>
                                    )}
                                </FlexCols>
                            </FlexCols>
                            <FlexCols _gap={16}>
                                <Text as="p">?????? ??????</Text>
                                <BorderBox onClick={() => setCalendar(true)}>
                                    <Input
                                        disabled
                                        name="endDate"
                                        _place="#212121"
                                        style={{ background: "#fff" }}
                                        value={
                                            couponData.endDate
                                                ? dayjs(
                                                      couponData.endDate
                                                  ).format("YYYY-MM-DD")
                                                : ""
                                        }
                                    />
                                </BorderBox>
                                {!couponData.endDate && (
                                    <Text _color="error" _size={13} as="p">
                                        ?????? ??????????????? ????????? ?????????.
                                    </Text>
                                )}
                            </FlexCols>
                            <FlexCols _gap={16}>
                                <FlexRows _content="space-between">
                                    <Text as="p">?????? ??????</Text>
                                    <FlexRows
                                        _content="right"
                                        _width="80px"
                                        onClick={() =>
                                            setCouponData({
                                                ...couponData,
                                                limitStatus:
                                                    !couponData.limitStatus,
                                            })
                                        }
                                    >
                                        {couponData.limitStatus ? (
                                            <EmptyCheck />
                                        ) : (
                                            <EmptyUnCheck />
                                        )}
                                        <Text
                                            _weight={400}
                                            _size={14}
                                            _color="gray600"
                                        >
                                            ?????? ??????
                                        </Text>
                                    </FlexRows>
                                </FlexRows>
                                <FlexCols>
                                    <InputBox _content="right">
                                        <Input
                                            value={couponData.maxCount}
                                            onChange={(e) =>
                                                setCouponData({
                                                    ...couponData,
                                                    maxCount: e.target.value,
                                                })
                                            }
                                            placeholder="0"
                                            type="number"
                                            align="right"
                                            style={{ background: "#fff" }}
                                        />
                                        <FlexRows
                                            _gap="0px"
                                            _padding="3px 0px"
                                            _width="auto"
                                        >
                                            <InputValue />
                                        </FlexRows>
                                    </InputBox>
                                    {!couponData.limitStatus &&
                                        (couponData.maxCount === "" ||
                                            couponData.maxCount === 0) && (
                                            <Text
                                                _color="error"
                                                _size={13}
                                                as="p"
                                            >
                                                ?????? ????????? ????????? ?????????.
                                            </Text>
                                        )}
                                </FlexCols>
                            </FlexCols>
                        </FlexCols>
                        <S.Button
                            _position="fixed"
                            _bottom="0"
                            onClick={onSubmit}
                        >
                            ?????? ??????
                        </S.Button>
                    </FlexCols>
                    {calendar && (
                        <CalendarModel
                            maxDay={100}
                            modelClose={() => setCalendar(false)}
                            dateFormat={"yyyy-MM-dd"}
                            onChange={(date) => {
                                setCouponData({
                                    ...couponData,
                                    endDate: date,
                                });
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
                </S.AlertBox>
            </Overlay>
        );
    }
};

CouponAlert.propTypes = {
    title: PropTypes.string,
    contents: PropTypes.string,
    desc: PropTypes.string,
    placedesc: PropTypes.string,
    buttonText: PropTypes.string,
    onOverlayClick: PropTypes.func,
    onButtonClick: PropTypes.func,
    active: PropTypes.bool,
    data: PropTypes.object,
    setData: PropTypes.func,
};

export default CouponAlert;
