import { Routes, Route, Link, useNavigate, Outlet, createBrowserRouter,  RouterProvider } from 'react-router-dom'
import { useState } from 'react';
/* ========= MEMBER ========= */
import MyPage from './components/MyPage';
import LocationSetting from './pages/login/LocationSetting/LocationSetting';
import MemberManagement from './pages/login/member/MemberManagement/MemberManagement';
import MemberWithdrawal from './pages/login/member/MemberWithdrawal/MemberWithdrawal';
/* ========== LOGIN ========== */
import LoginPage from './pages/login/loginpage/LoginPage';
import FindEmail from './pages/login/email/FindEmail';
import FindPwd from './pages/login/password/FindPwd';
/* ========== MAIN ========== */
import MainPage from './pages/main/MainPage/MainPage';
import DetailsPage from './pages/main/DetailsPage/DetailsPage';
import CollectionPage from './pages/main/Product/CollectionPage/CollectionPage';
import CategoryPage from './pages/main/Product/CategoryPage/CategoryPage';
import CartPage from './pages/main/CartPage/CartPage'
import MorePage from './pages/main/MorePage/MorePage'
/* ========== ORDER ========== */
import OrderListPage from './pages/orders/OrderListPage';
import OrderFormPage from './pages/orders/OrderFormPage';
import OrderDetailsPage from './pages/orders/OrderDetailsPage';
import SignupPage from './pages/login/signup/SignupPage';
import CustomerService from './pages/main/CustomerService/CustomerService';
import TermsPage from './pages/main/TermsPage/TermsPage';
import ServiceTerms from './components/Main/TermsPage/ServiceTerms';
import LocationTerms from './components/Main/TermsPage/LocationTerms';
import PrivacyTerms from './components/Main/TermsPage/PrivacyTerms';
import ConfigurationPage from './pages/main/ConfigurationPage/ConfigurationPage';




function App() { 
  let navigate = useNavigate()
  return (
    <>

    <Routes>
      {/* ========== 회원관리 ========== */}
      <Route path="/member">
        <Route path="" element={<MyPage />} />
        <Route path="management" element={<MemberManagement />} />
        <Route path="withdrawal" element={<MemberWithdrawal />} />
        <Route path="location" element={<LocationSetting />} />
      </Route>

      {/* ========== 로그인 ========== */}
      <Route path="/login">
        <Route path="" element={<LoginPage />} />
        <Route path="find/email" element={<FindEmail />} />
        <Route path="find/password" element={<FindPwd />} />
        <Route path="signup" element={<SignupPage />} />
      </Route>

      {/* ========== 메인 ========== */}
      <Route path="/" >
        <Route path="" element={<MainPage />} />
        <Route path="cart" element={<CartPage />} />
        <Route path="categories" element={<CategoryPage />} />
        <Route path="collections" element={<CollectionPage />} />
        <Route path="details/:id" element={<DetailsPage />} />
        <Route path="configuration" element={<ConfigurationPage />} />
        {/* 고객센터&약관 */}
        <Route path="more" element={<MorePage />} />
        <Route path="service" element={<CustomerService />} />
        <Route path="terms" element={<TermsPage />} />
        <Route path="terms/service" element={<ServiceTerms />} />
        <Route path="terms/location" element={<LocationTerms />} />
        <Route path="terms/privacy" element={<PrivacyTerms />} />
      </Route>

      {/* ========== 주문 ========== */}
      <Route path="/order">
        <Route path="all" element={<OrderListPage />} />
        <Route path="new/:id" element={<OrderFormPage />} />
        <Route path="details/:id" element={<OrderDetailsPage />} />
      </Route>
    </Routes>

    </>
  );
}

export default App;
