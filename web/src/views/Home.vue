<template>
  <div>
    <swiper :options="swiperOption">
      <swiper-slide>
        <img class="w-100" src="../assets/images/a806e41784c93c10cc77d7a146892090.jpeg" alt />
      </swiper-slide>
      <swiper-slide>
        <img class="w-100" src="../assets/images/a806e41784c93c10cc77d7a146892090.jpeg" alt />
      </swiper-slide>
      <swiper-slide>
        <img class="w-100" src="../assets/images/a806e41784c93c10cc77d7a146892090.jpeg" alt />
      </swiper-slide>
      <div class="swiper-pagination pagination-home text-right px-3 pb-2" slot="pagination"></div>
    </swiper>
    <div class="nav-icons text-center mt-3">
      <div class="nav d-flex flex-wrap text-dark-1 fs-sm">
        <div class="nav-item mt-2 pt-2 mb-2">
          <i class="sprite sprite-news"></i>
          <br />
          <div class="py-1">爆料站</div>
        </div>
        <div class="nav-item mt-2 pt-2 mb-2">
          <i class="sprite sprite-story"></i>
          <div class="py-1">故事站</div>
        </div>
        <div class="nav-item mt-2 pt-2 mb-2">
          <i class="sprite sprite-shop"></i>
          <div class="py-1">周边商城</div>
        </div>
        <div class="nav-item mt-2 pt-2 mb-2">
          <i class="sprite sprite-news"></i>
          <div class="py-1">体验服</div>
        </div>
        <div class="nav-item mt-2 pt-2 mb-2">
          <i class="sprite sprite-news"></i>
          <div class="py-1">新人专区</div>
        </div>
        <div class="nav-item mt-2 pt-2 mb-2">
          <i class="sprite sprite-news"></i>
          <div class="py-1">荣耀·传承</div>
        </div>
        <div class="nav-item mt-2 pt-2 mb-2">
          <i class="sprite sprite-news"></i>
          <div class="py-1">模拟战资料库</div>
        </div>
        <div class="nav-item mt-2 pt-2 mb-2">
          <i class="sprite sprite-news"></i>
          <div class="py-1">王者营地</div>
        </div>
        <div class="nav-item mt-2 pt-2 mb-2">
          <i class="sprite sprite-news"></i>
          <div class="py-1">公众号</div>
        </div>
        <div class="nav-item mt-2 pt-2 mb-2">
          <i class="sprite sprite-news"></i>
          <div class="py-1">版本介绍</div>
        </div>
        <div class="nav-item mt-2 pt-2 mb-2">
          <i class="sprite sprite-news"></i>
          <div class="py-1">对局环境</div>
        </div>
        <div class="nav-item mb-2 mt-2 pt-2">
          <i class="sprite sprite-news"></i>
          <div class="py-1">无限王者团</div>
        </div>
      </div>
      <div class="close py-2 fs-sm bg-light text-center">
        <i class="sprite sprite-arrow"></i>
        <span class="px-1">收起</span>
      </div>
    </div>
    <m-list-card icon="menu" title="新闻资讯" :categories="newsData">
      <template #items="{category}">
        <div class="py-2 fs-lg d-flex" v-for="(item,i) in category.newsList" :key="i">
          <span class="text-info">[{{item.categorityName}}]</span>
          <span class="px-1">|</span>
          <span class="text-ellipsis flex-1">{{item.title}}</span>
          <span class="jc-right text-grey-1">{{item.createdAt | date}}</span>
        </div>
      </template>
    </m-list-card>
    <m-list-card icon="hero" title="英雄列表"></m-list-card>
    <m-list-card icon="hero" title="精彩视频"></m-list-card>
    <m-list-card icon="hero" title="图文攻略"></m-list-card>
  </div>
</template>

<script>
import dayjs from 'dayjs';
export default {
  
  filters: {
    date(val){
      return dayjs(val).format("MM/DD");
    }
  },
  data() {
    return {
      swiperOption: {
        // some swiper options/callbacks
        // 所有的参数同 swiper 官方 api 参数
        // ...
        pagination: {
          el: ".pagination-home"
        },
        loop: true
      },
      newsData: []
    };
  },
  created() {
    this.getnewsList();
  },
  methods: {
    async getnewsList(){
      let res = await this.$http.get('/news/list');
      this.newsData = res.data;
    }
  },
};
</script>

<style lang="scss">
@import "../assets/sass/_variables.scss";
.pagination-home {
  .swiper-pagination-bullet {
    opacity: 1;
    border-radius: 2px;
    background: map-get($map: $colors, $key: "white");
    &.swiper-pagination-bullet-active {
      background: map-get($map: $colors, $key: "info");
    }
  }
}
.nav-icons {
  background: white;
  border-bottom: 1px solid map-get($map: $colors, $key: "light-1");
  .nav {
    .nav-item {
      border-right: 1px solid map-get($map: $colors, $key: "light-1");
      width: 25%;
      &:nth-child(4n) {
        border-right: none;
      }
    }
  }
}
</style>
