<template>
  <div>
    <h1>{{id ? "编辑":"创建"}}物品</h1>
    <el-form @submit.native.prevent="save()">
      <!-- <el-form-item>
        <el-select placeholder="请选择" v-model="model.parent">
          <el-option v-for="(item) in parents" :key="item._id" :label="item.name" :value="item._id"></el-option>
        </el-select>
      </el-form-item>-->
      <el-form-item label="物品名称">
        <el-input v-model="model.name"></el-input>
      </el-form-item>
      <el-form-item>
        <el-upload
          class="avatar-uploader"
          :action="$http.defaults.baseURL + '/upload'"
          :headers="getAutorization()"
          :show-file-list="false"
          :on-success="upLoad"
        >
          <img v-if="model.icon" :src="model.icon" class="avatar" />
          <i v-else class="el-icon-plus avatar-uploader-icon"></i>
        </el-upload>
      </el-form-item>
      <el-form-item>
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
      model: {}
    };
  },
  methods: {
    upLoad(res) {
      // window.console.log(res);
      // this.model.icon = res.url;
      //注意这里用上面那句话是没有效果的，因为原本定义model的时候没有icon属性所以要用下面的办法
      this.$set(this.model,"icon",res.url);
    },
    async save() {
      if (this.id) {
        await this.$http.put(`/rest/items/${this.id}`, this.model);
      } else {
        await this.$http.post("/rest/items", this.model);
      }
      this.$router.push("/items/list");
      this.$message({
        type: "success",
        message: "保存成功了"
      });
    },
    async fecth() {
      const res = await this.$http.get(`/rest/items/${this.id}`);
      this.model = res.data;
    }
  },
  created() {
    this.id && this.fecth();
  }
};
</script>
