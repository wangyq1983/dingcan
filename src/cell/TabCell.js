/**
 * Created by tbp on 2017/10/24.
 */
import React, { Component} from 'react';
export default class TabCell extends Component{

    constructor(props){
        super(props);
        this.state = {
            curIndex: 2,
        };
    }
    render(){
        return(
            <div className="tabCell" onClick={this.xiangying}>
                <img src={this.props.icon} />
                <p>
                    {this.props.title}
                </p>
                <div className="tabBotom"></div>
            </div>
        )
    }
}
const style = {
    Tab_tittle_active:{
        backgroundColor:'#f00'
    },
    Tab_tittle:{
        backgroundColor:'#00f'
    }
}