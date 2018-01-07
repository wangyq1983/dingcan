/**
 * Created by tbp on 2017/10/24.
 */
import React, { Component } from 'react';
export default class Header extends Component{
    constructor(props){
        super(props);
        this.title = '青岛醉海棠大酒楼'
    }
    render(){
        return(
            <div className="header">
                {this.title}
            </div>
        )
    }
}
