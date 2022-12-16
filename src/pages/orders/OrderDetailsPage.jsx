import React from 'react'
import Layout from '../../components/layout/Layout';
import OrderDetails from '../../components/orders/OrderDetails';

const OrderDetailsPage = props => {
    return (
        <Layout
            title="주문내역 상세"
        >
            <OrderDetails />
        </Layout>
    )
}

export default OrderDetailsPage;