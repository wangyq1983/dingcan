/**
 * Created by pack on 17/11/14.
 */
import React from 'react';
import ShopIcon from './ShopIcon'
export default class Shopping extends React.Component{
    constructor(props){
        super(props);
        this.state={
            price:0,
            showList:false,
            shopList:''
        }
    }
    clickShopping = (msg) =>{
        this.setState({
            shopList:msg,
            showList:true
        });
        this.showShopList();
    };

    renderShopList = (msg) =>{
        console.log(msg);
        var shopLi = JSON.parse(msg);
        shopLi.map(function (res,index) {
            return (
                <p>{res.caiName}</p>
            )
        })
    };
    showShopList = () =>{
        alert('showShopList' + this.state.showList);
        if(this.state.showList == true){
            return (
                <div className="shopList">
                    {this.state.shopList}
                </div>
            )
        }else{
            return false;
        }
    };
    
    render(){
        return (
                <div className="shopping">
                    <ShopIcon
                        onClicked = {this.clickShopping}
                    />
                    {/*{this.showShopList()}*/}
                    <div className="shopPrice">
                        {this.state.price}
                    </div>
                    <div className="okPost">ok</div>
                </div>
            )
    }
}