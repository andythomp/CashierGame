/**
* SoundJS Flash Plugin.
* Visit http://createjs.com/ for documentation, updates and examples.
* Contains SWFObject (http://code.google.com/p/swfobject/)
*
* Copyright (c) 2011 gskinner.com, inc.
* 
* Distributed under the terms of the MIT license.
* http://www.opensource.org/licenses/mit-license.html
*
* This notice shall be included in all copies or substantial portions of the Software.
**/
var swfobject=function(){function n(){if(!x){try{var b=e.getElementsByTagName("body")[0].appendChild(e.createElement("span"));b.parentNode.removeChild(b)}catch(c){return}x=!0;for(var b=C.length,k=0;k<b;k++)C[k]()}}function h(b){x?b():C[C.length]=b}function z(b){if(typeof p.addEventListener!=l)p.addEventListener("load",b,!1);else if(typeof e.addEventListener!=l)e.addEventListener("load",b,!1);else if(typeof p.attachEvent!=l)U(p,"onload",b);else if(typeof p.onload=="function"){var c=p.onload;p.onload=
function(){c();b()}}else p.onload=b}function D(){var b=e.getElementsByTagName("body")[0],c=e.createElement(t);c.setAttribute("type",E);var k=b.appendChild(c);if(k){var q=0;(function(){if(typeof k.GetVariable!=l){var g=k.GetVariable("$version");if(g)g=g.split(" ")[1].split(","),f.pv=[parseInt(g[0],10),parseInt(g[1],10),parseInt(g[2],10)]}else if(q<10){q++;setTimeout(arguments.callee,10);return}b.removeChild(c);k=null;a()})()}else a()}function a(){var b=u.length;if(b>0)for(var c=0;c<b;c++){var k=u[c].id,
a=u[c].callbackFn,g={success:!1,id:k};if(f.pv[0]>0){var e=o(k);if(e)if(F(u[c].swfVersion)&&!(f.wk&&f.wk<312)){if(y(k,!0),a)g.success=!0,g.ref=d(k),a(g)}else if(u[c].expressInstall&&j()){g={};g.data=u[c].expressInstall;g.width=e.getAttribute("width")||"0";g.height=e.getAttribute("height")||"0";if(e.getAttribute("class"))g.styleclass=e.getAttribute("class");if(e.getAttribute("align"))g.align=e.getAttribute("align");for(var i={},e=e.getElementsByTagName("param"),V=e.length,m=0;m<V;m++)e[m].getAttribute("name").toLowerCase()!=
"movie"&&(i[e[m].getAttribute("name")]=e[m].getAttribute("value"));J(g,i,k,a)}else v(e),a&&a(g)}else if(y(k,!0),a){if((k=d(k))&&typeof k.SetVariable!=l)g.success=!0,g.ref=k;a(g)}}}function d(b){var c=null;if((b=o(b))&&b.nodeName=="OBJECT")typeof b.SetVariable!=l?c=b:(b=b.getElementsByTagName(t)[0])&&(c=b);return c}function j(){return!G&&F("6.0.65")&&(f.win||f.mac)&&!(f.wk&&f.wk<312)}function J(b,c,k,a){G=!0;K=a||null;N={success:!1,id:k};var g=o(k);if(g){g.nodeName=="OBJECT"?(B=r(g),H=null):(B=g,H=
k);b.id=O;if(typeof b.width==l||!/%$/.test(b.width)&&parseInt(b.width,10)<310)b.width="310";if(typeof b.height==l||!/%$/.test(b.height)&&parseInt(b.height,10)<137)b.height="137";e.title=e.title.slice(0,47)+" - Flash Player Installation";a=f.ie&&f.win?"ActiveX":"PlugIn";a="MMredirectURL="+encodeURI(window.location).toString().replace(/&/g,"%26")+"&MMplayerType="+a+"&MMdoctitle="+e.title;typeof c.flashvars!=l?c.flashvars+="&"+a:c.flashvars=a;if(f.ie&&f.win&&g.readyState!=4)a=e.createElement("div"),
k+="SWFObjectNew",a.setAttribute("id",k),g.parentNode.insertBefore(a,g),g.style.display="none",function(){g.readyState==4?g.parentNode.removeChild(g):setTimeout(arguments.callee,10)}();L(b,c,k)}}function v(b){if(f.ie&&f.win&&b.readyState!=4){var c=e.createElement("div");b.parentNode.insertBefore(c,b);c.parentNode.replaceChild(r(b),c);b.style.display="none";(function(){b.readyState==4?b.parentNode.removeChild(b):setTimeout(arguments.callee,10)})()}else b.parentNode.replaceChild(r(b),b)}function r(b){var c=
e.createElement("div");if(f.win&&f.ie)c.innerHTML=b.innerHTML;else if(b=b.getElementsByTagName(t)[0])if(b=b.childNodes)for(var a=b.length,q=0;q<a;q++)!(b[q].nodeType==1&&b[q].nodeName=="PARAM")&&b[q].nodeType!=8&&c.appendChild(b[q].cloneNode(!0));return c}function L(b,c,a){var q,g=o(a);if(f.wk&&f.wk<312)return q;if(g){if(typeof b.id==l)b.id=a;if(f.ie&&f.win){var d="",i;for(i in b)if(b[i]!=Object.prototype[i])i.toLowerCase()=="data"?c.movie=b[i]:i.toLowerCase()=="styleclass"?d+=' class="'+b[i]+'"':
i.toLowerCase()!="classid"&&(d+=" "+i+'="'+b[i]+'"');i="";for(var j in c)c[j]!=Object.prototype[j]&&(i+='<param name="'+j+'" value="'+c[j]+'" />');g.outerHTML='<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"'+d+">"+i+"</object>";I[I.length]=b.id;q=o(b.id)}else{j=e.createElement(t);j.setAttribute("type",E);for(var m in b)b[m]!=Object.prototype[m]&&(m.toLowerCase()=="styleclass"?j.setAttribute("class",b[m]):m.toLowerCase()!="classid"&&j.setAttribute(m,b[m]));for(d in c)c[d]!=Object.prototype[d]&&
d.toLowerCase()!="movie"&&(b=j,i=d,m=c[d],a=e.createElement("param"),a.setAttribute("name",i),a.setAttribute("value",m),b.appendChild(a));g.parentNode.replaceChild(j,g);q=j}}return q}function P(b){var c=o(b);if(c&&c.nodeName=="OBJECT")f.ie&&f.win?(c.style.display="none",function(){if(c.readyState==4){var a=o(b);if(a){for(var e in a)typeof a[e]=="function"&&(a[e]=null);a.parentNode.removeChild(a)}}else setTimeout(arguments.callee,10)}()):c.parentNode.removeChild(c)}function o(b){var c=null;try{c=e.getElementById(b)}catch(a){}return c}
function U(b,c,a){b.attachEvent(c,a);A[A.length]=[b,c,a]}function F(b){var c=f.pv,b=b.split(".");b[0]=parseInt(b[0],10);b[1]=parseInt(b[1],10)||0;b[2]=parseInt(b[2],10)||0;return c[0]>b[0]||c[0]==b[0]&&c[1]>b[1]||c[0]==b[0]&&c[1]==b[1]&&c[2]>=b[2]?!0:!1}function Q(b,c,a,d){if(!f.ie||!f.mac){var g=e.getElementsByTagName("head")[0];if(g){a=a&&typeof a=="string"?a:"screen";d&&(M=s=null);if(!s||M!=a)d=e.createElement("style"),d.setAttribute("type","text/css"),d.setAttribute("media",a),s=g.appendChild(d),
f.ie&&f.win&&typeof e.styleSheets!=l&&e.styleSheets.length>0&&(s=e.styleSheets[e.styleSheets.length-1]),M=a;f.ie&&f.win?s&&typeof s.addRule==t&&s.addRule(b,c):s&&typeof e.createTextNode!=l&&s.appendChild(e.createTextNode(b+" {"+c+"}"))}}}function y(b,a){if(R){var e=a?"visible":"hidden";x&&o(b)?o(b).style.visibility=e:Q("#"+b,"visibility:"+e)}}function S(b){return/[\\\"<>\.;]/.exec(b)!=null&&typeof encodeURIComponent!=l?encodeURIComponent(b):b}var l="undefined",t="object",E="application/x-shockwave-flash",
O="SWFObjectExprInst",p=window,e=document,w=navigator,T=!1,C=[function(){T?D():a()}],u=[],I=[],A=[],B,H,K,N,x=!1,G=!1,s,M,R=!0,f=function(){var b=typeof e.getElementById!=l&&typeof e.getElementsByTagName!=l&&typeof e.createElement!=l,a=w.userAgent.toLowerCase(),k=w.platform.toLowerCase(),f=k?/win/.test(k):/win/.test(a),k=k?/mac/.test(k):/mac/.test(a),a=/webkit/.test(a)?parseFloat(a.replace(/^.*webkit\/(\d+(\.\d+)?).*$/,"$1")):!1,g=!+"\u000b1",d=[0,0,0],i=null;if(typeof w.plugins!=l&&typeof w.plugins["Shockwave Flash"]==
t){if((i=w.plugins["Shockwave Flash"].description)&&!(typeof w.mimeTypes!=l&&w.mimeTypes[E]&&!w.mimeTypes[E].enabledPlugin))T=!0,g=!1,i=i.replace(/^.*\s+(\S+\s+\S+$)/,"$1"),d[0]=parseInt(i.replace(/^(.*)\..*$/,"$1"),10),d[1]=parseInt(i.replace(/^.*\.(.*)\s.*$/,"$1"),10),d[2]=/[a-zA-Z]/.test(i)?parseInt(i.replace(/^.*[a-zA-Z]+(.*)$/,"$1"),10):0}else if(typeof p.ActiveXObject!=l)try{var j=new ActiveXObject("ShockwaveFlash.ShockwaveFlash");if(j&&(i=j.GetVariable("$version")))g=!0,i=i.split(" ")[1].split(","),
d=[parseInt(i[0],10),parseInt(i[1],10),parseInt(i[2],10)]}catch(m){}return{w3:b,pv:d,wk:a,ie:g,win:f,mac:k}}();(function(){f.w3&&((typeof e.readyState!=l&&e.readyState=="complete"||typeof e.readyState==l&&(e.getElementsByTagName("body")[0]||e.body))&&n(),x||(typeof e.addEventListener!=l&&e.addEventListener("DOMContentLoaded",n,!1),f.ie&&f.win&&(e.attachEvent("onreadystatechange",function(){e.readyState=="complete"&&(e.detachEvent("onreadystatechange",arguments.callee),n())}),p==top&&function(){if(!x){try{e.documentElement.doScroll("left")}catch(b){setTimeout(arguments.callee,
0);return}n()}}()),f.wk&&function(){x||(/loaded|complete/.test(e.readyState)?n():setTimeout(arguments.callee,0))}(),z(n)))})();(function(){f.ie&&f.win&&window.attachEvent("onunload",function(){for(var b=A.length,a=0;a<b;a++)A[a][0].detachEvent(A[a][1],A[a][2]);b=I.length;for(a=0;a<b;a++)P(I[a]);for(var e in f)f[e]=null;f=null;for(var d in swfobject)swfobject[d]=null;swfobject=null})})();return{registerObject:function(b,a,e,d){if(f.w3&&b&&a){var g={};g.id=b;g.swfVersion=a;g.expressInstall=e;g.callbackFn=
d;u[u.length]=g;y(b,!1)}else d&&d({success:!1,id:b})},getObjectById:function(b){if(f.w3)return d(b)},embedSWF:function(b,a,e,d,g,v,i,p,m,o){var r={success:!1,id:a};f.w3&&!(f.wk&&f.wk<312)&&b&&a&&e&&d&&g?(y(a,!1),h(function(){e+="";d+="";var f={};if(m&&typeof m===t)for(var h in m)f[h]=m[h];f.data=b;f.width=e;f.height=d;h={};if(p&&typeof p===t)for(var s in p)h[s]=p[s];if(i&&typeof i===t)for(var n in i)typeof h.flashvars!=l?h.flashvars+="&"+n+"="+i[n]:h.flashvars=n+"="+i[n];if(F(g))s=L(f,h,a),f.id==
a&&y(a,!0),r.success=!0,r.ref=s;else if(v&&j()){f.data=v;J(f,h,a,o);return}else y(a,!0);o&&o(r)})):o&&o(r)},switchOffAutoHideShow:function(){R=!1},ua:f,getFlashPlayerVersion:function(){return{major:f.pv[0],minor:f.pv[1],release:f.pv[2]}},hasFlashPlayerVersion:F,createSWF:function(a,c,e){if(f.w3)return L(a,c,e)},showExpressInstall:function(a,c,e,d){f.w3&&j()&&J(a,c,e,d)},removeSWF:function(a){f.w3&&P(a)},createCSS:function(a,c,e,d){f.w3&&Q(a,c,e,d)},addDomLoadEvent:h,addLoadEvent:z,getQueryParamValue:function(a){var c=
e.location.search||e.location.hash;if(c){/\?/.test(c)&&(c=c.split("?")[1]);if(a==null)return S(c);for(var c=c.split("&"),d=0;d<c.length;d++)if(c[d].substring(0,c[d].indexOf("="))==a)return S(c[d].substring(c[d].indexOf("=")+1))}return""},expressInstallCallback:function(){if(G){var a=o(O);if(a&&B){a.parentNode.replaceChild(B,a);if(H&&(y(H,!0),f.ie&&f.win))B.style.display="block";K&&K(N)}G=!1}}}}();(function(n){function h(){this.init()}function z(a,d){this.init(a,d)}function D(a,d){this.init(a,d)}h.capabilities=null;h.BASE_PATH="src/soundjs";h.lastId=0;h.isSupported=function(){if(SoundJS.BrowserDetect.isIOS)return!1;h.generateCapabilities();return swfobject==null?!1:swfobject.hasFlashPlayerVersion("9.0.0")};h.generateCapabilities=function(){if(h.capabilities==null)h.capabilities={panning:!0,volume:!0,mp3:!0,ogg:!1,mpeg:!0,channels:255}};h.prototype={CONTAINER_ID:"flashAudioContainer",capabilities:null,
container:null,flash:null,flashReady:!1,flashInstances:null,flashPreloadInstances:null,queuedInstances:null,init:function(){this.capabilities=h.capabilities;this.flashInstances={};this.flashPreloadInstances={};this.queuedInstances=[];var a=this.container=document.createElement("div");a.id=this.CONTAINER_ID;a.appendChild(document.createTextNode("Default Content Here"));document.body.appendChild(a);swfobject.embedSWF(h.BASE_PATH+"FlashAudioPlugin.swf",this.CONTAINER_ID,"1","1","9.0.0",null,null,null,
null,SoundJS.proxy(this.handleSWFReady,this))},handleSWFReady:function(a){this.flash=a.ref;this.loadTimeout=setTimeout(function(){SoundJS.proxy(this.handleTimeout,this)},2E3)},handleFlashReady:function(){this.flashReady=!0;for(var a=0,d=this.queuedInstances.length;a<d;a++)this.flash.register(this.queuedInstances[a]);this.queuedInstances=null;for(var j in this.flashPreloadInstances)this.flashPreloadInstances[j].initialize(this.flash);for(j in this.flashInstances)this.flashInstances[j].initialize(this.flash)},
handleTimeout:function(){},register:function(a){this.flashReady?this.flash.register(a):this.queuedInstances.push(a);return{tag:new D(a,this.flash)}},create:function(a){try{var d=new z(a,this.flash);d.owner=this;return d}catch(j){}return null},registerPreloadInstance:function(a,d){this.flashPreloadInstances[a]=d},unregisterPreloadInstance:function(a){delete this.flashPreloadInstances[a]},registerSoundInstance:function(a,d){this.flashInstances[a]=d},unregisterSoundInstance:function(a){delete this.flashInstances[a]},
handleSoundEvent:function(a,d){var j=this.flashInstances[a];if(j!=null){for(var h=[],v=2,r=arguments.length;v<r;v++)h.push(arguments[v]);try{if(h.length==0)j[d]();else j[d].apply(j,h)}catch(n){}}},handlePreloadEvent:function(a,d){var j=this.flashPreloadInstances[a];if(j!=null){for(var h=[],n=2,r=arguments.length;n<r;n++)h.push(arguments[n]);try{if(h.length==0)j[d]();else j[d].apply(j,h)}catch(z){}}},handleEvent:function(a){switch(a){case "ready":clearTimeout(this.loadTimeout),this.handleFlashReady()}},
handleErrorEvent:function(){},toString:function(){return"[FlashPlugin]"}};n.SoundJS.FlashPlugin=h;z.prototype={src:null,uniqueId:-1,capabilities:null,flash:null,flashId:null,loop:0,volume:1,pan:0,muted:!1,paused:!1,onComplete:null,onLoop:null,onReady:null,onPlayFailed:null,onPlayInterrupted:null,init:function(a,d){this.uniqueId=h.lastId++;this.src=a;this.flash=d},initialize:function(a){this.flash=a},interrupt:function(){this.playState=SoundJS.PLAY_INTERRUPTED;if(this.onPlayInterrupted!=null)this.onPlayInterrupted(this);
this.flash.interrupt(this.flashId);this.cleanUp()},cleanUp:function(){this.owner.unregisterSoundInstance(this.flashId);SoundJS.playFinished(this)},play:function(a,d,j,h,n,r){SoundJS.playInstance(this,a,d,j,h,n,r)},beginPlaying:function(a,d,j,h){this.loop=d;this.paused=!1;this.flashId=this.flash.playSound(this.src,a,d,j,h);if(this.flashId==null){if(this.onPlayFailed!=null)this.onPlayFailed(this);this.cleanUp();return-1}this.playState=SoundJS.PLAY_SUCCEEDED;this.owner.registerSoundInstance(this.flashId,
this);return 1},pause:function(){this.paused=!0;return this.flash.pauseSound(this.flashId)},resume:function(){this.paused=!1;return this.flash.resumeSound(this.flashId)},stop:function(){this.playState=SoundJS.PLAY_FINISHED;this.paused=!1;var a=this.flash.stopSound(this.flashId);this.cleanUp();return a},setVolume:function(a){this.volume=a;return this.flash.setVolume(this.flashId,a)},getVolume:function(){return this.volume},mute:function(a){return(this.muted=a)?this.flash.muteSound(this.flashId):this.flash.unmuteSound(this.flashId)},
getPan:function(){return this.pan},setPan:function(a){this.pan=a;return this.flash.setPan(this.flashId,a)},getPosition:function(){return this.flash.getPosition(this.flashId)},setPosition:function(a){return this.flash.setPosition(this.flashId,a)},getDuration:function(){return this.flash.getDuration(this.flashId)},handleSoundFinished:function(){this.playState=SoundJS.PLAY_FINISHED;if(this.onComplete!=null)this.onComplete(this);this.cleanUp()},handleLoop:function(){if(this.onLoop!=null)this.onLoop(this)},
toString:function(){return"[FlashPlugin SoundInstance]"}};D.prototype={flash:null,src:null,flashId:null,progress:-1,readyState:0,loading:!1,onloaded:null,onprogress:null,onError:null,init:function(a,d){this.src=a;this.flash=d},initialize:function(a){this.flash=a;this.loading&&this.load(this.src)},load:function(a){if(this.flash==null)return loading=!0,!1;this.flashId=this.flash.preload(a);this.owner.registerPreloadInstance(this.flashId,this);return!0},handleProgress:function(a,d){this.progress=a/d;
if(this.onprogress!=null)this.onprogress({loaded:a,total:d,progress:this.progress})},handleComplete:function(){this.progress=1;this.readyState=4;if(this.onloaded!=null)this.onloaded()},handleError:function(a){if(this.onerror!=null)this.onerror(a)},toString:function(){return"[FlashPlugin SoundLoader]"}}})(window);