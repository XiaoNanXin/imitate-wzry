module.exports = app => {
    const express = require('express');
    const router = express.Router({
        mergeParams:true
    });

    router.post("/",async (req,res)=>{
        const model = await req.Model.create(req.body);
        res.send(model);
    })
    router.put("/:id",async (req,res)=>{
        const model = await req.Model.findByIdAndUpdate(req.params.id,req.body);
        res.send(model);
    })
    router.get("/",async (req,res)=>{
        let queryOptions = {};
        if(req.Model.modelName=="Gategory"){
            queryOptions.populate = "parent"
        }
        const items = await req.Model.find().setOptions(queryOptions).limit(10);
        res.send(items);
    })
    router.delete("/:id",async (req,res)=>{
        await req.Model.findByIdAndDelete(req.params.id);
        res.send({
            success:true
        })
    })
    router.get("/:id",async (req,res)=>{
        const item = await req.Model.findById(req.params.id);
        res.send(item);
    })
    app.use("/admin/api/rest/:resource",async(req,res,next)=>{
        const modelName = require('inflection').classify(req.params.resource)//用inflection可以把小写负数单词变成首字母大写的单数单词比如把dogs变成Dog
        req.Model = require(`../../models/${modelName}`);
        
        
        next();
    },router);

    const multer = require('multer');//处理图像的中间件
    const upload = multer({dest:__dirname + "../../../uploads"})//使用multer中间件来处理图像保存问题
    app.post("/admin/api/upload", upload.single("file"),async (req,res)=>{
        file = req.file;
        file.url = `http://localhost:3000/uploads/${file.filename}`;
        res.send(file);
    })
}