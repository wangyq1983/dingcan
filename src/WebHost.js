/**
 * Created by pack on 17/11/2.
 */
const HOSTURL = [
    'http://api-dev.jiyoushe.cn',
    'http://api-dev.jiyoushe.cn',
    'http://api-verify.jiyoushe.cn',
    'http://as-dev.jiyoushe.cn',
    'http://api.jiyoushe.cn'];

const HOSTAPI = HOSTURL[4] + '/v2';

export function CaiList() {
    return HOSTAPI + '/amwaywall/get_list'
}

export function CaiDetail() {
    return HOSTAPI + '/amwaywall/get_detail'
}