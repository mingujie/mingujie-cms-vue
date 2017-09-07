import fetch from '@/utils/fetch'

/**
 * login 校验用户和密码是否正确
 * @param  { String } username 用户名称
 * @param  { String } password 用户密码
 * @return {[type]}          [description]
 */
export function login(username, password) {
  return fetch({
    url: '/user/login',
    method: 'post',
    data: {
      username,
      password
    }
  })
}

/**
 * getInfo 获取用户新
 * @param  { Object } token 用户唯一token
 * @return {[type]}       [description]
 */
export function getInfo(token) {
  return fetch({
    url: '/user/info',
    method: 'get',
    params: { token }
  })
}

/**
 * logout 退出登录
 * @return {[type]} [description]
 */
export function logout() {
  return fetch({
    url: '/user/logout',
    method: 'post'
  })
}