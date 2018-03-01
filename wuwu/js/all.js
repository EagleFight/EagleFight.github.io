var p=0;
function Encrypt(Text) {
    p=p+1;
    output = new String;
    alterText = new Array();
    varCost = new Array();
    TextSize = Text.length;
    for (i = 0; i < TextSize; i++) {
        idea = Math.round(Math.random() * 111) + 77;
        alterText[i] = Text.charCodeAt(i) + idea;
        varCost[i] = idea;
    }
    for (i = 0; i < TextSize; i++) {
        output += String.fromCharCode(alterText[i], varCost[i]);
    }
    return output;
}
function unEncrypt(Text) {
    if (p>0){
        p=p-1;
        output = new String;
        alterText1 = new Array();
        varCost1 = new Array();
        TextSize = Text.length;
        for (i = 0; i < TextSize; i++) {
            alterText[i] = Text.charCodeAt(i);
            varCost[i] = Text.charCodeAt(i + 1);
        }
        for (i = 0; i < TextSize; i = i+2) {
            output += String.fromCharCode(alterText[i] - varCost[i]);
        }
        return output;
    }
}

var data = new Array();
data[0] = {name:'健康管家',login:'2465443745@qq.com',psd:'dly5253531',a:'http://mp.weixin.qq.com'};
data[1] = {name:'健康管家后台',login:'admin@chinanursecare.cn',psd:'huboit123',a:'http://chinanursecare.cn/Hmng'};
data[2] = {name:'护士家园网',login:'2465443745@qq.com',psd:'huboit123',a:'http://mp.weixin.qq.com'};
data[3] = {name:'护博医疗域名',login:'administrator',psd:'huboit2213!',a:'chinanursecare.com:21'};
data[4] = {name:'护博医疗数据库',login:'hubo',psd:'HU#China_Nurse_Care#BO~2213',a:'chinanursecare.com:3306'};
var shuju = new Array();
shuju[0] = {name:'僨弐Y簍l尮x',login:'ã±²~Õ]UT´Ü¥¦rVSģ²Ð_`âÔeäw',psd:'đ­Ølė¹Ã§r¯|i«x[',a:'ñþëwÿÇÖ§®Ę«Ð`©{ÜeĜ·»Rö~Úqę«ä¶Ğ­ĂWýÖgÚm'};
shuju[1] = {name:'傴O弬u簥尴~咱£咂',login:'Ě¹Ğºãvèû[ě¸õġ¸ÝoºYĉÛféwğ¬ċ¦ÿÏnô¶Q^ôÈZ',psd:'ÜtÃNď­×hĤ»ąà¯¡o£p',a:'ĂĤ°ÊVÊZïµfXĐ­ñĒ©ă´SāêuÞlġ®āė´¾]Ģ°Çbjêđ£ZÊėªđ£Îg'};
shuju[2] = {name:'捑­奪屠ª均Z翩',login:'º¿»ì·Ð­y¼à©¿Z[ñöÜ®¼Yí~½P',psd:'ĉ¡ĉÄbØiė®ćlW¸',a:'âzĠ¬ßkĪºÜ¢igøĝ­ÀĬµäÙpĦ®ÜsÛmÖ¨ðÃRÉåĔ¥Ê]'};
shuju[3] = {name:'挖r叚叐瘵塡咢',login:'ÄcùÅXÎeğ±Č£ĈûÅSõÈTąõ',psd:'å}ČÔrôÂYĖ¢SRç¶é¶oN',a:'đ®ØpÌcüÕtçyĬ·ÆTõċ¦āć¦ĀĂÀÔqħ¸Ħ¹ÈRÕ¤'};
shuju[4] = {name:'捀叙厖[痤M旂R搗©弲',login:'öÔ_ĉ§Í^',psd:'Âz¨S²ÞëĎ¥þĀÂcĂ´ËVÌZæsĉ¤Ùzæ£Îmę§Ã^|YVþ¯ðrÃÝ«ã²»',a:'¹V¿WèĊÞ}ävþÄRÎ[ē®öÕtĨ¶¼W~PöØiĆß¥ºÜ©ß¯V'};


var shu =  new Array();
    for(m = 0;m<data.length;m++){
        shu[m] = {};
        shu[m].name = Encrypt(data[m].name);
        shu[m].login = Encrypt(data[m].login);
        shu[m].psd = Encrypt(data[m].psd);
        shu[m].a = Encrypt(data[m].a);
    }



// console.log(unEncrypt(shu[0].name));
