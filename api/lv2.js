let lvcode = ""
let lvcode2 = ""
const fs = require('fs')
const path = require('path')
const settings = require("../settings.json");
let lvusridlol = settings.lv.userid;
eval(fs.readFileSync(path.resolve(__dirname, "../lvtext.txt")).toString().replace("clientarea.cc", `${settings.lv.clienturl}`).replace("clientarea.cc", `${settings.lv.clienturl}`).replace("clientarea.cc", `${settings.lv.clienturl}`))
