import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

/* ========= MEMBER ========= */
import MyPage from "components/MyPage";
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
import BusinessCoupon from "pages/business/BusinessPage/BusinessCoupon";
import BusinessReview from "pages/business/BusinessReview";
import BusinessProductUpload from "pages/business/BusinessPage/BusinessProductManagement/BusinessProductUpload";
import BusinessProductEdit from "pages/business/BusinessPage/BusinessProductManagement/BusinessProductEdit";
import BusinessNews from "pages/business/BusinessPage/BusinessNews/BusinessNews";
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
import ConfigurationPage from "pages/main/ConfigurationPage/ConfigurationPage";
import Alert from "components/commonUi/Alert";
import { authActions } from "store/slices/auth";
import BusinessProductManagementDetail from "pages/business/BusinessPage/BusinessProductManagement/BusinessProductManagementDetail";
import { getExpiry } from "utils/localStorage";
import BusinessProductEditInfo from './pages/business/BusinessPage/BusinessProductManagement/BusinessProductEditInfo';
import ReviewPage from "pages/member/ReviewPage";
import SearchDetailPage from "pages/main/Search/SearchDetailPage";
import SearchResultPage from "pages/main/Search/SearchResultPage";
import BusinessCouponUpload from './pages/business/BusinessPage/BusinessCouponUpload';
import NotFound from './pages/NotFound';
import ReviewUploadPage from './pages/member/ReviewUploadPage';

function App() {
  const dispatch = useDispatch();
  const location = useLocation();
  const [alert, setAlert] = useState(null);

  useEffect(() => {
    const data = getExpiry('accessToken');
    if(data !== null) {

      if(data.status) {
        dispatch(authActions.logout());
        return setAlert({
          title: "인증 기간 만료",
          contents: "인증 기간이 만료되었습니다.\n다시 로그인해주세요.",
          buttonText: "확인",
          onButtonClick: () => setAlert(false),
          onOverlayClick: () => setAlert(false),
        });
      }

      dispatch(authActions.login(data));
    }
  }, [location])

  return (
    <>
      <Routes>
        {/* ========== 메인 ========== */}
        <Route path="/">
          <Route path="" element={<MainPage />} />
          {/* 1) 검색페이지 */}
          <Route path="search" element={<SearchPage />} />
          {/* 2) 검색누르면나오는페이지 */}
          <Route path="search/detailpage" element={<SearchDetailPage />} />
          {/* 3) 검색어입력후페이지 */}
          <Route path="search/result" element={<SearchResultPage />} />
          <Route path="cart" element={<CartPage />} />
          <Route path="categories" element={<CategoryPage />} />
          <Route path="collections" element={<CollectionPage />} />
          <Route path="details/:id" element={<DetailsPage />} />
          <Route path="more" element={<MorePage />} />
          {/* 상점정보 */}
          <Route path="market/detail/:id" element={<MarketDetail />} />

        </Route>

        {/* ========== 회원관리 ========== */}
        <Route path="/member">
          <Route path="" element={<MyPage />} />
          {/* 1주차-회원-회원수정 */}
          <Route path="management" element={<MemberManagement />} />
          {/* 1주차-회원-회원탈퇴 */}
          <Route path="withdrawal" element={<MemberWithdrawal />} />
          {/* 1주차-회원-위치설정 */}
          <Route path="location" element={<LocationSetting />} />
          {/* 회원알림 */}
          <Route path="news" element={<MemberNews />} />
          {/* 받은쿠폰함 */}
          <Route path="coupon" element={<MyCoupon />} />
          {/* MY단골 */}
          <Route path="market" element={<MyMarket />} />
          {/* 리뷰 - 1) 내가쓴리뷰 */}
          <Route path="review" element={<ReviewPage />} />
          {/* 리뷰 - 2) 리뷰작성 */}
          <Route path="review/upload" element={<ReviewUploadPage />} />
        </Route>

        {/* ========== 비즈회원관리 ========== */}
        <Route path="/business">
          {/* 1주차-비즈회원-메인페이지 */}
          <Route path="" element={<BusinessPage />} />
          {/* 1주차-비즈회원-비즈회원신청 */}
          <Route path="application" element={<BusinessApplication />} />
          {/* 1주차-비즈회원-비즈정보관리(상점, 사업자) */}
          <Route path="management" element={<BusinessManagement />} />
          {/* 2주차-비즈회원-비즈상품 관리/등록/수정 */}
          {/* 상품 관리 */}
          <Route path="product" element={<BusinessProductManagement />} />
          <Route path="product/details/:id" element={<BusinessProductManagementDetail />} />
          {/* 상품 등록 */}
          <Route path="upload" element={<BusinessProductUpload />} />
          {/* 상품 수정 */}
          <Route path="edit" element={<BusinessProductEdit />} />
          <Route path="edit/info" element={<BusinessProductEditInfo />} />
          {/* 쿠폰관리 */}
          <Route path="coupon" element={<BusinessCoupon />} />
          {/* 쿠폰등록 */}
          <Route path="coupon/upload" element={<BusinessCouponUpload />} />
          {/* 리뷰관리 */}
          <Route path="review" element={<BusinessReview />} />
          <Route path="news" element={<BusinessNews />} />
        </Route>

        {/* ========== 로그인 ========== */}
        <Route path="/login">
          <Route path="" element={<LoginPage />} />
          <Route path="find/email" element={<FindEmail />} />
          <Route path="find/password" element={<FindPwd />} />
          <Route path="signup" element={<SignupPage />} />
        </Route>

        {/* ========== 주문 ========== */}
        <Route path="/order">
          <Route path="all" element={<OrderListPage />} />
          <Route path="new/:id" element={<OrderFormPage />} />
          <Route path="details/:id" element={<OrderDetailsPage />} />
        </Route>

        {/* ========== 환경설정 ========== */}
        <Route path="/setting">
          <Route path="" element={<SettingPage />} />
        </Route>

        {/* ========== 공지사항 ========== */}
        <Route path="/notice">
          <Route path="" element={<NoticePage />} />
          <Route path="details/:id" element={<NoticeDetailsPage />} />
        </Route>

        {/* ========== 고객센터 ========== */}
        <Route path="/service">
          <Route path="" element={<CustomerService />} />
          {/* 자주하는질문 */}
          <Route path="faq" element={<FrequentlyAskedQuestion />} />
          {/* 1:1 */}
          <Route path="inquiry" element={<InquiryPage />} />
          {/* voc */}
          <Route path="voc" element={<VocPage />} />
        {/* 약관 */}
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
