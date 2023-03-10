import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

/* ========= MEMBER ========= */
import LocationSetting from "pages/login/LocationSetting/LocationSetting";
import MemberManagement from "pages/member/MemberManagement/MemberManagement";
import MemberWithdrawal from "pages/member/MemberWithdrawal/MemberWithdrawal";
import MyCoupon from "pages/member/MyCoupon";
import MyMarket from "pages/member/MyMarket";
import MemberNews from "pages/member/MemberNews";
/* ========== BUSINESS ========== */
import BusinessPage from "pages/business/BusinessPage/BusinessPage";
import BusinessApplication from "pages/business/BusinessPage/BusinessApplication/BusinessApplication";
import BusinessManagement from "pages/business/BusinessPage/BusinessManagement";
import BusinessProductManagement from "pages/business/BusinessPage/BusinessProductManagement/BusinessProductManagement";
import BusinessCoupon from "pages/business/BusinessPage/Coupon/BusinessCoupon";
import BusinessReview from "pages/business/BusinessReview";
import BusinessProductUpload from "pages/business/BusinessPage/BusinessProductManagement/BusinessProductUpload";
import BusinessNews from "pages/business/BusinessPage/BusinessNews/BusinessNews";
import OrderManagement from "pages/business/BusinessPage/Order/OrderManagement";
import OrderManagementDetailsAuthPage from "pages/business/BusinessPage/Order/OrderManagementDetailsAuthPage";
/* ========== LOGIN ========== */
import LoginPage from "pages/login/loginpage/LoginPage";
import FindEmail from "pages/login/email/FindEmail";
import FindPwd from "pages/login/password/FindPwd";
/* ========== MAIN ========== */
import MainPage from "pages/main/MainPage/MainPage";
import DetailsPage from "pages/main/DetailsPage/DetailsPage";
import CollectionPage from "pages/main/Product/CollectionPage";
import CategoryPage from "pages/main/Product/CategoryPage";
import CartPage from "pages/main/CartPage/CartPage";
import MorePage from "pages/main/MorePage/MorePage";
import MarketDetail from "pages/main/MarketDetail/MarketDetail";
import SearchPage from "pages/main/Search/SearchPage";
/* ========== ORDER ========== */
import OrderListPage from "pages/orders/OrderListPage";
import OrderFormPage from "pages/orders/OrderFormPage";
import OrderDetailsPage from "pages/orders/OrderDetailsPage";
import SignupPage from "pages/login/signup/SignupPage";
/* ========== SETTING ========== */
import SettingPage from "pages/setting/SettingPage";
/* ========== NOTICE ========== */
import NoticePage from "pages/notice/NoticePage";
import NoticeDetailsPage from "pages/notice/NoticeDetailsPage";
/* ========== SERVICE ========== */
import CustomerService from "pages/service/CustomerService/CustomerService";
import TermsPage from "pages/service/TermsPage/TermsPage";
import ServiceTerms from "components/service/TermsPage/ServiceTerms";
import LocationTerms from "components/service/TermsPage/LocationTerms";
import PrivacyTerms from "components/service/TermsPage/PrivacyTerms";
import FrequentlyAskedQuestion from "pages/service/CustomerService/FrequentlyAskedQuestion";
import InquiryPage from "pages/service/CustomerService/InquiryPage";
import VocPage from "pages/service/CustomerService/VocPage";
import InquiryDetailsPage from "pages/service/CustomerService/InquiryDetailsPage";
import Alert from "components/commonUi/Alert";
import { authActions } from "store/slices/auth";
import { getExpiry } from "utils/localStorage";
import BusinessProductEditInfo from "./pages/business/BusinessPage/BusinessProductManagement/BusinessProductEditInfo";
import ReviewPage from "pages/member/ReviewPage";
import SearchDetailPage from "pages/main/Search/SearchDetailPage";
import SearchResultPage from "pages/main/Search/SearchResultPage";
import BusinessCouponUpload from "./pages/business/BusinessPage/Coupon/BusinessCouponUpload";
import ReviewUploadPage from "./pages/member/ReviewUploadPage";
import TimeSalePage from "pages/business/BusinessPage/timesale/TimeSalePage";
import TimeSaleUploadPage from "pages/business/BusinessPage/timesale/TimeSaleUploadPage";

function App() {
    const dispatch = useDispatch();
    const location = useLocation();
    const [alert, setAlert] = useState(null);

    const member = () => {
        const data = getExpiry("accessToken");
        if (data !== null) {
            if (data.status) {
                dispatch(authActions.logout());
                return setAlert({
                    title: "?????? ?????? ??????",
                    contents:
                        "?????? ????????? ?????????????????????.\n?????? ?????????????????????.",
                    buttonText: "??????",
                    onButtonClick: () => setAlert(false),
                    onOverlayClick: () => setAlert(false),
                });
            }

            dispatch(authActions.login(data));
        }
    };

    // ????????? ??????
    useEffect(() => {
        member();
        window.scrollTo(0, 0);
    }, [location]);

    return (
        <>
            <Routes>
                {/* ========== ?????? ========== */}
                <Route path="/">
                    <Route path="" element={<MainPage />} />
                    {/* 1) ??????????????? */}
                    <Route path="search" element={<SearchPage />} />
                    {/* 2) ????????????????????????????????? */}
                    <Route
                        path="search/detailpage"
                        element={<SearchDetailPage />}
                    />
                    {/* 3) ??????????????????????????? */}
                    <Route
                        path="search/result"
                        element={<SearchResultPage />}
                    />
                    <Route path="cart" element={<CartPage />} />
                    <Route path="categories" element={<CategoryPage />} />
                    <Route path="collections" element={<CollectionPage />} />
                    <Route path="details/:id" element={<DetailsPage />} />
                    <Route path="more" element={<MorePage />} />
                    {/* ???????????? */}
                    <Route
                        path="market/detail/:id"
                        element={<MarketDetail />}
                    />
                </Route>

                {/* ========== ???????????? ========== */}
                <Route path="/member">
                    {/* 1??????-??????-???????????? */}
                    <Route path="management" element={<MemberManagement />} />
                    {/* 1??????-??????-???????????? */}
                    <Route path="withdrawal" element={<MemberWithdrawal />} />
                    {/* 1??????-??????-???????????? */}
                    <Route path="location" element={<LocationSetting />} />
                    {/* ???????????? */}
                    <Route path="news" element={<MemberNews />} />
                    {/* ??????????????? */}
                    <Route path="coupon" element={<MyCoupon />} />
                    {/* MY?????? */}
                    <Route path="market" element={<MyMarket />} />
                    {/* ?????? - 1) ??????????????? */}
                    <Route path="review" element={<ReviewPage />} />
                    {/* ?????? - 2) ???????????? */}
                    <Route
                        path="review/upload"
                        element={<ReviewUploadPage />}
                    />
                </Route>

                {/* ========== ?????????????????? ========== */}
                <Route path="/business">
                    {/* 1??????-????????????-??????????????? */}
                    <Route path="" element={<BusinessPage />} />
                    {/* 1??????-????????????-?????????????????? */}
                    <Route
                        path="application"
                        element={<BusinessApplication />}
                    />
                    {/* 1??????-????????????-??????????????????(??????, ?????????) */}
                    <Route path="management" element={<BusinessManagement />} />
                    {/* 2??????-????????????-???????????? ??????/??????/?????? */}
                    {/* ?????? ?????? */}
                    <Route
                        path="product"
                        element={<BusinessProductManagement />}
                    />
                    <Route path="timesale" element={<TimeSalePage />} />
                    <Route
                        path="timesale/upload"
                        element={<TimeSaleUploadPage />}
                    />
                    <Route
                        path="timesale/update/:id"
                        element={<TimeSaleUploadPage />}
                    />
                    {/* ?????? ?????? */}
                    <Route path="upload" element={<BusinessProductUpload />} />
                    {/* ?????? ?????? */}
                    <Route
                        path="edit/:id"
                        element={<BusinessProductUpload />}
                    />
                    <Route
                        path="edit/info"
                        element={<BusinessProductEditInfo />}
                    />
                    {/* ???????????? */}
                    <Route path="coupon" element={<BusinessCoupon />} />
                    {/* ???????????? */}
                    <Route
                        path="coupon/upload"
                        element={<BusinessCouponUpload />}
                    />
                    {/* ?????? ?????? */}
                    <Route
                        path="coupon/update/:id"
                        element={<BusinessCouponUpload />}
                    />
                    {/* ???????????? */}
                    <Route path="review" element={<BusinessReview />} />
                    <Route path="news" element={<BusinessNews />} />
                    {/* ???????????? */}
                    <Route path="order" element={<OrderManagement />} />
                    <Route
                        path="order/details/auth"
                        element={<OrderManagementDetailsAuthPage />}
                    />
                </Route>

                {/* ========== ????????? ========== */}
                <Route path="/login">
                    <Route path="" element={<LoginPage />} />
                    <Route path="find/email" element={<FindEmail />} />
                    <Route path="find/password" element={<FindPwd />} />
                    <Route path="signup" element={<SignupPage />} />
                </Route>

                {/* ========== ?????? ========== */}
                <Route path="/order">
                    <Route path="all" element={<OrderListPage />} />
                    <Route path="new" element={<OrderFormPage />} />
                    <Route path="details/:id" element={<OrderDetailsPage />} />
                </Route>

                {/* ========== ???????????? ========== */}
                <Route path="/setting">
                    <Route path="" element={<SettingPage />} />
                </Route>

                {/* ========== ???????????? ========== */}
                <Route path="/notice">
                    <Route path="" element={<NoticePage />} />
                    <Route path="details/:id" element={<NoticeDetailsPage />} />
                </Route>

                {/* ========== ???????????? ========== */}
                <Route path="/service">
                    <Route path="" element={<CustomerService />} />
                    {/* ?????????????????? */}
                    <Route path="faq" element={<FrequentlyAskedQuestion />} />
                    {/* 1:1 */}
                    <Route path="inquiry" element={<InquiryPage />} />
                    <Route
                        path="inquiry/details/:id"
                        element={<InquiryDetailsPage />}
                    />
                    {/* voc */}
                    <Route path="voc" element={<VocPage />} />
                    {/* ?????? */}
                    <Route path="terms" element={<TermsPage />} />
                    <Route path="terms/service" element={<ServiceTerms />} />
                    <Route path="terms/location" element={<LocationTerms />} />
                    <Route path="terms/privacy" element={<PrivacyTerms />} />
                </Route>
            </Routes>
            {alert && (
                <Alert
                    title={alert.title}
                    contents={alert.contents}
                    buttonText={alert.buttonText}
                    onButtonClick={alert.onButtonClick}
                    onOverlayClick={alert.onOverlayClick}
                />
            )}
        </>
    );
}

export default App;
