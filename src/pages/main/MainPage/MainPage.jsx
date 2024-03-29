import React, { useState, useEffect } from "react";

import MainBestCoupon from "components/Main/Main/MainBestCoupon/MainBestCoupon";
import MainLastChance from "components/Main/Main/MainLastChance/MainLastChance";
import MainBestProduct from "components/Main/Main/MainBestProduct/MainBestProduct";
import MainNewMarket from "components/Main/Main/MainNewMarket/MainNewMarket";
import MainBestCollection from "components/Main/Main/MainBestCollection/MainBestCollection";
import MainFooter from "components/Main/Main/MainFooter/MainFooter";
import { FooterStyle } from "./MainPageStyle";
import MainCategory from "components/Main/Main/MainCategory/MainCategory";
import FooterLayout from "components/layout/Footer/Footer";
import * as L from "components/commonUi/Layout";
import { useSelector } from "react-redux";
import { useLocation, useSearchParams } from "react-router-dom";
import Alert from "components/commonUi/Alert";
import { useNavigate } from "react-router-dom";
import LayoutMain from "components/layout/Layout/LayoutMain";
import MainBanner from "components/Main/Main/MainBanner/MainBanner";
import CategoryCollection from "components/Main/Main/CategoryCollection/index";
import MainTimeSale from "components/Main/Main/TimeSale/MainTimeSale";
import { memberInjectToken } from "service/member";
import MainCoachmark from "components/coachmark/MainCoachmark";
const categories = [
    "야채/과일",
    "정육",
    "수산/해산",
    "쌀/잡곡",
    "식품",
    "생활용품",
    "디저트",
    "식음료",
    "반려동물",
    "기타",
];

function MainPage() {
    const navigate = useNavigate();
    const [searchParams] = useSearchParams();
    const { state } = useLocation();
    const [alert, setAlert] = useState(null);
    const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

    const memberToken = async (token) => {
        await memberInjectToken(token).catch((e) => console.log(e));
    };

    useEffect(() => {
        if (state && state.error) {
            return setAlert({
                contents: state.error,
                buttonText: "확인",
                onButtonClick: () => {
                    setAlert(false);
                    navigate("/");
                },
                onOverlayClick: () => {
                    setAlert(false);
                    navigate("/");
                },
            });
        }
    }, [state]);

    useEffect(() => {
        if (isAuthenticated && searchParams.get("token")) {
            memberToken(searchParams.get("token"));
        }
    }, [searchParams]);

    return (
        <>
            {/* 코치마크 */}
            <MainCoachmark />

            <LayoutMain>
                <L.Container _padding="0px">
                    <L.Container _padding="0px" _gap="0px">
                        <MainBanner />
                        <MainCategory />
                    </L.Container>

                    {/* 공동구매 마지막 찬스 */}
                    <L.Contents _padding="20px 0px 20px 0px">
                        <MainLastChance />
                    </L.Contents>

                    {/* 우리동네 인기 쿠폰 */}
                    <L.Contents _padding="20px 0px 20px 0px">
                        <MainBestCoupon />
                    </L.Contents>

                    {/* 우리동네 타임세일 */}
                    <L.Contents _padding="20px 0px 20px 0px">
                        <MainTimeSale />
                    </L.Contents>

                    {/* My단골 인기 상품 */}
                    {isAuthenticated && <MainBestProduct />}

                    {/* 우리동네 신규 입점 */}
                    <L.Contents _cursor="default" _padding="20px 0px 20px 0px">
                        <MainNewMarket />
                    </L.Contents>

                    {/* 우리동네 인기 추천 */}
                    <L.Contents _cursor="default" _padding="20px 0px 20px 0px">
                        <MainBestCollection />
                    </L.Contents>

                    {/* 카테고리 */}
                    {categories.map((c, i) => (
                        <L.Contents
                            key={i}
                            _cursor="default"
                            _padding="20px 0px 20px 0px"
                        >
                            <CategoryCollection category={c} />
                        </L.Contents>
                    ))}

                    <L.Inner>
                        <FooterLayout />
                        <L.FlexRows _padding="0px 0px 60px 0px"></L.FlexRows>
                    </L.Inner>
                </L.Container>
                <FooterStyle>
                    <MainFooter />
                </FooterStyle>

                {alert && (
                    <Alert
                        title={alert.title}
                        contents={alert.contents}
                        buttonText={alert.buttonText}
                        onButtonClick={alert.onButtonClick}
                        onOverlayClick={alert.onOverlayClick}
                    />
                )}
            </LayoutMain>
        </>
    );
}

export default MainPage;
