
//解析当前url中参数的方法，name为参数名
export function getQueryString(name) {
    let reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
    let r = window.location.hash.split('?')[1].match(reg);
    if (r != null) {
        return decodeURIComponent(r[2]);
    };
    return null;
 }
