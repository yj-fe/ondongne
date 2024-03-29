import { Routes, Route, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

/* ========= MEMBER ========= */
import LocationSetting from 'pages/login/LocationSetting/LocationSetting';
import MemberManagement from 'pages/member/MemberManagement/MemberManagement';
import MemberWithdrawal from 'pages/member/MemberWithdrawal/MemberWithdrawal';
import MyCoupon from 'pages/member/MyCoupon';
import MyMarket from 'pages/member/MyMarket';
import MemberNews from 'pages/member/MemberNews';
/* ========== BUSINESS ========== */
import BusinessPage from 'pages/business/BusinessPage/BusinessPage';
import BusinessApplication from 'pages/business/BusinessPage/BusinessApplication/BusinessApplication';
import BusinessManagement from 'pages/business/BusinessPage/BusinessManagement';
import BusinessProductManagement from 'pages/business/BusinessPage/BusinessProductManagement/BusinessProductManagement';
import BusinessCoupon from 'pages/business/BusinessPage/Coupon/BusinessCoupon';
import BusinessReview from 'pages/business/BusinessReview';
import BusinessProductUpload from 'pages/business/BusinessPage/BusinessProductManagement/BusinessProductUpload';
import BusinessNews from 'pages/business/BusinessPage/BusinessNews/BusinessNews';
import OrderManagement from 'pages/business/BusinessPage/Order/OrderManagement';
import OrderManagementDetailsAuthPage from 'pages/business/BusinessPage/Order/OrderManagementDetailsAuthPage';
/* ========== LOGIN ========== */
import LoginPage from 'pages/login/loginpage/LoginPage';
import FindEmail from 'pages/login/email/FindEmail';
import FindPwd from 'pages/login/password/FindPwd';
/* ========== MAIN ========== */
import MainPage from 'pages/main/MainPage/MainPage';
import DetailsPage from 'pages/main/DetailsPage/DetailsPage';
import CollectionPage from 'pages/main/Product/CollectionPage';
import CategoryPage from 'pages/main/Product/CategoryPage';
import CartPage from 'pages/main/CartPage/CartPage';
import MorePage from 'pages/main/MorePage/MorePage';
import MarketDetail from 'pages/main/MarketDetail/MarketDetail';
import SearchPage from 'pages/main/Search/SearchPage';
/* ========== ORDER ========== */
import OrderListPage from 'pages/orders/OrderListPage';
import OrderFormPage from 'pages/orders/OrderFormPage';
import OrderDetailsPage from 'pages/orders/OrderDetailsPage';
import SignupPage from 'pages/login/signup/SignupPage';
/* ========== SETTING ========== */
import SettingPage from 'pages/setting/SettingPage';
/* ========== NOTICE ========== */
import NoticePage from 'pages/notice/NoticePage';
import NoticeDetailsPage from 'pages/notice/NoticeDetailsPage';
/* ========== SERVICE ========== */
import CustomerService from 'pages/service/CustomerService/CustomerService';
import TermsPage from 'pages/service/TermsPage/TermsPage';
import ServiceTerms from 'components/service/TermsPage/ServiceTerms';
import LocationTerms from 'components/service/TermsPage/LocationTerms';
import PrivacyTerms from 'components/service/TermsPage/PrivacyTerms';
import FrequentlyAskedQuestion from 'pages/service/CustomerService/FrequentlyAskedQuestion';
import InquiryPage from 'pages/service/CustomerService/InquiryPage';
import VocPage from 'pages/service/CustomerService/VocPage';
import InquiryDetailsPage from 'pages/service/CustomerService/InquiryDetailsPage';
import BusinessProductEditInfo from './pages/business/BusinessPage/BusinessProductManagement/BusinessProductEditInfo';
import ReviewPage from 'pages/member/ReviewPage';
import SearchDetailPage from 'pages/main/Search/SearchDetailPage';
import SearchResultPage from 'pages/main/Search/SearchResultPage';
import BusinessCouponUpload from './pages/business/BusinessPage/Coupon/BusinessCouponUpload';
import ReviewUploadPage from './pages/member/ReviewUploadPage';
import TimeSalePage from 'pages/business/BusinessPage/timesale/TimeSalePage';
import TimeSaleUploadPage from 'pages/business/BusinessPage/timesale/TimeSaleUploadPage';
import Membership from 'pages/business/BusinessPage/Membership';
import BizSettlement from 'pages/business/BusinessPage/BizSettlement';

function App() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

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
          {/* 상품 관리 */}
          <Route path="product" element={<BusinessProductManagement />} />
          <Route path="timesale" element={<TimeSalePage />} />
          <Route path="timesale/upload" element={<TimeSaleUploadPage />} />
          <Route path="timesale/update/:id" element={<TimeSaleUploadPage />} />
          {/* 상품 등록 */}
          <Route path="upload" element={<BusinessProductUpload />} />
          {/* 상품 수정 */}
          <Route path="edit/:id" element={<BusinessProductUpload />} />
          <Route path="edit/info" element={<BusinessProductEditInfo />} />
          {/* 쿠폰관리 */}
          <Route path="coupon" element={<BusinessCoupon />} />
          {/* 쿠폰등록 */}
          <Route path="coupon/upload" element={<BusinessCouponUpload />} />
          {/* 쿠폰 수정 */}
          <Route path="coupon/update/:id" element={<BusinessCouponUpload />} />
          {/* 리뷰관리 */}
          <Route path="review" element={<BusinessReview />} />
          <Route path="news" element={<BusinessNews />} />
          {/* 주문관리 */}
          <Route path="order" element={<OrderManagement />} />
          <Route path="order/details/auth" element={<OrderManagementDetailsAuthPage />} />
          <Route path="membership/:id" element={<Membership />} />
          <Route path="settlement/:id" element={<BizSettlement />} />
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
          <Route path="new" element={<OrderFormPage />} />
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
          <Route path="inquiry/details/:id" element={<InquiryDetailsPage />} />
          {/* voc */}
          <Route path="voc" element={<VocPage />} />
          {/* 약관 */}
          <Route path="terms" element={<TermsPage />} />
          <Route path="terms/service" element={<ServiceTerms />} />
          <Route path="terms/location" element={<LocationTerms />} />
          <Route path="terms/privacy" element={<PrivacyTerms />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
