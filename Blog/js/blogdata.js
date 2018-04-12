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
        {'title':'今日的付出','digest':'今天很开心','content':'大唐国际如果热和个人股和认识到大润发的若干','post_time':'2018-04-12','author':'唐彦武','type':'技术文章'},
        { "name":"google" , "url":"www.google.com" },
        { "name":"微博" , "url":"www.weibo.com" }
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
