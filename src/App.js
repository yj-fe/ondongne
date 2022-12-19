import { Routes, Route, Link, useNavigate, Outlet, createBrowserRouter,  RouterProvider } from 'react-router-dom'
import { useState } from 'react';
/* ========== LOGIN ========== */
import LoginPage from './pages/LoginPage';
import FindEmail from './pages/FindEmail';
import FindPwd from './pages/FindPwd';
import SignupPage from './pages/SignupPage';
/* ========== MAIN ========== */
import MyPage from './components/MyPage';
import CategoryPage from './pages/CategoryPage';
import CollectionPage from './pages/CollectionPage';
import MainPage from './pages/MainPage';
import DetailsPage from './pages/DetailsPage';
import CartPage from './pages/CartPage'
import MorePage from './pages/MorePage'
/* ========== ORDER ========== */
import OrderListPage from './pages/orders/OrderListPage';
import OrderFormPage from './pages/orders/OrderFormPage';
import OrderDetailsPage from './pages/orders/OrderDetailsPage';

/* ========== COMPONENT ========== */
// import MainHeader from './components/Main/MainHeader';
// import Agreement from './components/Login/Agreement';
// import FindResult from './components/Login/FindResult';
// import SignupInfo from './components/Login/SignupInfo';
// import CheckComponent from './components/Login/CheckComponent';
// import TimeOut from './components/Login/TimeOut';
// import ModalPage from './components/Login/ModalPage';
// import ToggleDetail from './components/Login/ToggleDetail';


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
