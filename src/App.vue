<template>
  <div id="app">
    <transition>
      <router-view></router-view>
    </transition>
    <Tabbar></Tabbar>
  </div>
</template>
<script>
import Tabbar from './components/Tabbar'
export default {
  components: {
    Tabbar
  },
  beforeCreate() {
    this.$router.push('/home')
  },
  activated: function() {
    this.$setgoindex()
  }
}
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.v-enter {
  opacity: 0;
  transform: translateX(100%);
}
.v-leave-to {
  opacity: 0;
  transform: translateX(-100%);
  position: absolute;
}

.v-enter-active,
.v-leave-active {
  transition: all 0.5 ease;
}
</style>
