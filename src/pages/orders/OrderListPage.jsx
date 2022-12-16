import React from 'react'
import PropTypes from 'prop-types'
import OrderList from '../../components/orders/OrderList'
import Layout from '../../components/layout/Layout'

const OrderListPage = props => {
    return (
        <Layout
            title="주문 내역"
            cart={true}
            bell={true}
        >
            <OrderList />
        </Layout>
    )
}

export default OrderListPage