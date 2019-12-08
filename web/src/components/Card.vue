<template>
  <div class="card mt-3 bg-white p-3">
    <div class="card-header  d-flex fs-xl ai-center" :class="{'pb-3':!plain,'border-bottom':!plain}">
      <i class="iconfont" :class="`icon-${icon}`"></i>
      <span class="title flex-1 px-2"><strong>{{title}}</strong></span>
      <i class="more iconfont icon-menu1" v-if="!plain"></i>
    </div>
    <slot>默认显示内容</slot>
  </div>
</template>
<script>
export default {
  props: {
    title: { type: String, requried: true },
    icon: { type: String, requried: true },
    plain: { type: Boolean },
  }
};
</script>
<style lang="scss">
@import '../assets/sass/_variables.scss';
.card-header {
      // border-bottom: 1px solid map-get($map: $colors, $key: 'light-1');
  
}
</style>