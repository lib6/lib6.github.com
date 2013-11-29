/* =========================================== *\
)  programming: Lestchenko Yurii lurii@list.ru  (
\* =========================================== */

var flash=false;var plugin=(navigator.mimeTypes&&navigator.mimeTypes["application/x-shockwave-flash"])?navigator.mimeTypes["application/x-shockwave-flash"].enabledPlugin:0;if(plugin&&parseInt(plugin.description.substring(plugin.description.indexOf(".")-1))>=4){flash=true;}else if(navigator.userAgent&&navigator.userAgent.indexOf("MSIE")>=0&&(navigator.userAgent.indexOf("Windows 95")>=0||navigator.userAgent.indexOf("Windows NT")>=0||navigator.userAgent.indexOf("Windows 98")>=0)){rw('<SCR'+'IPT LANGUAGE=VBScript\>\non error resume next\nvar Flashmode\nFlashMode=IsObject(CreateObject("ShockwaveFlash.ShockwaveFlash.4"))\nIf FlashMode=True Then\nflash=True\nElse\nflash=False\nEnd If\n</SCR'+'IPT\>\n');};
function ltrim(s){return s.replace(/^\s*/,"");};function rtrim(s){return s.replace(/\s*$/,"");};function trim(s){return rtrim(ltrim(s));};
function gebi(name){return document.getElementById(name);};function rw(s){document.write(s);};function conf(msg){if(confirm(msg)){return true;}else{return false;};};
function open_w(url,name,scroll){if(name=="undefined"){name="";};if(scroll=="undefined"){scroll="no";};window.open(url,name,'location=no,menubar=no,toolbar=no,resizeable=yes,status=no,scrollbars='+scroll);};
function open_ws(url,name){if(name=="undefined"){name="";};window.open(url,name,'location=no,menubar=no,toolbar=no,resizeable=yes,status=no,scrollbars=yes');};
function replace(ostr,nstr,str){var l_str,r_str,strt;var loc=str.indexOf(ostr);while(loc!=-1){l_str=str.substring(0,loc);r_str=str.substring(loc+ostr.length);str=l_str+nstr+r_str;strt=loc+nstr.length;loc=str.indexOf(ostr,strt);};return str;};
function frm_test(field){for(var i=0;i<field.length;i++){if(trim(gebi(field[i][0]).value)==""){alert(field[i][1]);gebi(field[i][0]).focus();return false;};};return true;};
function set_sel(sel,val){for(var i=0;i<sel.length;i++){if(sel.options[i].value==val){sel.options[i].selected=true;break;};};};	
function sel_val(sel){return sel.options[sel.selectedIndex].value;};function sel_txt(sel){return sel.options[sel.selectedIndex].text;};
function browser(){var b="ie",agent=navigator.userAgent.toLowerCase();if(agent.indexOf("opera")!=-1){b="opera";};if(agent.indexOf("gecko")!=-1){b="gecko";};return b;};
function hide_blur(){if(browser()=="ie"){var l=i=document.body.getElementsByTagName('A');for(i=0;i<l.length;i++){l[i].onfocus=function(){this.blur();};};};};
function eml(t1,t2){var s1="",s2="";t2+=":otliam";for(var i=0;i<t1.length;i++){s1=t1.charAt(i)+s1;};for(var i=0;i<t2.length;i++){s2=t2.charAt(i)+s2;};if((trim(s1).length!="")&&(trim(s2).length!="")){return s2+"@"+s1;}else{return s2+s1;};};
function objXY(obj){var x=0,y=0;do{x+=obj.offsetLeft;y+=obj.offsetTop;}while((typeof(obj=obj.offsetParent)!='undefined')&&(obj!=null));return [x,y];};
