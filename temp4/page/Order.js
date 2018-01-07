/**
 * Created by pack on 17/10/25.
 */
import React, { Component } from 'react';
import Header from '../components/Header'
class Order extends Component {

    render() {
        return (
            <div>
                <Header indexCur={'order'}/>
                <p>订单</p>
            </div>
        );
    }
}

export default Order;