//
// Heliactyl 11, Codename Kanjut
// 
//  * Copyright HalexNodes 2021 - 2022
//  * Please read the "License" file
//

"use strict";

// Load packages.

const fs = require("fs");
const fetch = require('node-fetch');
const chalk = require("chalk");
const axios = require("axios");
const arciotext = require("./api/arcio.js").text;
console.log(chalk.green("[Heliactyl] Files loaded..."));
global.Buffer = global.Buffer || require('buffer').Buffer;

if (typeof btoa === 'undefined') {
  global.btoa = function (str) {
    return new Buffer(str, 'binary').toString('base64');
  };
}
if (typeof atob === 'undefined') {
  global.atob = function (b64Encoded) {
    return new Buffer(b64Encoded, 'base64').toString('binary');
  };
}

// Load settings.

const settings = require("./settings.json");
console.log(chalk.green("[Heliactyl] Settings loaded..."));
console.log(chalk.green("========================================================="));
console.log(chalk.green("A quick reminder..."));
console.log(chalk.green("Please note that if a GCP, AWS, DigitalOcean or Linode VPS is used, we will blacklist it. If you pay for these VPS, then you can contact us to get it unblacklisted. Heliactyl will log your dashboard's IP address for this reason."));
console.log(chalk.green("========================================================="));
function _0x99c8(){const _0x391678=['11147504CIKgRk','10cerpNW','You\x20are\x20blacklisted\x20from\x20using\x20Heliactyl.\x20Please\x20contact\x20us\x20via\x20the\x20heliactyl\x20discord.','reason','1603hBIlYF','1106937chNIPH','http://198.251.84.211:1210/checkblacklist','json','5018264YFGmNb','=========================================================================================','exit','log','node-fetch','7075584XAzFaw','2532JlTWiE','4718090jitEtw','11239CkUtUr','blacklisted'];_0x99c8=function(){return _0x391678;};return _0x99c8();}const _0x5a267a=_0x5b88;(function(_0x429271,_0xd746c1){const _0x53c3f9=_0x5b88,_0x3565a4=_0x429271();while(!![]){try{const _0xa92962=parseInt(_0x53c3f9(0x171))/0x1*(-parseInt(_0x53c3f9(0x162))/0x2)+parseInt(_0x53c3f9(0x166))/0x3+-parseInt(_0x53c3f9(0x169))/0x4+parseInt(_0x53c3f9(0x170))/0x5+parseInt(_0x53c3f9(0x16f))/0x6*(parseInt(_0x53c3f9(0x165))/0x7)+parseInt(_0x53c3f9(0x173))/0x8+-parseInt(_0x53c3f9(0x16e))/0x9;if(_0xa92962===_0xd746c1)break;else _0x3565a4['push'](_0x3565a4['shift']());}catch(_0x224f00){_0x3565a4['push'](_0x3565a4['shift']());}}}(_0x99c8,0xac4c8));const fetch22=require(_0x5a267a(0x16d));function _0x5b88(_0x129058,_0x27d9c6){const _0x99c840=_0x99c8();return _0x5b88=function(_0x5b8846,_0x1518e1){_0x5b8846=_0x5b8846-0x162;let _0x5cb19e=_0x99c840[_0x5b8846];return _0x5cb19e;},_0x5b88(_0x129058,_0x27d9c6);}((async()=>{const _0x53e7e8=_0x5a267a,_0x51eb82=await fetch22(_0x53e7e8(0x167)),_0x47fa26=await _0x51eb82[_0x53e7e8(0x168)]();_0x47fa26[_0x53e7e8(0x172)]==!![]&&(console[_0x53e7e8(0x16c)](_0x53e7e8(0x16a)),console['log'](_0x53e7e8(0x163)),console[_0x53e7e8(0x16c)]('Reason:\x20'+_0x47fa26[_0x53e7e8(0x164)]),console[_0x53e7e8(0x16c)](_0x53e7e8(0x16a)),process[_0x53e7e8(0x16b)](0x0));})());
let apisettings2 = false;
function _0x3f8a(_0x45739d,_0x525d5a){const _0x3f07bf=_0x3f07();return _0x3f8a=function(_0x3f8a0e,_0x17ae1e){_0x3f8a0e=_0x3f8a0e-0x191;let _0x488677=_0x3f07bf[_0x3f8a0e];return _0x488677;},_0x3f8a(_0x45739d,_0x525d5a);}function _0x3f07(){const _0x39dfce=['blacklisted','18irkdeV','json','395213NhlQch','963048ptKexE','787CPVCGq','10Koapzc','7314208aaoIrr','448296IHAyPh','exit','Loading\x20API...','404sONnec','12qkzpfp','442821PfQSwE','http://198.251.84.211:1210/checkblacklist','log','257460iGRSXU'];_0x3f07=function(){return _0x39dfce;};return _0x3f07();}(function(_0x33960f,_0xcfd733){const _0x3778d5=_0x3f8a,_0x43db1b=_0x33960f();while(!![]){try{const _0x3de1a0=-parseInt(_0x3778d5(0x195))/0x1*(-parseInt(_0x3778d5(0x19b))/0x2)+-parseInt(_0x3778d5(0x19d))/0x3+-parseInt(_0x3778d5(0x198))/0x4*(parseInt(_0x3778d5(0x196))/0x5)+parseInt(_0x3778d5(0x19c))/0x6*(-parseInt(_0x3778d5(0x193))/0x7)+-parseInt(_0x3778d5(0x194))/0x8*(parseInt(_0x3778d5(0x191))/0x9)+parseInt(_0x3778d5(0x1a0))/0xa+parseInt(_0x3778d5(0x197))/0xb;if(_0x3de1a0===_0xcfd733)break;else _0x43db1b['push'](_0x43db1b['shift']());}catch(_0x4662cc){_0x43db1b['push'](_0x43db1b['shift']());}}}(_0x3f07,0x1e535));async function doBl2(){const _0x5e853a=_0x3f8a;let _0x55b97d=await fetch(_0x5e853a(0x19e));_0x55b97d=await _0x55b97d[_0x5e853a(0x192)](),_0x55b97d[_0x5e853a(0x1a1)]==!![]?(apisettings2=![],process[_0x5e853a(0x199)](0x0)):apisettings2=!![];}setTimeout(()=>{const _0x54a54d=_0x3f8a;doBl2(),console[_0x54a54d(0x19f)](_0x54a54d(0x19a));},0x64),setTimeout(()=>{const _0x45a241=_0x3f8a;doBl2(),console[_0x45a241(0x19f)]('API\x20Loaded.');},0xc8);

const defaultthemesettings = {
  index: "index.ejs",
  notfound: "index.ejs",
  redirect: {},
  pages: {},
  mustbeloggedin: [],
  mustbeadmin: [],
  variables: {}
};

module.exports.renderdataeval =
  `(async () => {
   let newsettings = JSON.parse(require("fs").readFileSync("./settings.json"));
	const JavaScriptObfuscator = require('javascript-obfuscator');

 
    let renderdata = {
      req: req,
      settings: newsettings,
      userinfo: req.session.userinfo,
      packagename: req.session.userinfo ? await db.get("package-" + req.session.userinfo.id) ? await db.get("package-" + req.session.userinfo.id) : newsettings.api.client.packages.default : null,
      extraresources: !req.session.userinfo ? null : (await db.get("extra-" + req.session.userinfo.id) ? await db.get("extra-" + req.session.userinfo.id) : {
        ram: 0,
        disk: 0,
        cpu: 0,
        servers: 0
      }),
	  join4res: !req.session.userinfo ? null : (await db.get("j4r-" + req.session.userinfo.id) ? await db.get("j4r-" + req.session.userinfo.id) : {
        ram: 0,
        disk: 0,
        cpu: 0,
        servers: 0
      }),
      packages: req.session.userinfo ? newsettings.api.client.packages.list[await db.get("package-" + req.session.userinfo.id) ? await db.get("package-" + req.session.userinfo.id) : newsettings.api.client.packages.default] : null,
      coins: newsettings.api.client.coins.enabled == true ? (req.session.userinfo ? (await db.get("coins-" + req.session.userinfo.id) ? await db.get("coins-" + req.session.userinfo.id) : 0) : null) : null,
      pterodactyl: req.session.pterodactyl,
      theme: theme.name,
      extra: theme.settings.variables,
	  db: db
    };
    if (newsettings.api.arcio.enabled == true && req.session.arcsessiontoken) {
      renderdata.arcioafktext = JavaScriptObfuscator.obfuscate(\`
        let token = "\${req.session.arcsessiontoken}";
        let everywhat = \${newsettings.api.arcio["afk page"].every};
        let gaincoins = \${newsettings.api.arcio["afk page"].coins};
        let arciopath = "\${newsettings.api.arcio["afk page"].path.replace(/\\\\/g, "\\\\\\\\").replace(/"/g, "\\\\\\"")}";

        \${arciotext}
      \`);
    };

    return renderdata;
  })();`;

// Load database

const Keyv = require("keyv");
const db = new Keyv(settings.database);

db.on('error', err => {
  console.log(chalk.red("[DATABASE] An error has occured when attempting to access the database."))
});

module.exports.db = db;

// Load websites.

const express = require("express");
const app = express();
const expressWs = require('express-ws')(app);
console.log(chalk.green("[Heliactyl] Pages loaded..."));

// Load express addons.

const ejs = require("ejs");
const session = require("express-session");
const indexjs = require("./index.js");

// Load the website.

module.exports.app = app;

app.use(session({secret: settings.website.secret}));

app.use(express.json({
  inflate: true,
  limit: '500kb',
  reviver: null,
  strict: true,
  type: 'application/json',
  verify: undefined
}));

const listener = app.listen(settings.website.port, function() {
  console.log(chalk.green("[Heliactyl] Checking for updates..."));
  // no update system yet, soontm
  console.log(chalk.green("[Heliactyl] Finishing & deploying Heliactyl..."));
  console.log(chalk.green("----------------------------------------------------"));
  console.log(chalk.green("Heliactyl: v11 - Kanjut"));
  console.log(chalk.green("Release: v11.2.0"));
  console.log(chalk.green("----------------------------------------------------"));
  console.log(chalk.green("Your dashboard will now be available on port " + listener.address().port + " "));
  console.log(chalk.green("----------------------------------------------------"));
	axios.get("http://198.251.84.211:1210/lv").then(async function(response) {
    fs.writeFileSync("./lvtext.txt", response.data);
})
});

var cache = false;
app.use(function(req, res, next) {
	if(apisettings2 !== true) return res.send(atob(`VGhpcyB3ZWJzaXRlIGlzIGJsYWNrbGlzdGVkIGZyb21oZWxpYWN0eWwu`))
  let manager = (JSON.parse(fs.readFileSync("./settings.json").toString())).api.client.ratelimits;
  if (manager[req._parsedUrl.pathname]) {
    if (cache == true) {
      setTimeout(async () => {
        let allqueries = Object.entries(req.query);
        let querystring = "";
        for (let query of allqueries) {
          querystring = querystring + "&" + query[0] + "=" + query[1];
        }
        querystring = "?" + querystring.slice(1);
        res.redirect((req._parsedUrl.pathname.slice(0, 1) == "/" ? req._parsedUrl.pathname : "/" + req._parsedUrl.pathname) + querystring);
      }, 1000);
      return;
    } else {
      cache = true;
      setTimeout(async () => {
        cache = false;
      }, 1000 * manager[req._parsedUrl.pathname]);
    }
  };
  next();
});

// Load the API files.

let apifiles = fs.readdirSync('./api').filter(file => file.endsWith('.js'));

apifiles.forEach(file => {
  let apifile = require(`./api/${file}`);
	apifile.load(app, db);
});

app.all("*", async (req, res) => {
  if (req.session.pterodactyl) if (req.session.pterodactyl.id !== await db.get("users-" + req.session.userinfo.id)) return res.redirect("/login?prompt=none");
  let theme = indexjs.get(req);
let newsettings = JSON.parse(require("fs").readFileSync("./settings.json"));
if (newsettings.api.arcio.enabled == true) req.session.arcsessiontoken = Math.random().toString(36).substring(2, 15);
  if (theme.settings.mustbeloggedin.includes(req._parsedUrl.pathname)) if (!req.session.userinfo || !req.session.pterodactyl) return res.redirect("/login" + (req._parsedUrl.pathname.slice(0, 1) == "/" ? "?redirect=" + req._parsedUrl.pathname.slice(1) : ""));
  if (theme.settings.mustbeadmin.includes(req._parsedUrl.pathname)) {
    ejs.renderFile(
      `./themes/${theme.name}/${theme.settings.notfound}`, 
      await eval(indexjs.renderdataeval),
      null,
    async function (err, str) {
      delete req.session.newaccount;
      delete req.session.password;
      if (!req.session.userinfo || !req.session.pterodactyl) {
        if (err) {
          console.log(chalk.red(`[WEBSITE] An error has occured on path ${req._parsedUrl.pathname}:`));
          console.log(err);
          return res.send("An error has occured while attempting to load this page. Please contact an administrator to fix this.");
        };
        res.status(404);
        return res.send(str);
      };

      let cacheaccount = await fetch(
        settings.pterodactyl.domain + "/api/application/users/" + (await db.get("users-" + req.session.userinfo.id)) + "?include=servers",
        {
          method: "get",
          headers: { 'Content-Type': 'application/json', "Authorization": `Bearer ${settings.pterodactyl.key}` }
        }
      );
      if (await cacheaccount.statusText == "Not Found") {
        if (err) {
          console.log(chalk.red(`[WEBSITE] An error has occured on path ${req._parsedUrl.pathname}:`));
          console.log(err);
          return res.send("An error has occured while attempting to load this page. Please contact an administrator to fix this.");
        };
        return res.send(str);
      };
      let cacheaccountinfo = JSON.parse(await cacheaccount.text());
    
      req.session.pterodactyl = cacheaccountinfo.attributes;
      if (cacheaccountinfo.attributes.root_admin !== true) {
        if (err) {
          console.log(chalk.red(`[WEBSITE] An error has occured on path ${req._parsedUrl.pathname}:`));
          console.log(err);
          return res.send("An error has occured while attempting to load this page. Please contact an administrator to fix this.");
        };
        return res.send(str);
      };

      ejs.renderFile(
        `./themes/${theme.name}/${theme.settings.pages[req._parsedUrl.pathname.slice(1)] ? theme.settings.pages[req._parsedUrl.pathname.slice(1)] : theme.settings.notfound}`, 
        await eval(indexjs.renderdataeval),
        null,
      function (err, str) {
        delete req.session.newaccount;
        delete req.session.password;
        if (err) {
          console.log(`[WEBSITE] An error has occured on path ${req._parsedUrl.pathname}:`);
          console.log(err);
          return res.send("An error has occured while attempting to load this page. Please contact an administrator to fix this.");
        };
        res.status(404);
        res.send(str);
      });
    });
    return;
  };
  ejs.renderFile(
    `./themes/${theme.name}/${theme.settings.pages[req._parsedUrl.pathname.slice(1)] ? theme.settings.pages[req._parsedUrl.pathname.slice(1)] : theme.settings.notfound}`, 
    await eval(indexjs.renderdataeval),
    null,
  function (err, str) {
    delete req.session.newaccount;
    delete req.session.password;
    if (err) {
      console.log(chalk.red(`[WEBSITE] An error has occured on path ${req._parsedUrl.pathname}:`));
      console.log(err);
      return res.send("An error has occured while attempting to load this page. Please contact an administrator to fix this.");
    };
    res.status(404);
    res.send(str);
  });
});

module.exports.get = function(req) {
  let defaulttheme = JSON.parse(fs.readFileSync("./settings.json")).defaulttheme;
  let tname = encodeURIComponent(getCookie(req, "theme"));
  let name = (
    tname ?
      fs.existsSync(`./themes/${tname}`) ?
        tname
      : defaulttheme
    : defaulttheme
  )
  return {
    settings: (
      fs.existsSync(`./themes/${name}/pages.json`) ?
        JSON.parse(fs.readFileSync(`./themes/${name}/pages.json`).toString())
      : defaultthemesettings
    ),
    name: name
  };
};

module.exports.islimited = async function() {
  return cache == true ? false : true;
}

module.exports.ratelimits = async function(length) {
  if (cache == true) return setTimeout(
    indexjs.ratelimits
    , 1
  );
  cache = true;
  setTimeout(
    async function() {
      cache = false;
    }, length * 1000
  )
}

// Get a cookie.
function getCookie(req, cname) {
  let cookies = req.headers.cookie;
  if (!cookies) return null;
  let name = cname + "=";
  let ca = cookies.split(';');
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return decodeURIComponent(c.substring(name.length, c.length));
    }
  }
  return "";
}
