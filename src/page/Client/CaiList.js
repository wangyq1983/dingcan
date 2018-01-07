/**
 * Created by pack on 17/11/1.
 */
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import WebRequest from '../../WebRequest'
import SizeChange from '../../components/SizeChange'
import *as WebHost from '../../WebHost'
import Detail from './Detail'
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

    onScrollHandle(event) {
        const clientHeight = event.target.scrollingElement.clientHeight
        const scrollHeight = event.target.scrollingElement.scrollHeight
        const scrollTop = event.target.scrollingElement.scrollTop
        const isBottom = (clientHeight + scrollTop === scrollHeight)
        console.log('is bottom:' + isBottom);
        if(isBottom){
            this.renderMore();
        }
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
    };

    componentDidMount() {
        //请求数据
        this.fetchData(this.renderFromTo(0));
        window.addEventListener('scroll', this.onScrollHandle.bind(this));
    }

    componentWillUnmount() {
            window.removeEventListener('scroll', this.onScrollHandle.bind(this));
        }

    //
    renderData() {
        // this.state.dataArray 为 返回的新数据；this.listData为之前的数据
        this.listData = this.listData.concat(this.state.dataArray);
        //localStorage.list_data = this.listData;
        localStorage.setItem('weekDay',JSON.stringify(this.listData));
        console.log(JSON.parse(localStorage.getItem('weekDay')));
        return (
            <div>
                {this.listData.map(function (res,index) {
                    return (
                        <div key={res.id}>
                            <hr />
                            <em>{index}</em>
                            <div className="caiItem">
                                <Link to={'detail?rid='+res.value.rid}>
                                    <p style={styles.title}>
                                        name: {res.value.reasons} ({res.value.create_time}stars)
                                    </p>
                                </Link>
                                <SizeChange greenData = {res.value} />
                            </div>

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
                {/*<div onClick={this.renderMore}>更多</div>*/}
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