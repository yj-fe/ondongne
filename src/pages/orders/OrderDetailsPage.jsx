import React from 'react'
import Layout from 'components/layout/Layout/Layout';
import OrderDetails from 'components/orders/orderdetails/OrderDetails';
import { useNavigate } from 'react-router-dom';

const OrderDetailsPage = () => {
    const navigate = useNavigate();
    return (
        <Layout
            floating={false}
            title="주문내역 상세"
            onBackClick={() => navigate(-1)}
        >
            <OrderDetails />
        </Layout>
    )
}

export default OrderDetailsPage;