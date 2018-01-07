/**
 * Created by pack on 17/11/2.
 */
import React, { Component } from 'react';
import *as Tools from '../../tools/Tools'
import *as WebHost from '../../WebHost'
import WebRequest from '../../WebRequest'
class Detail extends WebRequest {

    constructor(props) {
        super(props);
        console.log(Tools.UrlSearch(this.props.location.search));
        this.rid = Tools.UrlSearch(this.props.location.search)['rid'];
    }

    componentDidMount() {
        //请求数据
        this.fetchData(this.renderFromTo());
    }

    renderFromTo = () =>{
        return (
            WebHost.CaiDetail() +'?rid=' + this.rid
        )
    };

    fetchData(REQUEST_URL) {
        fetch(REQUEST_URL, {
            method: 'get',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'multipart/form-data',
            },
        }).then((response) => response.json())
            .then((responseData) => {
                console.log(responseData);
                let data = responseData.data;
                let dataBlob = [];
                dataBlob = responseData.data;
                this.setState({
                    //复制数据源
                    dataArray: dataBlob,
                    isLoading: false,
                    error:false
                });
                data = null;
                dataBlob = null;
            })
            .catch((error) => {
                this.setState({
                    error: true,
                    isLoading: false,
                    errorInfo: error
                })
            })
    }



    renderData() {
        var dataArray = this.state.dataArray;
        return (
            <div>
                <hr />
                <em>rid:{dataArray.rid}</em>
                    <p>
                        reasons:{dataArray.reasons}
                    </p>
                    <p>

                    </p>
            </div>
        );
    }

    render() {
        return (
            <div>
                {this.rid}
                <p>详细信息</p>
                {this.renderList()}
            </div>
        );
    }
}

export default Detail;