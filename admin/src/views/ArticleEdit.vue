<template>
  <div>
    <h1>{{id ? "编辑":"创建"}}分类</h1>
    <el-form @submit.native.prevent="save()">
      <el-form-item label="所属分类">
        <el-select placeholder="请选择" v-model="model.categories" multiple>
          <el-option
            v-for="(item) in categories"
            :key="item._id"
            :label="item.name"
            :value="item._id"
          ></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="文章标题">
        <el-input v-model="model.title"></el-input>
      </el-form-item>
      <el-form-item>
        <vue-editor v-model="model.body" useCustomImageHandler @image-added="handleImageAdded"></vue-editor>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" native-type="submit">保存</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { VueEditor } from "vue2-editor";
export default {
  components: {
    VueEditor
  },
  props: {
    id: {}
  },
  data() {
    return {
      model: {},
      categories: []
    };
  },
  methods: {
    async save() {
      if (this.id) {
        await this.$http.put(`/rest/articles/${this.id}`, this.model);
      } else {
        await this.$http.post("/rest/articles", this.model);
      }
      this.$router.push("/articles/list");
      this.$message({
        type: "success",
        message: "保存成功了"
      });
    },
    async fecth() {
      const res = await this.$http.get(`/rest/articles/${this.id}`);
      this.model = res.data;
      window.console.log(this.model);
    },
    async getCategories() {
      const res = await this.$http.get(`/rest/categories`);
      this.categories = res.data;
    },
    async handleImageAdded(file, Editor, cursorLocation, resetUploader) {
      let formData = new FormData();
      formData.append("file", file);
      let res = await this.$http.post("/upload", formData);
      let url = res.data.url; // Get url from response
      Editor.insertEmbed(cursorLocation, "image", url);
      resetUploader();
    }
  },
  created() {
    this.getCategories();
    this.id && this.fecth();
  }
};
</script>