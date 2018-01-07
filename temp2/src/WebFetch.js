/**
 * Created by pack on 17/11/1.
 */
var WebFetch = {
    /**
     * http get 简单请求
     * @param url 请求的URL
     * @param successCallback 请求成功回调
     * @param failCallback 请求失败回调
     */
    get: (url)=>{
            fetch(url, {
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
};
export default WebFetch;