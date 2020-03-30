<template>
  <div>
    <mt-header>
      <router-link
        to="/home"
        slot="left"
      >
        <mt-button icon="back"></mt-button>
      </router-link>
      <mt-button
        icon="more"
        slot="right"
      ></mt-button>
    </mt-header>
    <img
      class="logo"
      src="../../public/img/login/Logo.png"
      alt=""
    >
    <div class="main">
      <div class="item">
        <div class="img">
          <img
            src="../../public/img/login/user.png"
            alt=""
          >
        </div>
        <input
          type="text"
          placeholder="请输入用户名"
          v-model="loginForm.username"
        >
      </div>
      <div class="item">
        <div class="img">
          <img
            src="../../public/img/login/password.png"
            alt=""
          >
        </div>
        <input
          type="password"
          placeholder="请输入密码"
          v-model="loginForm.password"
        >
      </div>
    </div>
    <mt-button
      type="danger"
      @click="login"
      class="login"
    >登录</mt-button>
  </div>
</template>

<script>
// import $ from 'jquery'
export default {
  name: 'login',
  data() {
    return {
      loginForm: {
        username: 'admin',
        password: '123456'
      }
    }
  },
  methods: {
    async login() {
      const { data: res } = await this.$api.post('login', this.loginForm)
      console.log(res)
      // this.$message.success('登录成功')
      // 1，将登录成功之后的token保存到客户端的sessionStorage中
      // 1-1 项目中除了登之外的其他AOI接口必须登录以后才能访问
      // 1-2 token只应在当前网站打开期间有效，所以将token保存在sessionStorage中
      window.sessionStorage.setItem('token', res.data.token)
      if (this.$route.query.redirect) {
        const redirect = this.$route.query.redirect
        this.$router.push(redirect)
      } else {
        this.$router.push({ name: 'home' })
      }
    }
  }
  // beforeRouteLeave (to, from, next) {
  //   window.localStorage.setItem('path', to.path)
  // }

}
</script>

<style lang="less" scoped>
@import '../assets/login.less';
</style>
