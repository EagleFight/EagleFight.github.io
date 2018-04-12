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
    technogloy.prototype.content =
       [
            { "name":"菜鸟教程" , "url":"www.runoob.com" },
            { "name":"google" , "url":"www.google.com" },
            { "name":"微博" , "url":"www.weibo.com" }
        ];

    window.technogloy = technogloy;
}());

// (function(){
//     function student(){}
//     student.prototype = new technogloy();
//     student.prototype.haha = function(){
//         alert('我们都是好孩子');
//     }
//     window.student = student;
// }());