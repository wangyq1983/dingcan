/**
 * Created by pack on 17/10/31.
 */
'use strict';
import React, {Component} from "react";
// const AnimatedFlatList = Animated.createAnimatedComponent(FlatList);
export default class FlatListExample extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            //网络请求状态
            error: false,
            errorInfo: "",
            dataArray: []
        }

    }
    fetchData(REQUEST_URL) {
        fetch(REQUEST_URL, {
            method: 'get',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'multipart/form-data',
            },
        }).then((response) => response.json())
            .then((responseData) => {
                //console.log(responseData);
                let data = responseData.data;
                let dataBlob = [];
                data.map(function (item,index) {
                    dataBlob.push({
                        key: index,
                        value: item,
                    });
                });
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
    componentDidMount() {
        //请求数据
        this.fetchData();
    }
    //加载等待的view
    renderLoadingView = () => {
        return (
            <div style={styles.container}>
                <p>加载中。。。</p>
            </div>
        );
    };

    //加载失败view
    renderErrorView=(error)=> {
        return (
            <div style={styles.container}>
                <p>
                    Fail: {error}
                </p>
            </div>
        );
    };

    //返回itemView
    renderItemView({item}) {
        return (
            <div>
                <p style={styles.title}>
                    name: {item.value.reasons} ({item.value.create_time}stars)
                </p>
            </div>
        );
    }

    renderData() {
        return (
            <div>
                {this.state.dataArray.map(function (res,index) {
                    return (
                        <div>
                            <p style={styles.title}>
                                name: {res.value.reasons} ({res.value.create_time}stars)
                            </p>
                        </div>
                    )
                })}
            </div>
        );
    }

    renderList(){
        if (this.state.isLoading && !this.state.error) {
            return this.renderLoadingView();
        } else if (this.state.error) {
            //请求失败view
            return this.renderErrorView(this.state.errorInfo.message);
        }
        //加载数据
        return this.renderData();
    }

    render() {
        return(
            <div></div>
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
}