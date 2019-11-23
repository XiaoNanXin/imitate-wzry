<template>
  <div>
    <h1>物品列表</h1>
    <el-table :data="listData">
      <el-table-column prop="_id" label="ID" width="230"></el-table-column>
      <!-- <el-table-column prop="parent.name" label="上级分类"></el-table-column> -->
      <el-table-column prop="name" label="物品名称"></el-table-column>
      <el-table-column prop="icon" label="图标">
        <template slot-scope="scope">
          <img :src="scope.row.icon" alt="" style="height:3rem">
        </template>
      </el-table-column>
      <el-table-column fixed="right" label="操作" width="180">
        <template slot-scope="scope">
          <el-button @click="remove(scope.row)" type="primary" size="small">删除</el-button>
          <el-button
            type="primary"
            size="small"
            @click="$router.push(`/items/edit/${scope.row._id}`)"
          >编辑</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      listData: []//111
    };
  },
  methods: {
    async getlist() {
      const res = await this.$http.get("/rest/items");
      this.listData = res.data;
      window.console.log(res);
    },
    remove(row) {
      this.$confirm(`是否删除"${row.name}"分类`, "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(async() => {
          await this.$http.delete(`/rest/items/${row._id}`);
          // window.console.log(res);
          this.$message({
            type: "success",
            message: "删除成功!"
          });
          this.getlist();
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除"
          });
        });
    }
  },
  created() {
    this.getlist();
  }
};
</script>