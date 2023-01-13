import React, { useEffect, useState } from 'react';
import Layout from 'components/layout/Layout/Layout';
import OrderForm from 'components/orders/orderform/OrderForm';
import Confirm from 'components/commonUi/Confirm';
import { useNavigate, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';

const OrderFormPage = () => {

    const navigate = useNavigate();
    const { state } = useLocation();
    const [cancelConfirm, setCancelConfirm] = useState(false);
    const orderItems = useSelector(state => state.order);

    return (
        <Layout
            title="주문하기"
            onBackClick={() => {
                setCancelConfirm(true)
            }}
        >
            <OrderForm data={state.data != null ? state.data : orderItems} />
            {
                cancelConfirm &&
                <Confirm
                    contents="진행중인 주문을 취소하시겠습니까?"
                    confirmText="네"
                    cancelText="아니오"
                    onConfirmClick={() => navigate(-1, { replace: true })}
                    onCancelClick={() => { setCancelConfirm(false) }}
                />
            }
        </Layout>
    )
};

export default OrderFormPage;