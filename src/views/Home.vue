<template>
  <div>
    <Header>
      <img
        src="/img/common/down_logo.png"
        alt=""
        class="img-logo"
      >
      <input
        type="text"
        placeholder="请输入关键字"
      >
      <div class="menu">
        <img
          src="/img/common/qst-menu.png"
          alt=""
        >
        <p>菜单</p>
      </div>
    </Header>
    <mt-swipe :auto="4000">
      <mt-swipe-item><img src="https://qstmallserver.oss-cn-hangzhou.aliyuncs.com/images/fg/images/new/banner4.jpg" alt=""></mt-swipe-item>
      <mt-swipe-item><img src="https://qstmallserver.oss-cn-hangzhou.aliyuncs.com/images/fg/images/new/banner-1030.jpg" alt=""></mt-swipe-item>
    </mt-swipe>
  </div>
</template>

<script>
export default {
  name: 'home',
  data() {
    return {
      bannerImg: []
    }
  },
  async created() {
    const res = await this.$http.get('http://qstscoa.qstjt.cn/h5web/index')
    console.log(JSON.parse(res.data))
    const allData = JSON.parse(res.data)
    this.bannerImg = allData.banner
    console.log(this.bannerImg)
  }
}
</script>

<style lang="less" scoped>
header {
  width: 100%;
  height: 3rem;
  display: flex;
  background-color: #efeff4;
  margin: 0;
  .img-logo {
    flex: 1;
    padding: 0.4rem;
    width: 1.6rem;
    height: 2.6rem;
  }
  .menu {
    flex: 1;
    padding: 0.4rem;
    box-sizing: border-box;
    img {
      width: 1.2rem;
      height: 1.2rem;
      display: block;
    }
    p {
      font-size: 0.6rem;
      text-align: left;
    }
  }
  input {
    flex: 8;
    margin: 0.4rem .8rem;
    height: 2rem;
    border-radius: 1.8rem;
    box-sizing: border-box;
    font-size: 0.8rem;
    text-indent: 1em;
    border: 1px solid rgb(236, 7, 7);
  }
}
.mint-swipe {
  width: 100%;
  height: 10rem;
  img{
    width: 100%;
    height: 100%;
  }
}
</style>
