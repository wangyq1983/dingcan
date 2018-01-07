/**
 * Created by pack on 17/10/24.
 */
import React, { Component} from 'react';
import PropTypes from 'prop-types'
import {
    HashRouter as Router,
    Route,
    Link
} from 'react-router-dom'
import HeadCell from './HeadCell'
export default class Header extends Component{
    // constructor(props){
    //     super(props);
    //     this.setState = {
    //         currentIndex:1,
    //     };
    //     this.tabs = [
    //         {item:'paidui',link:'paidui'},
    //         {item:'diancai',link:'diancai'},
    //         {item:'jiacai',link:'add'},
    //         {item:'order',link:'order'}
    //     ];
    // }
    //
    // tabChoiced=(id)=>{
    //     // tab切换的方法
    //     this.setState({
    //         currentIndex:id
    //     });
    // };
    //
    // render(){
    //     var _this = this;
    //
    //     return(
    //         <div style={{flexDirection:'column',display:'flex'}}>
    //             {this.tabs.map(function (res,index) {
    //                 var tabStyle= 'subCtrl';
    //                 return (
    //                     <div style={{marginLeft:5,marginRight:5}} onClick={this.tabChoiced.bind(_this,index+1)} className={tabStyle}>
    //                         <Link to={res.link} style={styles.nolstyle}>{res.item}</Link>
    //                     </div>
    //                 )
    //             }.bind(_this))}
    //         </div>
    //     )
    // }

    constructor(props) {
        super(props);
        this.state = {
            tabs:[
                {item:'paidui',link:'paidui'},
                {item:'diancai',link:'diancai'},
                {item:'jiacai',link:'add'},
                {item:'order',link:'order'}
            ],
        };
    }
    componentDidMount() {

    }
    // tabChoiced=(id)=>{
    //     // tab切换的方法
    //     this.setState({
    //         currentIndex:id
    //     });
    // }
    render(){
        return (
            <div className="HeaderStyle">
                {this.state.tabs.map(function(res,index) {
                    // 遍历标签页，如果标签的id等于tabid，那么该标签就加多一个active的className
                    var tabStyle=res.link==this.props.indexCur ? styles.curstyle : styles.nolstyle;
                    return (
                        <div style={tabStyle}>
                            <Link to={res.link}>
                                <HeadCell cName={res.item} />
                            </Link>
                        </div>

                    )
                }.bind(this))
            }
            </div>
        );
    }
}
Header.propTypes = {
    indexCur:PropTypes.string
};
const styles = {
    curstyle:{
        color:'#f00',
        backgroundColor:'#f00'
    },
    nolstyle:{
        color:'#00f',
        backgroundColor:'#00f'
    }
};