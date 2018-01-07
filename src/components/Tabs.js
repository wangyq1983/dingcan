/**
 * Created by tbp on 2017/10/24.
 */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TabCell from '../cell/TabCell'
import {
    HashRouter as Router,
    Route,
    Link
} from 'react-router-dom'
export default class Tabs extends Component{
    constructor(props){
        super(props);
        this.tablists=[
            {icon:require("../image/icon1.png"),title:'排队',link:'paidui'},
            {icon:require("../image/icon2.png"),title:'点菜',link:'diancai'},
            {icon:require("../image/icon3.png"),title:'加菜',link:'jiacai'},
            {icon:require("../image/icon4.jpg"),title:'买单',link:'order'}
        ];
    }

    render(){
        return(
            <div className="tabs" style={{flexDirection:'row',justifyContent:'space-around',alignItems:'center',display:'flex'}}>
                {this.tablists.map(function (res,index) {
                    var tabStyle=res.link==this.props.indexCur ? styles.curstyle : styles.nolstyle;
                    return (
                        <Link to={res.link} style={tabStyle} >
                            <TabCell
                                icon={res.icon}
                                title={res.title}
                                index={index}
                            />
                        </Link>
                    )
                }.bind(this))}
            </div>
        )
    }
}
Tabs.propTypes = {
    indexCur:PropTypes.string
};
const styles = {
    curstyle:{
        color:'#f00'
    },
    nolstyle:{
        color:'#00f'
    }
};