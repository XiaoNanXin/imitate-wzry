module.exports = app => {
    const express = require('express');
    const router = express.Router({
        mergeParams:true
    });
    
    // 创建资源
  router.post('/', async (req, res) => {
    const model = await req.Model.create(req.body)
    res.send(model)
  })
  // 更新资源
  router.put('/:id', async (req, res) => {
    const model = await req.Model.findByIdAndUpdate(req.params.id, req.body)
    res.send(model)
  })
  // 删除资源
  router.delete('/:id', async (req, res) => {
    await req.Model.findByIdAndDelete(req.params.id)
    res.send({
      success: true
    })
  })
  // 资源列表
  router.get('/', async (req, res) => {
    const queryOptions = {}
    if (req.Model.modelName === 'Category') {
      queryOptions.populate = 'parent'
    }
    const items = await req.Model.find().setOptions(queryOptions).limit(100)
    res.send(items)
  })
  // 资源详情
  router.get('/:id', async (req, res) => {
    const model = await req.Model.findById(req.params.id)
    res.send(model)
  })
    //在通用接口中引入Schema的关键函数
    app.use("/admin/api/rest/:resource",async(req,res,next)=>{
        const modelName = require('inflection').classify(req.params.resource)
        //用inflection可以把小写负数单词变成首字母大写的单数单词比如把dogs变成Dog

        req.Model = require(`../../models/${modelName}`);
        next();
    },router);
    //进行登录验证
    app.post("/admin/api/login",async (req,res)=>{
        let {username,password} = req.body;
        const AdminUser = require('../../models/AdminUser');
        let user = await AdminUser.findOne({username}).select('+password')
        if(!user){
            res.status(422).send({
                message:"用户不存在"
            })
        }
        let ishas = await require('bcrypt').compareSync(password,user.password);
        if(!ishas){
            res.status(422).send({
                message:"密码错误"
            })
        }
        let jwt = require('jsonwebtoken');
        let token = await jwt.sign({id:user._id},app.get("secret"))
        res.send({token});
    })

    const multer = require('multer');//处理图像的中间件1111
    const upload = multer({dest:__dirname + "../../../uploads"})//使用multer中间件来处理图像保存问题
    app.post("/admin/api/upload", upload.single("file"),async (req,res)=>{
        file = req.file;
        file.url = `http://localhost:3000/uploads/${file.filename}`;
        res.send(file);
    })
}