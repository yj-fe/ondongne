import {
  Routes,
  Route,
  Link,
  useNavigate,
  Outlet,
  createBrowserRouter,
  RouterProvider,
  useLocation,
} from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

/* ========= MEMBER ========= */
import MyPage from "./components/MyPage";
import LocationSetting from "./pages/login/LocationSetting/LocationSetting";
import MemberManagement from "./pages/login/member/MemberManagement/MemberManagement";
import MemberWithdrawal from "./pages/login/member/MemberWithdrawal/MemberWithdrawal";
/* ========== BUSINESS ========== */
import BusinessPage from "./pages/business/BusinessPage/BusinessPage";
import BusinessApplication from "./pages/business/BusinessPage/BusinessApplication/BusinessApplication";
import BusinessUpload from "./pages/business/BusinessPage/BusinessUpload/BusinessUpload";
/* ========== LOGIN ========== */
import LoginPage from "./pages/login/loginpage/LoginPage";
import FindEmail from "./pages/login/email/FindEmail";
import FindPwd from "./pages/login/password/FindPwd";
/* ========== MAIN ========== */
import MainPage from "./pages/main/MainPage/MainPage";
import DetailsPage from "./pages/main/DetailsPage/DetailsPage";
import CollectionPage from "./pages/main/Product/CollectionPage/CollectionPage";
import CategoryPage from "./pages/main/Product/CategoryPage/CategoryPage";
import CartPage from "./pages/main/CartPage/CartPage";
import MorePage from "./pages/main/MorePage/MorePage";
/* ========== ORDER ========== */
import OrderListPage from "./pages/orders/OrderListPage";
import OrderFormPage from "./pages/orders/OrderFormPage";
import OrderDetailsPage from "./pages/orders/OrderDetailsPage";
import SignupPage from "./pages/login/signup/SignupPage";
import CustomerService from "./pages/main/CustomerService/CustomerService";
import TermsPage from "./pages/main/TermsPage/TermsPage";
import ServiceTerms from "./components/Main/TermsPage/ServiceTerms";
import LocationTerms from "./components/Main/TermsPage/LocationTerms";
import PrivacyTerms from "./components/Main/TermsPage/PrivacyTerms";
import ConfigurationPage from "./pages/main/ConfigurationPage/ConfigurationPage";
import Alert from "./components/commonUi/Alert";
import { tokenReissue } from "./service/auth";
import { client } from "./service";
import { authActions } from "./store/slices/auth";
import BusinessManagement from "./pages/business/BusinessManagement/BusinessManagement";
import CheckBox from "./components/commonUi/CheckBox";

function App() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();
  const auth = useSelector((state) => state.auth);
  const [alert, setAlert] = useState(null);
  const refreshToken = localStorage.getItem("refreshToken");

  const onSilentRefresh = async () => {
    if (!refreshToken) {
      return;
    }

    await tokenReissue(refreshToken)
      .then((response) => {
        if (response.status === 200) {
          const { message, data } = response.data;

          client.defaults.headers.common["Authorization"] = data.accessToken;

          dispatch(authActions.login(data));
        } else {
          setAlert({
            title: "인증 기간 만료",
            contents: "인증 기간이 만료되었습니다.\n다시 로그인해주세요.",
            buttonText: "확인",
            onButtonClick: () => setAlert(false),
            onOverlayClick: () => setAlert(false),
          });
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    onSilentRefresh();
  }, [location]);

  return (
    <>
      <Routes>
        {/* ========== 회원관리 ========== */}
        <Route path="/member">
          <Route path="" element={<MyPage />} />
          {/* 1주차-회원-회원수정 */}
          <Route path="management" element={<MemberManagement />} />
          {/* 1주차-회원-회원탈퇴 */}
          <Route path="withdrawal" element={<MemberWithdrawal />} />
          {/* 1주차-회원-위치설정 */}
          <Route path="location" element={<LocationSetting />} />
        </Route>

        {/* ========== 비즈회원관리 ========== */}
        <Route path="/business">
          {/* 1주차-비즈회원-메인페이지 */}
          <Route path="" element={<BusinessPage />} />
          {/* 1주차-비즈회원-비즈회원신청 */}
          <Route path="application" element={<BusinessApplication />} />
          {/* 1주차-비즈회원-비즈정보관리(상점, 사업자) */}
          <Route path="management" element={<BusinessManagement />} />
          <Route path="upload" element={<BusinessUpload />} />
        </Route>

        {/* ========== 로그인 ========== */}
        <Route path="/login">
          <Route path="" element={<LoginPage />} />
          <Route path="find/email" element={<FindEmail />} />
          <Route path="find/password" element={<FindPwd />} />
          <Route path="signup" element={<SignupPage />} />
        </Route>

        {/* ========== 메인 ========== */}
        <Route path="/">
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
