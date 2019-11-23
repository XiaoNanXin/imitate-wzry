<template>
    <div>
        <h1>创建分类</h1>
        <el-form @submit.native.prevent="save()"> 
            <el-form-item label="分类名称" >
                <el-input v-model="model.name"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" native-type="submit">创建</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
export default {
    data(){
        return {
            model:{}
        }
    },
    methods: {
        save(){

        }
    },
}
</script>