import React from 'react'
import OrderList from 'components/orders/orderlist/OrderList'
import Layout from 'components/layout/Layout/Layout'
import { useNavigate } from 'react-router-dom'
import LayoutNotFloat from 'components/layout/Layout/LayoutNotFloat'

const OrderListPage = props => {

    const navigate = useNavigate();

    return (
        <LayoutNotFloat
            title="주문 내역"
            cart={true}
            bell={true}
            onBackClick={() => navigate("/")}
        >
            <OrderList />
        </LayoutNotFloat>
    )
}

export default OrderListPage