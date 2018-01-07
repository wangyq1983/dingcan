/**
 * Created by pack on 17/10/25.
 */
import React, { Component } from 'react';
import Header from '../components/Header'
import Add from './Add'
import Diancai from './Diancai'
import Paidui from './Paidui'
import Order from './Order'
export default class Clint extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div>
                <Header />
                <Diancai />
            </div>

        )
    }
}