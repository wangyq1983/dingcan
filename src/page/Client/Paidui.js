/**
 * Created by tbp on 2017/10/29.
 */
import React, { Component } from 'react';
import Header from '../../components/Header'
import Tabs from '../../components/Tabs'
import eventProxy from '../../eventProxy'
class Paidui extends Component{
    constructor(){
        super();
    }
    render(){
        return (
            <div>
                <Header/>
                <Tabs indexCur={'paidui'}/>
                <p>paidui</p>
            </div>
        )
    }
}

export default class Parent extends Component{
    constructor(){
        super();
    }
    render() {
        return (
            <div>
                <Child_1/>
                <Child_2/>
            </div>
        );
    }
}
// componentDidUpdate 与 render 方法与上例一致
class Child_1 extends Component{
    constructor(){
        super();
    }

    renderTxt = () =>{
        return(
            'asfdasdfsafasfsadfsafdasdf'
        )
    };

    componentDidMount() {
        setTimeout(() => {
            // 发布 msg 事件
            eventProxy.trigger('msga',this.renderTxt());
        }, 2000);
    }
    render(){
        return (
            <div>111</div>
        )
    }
}
// componentDidUpdate 方法与上例一致
class Child_2 extends Component{
    constructor(){
        super();
        this.state = {
            msgs: 'start'
        };
    }

    jieshou = (msgs) =>{
        this.setState({
            msgs:msgs
        })
    }

    componentDidMount() {
        // 监听 msg 事件
        eventProxy.on('msga', this.jieshou);
    }

    render() {
        return (
                <div>
                    <p>child_2 component: {this.state.msgs}</p>
                    <Child_2_1 />
                </div>
            )
    }
}
class Child_2_1 extends Component{
    componentDidUpdate() {
        console.log('Child_2_1 update');
    }

    render() {
        return <div>
            <p>child_2_1 component</p>
        </div>
    }
}