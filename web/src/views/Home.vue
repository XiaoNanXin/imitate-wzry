<template>
  <swiper :options="swiperOption">
    <swiper-slide ><img class="w-100" src="../assets/images/a806e41784c93c10cc77d7a146892090.jpeg" alt=""></swiper-slide>
    <swiper-slide ><img class="w-100" src="../assets/images/a806e41784c93c10cc77d7a146892090.jpeg" alt=""></swiper-slide>
    <swiper-slide ><img class="w-100" src="../assets/images/a806e41784c93c10cc77d7a146892090.jpeg" alt=""></swiper-slide>
    <div class="swiper-pagination pagination-home text-right px-3 pb-2"  slot="pagination"></div>
  </swiper>
</template>

<script>
  export default {
    data() {
      return {
        swiperOption: {
          // some swiper options/callbacks
          // 所有的参数同 swiper 官方 api 参数
          // ...
          pagination: {
            el: '.pagination-home'
          },
          loop:true,
        }
      }
    },
  }
</script>

<style lang="scss">
@import '../assets/sass/_variables.scss';
  .pagination-home{
    
    .swiper-pagination-bullet{
      opacity: 1;
      border-radius: 2px;
      background: map-get($map: $colors, $key: 'white');
      &.swiper-pagination-bullet-active{
        background:map-get($map: $colors, $key: 'info');
      }
    }
  }
</style>
