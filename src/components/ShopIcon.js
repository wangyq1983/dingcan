/**
 * Created by pack on 17/11/14.
 */
import React, { Component } from 'react';
import eventProxy from '../eventProxy'
export default class ShopIcon extends Component{
    constructor(props){
        super(props);
        this.state = {
            msg: ''
        };
        this.cailist = [];
    }

    jieshou = (i) =>{
        this.cailist.push(JSON.parse(i));
        var aaa = JSON.stringify(this.cailist);
        this.props.onClicked(aaa);
        this.setState({
            msg:aaa
        });
    };

    componentDidMount() {
        // 监听 msg 事件
        eventProxy.on('diancai',this.jieshou);
    }

    showList = () =>{
        console.log(this.state.msg.length);
        if(this.props.onClicked && this.state.msg.length > 0){
            this.props.onClicked()
        }else{
            return false;
        }
    };

    render(){
        return(
            <div className="shopIcon" onClick={this.showList}>

            </div>
        )
    }
}