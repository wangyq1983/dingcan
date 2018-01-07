/**
 * Created by pack on 17/11/1.
 */
import React, { Component } from 'react';
import WebRequest from '../WebRequest'
import *as WebHost from '../WebHost'
export default class CaiList extends WebRequest{
    constructor(props) {
        super(props);
        this.from = 1;
        this.to = 20;
        this.step = 20;
    }

    renderFromTo = (type) =>{
        if(type == 0){
            var from = this.from;
            var to = this.to;
        }
        if(type == 1){
            var from = this.state.dataArray.length + 1;
            var to = this.state.dataArray.length + this.step;
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

    //
    renderData() {
        return (
            <div>
                {this.state.dataArray.map(function (res,index) {
                    return (
                        <div>
                            <hr />
                            <em>{index}</em>
                            <p style={styles.title}>
                               
                                        name: {res.value.reasons} ({res.value.create_time}stars)

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