import React, { useEffect, useState } from "react";
import Layout from "components/layout/Layout/Layout";
import OrderForm from "components/orders/orderform/OrderForm";
import Confirm from "components/commonUi/Confirm";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { orderActions } from "store/slices/order";

const OrderFormPage = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [cancelConfirm, setCancelConfirm] = useState(false);
    const backTo = useSelector((state) => state.order.to);
    const orderItems = useSelector((state) => state.order.items);

    const orderCancel = () => {
        dispatch(orderActions.remove());
        navigate(backTo || "/", { replace: true });
    };

    useEffect(() => {
        if (orderItems.length === 0) {
            return navigate("/", {
                state: { error: "이미 처리된 주문 상품입니다." },
            });
        }

        const handleBackButton = (event) => {
            event.preventDefault(); // 뒤로가기 동작 막기
            setCancelConfirm(true);
        };

        window.history.pushState(null, null, window.location.pathname); // 브라우저 히스토리에 현재 페이지 추가

        window.addEventListener("popstate", handleBackButton); // 뒤로가기 버튼 이벤트에 핸들러 추가

        return () => {
            window.removeEventListener("popstate", handleBackButton); // 컴포넌트가 언마운트될 때 이벤트 핸들러 제거
        };
    }, []);

    return (
        <Layout
            title="주문하기"
            floating={false}
            onBackClick={() => {
                setCancelConfirm(true);
            }}>
            <OrderForm />
            {cancelConfirm && (
                <Confirm
                    contents="진행중인 주문을 취소하시겠습니까?"
                    confirmText="네"
                    cancelText="아니오"
                    onConfirmClick={orderCancel}
                    onCancelClick={() => {
                        setCancelConfirm(false);
                    }}
                />
            )}
        </Layout>
    );
};

export default OrderFormPage;
