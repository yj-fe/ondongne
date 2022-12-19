import { Routes, Route, Link, useNavigate, Outlet, createBrowserRouter,  RouterProvider } from 'react-router-dom'
import { useState } from 'react';
/* ========== LOGIN ========== */
import LoginPage from './pages/login/loginpage/LoginPage';
import FindEmail from './pages/login/email/FindEmail';
import FindPwd from './pages/login/password/FindPwd';

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
      </Route>

      {/* ========== 메인 ========== */}
      <Route path="/main">
        <Route path="" element={<MainPage />} />
        <Route path="cart" element={<CartPage />} />
        <Route path="more" element={<MorePage />} />
        <Route path="categories" element={<CategoryPage />} />
        <Route path="collections" element={<CollectionPage />} />
        <Route path="details/:id" element={<DetailsPage />} />
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
