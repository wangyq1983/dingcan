import React from 'react';

class NewsList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            tabs:[
                {tabName:"热点新闻"},
                {tabName:"合作播报"},
                {tabName:"行业咨询"},
                {tabName:"运营攻略"}
            ],
            currentIndex:1,
        };
    }
    componentDidMount() {

    }
    tabChoiced=(id)=>{
        // tab切换的方法
        this.setState({
            currentIndex:id
        });
    }
    render(){
        var _this=this;
        var tabList= this.state.tabs.map(function(res,index) {
            // 遍历标签页，如果标签的id等于tabid，那么该标签就加多一个active的className
            var tabStyle=index+1==this.state.currentIndex ? 'subCtrl active' : 'subCtrl';

            return    <li key={index} onClick={this.tabChoiced.bind(_this,index+1)} className={tabStyle}>{res.tabName}</li>

        }.bind(_this));
        return (
            <div className="listWrap">
                <ul className="subNavWrap">
                    {tabList}
                </ul>
            </div>
        )
    }
}

export default NewsList;
