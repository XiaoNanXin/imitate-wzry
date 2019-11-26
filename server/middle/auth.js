module.exports = options => async(req,res,next)=>{
    //登录校验
    //每次请求列表数据要对token进行验证，如果不满足验证就返回错误状态和message
    const assert = require('http-assert');
    const jwt = require('jsonwebtoken');
    const AdminUser = require('../models/AdminUser');
    let token = "";
    if(req.headers.authorization){
      token = String(req.headers.authorization).split(" ").pop();
    }
    assert(token, 401, "请先登录");
    //找到该token的用户对象
    let {id} =  await jwt.verify(token,req.app.get("secret"));
    assert(id, 401, "请先登录");
    req.user = await AdminUser.findById(id);
    assert(req.user, 401, "请先登录");
    await next();
  }