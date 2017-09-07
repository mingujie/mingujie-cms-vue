<template>
  <div class="app flex-row align-items-center">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-md-8">
          <div class="card-group mb-0">
            <div class="card p-4">
              <div class="card-block">
              <el-form autoComplete="on" :model="loginForm" :rules="loginRules" ref="loginForm" label-position="left" class="login-form">
                <h1>CMS</h1>

                <p class="text-muted">使用账号登录</p>
                <div class="input-group mb-4">
                  <span class="input-group-addon"><i class="icon-user"></i></span>
                  <el-form-item prop="username">

                  <el-input name="username" type="text" v-model="loginForm.username" autoComplete="on" placeholder="用户名"></el-input>
                  </el-form-item>
                </div>
                <div class="input-group mb-4">
                  <span class="input-group-addon"><i class="icon-lock"></i></span>
                  <el-form-item prop="password">
                    <el-input name="password" type="password" v-model="loginForm.password" placeholder="密码"></el-input>
                  </el-form-item>
                </div>
                <div class="row">
                  <div class="col-6">
                    <el-form-item>
                      <el-button type="primary" :loading="loginLoading" @click.native.prevent="handleLogin">
                        登录
                      </el-button>
                    </el-form-item>
                  </div>
                  <div class="col-6 text-right">
                   <!--  <button type="button" class="btn btn-link px-0">忘记密码</button> -->
                  </div>
                </div>
              </el-form>
              </div>
            </div>
            <div class="card card-inverse card-primary py-5 d-md-down-none" style="width:44%">
              <div class="card-block text-center">
                <div>
                  <h2>注册说明</h2>
                  <p>欢迎来到内容管理系统，如果你还没有账号，请先注册喔。</p>
                  <button type="button" class="btn btn-primary active mt-3" @click="$router.push({ path: '/register'})">注册</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { isvalidUsername } from '@/utils/validate'
export default {
  name: 'Login',
  data (){
    //校验用户名称格式
    const validateUsername = (rule, value, callback) => {

      if (!isvalidUsername(value)) {
        callback(new Error('请输入正确的用户名'))
      } else {
        callback()
      }
    }

    //校验密码格式是否输入正确
    const validatePassword = (rule, value, callback) => {
      if (value.length < 6) {
        callback(new Error('密码不能小于6位'))
      } else {
        callback()
      }
    }
    return {
      loginForm: {
        username: 'admin',
        password: '111111'
      },
      loginRules: {
        username: [{ required: true, trigger: 'blur', validator: validateUsername }],
        password: [{ required: true, trigger: 'blur', validator: validatePassword }]
      },
      loginLoading: false
    }
  },
  methods: {
    /**
     * handleLogin 登录表单校验
     * @return {[type]} [description]
     */
    handleLogin() {
      this.$refs.loginForm.validate(valid => {
        if (valid) {
          this.loginLoading = true
          this.userPermission()
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    userPermission(){
      this.$store.dispatch('Login', this.loginForm).then(() => {  //
        this.loading = false
        this.$router.push({ path: '/' })
      }).catch(() => {
        this.loading = false
      })
    }
  }
}
</script>

<style lang="scss">
  .login-form {
    .el-form-item {
    position: relative;
    z-index: 2;
    flex: 1 1 auto;
    width: 1%;
    margin-bottom: 0;
      margin-bottom: 0;
      .el-input__inner {
        border-radius: 0;
      }
    }
  }
</style>