import { login, logout, getInfo } from '@/api/login'
import { getToken, setToken, removeToken } from '@/utils/cookie/auth'

const user = {
  state: {
    token: getToken(),
    name: '',
    avatar: '',
    roles: []
  },
  mutations: {
    //设置用户token
    SET_TOKEN: (state, token) =>{
      state.token = token
    },
    //设置用户名称
    SET_NAME: (state, name) => {
      state.name = name
    },
    //设置用户头像
    SET_AVATAR: (state, avatar) => {
      state.avatar = avatar
    },
    //设置用户路由规则
    SET_ROLES: (state, roles) => {
      state.roles = roles
    }
  },
  actions: {
    /**
     * Login 用户登录
     * @param { Obejct } options.commit 执行方法
     * @param { Object } userInfo       用户登录信息
     */
    Login({ commit }, userInfo){
      return new Promise((resolve, reject) => {
        login(userInfo.username, userInfo.password).then(response => {
          const data = response.data
          setToken(data.token)
          commit('SET_TOKEN', data.token)
          resolve()
        }).catch(error => {
          reject(error)
        })
      })
    },
    /**
     * Logout 用户退出
     * @param { Object } options.commit 执行方法
     * @param { Obecjt } state state 
     */
    Logout({ commit, state }){
      return new Promise((resolve, reject) => {
        logout(state.token).then(()=> {
          commit('SET_TOKEN', '')
          commit('SET_ROLES', [])
          removeToken()
          resolve()
        }).catch(error => {
          reject(error)
        })
      })
    },
    /**
     * GetInfo 获取用户信息
     * @param { Object } options.commit 执行方法
     * @param { Obecjt } state state 
     */
    GetInfo({ commit, state }){
      return new Promise((resolve, reject) => {
        getInfo(state.token).then(response => {
          const data = response.data
          commit('SET_ROLES', data.role)
          commit('SET_NAME', data.name)
          commit('SET_AVATAR', data.avatar)
          resolve(response)
        }).catch(error => {
          reject(error)
        })
      })
    },
    /**
     * FedLogout 前端登出
     * @param { Obecjt } options.commit store实例的镜像
     */
    FedLogout({ commit }) {
      return new Promise(resolve => {
        commit('SET_TOKEN', '')
        removeToken()
        resolve()
      })
    }
  }
}

export default user