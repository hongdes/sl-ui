import request from './api'
console.log(request)
const baseUrl = '/api'
const logIn = data => {
    return request({
        url: baseUrl + '/login.php',
        method: 'post',
        data
    })
}
const reportData = data => {
  return request({
    url: '//hwork.classba.cn/index.php/index/homework/getReportData',
    method: 'post',
    data
  })
}

export {
    logIn
}
