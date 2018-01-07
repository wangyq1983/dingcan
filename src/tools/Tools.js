/**
 * Created by tbp on 2017/11/5.
 */
export function UrlSearch(urlSearch) {
    var name,value;
    var urlSearchArray = new Array();
    var str=urlSearch; //取得整个地址栏
    var num=str.indexOf("?");
    str=str.substr(num+1); //取得所有参数   stringvar.substr(start [, length ]
    var arr=str.split("&"); //各个参数放到数组里
    for(var i=0;i < arr.length;i++){
        num=arr[i].indexOf("=");
        if(num>0){
            name=arr[i].substring(0,num);
            value=arr[i].substr(num+1);
            this[name]=value;
            urlSearchArray[name]=value; //输出关联数组
        }
    }
    return urlSearchArray;
}