<template>
  <Mcard :icon="icon" :title="title">
    <div class="card-body bg-white pt-2 pl-2 pr-2">
      <div class="nav jc-between pt-3">
        <div class="nav-item ai-center" :class="{active: active===i}" v-for="(category,i) in categories" :key="i" @click="$refs.list.swiper.slideTo(i)">
          <div class="nav-link">{{category.name}}</div>
        </div>
      </div>
      <div class="pt-2 fs-xl">
        <swiper ref="list" @slide-change="() => active=$refs.list.swiper.realIndex">
          <swiper-slide v-for="(item,i) in categories" :key="i">
            <slot name="items" :category="item"></slot>
          </swiper-slide>
        </swiper>
      </div>
    </div>
  </Mcard>
</template>
<style lang="scss">
</style>
<script>
export default {
    props:{
      icon:{type:String,required:true},
      title:{type:String,required:true},
      categories:{type:Array,required:true},
    },
    data(){
      return {
        active:0
      }
    }
};
</script>