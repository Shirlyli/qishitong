<template>
  <div>
    <div @click="change">
      <span
      class="mui-icon"
      v-if="!bol"
    >
      <slot name="darkImg"></slot>
    </span>
    <span
      class="mui-icon"
      v-if="bol"
    >
      <slot name="lightImg"></slot>
    </span>
    <span :class="{active:bol}">{{title}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'tabbaritem',
  props: ['title', 'mark', 'active'],
  computed: {
    bol() {
      if (this.mark === this.active) {
        return true
      } else {
        return false
      }
    }
  },
  methods: {
    change() {
      this.$emit('changeactive', this.mark)
      // this.$router.push('/' + this.mark)
    }
  }
}
</script>

<style lang="less">
.active {
  color: rgb(207, 61, 61);
}
span:nth-child(2){
  display: block;
  font-size: 1rem;
}
</style>
