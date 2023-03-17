import React, { useState, useEffect, useCallback } from "react";
import Layout from "components/layout/Layout/Layout";
import { useNavigate, useParams } from "react-router-dom";
import * as L from "components/commonUi/Layout";
import * as T from "components/commonUi/Text";
import * as S from "./index.styled";
import { ArrowTop, Down } from "components/commonUi/Icon";
import DateToggle from "./DateToggle";
import { format } from "date-fns";
import { getSettlement } from "service/settlement";
import { numberFormat } from "utils/utils";

const BizSettlement = () => {
    const navigate = useNavigate();
    const { id } = useParams();

    const [date, setDate] = useState(new Date());
    const [item, setItem] = useState();
    const [loading, setLoading] = useState(false);
    const [show, setShow] = useState(false);

    const loadData = useCallback(async () => {
        const data = {
            storeId: id,
            date: format(date, "yyyy-MM-dd HH:mm:ss"),
        };
        setLoading(true);
        await getSettlement(data)
            .then((res) => setItem(res.data))
            .catch((e) => console.log(e))
            .finally(setLoading(false));
    }, [id, date]);

    useEffect(() => {
        if (id) loadData(id);
    }, [loadData, id, date]);

    if (loading) return <></>;

    return (
        <Layout
            title="정산 관리"
            cart={false}
            bell={false}
            onBackClick={() => navigate(-1)}
        >
            <L.Container>
                <L.Contents
                    _height="calc(100vh - 65px)"
                    _cursor="default"
                    _padding={0}
                >
                    <L.Scroll
                        _height="calc(100vh - 80px)"
                        style={{ padding: "0 0 40px" }}
                    >
                        <L.FlexCols>
                            <S.InfoBoxDiv
                                _content="center"
                                onClick={() => setShow((s) => !s)}
                            >
                                <T.Text
                                    _size={16}
                                    _color={"gray900"}
                                    _align="center"
                                >
                                    {format(date, "yyyy년 MM월")}
                                </T.Text>
                                <span>{show ? <ArrowTop /> : <Down />}</span>
                            </S.InfoBoxDiv>
                            {show && (
                                <DateToggle
                                    currentDate={date}
                                    onChange={setDate}
                                    close={() => setShow(false)}
                                />
                            )}
                        </L.FlexCols>

                        <S.SettlementContainer>
                            <S.Settlement>
                                <h1>{format(date, "MM월")} 주문 건수</h1>
                                <div className="container">
                                    <div className="content">
                                        <p>배달 주문</p>
                                        <p>
                                            <strong>
                                                {item
                                                    ? numberFormat(
                                                          item.deliveryCount
                                                      )
                                                    : 0}
                                            </strong>{" "}
                                            건
                                        </p>
                                    </div>
                                    <div className="content">
                                        <p>택배 주문</p>
                                        <p>
                                            <strong>
                                                {item
                                                    ? numberFormat(
                                                          item.parcelCount
                                                      )
                                                    : 0}
                                            </strong>{" "}
                                            건
                                        </p>
                                    </div>
                                    <div className="content">
                                        <p>픽업 주문</p>
                                        <p>
                                            <strong>
                                                {item
                                                    ? numberFormat(
                                                          item.pickupCount
                                                      )
                                                    : 0}
                                            </strong>{" "}
                                            건
                                        </p>
                                    </div>
                                </div>
                            </S.Settlement>
                            <S.Settlement>
                                <h1>{format(date, "MM월")} 정산 금액(예상)</h1>
                                <div className="container">
                                    <div className="content">
                                        <p>판매 금액</p>
                                        <p>
                                            <strong>
                                                {item
                                                    ? numberFormat(item.amount)
                                                    : 0}
                                            </strong>{" "}
                                            원
                                        </p>
                                    </div>
                                    <div className="content">
                                        <p>수수료</p>
                                        <p>
                                            -
                                            <strong>
                                                {item
                                                    ? numberFormat(
                                                          item.tossCommission
                                                      )
                                                    : 0}
                                            </strong>{" "}
                                            원
                                        </p>
                                    </div>
                                    <div className="total">
                                        <p>지급액</p>
                                        <p>
                                            <strong>
                                                {item
                                                    ? numberFormat(
                                                          item.amount -
                                                              item.tossCommission
                                                      )
                                                    : 0}
                                            </strong>{" "}
                                            원
                                        </p>
                                    </div>
                                </div>
                            </S.Settlement>
                        </S.SettlementContainer>
                        <T.Text _align="center" _size={16} _color="gray900">
                            {format(date, "MM월")} 정산금액(예상)은{" "}
                            <T.Text
                                as="strong"
                                _size={18}
                                _color="gray900"
                                _weight={600}
                            >
                                {item
                                    ? numberFormat(
                                          item.amount - item.tossCommission
                                      )
                                    : 0}
                            </T.Text>
                            원 입니다.
                        </T.Text>
                    </L.Scroll>
                </L.Contents>
            </L.Container>
        </Layout>
    );
};

export default BizSettlement;
