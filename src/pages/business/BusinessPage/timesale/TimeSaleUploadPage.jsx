import React, { useState } from "react";
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

const TimeSaleUploadPage = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const auth = useSelector((state) => state.auth);
    const [data, setData] = useState({
        item: [],
        price: "",
        count: "",
        startDateTime: "",
        endDateTime: "",
    });

    console.log("data ; ", data);
    const [itemModal, setItemModal] = useState(false);

    const [loading, setLoading] = useState(false);

    return (
        <Layout
            title={id ? "타임세일 수정" : "타임세일 등록"}
            cart={false}
            bell={false}
            completed={true}
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
                            <TitleInfoDiv onClick={() => setItemModal(true)}>
                                {data.item?.length > 0 ? (
                                    <TitleInfo>{data.item[0].name}</TitleInfo>
                                ) : (
                                    <TitleInfo>선택하기</TitleInfo>
                                )}
                                <RightStyle>
                                    <ArrowRightB />
                                </RightStyle>
                            </TitleInfoDiv>
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
                                        onChange={(date) =>
                                            setData((d) => ({
                                                ...d,
                                                endDateTime: date,
                                            }))
                                        }
                                        startDate={
                                            data.startDateTime
                                                ? data.startDateTime
                                                : new Date()
                                        }
                                        minDate={new Date()}
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

                <B.FixedActionButton
                    type="button"
                    _displaymedia="none"
                    onClick={onsubmit}
                    disabled={loading}
                >
                    {id ? "수정" : "등록"}
                </B.FixedActionButton>
            </L.Container>
            {itemModal && (
                <ItemSelectModal
                    storeId={auth.storeId}
                    selected={data.item[0]?.itemId}
                    modelClose={() => setItemModal(false)}
                    dataHandler={setData}
                />
            )}
        </Layout>
    );
};

export default TimeSaleUploadPage;
