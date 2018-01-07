/**
 * Created by pack on 17/10/31.
 */
import React, { Component } from 'react';
export default class TabCenter extends Component{
    constructor(){
        super();

        this.state={
            currentIndex : 0
        };
        this.tabs = [
            {item:'paidui',link:'paidui'},
            {item:'diancai',link:'diancai'},
            {item:'jiacai',link:'add'},
            {item:'order',link:'order'}
        ];
    }

    aaa = () =>{
        alert(12)
    }

    render(){
        var _this = this;
        return(
            <div>
                {this.tabs.map(function (res,index){
                    return (
                        <div onClick={this.aaa}>{res.item}</div>
                    )
                }.bind(_this))}
            </div>
        )
    }
}
