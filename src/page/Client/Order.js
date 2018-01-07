/**
 * Created by tbp on 2017/10/29.
 */
import React, { Component } from 'react';
import Header from '../../components/Header'
import Tabs from '../../components/Tabs'
export default class Order extends Component{
    constructor(){
        super();
    }
    render(){
        return (
            <div>
                <Header/>
                <Tabs indexCur={'order'}/>
                order
            </div>
        )
    }
}