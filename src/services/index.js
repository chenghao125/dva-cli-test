import request from '../utils/request';

export function getLogin() {
    return request(`/api/useradmin/getSlidingVerify.do`,{
        method: 'post',
        headers: {
            'Content-Type': 'application/json;charset=UTF-8'
        }
    });
}
export function getUser(params) {
    return request(`/api/user/getUserInformation.do`,{
        method: 'post',
        headers:{
            'Content-Type':'application/x-www-form-urlencoded;charset=UTF-8',
        },
        body:JSON.stringify(params)
    });
}
