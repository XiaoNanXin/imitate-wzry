<template>
  <div class="page_hero">
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
          <router-link to="/" tag="span" class="text-grey fs-sm">皮肤: 2 &gt;</router-link>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss">
.page_hero {
  .hero_header {
    background: #fff no-repeat top center;
    height: 50vw;
    background-size: auto 100%;
  }
  .info {
    background: linear-gradient(rgba(0,0,0,0),rgba(0,0,0,1));
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
}
</style>

<script>
export default {
  props: {
    id: { required: true }
  },
  data() {
    return {
      model: null
    };
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