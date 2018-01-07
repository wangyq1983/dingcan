/**
 * Created by tbp on 2017/11/12.
 */
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import eventProxy from '../eventProxy'
export default class SizeChange extends Component{
    constructor(props){
        super(props);
        this.state = {
            inputValue:0
        }
    }

    showRender = (size) =>{
        var greenItem = {
            rid:this.props.greenData.rid,
            caiName:this.props.greenData.reasons,
            size:size,
        };
        console.log(greenItem);
        eventProxy.trigger('diancai', JSON.stringify(greenItem));
    };

    clickAdd = () =>{
        var sinput = this.refs.sinput;
        var sinputValue = parseInt(sinput.value)+1;
        this.setState({
            inputValue:sinputValue
        });
        {this.showRender(sinputValue)}
    };
    clickSub = () =>{
        var sinput = this.refs.sinput;
        var sinputValue = parseInt(sinput.value)-1;
        this.setState({
            inputValue:sinputValue
        })
        {this.showRender(sinputValue)}
    };

    render(){
        return(
            <div className="sizeItem">
                <div className="subBtn" onClick={this.clickSub}>-</div>
                <div><input type="text" className="inputsize" value={this.state.inputValue} ref={'sinput'} /></div>
                <div className="addBtn" onClick={this.clickAdd}>+</div>
            </div>
        )
    }
}