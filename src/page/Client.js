/**
 * Created by tbp on 2017/10/24.
 */
import React, { Component } from 'react';
import Header from '../components/Header'
import Tabs from '../components/Tabs';

export default class Client extends Component{
    constructor(){
        super();
    }

    render(){
        return (
            <div>
                <Header />
                <Tabs />
            </div>

        )
    }
}

