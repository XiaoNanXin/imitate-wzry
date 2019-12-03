module.exports = app => {
    const express = require('express');
    const jwt = require('jsonwebtoken');
    const AdminUser = require('../../models/AdminUser');
    const assert = require('http-assert');//抛出异常状态和消息
    const auth = require('../../middle/auth');
    const resource = require('../../middle/resource');
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
    // console.log(items);
    res.send(items)
  })
  // 资源详情
  router.get('/:id', async (req, res) => {
    const model = await req.Model.findById(req.params.id)
    res.send(model)
  })
    //在通用接口中引入Schema的关键函数,进行登录校验和获取Schema
  app.use("/admin/api/rest/:resource", auth(), resource(),router);
    
    //进行登录验证
    app.post("/admin/api/login",async (req,res)=>{
        let {username,password} = req.body;
        let user = await AdminUser.findOne({username}).select('+password')
        assert(user, 422, "用户不存在");
        // if(!user){
        //     res.status(422).send({
        //         message:"用户不存在"
        //     })
        // }
        let ishas = await require('bcrypt').compareSync(password,user.password);
        assert(ishas, 422, "密码错误");
        // if(!ishas){
        //     res.status(422).send({
        //         message:"密码错误"
        //     })
        // }
        let token = await jwt.sign({id:user._id},app.get("secret"))
        res.send({token});
    })

    //登陆后获取用户信息
    app.post("/admin/api/user",async (req,res)=>{
      let token = String(req.body.token);
      let {id} = jwt.verify(token,app.get("secret"));
      let user = await AdminUser.findById(id);
      res.send(user);
    })

    const multer = require('multer');//处理图像的中间件1111
    const upload = multer({dest:__dirname + "../../../uploads"})//使用multer中间件来处理图像保存问题
    app.post("/admin/api/upload", auth(), upload.single("file"),async (req,res)=>{
        file = req.file;
        file.url = `http://localhost:3000/uploads/${file.filename}`;
        res.send(file);
    })
    //错误处理函数
    app.use(async(err,req,res,next)=>{
        res.status(err.statusCode||500).send({
        message:err.message
      })
    })
}