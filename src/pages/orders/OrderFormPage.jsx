import React, { useState } from 'react';
import Layout from 'components/layout/Layout/Layout';
import OrderForm from 'components/orders/orderform/OrderForm';
import Confirm from 'components/commonUi/Confirm';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { orderActions } from 'store/slices/order';

const OrderFormPage = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [cancelConfirm, setCancelConfirm] = useState(false);

    const orderCancel = () => {
        dispatch(orderActions.remove());
        navigate(-1, { replace: true })
    }

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
                    onConfirmClick={orderCancel}
                    onCancelClick={() => { setCancelConfirm(false) }}
                />
            }
        </Layout>
    )
};

export default OrderFormPage;