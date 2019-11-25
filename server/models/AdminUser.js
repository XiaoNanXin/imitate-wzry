const mongoose = require('mongoose')

const schema = new mongoose.Schema({
    username:{type:String},
    password:{type:String,
              select:false,
        set(val){
            return require('bcrypt').hashSync(val,10);
            //这里的bcrypt是为了让密码加密成不可逆的数据，保护用户隐私，然后这里bcrypt的安装需要注意最好安装3.0.6版本的，不然就更新node和npm版本
        }}
})

module.exports = mongoose.model("Ad",schema);