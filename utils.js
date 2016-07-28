/**
 * 去掉URL中的某些参数
 * 调用方法1: getUrlWithoutParams(url, params1, params2...)
 * 调用方法2: getUrlWithoutParams(url, [params1, params2...])
 * 方法1例: getUrlWithoutParams('http://www.pingan.com/index.shtml?a=1&b=2&c=3&d=4&e=5#demo', ['a','b'])
 * 方法2例: getUrlWithoutParams('http://www.pingan.com/index.shtml?a=1&b=2&c=3&d=4&e=5#demo', 'a','b')
 * @returns {string}
 */
function getUrlWithoutParams() {
    var parmArr = Array.prototype.splice.call(arguments,0), str = parmArr.shift();
    if(Object.prototype.toString.call(parmArr[0],null) === '[object Array]'){
        parmArr = parmArr[0]
    }
    return str.replace(new RegExp('(' + parmArr.join('|') + ')=((.*?)((?:&)|(?=($|#))))', 'g'), '')
}
