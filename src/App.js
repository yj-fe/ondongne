import { Routes, Route, Link, useNavigate, Outlet, createBrowserRouter,  RouterProvider } from 'react-router-dom'
import { useState } from 'react';
import LoginPage from './pages/LoginPage';
import FindEmail from './pages/FindEmail';
import FindPwd from './pages/FindPwd';
import SignupPage from './pages/SignupPage';
import MyPage from './components/MyPage';
import CategoryPage from './pages/CategoryPage';
import CollectionPage from './pages/CollectionPage';
import MainPage from './pages/MainPage';
import Agreement from './components/Login/Agreement';
import FindResult from './components/Login/FindResult';
import SignupInfo from './components/Login/SignupInfo';
import CheckComponent from './components/Login/CheckComponent';
import TimeOut from './components/Login/TimeOut';
import ModalPage from './components/Login/ModalPage';
import ToggleDetail from './components/Login/ToggleDetail';
import MainHeader from './components/Main/MainHeader';
import DetailPage from './pages/DetailPage';
import CartPage from './pages/CartPage'
import MorePage from './pages/MorePage'
/* ========== ORDER ========== */
import OrderListPage from './pages/orders/OrderListPage';
import OrderFormPage from './pages/orders/OrderFormPage';
import OrderDetailsPage from './pages/orders/OrderDetailsPage';


function App() { 
  let navigate = useNavigate()
  return (
    <>

      {/* <button onClick={()=>{ navigate('member/login') }}>LoginPage</button>
      <button onClick={()=>{ navigate('member/login/signup/test') }}>SignupInfo</button>
      <button onClick={()=>{ navigate('/main/detail/:id') }}>Detail </button>
      <button onClick={()=>{ navigate('member/test/modal') }}>MainHeader </button>
      <button onClick={()=>{ navigate('main') }}>MainPage</button> */}
    <Routes>

      <Route path="/main" element={ <MainPage /> } />
      <Route path="/main/cart" element={ <CartPage /> } />
      <Route path="/main/more" element={ <MorePage /> } />
      <Route path="/categories" element={ <CategoryPage /> } />
      <Route path="/collections" element={ <CollectionPage /> } />
      <Route path="/member" element={ <MyPage /> } />
      <Route path="/member/login" element={ <LoginPage /> } />
      <Route path="/member/login/find/email" element={ <FindEmail /> } />
      <Route path="/member/login/find/password" element={ <FindPwd /> } />
      <Route path="/member/login/signup" element={ <SignupPage /> } />
      <Route path="/main/detail/:id" element={ <DetailPage/> } />
      <Route path="/member/test/modal" element={ <MainHeader /> } />
      {/* <Route path="/member/login/signup/test" element={ <SignupInfo /> } /> */}
      {/* ========== 주문 ========== */}
      <Route path="/order">
        <Route path="all" element={<OrderListPage />} />
        <Route path="new/:id" element={<OrderFormPage />} />
        <Route path="details/:id" element={<OrderDetailsPage />} />
      </Route>
    </Routes>


    {/* <Link to="/member/login"><LoginPage/></Link> */}
    {/* <Link to="/member/signup">signup</Link>
    <Link to="/member/find/email">email</Link>
    <Link to="/main/detail/:id">DetailPage</Link>  */}
    </>
  );
}

export default App;
