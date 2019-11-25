<template>
    <div class="login">
        <el-card class="login-card" header="请先登录">
            <el-form label-width="60px" @submit.native.prevent="login">
                <el-form-item label="用户名">
                    <el-input v-model="model.username"></el-input>
                </el-form-item>
                <el-form-item label="密码">
                    <el-input type="password" v-model="model.password"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" class="login-button" native-type="submit">登录</el-button>
                </el-form-item>
            </el-form>
        </el-card>
    </div>
</template>
<style lang="less">
    .login{
        .login-card{
            margin: 15rem auto;
            width: 25rem;
            text-align: center;
            color: black;
        }
        
    }
    .login-button{
            margin: 0 -5rem 0 0;
        }
</style>
<script>
export default {
    data(){
        return {
            model:{}
        }
    },
    methods:{
        async login(){
            let res = await this.$http.post("/login",this.model);
            localStorage.token = res.data.token;
            this.$router.push('/');
        }
    }
}
</script>