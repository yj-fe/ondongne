import React, { useEffect, useState, Fragment } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import * as L from "components/commonUi/Layout";
import * as T from "components/commonUi/Text";
import Layout from "components/layout/Layout/Layout";
import { ProductCardGrid } from "components/Main/productDetails/ProductCardGrid";
import { StoreListCard } from "components/commonUi/StoreListCard";
import {
    newStoreList,
    getLastGroupItemList,
    bestItemList,
    getStoreCouponList,
    getTimeSaleItemList,
} from "service/main";
import { useSelector } from "react-redux";
import LoadingBar from "components/commonUi/LoadingBar";
import { useInView } from "react-intersection-observer";

function CollectionPage() {
    const navigate = useNavigate();
    const location = useLocation();
    const { title, type } = location.state;
    const local = useSelector((state) => state.local);

    const [list, setList] = useState([]);
    const [totalCount] = useState(0);
    const limit = 100;

    const [loading, setLoading] = useState(false);
    const [ref, inView] = useInView();

    const fetching = async () => {
        if (title === "우리동네 인기 쿠폰") {
            return await getStoreCouponList(local, limit);
        }

        if (title === "우리동네 인기 추천") {
            return await bestItemList(local, limit);
        }

        if (title === "공동구매 마지막 찬스") {
            return await getLastGroupItemList(local, limit);
        }

        if (title === "우리동네 신규 입점") {
            return await newStoreList(local, limit);
        }

        if (title === "우리동네 타임세일") {
            return await getTimeSaleItemList(local, limit);
        }
    };

    const loadData = async () => {
        setLoading(true);
        const response = await fetching();
        if (response && response.data) {
            setList(response.data.data.stores ?? response.data.data.items);
            setLoading(false);
        }
    };

    useEffect(() => {
        if (inView && totalCount === list.length) {
            loadData();
        }
    }, [inView]);

    useEffect(() => {
        loadData();
    }, []);

    return (
        <div>
            <Layout
                title={title}
                bell={true}
                cart={true}
                onBackClick={() => navigate("/")}
            >
                <L.Container>
                    <L.Contents _height={"100vh - 108px"} _padding="0">
                        <L.Scroll _height="calc(100vh - 68px)">
                            <L.FlexCols _padding={"20px 24px"} _gap="0">
                                {/* =================== 없을때 =================== */}
                                {!loading && list.length === 0 && (
                                    <L.FlexRows
                                        _content="center"
                                        _gap="0px"
                                        _padding="56px 0px"
                                        _height="calc(100vh - 230px)"
                                    >
                                        <T.Text
                                            _weight={300}
                                            _size={15}
                                            _color="gray600"
                                            _align="center"
                                        >
                                            <p>
                                                {title === "우리동네 인기 쿠폰"
                                                    ? "등록된 쿠폰이 없습니다."
                                                    : "등록된 상품이 없습니다."}
                                            </p>
                                        </T.Text>
                                    </L.FlexRows>
                                )}
                                {/* =================== 있을때 =================== */}
                                {!loading && list.length > 0 && type === 0 ? (
                                    <StoreListCard
                                        list={list}
                                        lastRef={ref}
                                        setData={setList}
                                    />
                                ) : (
                                    <L.Grid _padding={0}>
                                        {list.map((item, index) => (
                                            <Fragment key={index}>
                                                <ProductCardGrid
                                                    item={item}
                                                    lastRef={
                                                        list.length ===
                                                        index + 1
                                                            ? ref
                                                            : null
                                                    }
                                                />
                                            </Fragment>
                                        ))}
                                    </L.Grid>
                                )}
                                {/* =================== 로딩 =================== */}
                                {loading && <LoadingBar />}
                            </L.FlexCols>
                        </L.Scroll>
                    </L.Contents>
                </L.Container>
            </Layout>
        </div>
    );
}

export default CollectionPage;
