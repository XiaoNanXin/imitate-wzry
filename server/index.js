const express = require('express')
const cors = require('cors')
const app = express()

app.set("secret","mlszd");
app.use(cors());
app.use(express.json());
app.use("/uploads",express.static(__dirname+"/uploads"));
app.use("/admin/",express.static(__dirname+"/admin"));
app.use("/",express.static(__dirname+"/web"));

require("./plugins/db")(app)
require("./routers/admin")(app)
require("./routers/web")(app)

app.listen(3000,()=>{
    console.log("3000端口服务开启");
})