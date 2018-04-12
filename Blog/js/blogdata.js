// (function () {
//     function blog() {
//
//     }
//     blog.prototype.say = function () {
//         alert("peo-hello");
//     }
//     window.blog = blog;
// }());
// (function () {
//     //技术
//     function technogloy() {
//
//     }
//     technogloy.prototype = new blog();
//     var supersay = technogloy.prototype.say;
//     technogloy.prototype.say = function () {
//         supersay.call(this);
//         alert("stu-hello");
//     }
//     window.technogloy = technogloy;
// }());
(function(){
    function blog(){}
    blog.prototype.say = function(){alert('hello');}
    window.blog = blog;
}());

(function(){
    function technogloy(){}
    technogloy.prototype = new blog();
    technogloy.prototype.article = [
        {'tech_id':1,'title':'今日的付出1','digest':'今天很开心',
            'content':'<p></p><section style="box-sizing: border-box; background-color: rgb(255, 255, 255);"><section class="Powered-by-XIUMI V5" style="position: static; box-sizing: border-box;"><section class="" style="margin: 20px 0% 70px; transform: translate3d(0px, 0px, 0px); -webkit-transform: translate3d(0px, 0px, 0px); -moz-transform: translate3d(0px, 0px, 0px); -o-transform: translate3d(0px, 0px, 0px); text-align: center; position: static; box-sizing: border-box;"><section class="" style="display: inline-block; width: 90%; vertical-align: top; box-shadow: rgb(116, 116, 116) 0.707107px 0.707107px 6px; padding: 10px; box-sizing: border-box; background-color: rgb(254, 255, 255);"><section class="Powered-by-XIUMI V5" style="position: static; box-sizing: border-box;"><section class="" style=" transform: translate3d(-10px, 0px, 0px); -webkit-transform: translate3d(-10px, 0px, 0px); -moz-transform: translate3d(-10px, 0px, 0px); -o-transform: translate3d(-10px, 0px, 0px); text-align: left; margin: 20px 0% 10px; position: static; box-sizing: border-box;"><section class="" style="display: inline-block; width: 30%; border-left-color: rgb(87, 132, 64); border-right-color: rgb(87, 132, 64); border-style: solid; border-width: 0px 6px 0px 0px; padding: 0px; box-shadow: rgb(0, 0, 0) 0px 0px 0px; box-sizing: border-box; background-color: rgb(105, 160, 75);"><section class="Powered-by-XIUMI V5" style="position: static; box-sizing: border-box;"><section class="" style="text-align: right; margin: 3px 0%; transform: translate3d(0px, 0px, 0px); -webkit-transform: translate3d(0px, 0px, 0px); -moz-transform: translate3d(0px, 0px, 0px); -o-transform: translate3d(0px, 0px, 0px); position: static; box-sizing: border-box;"><img style="vertical-align: middle; width: 40%; border-width: 0px; box-sizing: border-box;" class="" src="/Uploads/ueditor/image/20170525/1495677382743029.png"/></section></section></section></section></section><section class="Powered-by-XIUMI V5" style="position: static; box-sizing: border-box;"><section class="" style="margin: 12px 0% 2px; transform: translate3d(0px, 0px, 0px); position: static; box-sizing: border-box;"><section class="" style="padding: 0px 29px; font-size: 14px; color: rgb(51, 59, 108); line-height: 1.8; box-sizing: border-box;"><p style="margin-top: 0px; margin-bottom: 0px; padding: 0px; box-sizing: border-box; text-align: justify;"><span style="box-sizing: border-box; color: rgb(63, 63, 63); font-size: 16px;">近日，她在日本东京旅游，遇一名日本女学生癫痫发作、昏迷不醒、口吐白沫、脸上还有“黑点”。当时，周围一圈人都傻眼了。危急时刻，她第一个跑过去上前急救。</span></p><p style="margin-top: 0px; margin-bottom: 0px; padding: 0px; box-sizing: border-box;"><br/></p><p style="margin-top: 0px; margin-bottom: 0px; padding: 0px; box-sizing: border-box;"><img src="/Uploads/ueditor/image/20170525/1495677427109193.png" title="1495677427109193.png" alt="W020170511316182844345.png"/></p><p style="margin-top: 0px; margin-bottom: 0px; padding: 0px; box-sizing: border-box;"><br/></p><p style="margin-top: 0px; margin-bottom: 0px; padding: 0px; box-sizing: border-box; text-align: justify;"><span style="box-sizing: border-box; color: rgb(63, 63, 63); font-size: 16px;">任双双先把女学生放平，解开上衣扣子，清理出患者口内的白沫，又把湿纸巾叠成块状塞入口中，防止女学生咬伤舌头。</span></p><p style="margin-top: 0px; margin-bottom: 0px; padding: 0px; box-sizing: border-box; text-align: justify;"><span style="box-sizing: border-box; color: rgb(63, 63, 63); font-size: 16px;">&nbsp;</span></p><p style="margin-top: 0px; margin-bottom: 0px; padding: 0px; box-sizing: border-box; text-align: justify;"><span style="box-sizing: border-box; color: rgb(63, 63, 63); font-size: 16px;">女学生缓过来之后，任双双向她比了一个OK的手势，女学生眨眨眼，硬撑着要坐起来，被任双双阻止，直到急救车来到任双双才悄悄离开。</span></p><p style="margin-top: 0px; margin-bottom: 0px; padding: 0px; box-sizing: border-box; text-align: justify;"><span style="box-sizing: border-box; color: rgb(63, 63, 63); font-size: 16px;">&nbsp;</span></p><p style="margin-top: 0px; margin-bottom: 0px; padding: 0px; box-sizing: border-box; text-align: justify;"><span style="box-sizing: border-box; color: rgb(63, 63, 63); font-size: 16px;">网友微博热议，纷纷为任双双举动点赞，直呼为国人长脸了。</span></p><p style="margin-top: 0px; margin-bottom: 0px; padding: 0px; box-sizing: border-box;"><br/></p></section></section></section><section class="Powered-by-XIUMI V5" style="box-sizing: border-box;"><section class="" style="position: static; box-sizing: border-box;"><section class="" style="text-align: left; box-sizing: border-box;"><p style="margin-top: 0px; margin-bottom: 0px; padding: 0px; box-sizing: border-box;"><br/></p></section></section></section><section class="Powered-by-XIUMI V5" style="position: static; box-sizing: border-box;"><section class="" style=" transform: translate3d(0px, 0px, 0px); -webkit-transform: translate3d(0px, 0px, 0px); -moz-transform: translate3d(0px, 0px, 0px); -o-transform: translate3d(0px, 0px, 0px); margin: -18px 0% -30px; position: static; box-sizing: border-box;"><section class="group-empty" style="display: inline-block; vertical-align: top; width: 60%; line-height: 1; box-sizing: border-box;"></section></section></section></section></section></section></section>',
            'post_time':'2018-04-12','author':'唐彦武','type':'技术文章'},
        {'tech_id':2,'title':'今日的付出2','digest':'今天很开心','content':'大唐国际如果热和个人股和认识到大润发的若干','post_time':'2018-04-12','author':'唐彦武','type':'技术文章'},
        {'tech_id':3,'title':'今日的付出2','digest':'今天很开心','content':'大唐国际如果热和个人股和认识到大润发的若干','post_time':'2018-04-12','author':'唐彦武','type':'技术文章'},
        {'tech_id':4,'title':'今日的付出2','digest':'今天很开心','content':'大唐国际如果热和个人股和认识到大润发的若干','post_time':'2018-04-12','author':'唐彦武','type':'技术文章'},
        {'tech_id':5,'title':'今日的付出2','digest':'今天很开心','content':'大唐国际如果热和个人股和认识到大润发的若干','post_time':'2018-04-12','author':'唐彦武','type':'技术文章'},
        {'tech_id':6,'title':'今日的付出2','digest':'今天很开心','content':'大唐国际如果热和个人股和认识到大润发的若干','post_time':'2018-04-12','author':'唐彦武','type':'技术文章'},
        {'tech_id':7,'title':'今日的付出2','digest':'今天很开心','content':'大唐国际如果热和个人股和认识到大润发的若干','post_time':'2018-04-12','author':'唐彦武','type':'技术文章'},
        {'tech_id':8,'title':'今日的付出2','digest':'今天很开心','content':'大唐国际如果热和个人股和认识到大润发的若干','post_time':'2018-04-12','author':'唐彦武','type':'技术文章'},
        {'tech_id':9,'title':'今日的付出2','digest':'今天很开心','content':'大唐国际如果热和个人股和认识到大润发的若干','post_time':'2018-04-12','author':'唐彦武','type':'技术文章'},
        {'tech_id':10,'title':'今日的付出2','digest':'今天很开心','content':'大唐国际如果热和个人股和认识到大润发的若干','post_time':'2018-04-12','author':'唐彦武','type':'技术文章'},
        ];
    window.technogloy = technogloy;
}());
(function(){
    function life(){}
    life.prototype = new blog();
    life.prototype.article = [
        {'title':'明日的付出', "name":"菜鸟教程" , "url":"www.runoob.com" },
        { "name":"google" , "url":"www.google.com" },
        { "name":"微博" , "url":"www.weibo.com" }
    ];

    window.life = life;
}());
