<template>
  <div>
    <h1>{{id ? "编辑":"创建"}}分类</h1>
    <el-form @submit.native.prevent="save()" label-width="120px">
      <el-form-item label="名称">
        <el-input v-model="model.name"></el-input>
      </el-form-item>
      <el-form-item label="广告">
        <el-button size="small" @click="model.items.push({})">
          <i class="el-icon-plus"></i>添加广告
        </el-button>
        <el-row type="flex" style="flex-wrap:wrap">
          <el-col :md="24" v-for="(item,i) in model.items" :key="i" style="margin-left:0px">
            <el-form-item label="跳转链接（URL）" label-width="150px">
              <el-input v-model="item.url"></el-input>
            </el-form-item>
            <el-form-item label="图片" label-width="150px" style="margin-top:5px">
              <el-upload
                class="avatar-uploader"
                :action="$http.defaults.baseURL + '/upload'"
                :show-file-list="false"
                :on-success="res => $set(item,'image',res.url)"
              >
                <img v-if="item.image" :src="item.image" class="avatar" />
                <i v-else class="el-icon-plus avatar-uploader-icon"></i>
              </el-upload>
            </el-form-item>
            <el-form-item>
              <el-button size="small" type="danger" @click="model.items.splice(i,1)">删除</el-button>
            </el-form-item>
          </el-col>
        </el-row>
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
      model: {
        items:[]
      }
    };
  },
  methods: {
    async save() {
      if (this.id) {
        await this.$http.put(`/rest/ads/${this.id}`, this.model);
      } else {
        await this.$http.post("/rest/ads", this.model);
      }
      this.$router.push("/ads/list");
      this.$message({
        type: "success",
        message: "保存成功了"
      });
    },
    async fecth() {
      const res = await this.$http.get(`/rest/ads/${this.id}`);
      this.model = res.data;
    }
  },
  created() {
    this.id && this.fecth();
  }
};
</script>