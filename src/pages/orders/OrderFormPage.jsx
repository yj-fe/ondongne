import React, { useEffect, useState } from 'react';
import Layout from '../../components/layout/Layout/Layout';
import OrderForm from '../../components/orders/orderform/OrderForm';
import Confirm from '../../components/commonUi/Confirm';
import { useNavigate } from 'react-router-dom';

const OrderFormPage = props => {

    const [cancelConfirm, setCancelConfirm] = useState(false);
    const navigate = useNavigate();
    
    return (
        <Layout
            title="주문하기"
            onBackClick={() => {
                setCancelConfirm(true)
            }}
        >   
            <OrderForm />
            {/* 나중에 삭제하고, global로 대치 */}
            {
                cancelConfirm &&
                <Confirm
                    contents="진행중인 주문을 취소하시겠습니까?"
                    confirmText="네"
                    cancelText="아니오"
                    onConfirmClick={() => {navigate('/details/:id')}}
                    onCancelClick={() => {setCancelConfirm(false)}}
                />
            }
        </Layout>
    )
};

export default OrderFormPage;