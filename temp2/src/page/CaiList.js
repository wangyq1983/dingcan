/**
 * Created by pack on 17/11/1.
 */
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import WebRequest from '../WebRequest'
import *as WebHost from '../WebHost'
import {
    HashRouter as Router,
    Route,
    Link
} from 'react-router-dom'
export default class CaiList extends WebRequest{
    constructor(props) {
        super(props);
        this.from = 1;
        this.to = 20;
        this.step = 20;
        this.page = 0;
        this.listData = [];  //数据列表
    }

    renderFromTo = (type) =>{
        if(type == 0){
            var from = this.from;
            var to = this.to;
        }
        if(type == 1){
            this.page = this.page+1;
            var from = this.page * this.step + 1;
            var to = this.page * this.step + this.step;
            // console.log(from+to);
        }

        return (
            WebHost.CaiList() +'?from=' + from + '&to=' + to
        )
    }

    componentDidMount() {
        //请求数据
        this.fetchData(this.renderFromTo(0));
    }

    renderData() {
        // this.state.dataArray 为 返回的新数据；this.listData为之前的数据
        this.listData = this.listData.concat(this.state.dataArray);
        console.log(this.listData);

        return (
            <div>
                {this.listData.map(function (res,index) {
                    return (
                        <div>
                            <hr />
                            <em>{index}</em>
                            <p style={styles.title}>
                                <Link to={'detail?rid='+res.value.rid}>
                                    name: {res.value.reasons} ({res.value.create_time}stars)
                                </Link>
                            </p>
                        </div>
                    )
                })}
            </div>
        );
    }

    renderMore = () => {
        this.fetchData(this.renderFromTo(1));
    };

    render(){
        return(
            <div>
                {this.renderList()}
                <div onClick={this.renderMore}>更多</div>
            </div>
        )
    }
}
const styles = {
    container: {
        flex:1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    title: {
        fontSize: 15,
        color: 'blue',
    },
    content: {
        fontSize: 15,
        color: 'black',
    }
};