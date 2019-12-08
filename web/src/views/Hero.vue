<template>
  <div class="page_hero" v-if="model">
    <div class="topbar bg-black py-2 px-4 d-flex ai-center text-white">
      <img src="../assets/logo.png" height="30px" alt />
      <div class="flex-1 px-2">
        <span>王者荣耀</span>
        <span class="ml-3">攻略站</span>
      </div>
      <div>
        <router-link tag="div" to="/" class="fs-sm">更多英雄 &gt;</router-link>
      </div>
    </div>
    <div v-if="model" class="hero_header" :style="{'background-image': `url(${model.banner})`}">
      <div class="info text-white p-3 d-flex flex-column jc-end h-100">
        <div class="fs-sm">{{model.title}}</div>
        <h2 class="my-2">{{model.name}}</h2>
        <div class="fs-sm">{{model.categories.map(v => v.name).join('/')}}</div>
        <div class="d-flex jc-between mt-1">
          <div class="d-flex ai-center flex-1">
            <span>难度</span>
            <span class="badge bg-primary">{{model.scores.difficult}}</span>
            <span>技巧</span>
            <span class="badge bg-blue-1">{{model.scores.skills}}</span>
            <span>攻击</span>
            <span class="badge bg-danger">{{model.scores.attack}}</span>
            <span>生存</span>
            <span class="badge bg-dark">{{model.scores.survive}}</span>
          </div>
          <router-link to="/" tag="span" class="text-grey fs-sm">皮肤: 7 &gt;</router-link>
        </div>
      </div>
    </div>
    <div class="hero_body">
      <div class="nav pt-3 pb-2 jc-around px-3 bg-white">
        <div class="nav-item active">英雄初识</div>
        <div class="nav-item">进阶攻略</div>
      </div>
      <div class="border-bottom px-3"></div>
      <swiper>
        <swiper-slide>
          <div>
            <div class="bg-white">
              <div class="button d-flex pt-2 jc-around px-3">
                <router-link tag="div" to="/" class="btn btn-lg flex-1">
                  <i class="iconfont icon-video"></i>
                  <span>英雄介绍视频</span>
                </router-link>
                <router-link tag="div" to="/" class="btn btn-lg flex-1 ml-2">
                  <i class="iconfont icon-book"></i>
                  <span>一图识英雄</span>
                </router-link>
              </div>
              <div class="skills mt-4 d-flex jc-around px-3" v-if="model.skills">
                <img
                  :src="item.icon"
                  alt
                  v-for="(item,i) in model.skills"
                  :key="i"
                  :class="{'active':crentIndex==i}"
                  @click="crentIndex=i"
                />
              </div>
              <div v-if="crentSkills" class="des px-3">
                <div class="d-flex mt-4">
                  <h3 class="p-0 m-0">{{crentSkills.name}}</h3>
                  <span
                    class="text-grey-1 fs-xs ml-4"
                  >(冷却值：{{crentSkills.delay}} 消耗：{{crentSkills.cost}})</span>
                </div>
                <p class="fs-md mt-4 pb-3 border-bottom p1">{{crentSkills.description}}</p>
                <p class="text-grey-1 mt-1 p2 fs-sm pb-3">小提示：{{crentSkills.tips}}</p>
              </div>
            </div>
            <Mcard plain icon="card-hero" title="出装推荐">
              <div>
                <div>
                  <p class="fs-xl">顺风出装</p>
                  <div class="d-flex jc-around">
                    <div v-for="(item) in model.items1" :key="item.name" class="items1">
                      <img :src="item.icon" alt width="45" height="45" />
                      <div class="fs-xs text-grey-1 text-center">{{item.name}}</div>
                    </div>
                  </div>
                </div>
                <div class="border-bottom mt-3"></div>
                <div>
                  <p class="fs-xl">逆风出装</p>
                  <div class="d-flex jc-around">
                    <div v-for="(item) in model.items2" :key="item.name" class="items1">
                      <img :src="item.icon" alt width="45" height="45" />
                      <div class="fs-xs text-grey-1 text-center">{{item.name}}</div>
                    </div>
                  </div>
                </div>
              </div>
            </Mcard>
            <Mcard plain icon="card-hero" title="使用技巧">
              <p class="text-dark-1 fs-md">{{model.usageTips}}</p>
            </Mcard>
            <Mcard plain icon="card-hero" title="对抗技巧">
              <p class="text-dark-1 fs-md">{{model.battleTips}}</p>
            </Mcard>
            <Mcard plain icon="card-hero" title="团战思路">
              <p class="text-dark-1 fs-md">{{model.teamTips}}</p>
            </Mcard>
            <Mcard plain icon="card-hero" title="英雄关系">
              <div>
                <p class="fs-xl">最佳搭档</p>
                <div v-for="(item) in model.partners" :key="item.name" class="partners d-flex mb-4">
                  <img :src="item.hero.avatar" alt width="50" height="50" />
                  <span class="fs-md flex-1 text-dark-1 ml-3">{{item.description}}</span>
                </div>
              </div>
              <div class="border-bottom"></div>
            </Mcard>
          </div>
        </swiper-slide>
        <swiper-slide>敬请期待</swiper-slide>
      </swiper>
    </div>
  </div>
</template>
<style lang="scss">
@import "../assets/sass/_variables.scss";
.page_hero {
  .hero_header {
    background: #fff no-repeat top center;
    height: 50vw;
    background-size: auto 100%;
  }
  .info {
    background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 1));
    .badge {
      display: inline-block;
      width: 1rem;
      height: 1rem;
      border-radius: 50%;
      line-height: 1rem;
      font-size: 0.75rem;
      text-align: center;
      margin: 0 0.25rem;
    }
  }
  .skills {
    img {
      width: 70px;
      border: 3px solid map-get($map: $colors, $key: "white");
      height: 70px;
      border-radius: 50%;
      &.active {
        border: 3px solid map-get($map: $colors, $key: "primary");
      }
    }
  }
  .des {
    .p1 {
      line-height: 23px;
    }
    .p2 {
      line-height: 20px;
    }
  }
  .items1 {
    img {
      border-radius: 50%;
    }
  }
  .partners{
    span{
      line-height: 20px;
    }
  }
}
</style>

<script>
export default {
  props: {
    id: { required: true }
  },
  data() {
    return {
      model: null,
      crentIndex: 0
    };
  },
  computed: {
    crentSkills() {
      return this.model.skills[this.crentIndex];
    }
  },
  methods: {
    async getHero() {
      let res = await this.$http.get(`/heroes/${this.id}`);
      this.model = res.data;
      window.console.log(res.data);
    }
  },
  created() {
    this.getHero();
  }
};
</script>