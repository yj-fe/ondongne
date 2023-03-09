import React, { useEffect, useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Layout from "components/layout/Layout/Layout";
import * as L from "components/commonUi/Layout";
import * as T from "components/commonUi/Text";
import { Down } from "components/commonUi/Icon";
import { useSelector } from "react-redux";
import {
    ModalBody,
    ModalDiv1,
    ModalDiv2,
    ModalOutside,
    ModalTitle,
} from "components/Main/More/ModalPageStyle";
import { BizTimeSaleCard } from "components/Main/productDetails/BizTimeSaleCard";
import { CursorDiv } from "components/Common/LayoutPageStyle";
import { getBizTimesaleList } from "service/timesale";

function TimeSalePage() {
    const navigate = useNavigate();
    const auth = useSelector((state) => state.auth);

    const [items, setItems] = useState([]);

    const [modal, setModal] = useState(false);
    const [sort, setSort] = useState("create");
    const [loading, setLoading] = useState(false);

    // ====================================
    const getItem = useCallback(async () => {
        setLoading(true);
        const response = await getBizTimesaleList({
            storeId: auth.storeId,
            sort,
        });

        if (response && response.data) {
            setItems(response.data.data.items);
        }
        setLoading(false);
    }, [auth, sort]);

    useEffect(() => {
        if (auth.isAuthenticated) getItem();
    }, [sort, auth, getItem]);

    if (loading) return <></>;

    return (
        <CursorDiv>
            <Layout
                title="타임세일 관리"
                cart={false}
                bell={false}
                onBackClick={() => navigate("/business")}
            >
                <L.Container>
                    <L.Contents
                        _padding="24px 20px"
                        _height={"calc(100vh - 60px)"}
                    >
                        <L.Scroll _height={"calc(100vh - 90px)"}>
                            <L.FlexCols _padding={0} _gap={0}>
                                <L.FlexRows _content="space-between">
                                    <div>
                                        <T.Text
                                            _size={16}
                                            _weight={600}
                                            _color="gray900"
                                        >
                                            전체 {items?.length}
                                        </T.Text>
                                    </div>
                                    <L.FlexRows
                                        onClick={() => setModal(true)}
                                        _gap={4}
                                        _content="flex-end"
                                        _width="150px"
                                    >
                                        <T.Text
                                            _align="right"
                                            _size={13}
                                            _weight={400}
                                            _color="gray900"
                                        >
                                            {sort === "create"
                                                ? "최신 순"
                                                : "마감 입박 순"}
                                        </T.Text>
                                        <button type="button">
                                            <Down />
                                        </button>
                                    </L.FlexRows>
                                </L.FlexRows>

                                <L.Contents _padding="0px" _gap={20}>
                                    {items?.length === 0 && (
                                        <L.Contents _padding="50px 0px">
                                            <L.NoneDataContainer>
                                                <T.Text
                                                    _align="center"
                                                    _size={15}
                                                    _weight={400}
                                                    _color="gray600"
                                                >
                                                    준비된 타임세일 상품이
                                                    없습니다.
                                                </T.Text>
                                                <T.Text
                                                    _align="center"
                                                    _size={15}
                                                    _weight={400}
                                                    _color="gray600"
                                                >
                                                    타입세일을 등록해보세요!
                                                </T.Text>
                                            </L.NoneDataContainer>
                                        </L.Contents>
                                    )}
                                    <L.Grid>
                                        {items?.length > 0 &&
                                            items.map((item) => (
                                                <React.Fragment
                                                    key={item.itemId}
                                                >
                                                    <BizTimeSaleCard
                                                        isCart={false}
                                                        item={item}
                                                    />
                                                </React.Fragment>
                                            ))}
                                    </L.Grid>
                                </L.Contents>
                            </L.FlexCols>
                        </L.Scroll>
                    </L.Contents>
                </L.Container>
                {modal && (
                    <ModalFilter
                        type={sort}
                        handler={setSort}
                        closeSelector={() => setModal(false)}
                    />
                )}
            </Layout>
        </CursorDiv>
    );
}

// 정렬 모달
export function ModalFilter({ type, handler, closeSelector }) {
    const [data, setData] = useState([
        {
            id: 0,
            name: "최신 순",
            value: "create",
            checked: false,
        },
        {
            id: 1,
            name: "마감 입박 순",
            value: "end",
            checked: false,
        },
    ]);
    const clickHandler = (value) => {
        setData(
            data.map((item) =>
                item.value === value
                    ? { ...item, checked: !item.checked }
                    : { ...item, checked: false }
            )
        );
        handler(value);
        closeSelector();
    };

    useEffect(() => {
        setData(
            data.map((item) =>
                item.value === type ? { ...item, checked: !item.checked } : item
            )
        );
    }, []);
    return (
        <ModalOutside onClick={closeSelector}>
            <ModalBody>
                <ModalDiv1>정렬</ModalDiv1>
                <ModalDiv2>
                    {data.map((item) => (
                        <ModalTitle
                            key={item.id}
                            onClick={() => clickHandler(item.value)}
                        >
                            <T.Text
                                _weight={item.checked ? 600 : 400}
                                _size={15}
                                _color={item.checked ? "green700" : "gray900"}
                            >
                                {item.name}
                            </T.Text>
                        </ModalTitle>
                    ))}
                </ModalDiv2>
            </ModalBody>
        </ModalOutside>
    );
}

export default TimeSalePage;
