import React, { useEffect, useState } from 'react';
import Layout from 'components/layout/Layout/Layout';
import OrderForm from 'components/orders/orderform/OrderForm';
import Confirm from 'components/commonUi/Confirm';
import { useNavigate, useLocation } from 'react-router-dom';

const OrderFormPage = () => {

    const { state } = useLocation();
    const [cancelConfirm, setCancelConfirm] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        console.log(state.data);
        console.log(state.toBack);
    }, [state])

    return (
        <Layout
            title="주문하기"
            onBackClick={() => {
                setCancelConfirm(true)
            }}
        >
            <OrderForm />
            {
                cancelConfirm &&
                <Confirm
                    contents="진행중인 주문을 취소하시겠습니까?"
                    confirmText="네"
                    cancelText="아니오"
                    onConfirmClick={() => { window.location.replace(state.toBack) }}
                    onCancelClick={() => { setCancelConfirm(false) }}
                />
            }
        </Layout>
    )
};

export default OrderFormPage;