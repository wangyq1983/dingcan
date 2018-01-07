/**
 * Created by tbp on 2017/10/29.
 */
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Header from '../../components/Header'
import Tabs from '../../components/Tabs'
import CaiList from './CaiList'
import Shopping from '../../components/Shopping'
export default class Diancai extends Component{
    constructor(){
        super();
    }


    render(){
        return (
            <div>
                <Header/>
                <Tabs indexCur={'diancai'}/>
                <CaiList />
                <Shopping />
            </div>
        )
    }
}