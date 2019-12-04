<template>
  <div v-if="model">
    <div class="article_header d-flex mx-1 py-3 ai-center border-bottom">
      <router-link to="/" class="iconfont icon-back text-blue" tag="i"></router-link>
      <div class="article_title flex-1 fs-md text-blue pl-2">{{model.title}}</div>
      <span class="date text-grey fs-xs">2019-11-27</span>
    </div>
    <div class="article_body px-3 fs-xl" v-html="model.body"></div>
    <div class="article_foot py-5">
      <div class="header px-3">
        <i class="iconfont icon-about"></i>
        <span class="pl-1 text-blue fs-md">相关资讯</span>
      </div>
      <div class="py-2">
        <router-link tag="div" :to="`/articles/${item._id}`" v-for="(item,i) in model.related" :key="i" class="px-3 mt-2 d-flex">
            <div class="flex-1 fs-lg text-ellipsis">{{item.title}}</div>
            <span class="text-grey fs-md">2019-11-23</span>
        </router-link>
      </div>
    </div>
  </div>
</template>
<style lang="scss">
.article_body{
    img{
        width: 100%;
        height: auto;
    };
    p{
        line-height: 100%;
        letter-spacing: 3px;
    }
}
.article_header{
    .article_title{
        font-weight: bold;
    }
}
.article_foot {
  .header {
    span {
      font-weight: bold;
    }
  }
}
</style>

<script>
export default {
  props: {
    id: { require: true }
  },
  data(){
      return {
          model:null
      }
  },
  watch: {
    id(){
      this.getArticle();
    }
  },
  methods: {
      async getArticle(){
          let res = await this.$http.get(`/articles/${this.id}`);
          window.console.log(res.data);
          this.model = res.data;
      }
  },
  created() {
      this.getArticle();
  },
};
</script>