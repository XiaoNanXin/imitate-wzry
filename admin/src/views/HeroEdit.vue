<template>
  <div>
    <h1>{{id ? "编辑":"创建"}}英雄</h1>
    <el-form @submit.native.prevent="save()" label-width="120px">
      <el-tabs value="basic" type="border-card">
        <el-tab-pane label="基础信息" name="basic">
          <el-form-item label="英雄名称">
            <el-input v-model="model.name"></el-input>
          </el-form-item>
          <el-form-item label="英雄称号">
            <el-input v-model="model.title"></el-input>
          </el-form-item>
          <el-form-item label="头像">
            <el-upload
              class="avatar-uploader"
              :action="$http.defaults.baseURL + '/upload'"
              :headers="getAutorization()"
              :show-file-list="false"
              :on-success="upLoad"
            >
              <img v-if="model.avatar" :src="model.avatar" class="avatar" />
              <i v-else class="el-icon-plus avatar-uploader-icon"></i>
            </el-upload>
          </el-form-item>
          <el-form-item label="背景图片">
            <el-upload
              class="avatar-uploader"
              :action="$http.defaults.baseURL + '/upload'"
              :headers="getAutorization()"
              :show-file-list="false"
              :on-success="res => $set(model,'banner',res.url)"
            >
              <img v-if="model.banner" :src="model.banner" class="avatar" />
              <i v-else class="el-icon-plus avatar-uploader-icon"></i>
            </el-upload>
          </el-form-item>
          <el-form-item label="类型">
            <el-select v-model="model.categories" multiple>
              <el-option
                v-for="item of categories"
                :key="item._id"
                :value="item._id"
                :label="item.name"
              ></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="难度">
            <el-rate :max="9" v-model="model.scores.difficult" show-score style="margin-top:0.6rem"></el-rate>
          </el-form-item>
          <el-form-item label="技能">
            <el-rate :max="9" v-model="model.scores.skills" show-score style="margin-top:0.6rem"></el-rate>
          </el-form-item>
          <el-form-item label="攻击">
            <el-rate :max="9" v-model="model.scores.attack" show-score style="margin-top:0.6rem"></el-rate>
          </el-form-item>
          <el-form-item label="生存">
            <el-rate :max="9" v-model="model.scores.survive" show-score style="margin-top:0.6rem"></el-rate>
          </el-form-item>
          <el-form-item label="顺风出装">
            <el-select v-model="model.items1" multiple>
              <el-option v-for="item of items" :key="item._id" :value="item._id" :label="item.name"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="逆风出装">
            <el-select v-model="model.items2" multiple>
              <el-option v-for="item of items" :key="item._id" :value="item._id" :label="item.name"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="使用技巧">
            <el-input type="textarea" v-model="model.usageTips"></el-input>
          </el-form-item>
          <el-form-item label="对抗技巧">
            <el-input type="textarea" v-model="model.battleTips"></el-input>
          </el-form-item>
          <el-form-item label="团战思路">
            <el-input type="textarea" v-model="model.teamTips"></el-input>
          </el-form-item>
        </el-tab-pane>
        <el-tab-pane label="技能配置" name="skills">
          <el-button size="small" @click="model.skills.push({})">
            <i class="el-icon-plus"></i>添加技能
          </el-button>
          <el-row type="flex" style="flex-wrap:wrap">
            <el-col :md="12" v-for="(item,i) in model.skills" :key="i" style="margin-left:0px">
              <el-form-item label="技能名称">
                <el-input v-model="item.name"></el-input>
              </el-form-item>
              <el-form-item label="冷却值">
                <el-input v-model="item.delay"></el-input>
              </el-form-item>
              <el-form-item label="消耗">
                <el-input v-model="item.cost"></el-input>
              </el-form-item>
              <el-form-item label="技能图标">
                <el-upload
                  class="avatar-uploader"
                  :action="$http.defaults.baseURL + '/upload'"
                  :headers="getAutorization()"
                  :show-file-list="false"
                  :on-success="res => $set(item,'icon',res.url)"
                >
                  <img v-if="item.icon" :src="item.icon" class="avatar" />
                  <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                </el-upload>
              </el-form-item>
              <el-form-item label="技能描述">
                <el-input type="textarea" v-model="item.description"></el-input>
              </el-form-item>
              <el-form-item label="小提示">
                <el-input v-model="item.tips" type="textarea"></el-input>
              </el-form-item>
              <el-form-item>
                <el-button size="small" type="danger" @click="model.skills.splice(i,1)">删除</el-button>
              </el-form-item>
            </el-col>
          </el-row>
        </el-tab-pane>
        <el-tab-pane label="最佳搭档" name="partners">
          <el-button size="small" @click="model.partners.push({})">
            <i class="el-icon-plus"></i>添加伙伴
          </el-button>
          <el-row type="flex" style="flex-wrap:wrap">
            <el-col :md="12" v-for="(item,i) in model.partners" :key="i" style="margin-left:0px">
              <el-form-item label="伙伴名称">
                <el-select filterable v-model="item.hero" placeholder="">
                  <el-option
                    v-for="(item,i) in heroes"
                    :key="i"
                    :label="item.name"
                    :value="item._id">
                  </el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="伙伴描述">
                <el-input type="textarea" v-model="item.description"></el-input>
              </el-form-item>
              <el-form-item>
                <el-button size="small" type="danger" @click="model.skills.splice(i,1)">删除</el-button>
              </el-form-item>
            </el-col>
          </el-row>
        </el-tab-pane>
      </el-tabs>
      <el-form-item style="margin-top:1rem;">
        <el-button type="primary" native-type="submit">保存</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  props: {
    id: {}
  },
  data() {
    return {

      categories: [],
      items: [],
      heroes:[],
      model: {
        scores: {},
        skills:[],
        partners:[],
      }
    };
  },
  methods: {
    upLoad(res) {
      // window.console.log(res);
      // this.model.icon = res.url;
      //注意这里用上面那句话是没有效果的，因为原本定义model的时候没有icon属性所以要用下面的办法
      this.$set(this.model, "avatar", res.url);
    },
    async save() {
      if (this.id) {
        await this.$http.put(`/rest/heroes/${this.id}`, this.model);
      } else {
        await this.$http.post("/rest/heroes", this.model);
      }
      // this.$router.push("/heroes/list");
      this.$message({
        type: "success",
        message: "保存成功了"
      });
    },
    async fecth() {
      const res = await this.$http.get(`/rest/heroes/${this.id}`);
      this.model = Object.assign({}, this.model, res.data);
      window.console.log(res);
    },
    async fecthCategories() {
      const res = await this.$http.get(`/rest/categories`);
      this.categories = res.data;
      // window.console.log(res);
    },
    async fecthItems() {
      const res = await this.$http.get(`/rest/items`);
      this.items = res.data;
      // window.console.log(res);
    },
    async fecthHeroes() {
      const res = await this.$http.get(`/rest/heroes`);
      this.heroes = res.data;
      // window.console.log(res);
    }
  },
  created() {
    this.fecthItems();
    this.fecthHeroes();
    this.fecthCategories();
    this.id && this.fecth();
  }
};
</script>

<style>

</style>