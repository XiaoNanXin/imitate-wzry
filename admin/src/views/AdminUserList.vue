<template>
  <div>
    <h1>管理员列表</h1>
    <el-table :data="listData">
      <el-table-column prop="_id" label="ID" width="230"></el-table-column>
      <el-table-column prop="username" label="用户名"></el-table-column>
      <el-table-column fixed="right" label="操作" width="180">
        <template slot-scope="scope">
          <el-button @click="remove(scope.row)" type="primary" size="small">删除</el-button>
          <el-button
            type="primary"
            size="small"
            @click="$router.push(`/admin_users/edit/${scope.row._id}`)"
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
      listData: []
    };
  },
  methods: {
    async getlist() {
      const res = await this.$http.get("/rest/admin_user");
      this.listData = res.data;
    },
    remove(row) {
      this.$confirm(`是否删除"${row.username}"`, "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(async() => {
          await this.$http.delete(`/rest/admin_user/${row._id}`);
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