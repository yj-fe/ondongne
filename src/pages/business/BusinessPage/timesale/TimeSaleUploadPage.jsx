import React, { useState, useEffect, useCallback } from "react";
import * as L from "components/commonUi/Layout";
import * as T from "components/commonUi/Text";
import Layout from "components/layout/Layout/Layout";
import * as B from "components/commonUi/Button";
import { useNavigate, useParams } from "react-router-dom";
import { numberFormatter, numberFormat } from "utils/utils";
import { Calendar, ArrowRightB } from "components/commonUi/Icon";
import {
    Input,
    TitleInfo,
    TitleInfoDiv,
    RightStyle,
} from "components/Buisness/BusinessManagement/BusinessManagementTabStyle";
import { useSelector } from "react-redux";
import ItemSelectModal from "components/Buisness/ItemSelectModal";
import DatePicker from "react-datepicker";
import { ko } from "date-fns/locale";
import "react-datepicker/dist/react-datepicker.css";
import "components/datepicker/style.css";
import {
    getTimeSale,
    createTimesale,
    updateTimesale,
    deleteTimesale,
} from "service/timesale";
import Alert from "components/commonUi/Alert";
import Confirm from "components/commonUi/Confirm";

const TimeSaleUploadPage = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const auth = useSelector((state) => state.auth);
    const [data, setData] = useState({
        timeSaleId: "",
        itemId: "",
        item: [],
        price: "",
        count: "",
        startDateTime: "",
        endDateTime: "",
    });

    const [itemModal, setItemModal] = useState(false);
    const [maxDate, setMaxDate] = useState(new Date());

    const [alert, setAlert] = useState(null);
    const [confirm, setConfirm] = useState(false);
    const [loading, setLoading] = useState(false);
    const [active, setActive] = useState(false);

    const loadData = useCallback(async () => {
        setLoading(true);
        await getTimeSale(id)
            .then((response) => {
                setData({
                    ...response.data,
                    price: numberFormat(response.data.price),
                    count: numberFormat(response.data.count),
                    item: [
                        {
                            itemId: response.data.itemId,
                            name: response.data.name,
                        },
                    ],
                    endDateTime: new Date(response.data.endDateTime),
                    startDateTime: new Date(response.data.startDateTime),
                });
            })
            .catch((e) => {
                setAlert({
                    contents: e.message,
                    onButtonClick: () => setAlert(null),
                });
            })
            .finally(() => setLoading(false));
    }, [id]);

    const updateHandler = () => {
        setLoading(true);

        updateTimesale(data)
            .then((response) => {
                const { message } = response.data;
                setAlert({
                    contents: message,
                    onButtonClick:
                        response.status === 200
                            ? () => navigate("/business/timesale")
                            : () => setAlert(null),
                });
            })
            .catch((e) => {
                setAlert({
                    contents: e.message,
                    onButtonClick: () => setAlert(null),
                });
            })
            .finally(() => setLoading(false));
    };

    const createHandler = () => {
        setLoading(true);

        createTimesale(data)
            .then((response) => {
                const { message } = response.data;
                setAlert({
                    contents: message,
                    onButtonClick:
                        response.status === 200
                            ? () => navigate("/business/timesale")
                            : () => setAlert(null),
                });
            })
            .catch((e) => {
                setAlert({
                    contents: e.message,
                    onButtonClick: () => setAlert(null),
                });
            })
            .finally(() => setLoading(false));
    };

    const deleteHanler = (id) => {
        setLoading(true);

        deleteTimesale(id)
            .then((response) => {
                const { message } = response.data;
                setAlert({
                    contents: message,
                    onButtonClick:
                        response.status === 200
                            ? () => navigate("/business/timesale")
                            : () => setAlert(null),
                });
            })
            .catch((e) => {
                setAlert({
                    contents: e.message,
                    onButtonClick: () => setAlert(null),
                });
            })
            .finally(() => setLoading(false));
    };

    useEffect(() => {
        if (data.startDateTime) {
            const date = new Date(data.startDateTime);
            setMaxDate(date.setDate(date.getDate() + 7));
        }
    }, [data.startDateTime]);

    useEffect(() => {
        if (
            data.item.length > 0 &&
            Number(data.price?.replaceAll(",", "")) > 0 &&
            Number(data.count?.replaceAll(",", "")) > 0 &&
            data.startDateTime &&
            data.endDateTime
        ) {
            setActive(true);
        } else {
            setActive(false);
        }
    }, [data]);

    useEffect(() => {
        if (id) {
            loadData(id);
        }
    }, [id, loadData]);

    return (
        <Layout
            title={id ? "타임세일 수정" : "타임세일 등록"}
            cart={false}
            bell={false}
            floating={false}
            bottom={"1px solid #EEEEEE"}
            onBackClick={() => navigate(-1)}
        >
            <L.Container>
                <L.Contents _padding="40px 20px" _height={"calc(100vh - 58px)"}>
                    <L.FlexCols _gap={32}>
                        {/* 상품선택 */}
                        <L.FlexCols _gap={16}>
                            <T.Text _weight={600} _size={16} _color="gray900">
                                상품 선택
                            </T.Text>
                            <TitleInfoDiv
                                onClick={
                                    id ? () => {} : () => setItemModal(true)
                                }
                            >
                                {data.item?.length > 0 ? (
                                    <TitleInfo>{data.item[0].name}</TitleInfo>
                                ) : (
                                    <TitleInfo>선택하기</TitleInfo>
                                )}
                                <RightStyle>
                                    <ArrowRightB />
                                </RightStyle>
                            </TitleInfoDiv>
                            <T.Text _weight={400} _size={12} _color="error">
                                * 한번 등록 된 상품은 변경할 수 없습니다.
                            </T.Text>
                        </L.FlexCols>

                        {/* 상품 가격 & 상품 수량 */}
                        <L.FlexRows _content="space-between" _gap={32}>
                            <L.FlexCols _gap={16}>
                                <T.Text
                                    _weight={600}
                                    _size={16}
                                    _color="gray900"
                                >
                                    상품 가격(원)
                                </T.Text>
                                <TitleInfoDiv>
                                    <Input
                                        placeholder="상품 가격 입력"
                                        value={numberFormat(data.price)}
                                        maxLength={15}
                                        onChange={(e) =>
                                            setData({
                                                ...data,
                                                price: numberFormatter(
                                                    e.target.value
                                                ),
                                            })
                                        }
                                    />
                                    <span>￦</span>
                                </TitleInfoDiv>
                            </L.FlexCols>
                            <L.FlexCols _gap={16}>
                                <T.Text
                                    _weight={600}
                                    _size={16}
                                    _color="gray900"
                                >
                                    판매 수량
                                </T.Text>
                                <TitleInfoDiv>
                                    <Input
                                        placeholder="판매 수량 입력"
                                        value={numberFormat(data.count)}
                                        maxLength={15}
                                        onChange={(e) =>
                                            setData({
                                                ...data,
                                                count: numberFormatter(
                                                    e.target.value
                                                ),
                                            })
                                        }
                                    />
                                    <span>개</span>
                                </TitleInfoDiv>
                            </L.FlexCols>
                        </L.FlexRows>

                        {/* 시간 설정 */}
                        <L.FlexCols _gap={16}>
                            <T.Text _weight={600} _size={16} _color="gray900">
                                타임세일 기간 설정
                            </T.Text>
                            <L.FlexRows
                                _gap={16}
                                _items={"center"}
                                _content="space-between"
                            >
                                <TitleInfoDiv>
                                    <DatePicker
                                        showTimeSelect
                                        placeholderText="시작일 선택"
                                        selected={data.startDateTime}
                                        onChange={(date) =>
                                            setData((d) => ({
                                                ...d,
                                                startDateTime: date,
                                                endDateTime: "",
                                            }))
                                        }
                                        startDate={new Date()}
                                        minDate={new Date()}
                                        locale={ko}
                                        showPopperArrow={false}
                                        dateFormat="yy-MM-dd HH:mm"
                                    />
                                    <span>
                                        <Calendar />
                                    </span>
                                </TitleInfoDiv>
                                <span>~</span>
                                <TitleInfoDiv>
                                    <DatePicker
                                        showTimeSelect
                                        placeholderText="종료일 선택"
                                        selected={data.endDateTime}
                                        onChange={(date) => {
                                            setData((d) => ({
                                                ...d,
                                                endDateTime: date,
                                            }));
                                        }}
                                        onCalendarClose={() => {
                                            if (
                                                new Date(
                                                    data.endDateTime
                                                ).getTime() <=
                                                new Date(
                                                    data.startDateTime
                                                ).getTime()
                                            ) {
                                                setAlert({
                                                    contents:
                                                        "기간을 올바르게 써주세요.",
                                                    onButtonClick: () => {
                                                        setData((d) => ({
                                                            ...d,
                                                            endDateTime: "",
                                                        }));
                                                        setAlert(null);
                                                    },
                                                });
                                            }
                                        }}
                                        startDate={data.startDateTime}
                                        minDate={data.startDateTime}
                                        maxDate={maxDate}
                                        locale={ko}
                                        showPopperArrow={false}
                                        dateFormat="yy-MM-dd HH:mm"
                                        timeInputLabel={"시간"}
                                    />
                                    <span>
                                        <Calendar />
                                    </span>
                                </TitleInfoDiv>
                            </L.FlexRows>
                        </L.FlexCols>
                    </L.FlexCols>
                </L.Contents>

                <L.BottomRow _width={"100%"} _padding={"8px"}>
                    {id && (
                        <B.Button
                            type="button"
                            onClick={() => setConfirm(true)}
                            _width={"100%"}
                            _maxWidth={"140px"}
                            _height={"48px"}
                            _bg={"red"}
                            _color={"white"}
                            _size={"18px"}
                            _weight={700}
                            _radius={4}
                        >
                            타임세일 삭제
                        </B.Button>
                    )}
                    <B.Button
                        type="button"
                        _width={"100%"}
                        _height={"48px"}
                        _color={"white"}
                        _bg={active ? "green700" : "gray300"}
                        onClick={id ? updateHandler : createHandler}
                        disabled={loading || !active}
                        _size={"18px"}
                        _weight={700}
                        _radius={4}
                    >
                        {id ? "수정" : "등록"}
                    </B.Button>
                </L.BottomRow>

                {/* <B.FixedActionButton
                    type="button"
                    _displaymedia="none"
                    onClick={id ? updateHandler : createHandler}
                    disabled={loading || !active}
                    backgroundColor={active ? "green700" : "gray300"}
                >
                    {id ? "수정" : "등록"}
                </B.FixedActionButton> */}
            </L.Container>
            {itemModal && (
                <ItemSelectModal
                    storeId={auth.storeId}
                    selected={data.item[0]?.itemId}
                    modelClose={() => setItemModal(false)}
                    dataHandler={setData}
                />
            )}
            {alert && (
                <Alert
                    contents={alert.contents}
                    buttonText={"확인"}
                    onButtonClick={alert.onButtonClick}
                    onOverlayClick={() => {}}
                />
            )}
            {confirm && (
                <Confirm
                    contents="정말로 타임세일을 삭제시키겠습니까?"
                    confirmText="네"
                    cancelText="아니오"
                    onConfirmClick={() => {
                        setConfirm(false);
                        deleteHanler(data.timeSaleId);
                    }}
                    onCancelClick={() => setConfirm(false)}
                />
            )}
        </Layout>
    );
};

export default TimeSaleUploadPage;
