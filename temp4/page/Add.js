/**
 * Created by pack on 17/10/25.
 */
import React, { Component } from 'react';
import Header from '../components/Header'

class Add extends Component {
    render() {
        return (
            <div>
                <Header indexCur={'add'}/>
                <p>加菜</p>
            </div>
        );
    }
}

export default Add;