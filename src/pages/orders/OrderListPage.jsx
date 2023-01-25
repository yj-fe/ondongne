import React from 'react'
import OrderList from 'components/orders/orderlist/OrderList'
import Layout from 'components/layout/Layout/Layout'
import { useNavigate } from 'react-router-dom'

const OrderListPage = props => {

    const navigate = useNavigate();

    return (
        <Layout
            title="주문 내역"
            cart={true}
            bell={true}
            onBackClick={() => navigate("/")}
        >
            <OrderList />
        </Layout>
    )
}

export default OrderListPage