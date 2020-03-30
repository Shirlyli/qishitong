<template>
  <div>
    <nav class="mui-bar mui-bar-tab">
      <router-link
        class="mui-tab-item"
        to="/home"
      >
        <TabbarItem
          title="首页"
          mark="home"
          :active="choose"
          @changeactive="dochange"
        >
          <img
            src="/img/common/nav_1.png"
            slot="darkImg"
            alt=""
          >
          <img
            src="/img/common/nav_1_cur.png"
            slot="lightImg"
            alt=""
          >
        </TabbarItem>
      </router-link>
      <router-link
        class="mui-tab-item"
        to="/sort"
      >
        <TabbarItem
          title="分类"
          mark="sort"
          :active="choose"
          @changeactive="dochange"
        >
          <img
            src="/img/common/nav_2.png"
            slot="darkImg"
            alt=""
          >
          <img
            src="/img/common/nav_2_cur.png"
            slot="lightImg"
            alt=""
          >
        </TabbarItem>
      </router-link>
      <router-link
        class="mui-tab-item"
        to="/cart"
      >
        <TabbarItem
          title="购物车"
          mark="cart"
          :active="choose"
          @changeactive="dochange"
        >
          <img
            src="/img/common/nav_4.png"
            slot="darkImg"
            alt=""
          >
          <img
            src="/img/common/nav_4_cur.png"
            slot="lightImg"
            alt=""
          >
        </TabbarItem>
      </router-link>
      <router-link
        class="mui-tab-item"
        to="/mine"
      >
        <TabbarItem
          title="我的"
          mark="mine"
          :active="choose"
          @changeactive="dochange"
        >
          <img
            src="/img/common/nav_5.png"
            slot="darkImg"
            alt=""
          >
          <img
            src="/img/common/nav_5_cur.png"
            slot="lightImg"
            alt=""
          >
        </TabbarItem>
      </router-link>

    </nav>
  </div>
</template>

<script>
import TabbarItem from './TabbarItem'
export default {
  name: 'tabbar',
  components: {
    TabbarItem
  },
  data() {
    return {
      choose: 'home'
    }
  },
  created() {},
  methods: {
    dochange(data) {
      this.choose = data
    }
  }
}
</script>

<style lang="less" scoped>
nav {
  img {
    width: 1.4rem;
    height: 1.4rem;
  }
}
</style>
