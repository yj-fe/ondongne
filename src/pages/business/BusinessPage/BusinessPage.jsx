import React, { useState, useEffect, useCallback } from "react";
import { Link, useNavigate } from "react-router-dom";
import BusinessHeader from "components/Buisness/Header/BusinessHeader";
import { ReactComponent as Right } from "assets/main/right.svg";
import { ReactComponent as OrderIcon } from "assets/icons/business/neworder.svg";
import { ReactComponent as Pickup } from "assets/icons/business/pickup.svg";
import { ReactComponent as NewReview } from "assets/icons/business/newreview.svg";
import {
    TermsDiv,
    TermsTitle,
    TermsIconStyle,
} from "pages/service/TermsPage/TermsPageStyle";
import {
    InfoCard,
    InfoIconStyle,
    CardCount,
    CardText,
    CardTextDiv,
    MyBestProductContent,
    EmptyDiv,
    EmptyText,
    EmptyButton,
    EmptyButtonIcon,
    EmptyButtonText,
} from "./BusinessPageStyle";
import { getDashboard } from "service/biz";
import { useSelector, useDispatch } from "react-redux";
import * as L from "components/commonUi/Layout";
import * as T from "components/commonUi/Text";
import FooterLayout from "components/layout/Footer/Footer";
import { authActions } from "store/slices/auth";
import { ProductCard } from "components/Main/productDetails/ProductCard";
import Layout from "components/layout/Layout/Layout";
import { CursorDiv } from "components/Common/LayoutPageStyle";
import CouponList from "components/Buisness/BuisnessPage/CouponList";

function BusinessPage() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const auth = useSelector((state) => state.auth);

    const [data, setData] = useState({
        bizId: "",
        storeId: "",
        approvalStatus: false,
        orderCount: "",
        deliveryCount: "",
        reviewCount: "",
        storeCouponList: [],
        itemList: {},
    });

    // 비즈 회원 체크
    const loadData = useCallback(async () => {
        const response = await getDashboard();

        if (response && response.data) {
            const { data } = response.data;
            if (!data) {
                return navigate("/", {
                    replace: true,
                    state: { error: "잘못된 접근입니다." },
                });
            }
            setData(data);
            dispatch(authActions.biz(data));
        }
    }, []);

    useEffect(() => {
        if (auth.isAuthenticated) loadData();
    }, [loadData, auth]);

    return (
        <CursorDiv>
            <BusinessHeader />
            <Layout>
                <L.Container>
                    {/* ==================== 가게 정보 ==================== */}
                    <L.Contents>
                        <L.FlexCols _gap={32}>
                            <T.Text _weight={600} _size={18}>
                                가게 정보
                            </T.Text>
                            <L.GridTwo>
                                <InfoCard
                                    onClick={() => navigate("/business/order")}
                                >
                                    <OrderIcon />
                                    <CardTextDiv>
                                        <CardText>신규 주문</CardText>
                                        <CardCount>
                                            {data.orderCount} 건
                                        </CardCount>
                                    </CardTextDiv>
                                </InfoCard>
                                <InfoCard
                                    onClick={() => navigate("/business/order")}
                                >
                                    <InfoIconStyle>
                                        <Pickup />
                                    </InfoIconStyle>
                                    <CardTextDiv>
                                        <CardText>배달/픽업</CardText>
                                        <CardCount>
                                            {data.deliveryCount} 건
                                        </CardCount>
                                    </CardTextDiv>
                                </InfoCard>
                                <InfoCard
                                    onClick={() => navigate("/business/review")}
                                >
                                    <InfoIconStyle>
                                        <NewReview />
                                    </InfoIconStyle>
                                    <CardTextDiv>
                                        <CardText>신규 리뷰</CardText>
                                        <CardCount>
                                            {data.reviewCount} 건
                                        </CardCount>
                                    </CardTextDiv>
                                </InfoCard>
                            </L.GridTwo>
                        </L.FlexCols>
                    </L.Contents>
                </L.Container>

                {/* ==================== 2차개발 - 발행한 쿠폰 ==================== */}
                <L.Container>
                    <L.Contents>
                        <L.FlexCols _gap={32}>
                            <T.Text _weight={600} _size={18}>
                                발행한 쿠폰
                            </T.Text>
                            {data.storeCouponList.length === 0 && (
                                <EmptyDiv>
                                    <EmptyText>
                                        아직 등록된 쿠폰이 없습니다.
                                    </EmptyText>
                                    <EmptyButton
                                        onClick={() =>
                                            navigate("/business/coupon/upload")
                                        }
                                    >
                                        <EmptyButtonText>
                                            쿠폰 등록
                                        </EmptyButtonText>
                                        <EmptyButtonIcon>
                                            <Right />
                                        </EmptyButtonIcon>
                                    </EmptyButton>
                                </EmptyDiv>
                            )}
                            {data.storeCouponList.length > 0 && (
                                <CouponList list={data.storeCouponList} />
                            )}
                        </L.FlexCols>
                    </L.Contents>
                </L.Container>

                {/* ==================== 내 상점 인기상품 ==================== */}
                <L.Container>
                    <L.Contents _padding="20px">
                        <L.FlexRows _items="center" _padding="0 0 32px">
                            <T.Text _weight={600} _size={18}>
                                내 상점 인기상품
                            </T.Text>
                        </L.FlexRows>
                        {!data.itemList.items ||
                            ((data.itemList.items &&
                                data.itemList.items.length) === 0 && (
                                <EmptyDiv>
                                    <EmptyText>
                                        아직 등록된 상품이 없습니다.
                                    </EmptyText>
                                    <EmptyButton
                                        onClick={() =>
                                            navigate("/business/upload")
                                        }
                                    >
                                        <EmptyButtonText>
                                            상품 등록
                                        </EmptyButtonText>
                                        <EmptyButtonIcon>
                                            <Right />
                                        </EmptyButtonIcon>
                                    </EmptyButton>
                                </EmptyDiv>
                            ))}
                        {data.itemList.items &&
                            data.itemList.items.length > 0 && (
                                <L.FlexRowsCP>
                                    <MyBestProductContent>
                                        {data.itemList.items.map(
                                            (item, index) => (
                                                <React.Fragment key={index}>
                                                    <ProductCard
                                                        item={item}
                                                        lastRef={null}
                                                        width={150}
                                                        isCart={false}
                                                    />
                                                </React.Fragment>
                                            )
                                        )}
                                    </MyBestProductContent>
                                </L.FlexRowsCP>
                            )}
                    </L.Contents>
                </L.Container>

                {/* ==================== 비즈 정보 관리 ==================== */}
                <L.Container>
                    <L.Contents>
                        <Link to="/business/management">
                            <TermsDiv>
                                <TermsTitle>비즈 정보 관리</TermsTitle>
                                <TermsIconStyle>
                                    <Right />
                                </TermsIconStyle>
                            </TermsDiv>
                        </Link>
                        <Link to="/business/product">
                            <TermsDiv>
                                <TermsTitle>상품 관리</TermsTitle>
                                <TermsIconStyle>
                                    <Right />
                                </TermsIconStyle>
                            </TermsDiv>
                        </Link>
                        <Link to="/business/timesale">
                            <TermsDiv>
                                <TermsTitle>타임세일 관리</TermsTitle>
                                <TermsIconStyle>
                                    <Right />
                                </TermsIconStyle>
                            </TermsDiv>
                        </Link>
                        <Link to="/business/order">
                            <TermsDiv>
                                <TermsTitle>주문 관리</TermsTitle>
                                <TermsIconStyle>
                                    <Right />
                                </TermsIconStyle>
                            </TermsDiv>
                        </Link>
                        <Link to="/business/review">
                            <TermsDiv>
                                <TermsTitle>리뷰 관리</TermsTitle>
                                <TermsIconStyle>
                                    <Right />
                                </TermsIconStyle>
                            </TermsDiv>
                        </Link>
                        <Link to="coupon">
                            <TermsDiv>
                                <TermsTitle>쿠폰/소식 관리</TermsTitle>
                                <TermsIconStyle>
                                    <Right />
                                </TermsIconStyle>
                            </TermsDiv>
                        </Link>
                        <Link to={`/business/membership/${auth.storeId}`}>
                            <TermsDiv>
                                <TermsTitle>단골 관리</TermsTitle>
                                <TermsIconStyle>
                                    <Right />
                                </TermsIconStyle>
                            </TermsDiv>
                        </Link>
                        <Link to={`/business/settlement/${auth.storeId}`}>
                            <TermsDiv>
                                <TermsTitle>정산 관리</TermsTitle>
                                <TermsIconStyle>
                                    <Right />
                                </TermsIconStyle>
                            </TermsDiv>
                        </Link>
                    </L.Contents>
                </L.Container>

                <L.Inner>
                    <FooterLayout />
                </L.Inner>
            </Layout>
        </CursorDiv>
    );
}

export default BusinessPage;
