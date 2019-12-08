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
        <router-link
          tag="div"
          to="https://pvp.qq.com/m/m201706/coming/index.htm"
          class="nav-item mt-2 pt-2 mb-2"
        >
          <i class="sprite sprite-news"></i>
          <br />
          <div class="py-1 text">爆料站</div>
        </router-link>
        <div class="nav-item mt-2 pt-2 mb-2">
          <i class="sprite sprite-story"></i>
          <div class="py-1 text">故事站</div>
        </div>
        <div class="nav-item mt-2 pt-2 mb-2">
          <i class="sprite sprite-shop"></i>
          <div class="py-1 text">周边商城</div>
        </div>
        <div class="nav-item mt-2 pt-2 mb-2">
          <i class="sprite sprite-experience"></i>
          <div class="py-1 text">体验服</div>
        </div>
        <div class="nav-item mt-2 pt-2 mb-2" v-show="isshow">
          <i class="sprite sprite-new"></i>
          <div class="py-1 text">新人专区</div>
        </div>
        <div class="nav-item mt-2 pt-2 mb-2" v-show="isshow">
          <i class="sprite sprite-inherit"></i>
          <div class="py-1 text">荣耀·传承</div>
        </div>
        <div class="nav-item mt-2 pt-2 mb-2" v-show="isshow">
          <i class="sprite sprite-simulate"></i>
          <div class="py-1 text">模拟战资料库</div>
        </div>
        <div class="nav-item mt-2 pt-2 mb-2" v-show="isshow">
          <i class="sprite sprite-king"></i>
          <div class="py-1 text">王者营地</div>
        </div>
        <div class="nav-item mt-2 pt-2 mb-2" v-show="isshow">
          <i class="sprite sprite-account"></i>
          <div class="py-1 text">公众号</div>
        </div>
        <div class="nav-item mt-2 pt-2 mb-2" v-show="isshow">
          <i class="sprite sprite-versions"></i>
          <div class="py-1 text">版本介绍</div>
        </div>
        <div class="nav-item mt-2 pt-2 mb-2" v-show="isshow">
          <i class="sprite sprite-envir"></i>
          <div class="py-1 text">对局环境</div>
        </div>
        <div class="nav-item mb-2 mt-2 pt-2" v-show="isshow">
          <i class="sprite sprite-team"></i>
          <div class="py-1 text">无限王者团</div>
        </div>
      </div>
      <div class="close py-2 fs-sm bg-light text-center" @click="isshow=!isshow">
        <i class="sprite" :class="isshow? `sprite-arrow`:`sprite-arrow-reverse`"></i>
        <span class="px-1">{{isshow? "收起":"展开"}}</span>
      </div>
    </div>
    <m-list-card icon="menu" title="新闻资讯" :categories="newsData">
      <template #items="{category}">
        <router-link
          tag="div"
          :to="`articles/${item._id}`"
          class="py-2 fs-lg d-flex"
          v-for="(item,i) in category.newsList"
          :key="i"
        >
          <span class="text-info">[{{item.categorityName}}]</span>
          <span class="px-1">|</span>
          <span class="text-ellipsis flex-1">{{item.title}}</span>
          <span class="jc-right text-grey-1">{{item.createdAt | date}}</span>
        </router-link>
      </template>
    </m-list-card>
    <m-list-card icon="card-hero" title="英雄列表" :categories="heroData">
      <template #items="{category}">
        <ul class="hero_list">
          <router-link
            tag="li"
            :to="`/heroes/${hero._id}`"
            class="hero_item px-2"
            v-for="(hero,i) in category.heroList"
            :key="i"
          >
            <img class="w-100" :src="hero.avatar" alt />
            <span class="fs-md text-center">{{hero.name}}</span>
          </router-link>
        </ul>
      </template>
    </m-list-card>
    <Mcard icon="hero" title="精彩视频">
      <div class="d-flex flex-1 fs-xl mt-3 w-100 text-center">敬请期待</div>
    </Mcard>
    <Mcard icon="hero" title="图文攻略">
      <div class="d-flex flex-1 fs-xl mt-3 w-100 text-center">敬请期待</div>
    </Mcard>
  </div>
</template>

<script>
import dayjs from "dayjs";
export default {
  filters: {
    date(val) {
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
      newsData: [],
      heroData: [],
      isshow: true
    };
  },
  created() {
    this.getnewsList();
    this.getHeroList();
  },
  methods: {
    async getnewsList() {
      let res = await this.$http.get("/news/list");
      this.newsData = res.data;
    },
    async getHeroList() {
      let res = await this.$http.get("/heroes/list");
      this.heroData = res.data;
    }
  }
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
      .text {
      }
    }
  }
}

.hero_list {
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  padding: 0 0;
  margin-left: -7px;
  margin-right: -7px;
  .hero_item {
    width: 20%;
    text-align: center;
  }
}
</style>
