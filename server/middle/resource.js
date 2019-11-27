module.exports = options => 
    async(req,res,next)=>{
        const modelName = require('inflection').classify(req.params.resource)
    //用inflection可以把小写负数单词变成首字母大写的单数单词比如把dogs变成Dog
        console.log(modelName);
        req.Model = require(`../models/${modelName}`);
        next();
  }