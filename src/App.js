import { Routes, Route, Link, useNavigate, Outlet, createBrowserRouter,  RouterProvider } from 'react-router-dom'
import { useState } from 'react';
/* ========== LOGIN ========== */
import LoginPage from './pages/login/loginpage/LoginPage';
import FindEmail from './pages/login/email/FindEmail';
import FindPwd from './pages/login/password/FindPwd';
import LocationSetting from './pages/login/LocationSetting/LocationSetting';
/* ========== MAIN ========== */
import MyPage from './components/MyPage';
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
import MemberManagement from './pages/login/member/MemberManagement/MemberManagement';
import MemberWithdrawal from './pages/login/member/MemberWithdrawal/MemberWithdrawal';
import SignupPage from './pages/login/signup/SignupPage';
import Alert from './components/commonUi/Alert';
import NotFound from './pages/NotFound';
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
      {/* ========== 로그인 ========== */}
      <Route path="/member">
        <Route path="" element={<MyPage />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="find/email" element={<FindEmail />} />
        <Route path="find/password" element={<FindPwd />} />
        <Route path="signup" element={<SignupPage />} />
      {/* ========== 회원관리 ========== */}
        <Route path="management" element={<MemberManagement />} />
        <Route path="withdrawal" element={<MemberWithdrawal />} />
        <Route path="location" element={<LocationSetting />} />
      </Route>

      {/* ========== 메인 ========== */}
      <Route path="/main">
        <Route path="" element={<MainPage />} />
        <Route path="cart" element={<CartPage />} />
        <Route path="service" element={<CustomerService />} />
        <Route path="terms" element={<TermsPage />} />
        <Route path="terms/service" element={<ServiceTerms />} />
        <Route path="terms/location" element={<LocationTerms />} />
        <Route path="terms/privacy" element={<PrivacyTerms />} />
        <Route path="more" element={<MorePage />} />
        <Route path="categories" element={<CategoryPage />} />
        <Route path="collections" element={<CollectionPage />} />
        <Route path="details/:id" element={<DetailsPage />} />
        <Route path="configuration" element={<ConfigurationPage />} />
      </Route>

      {/* ========== 주문 ========== */}
      <Route path="/order">
        <Route path="a" element={<NotFound />} />
        <Route path="all" element={<OrderListPage />} />
        <Route path="new/:id" element={<OrderFormPage />} />
        <Route path="details/:id" element={<OrderDetailsPage />} />
      </Route>
    </Routes>

    </>
  );
}

export default App;
