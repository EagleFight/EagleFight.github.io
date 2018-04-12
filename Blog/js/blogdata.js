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
        {'tech_id':1,'title':'【PHP之路】php多表单同时提交(input的name有可能相同并且个数也不确定，有可能不同)','digest':'想必表单提交搞技术的朋友都遇见过，而且也不是啥难题，但是多个表单同时提交且不同表单里input的name有可能相同，input数量也不确定，这个问题还是比较棘手的，本人总结出了一套方法希望能和大家分享。','post_time':'2018-04-12','author':'唐彦武','type':'IT类博客',
            'content':'<pre><code class="php">\n' +
            '        //管家详情操作\n' +
            '    function managerDetail($steward_id, $grade)\n' +
            '    {\n' +
            '        $map[\'steward_id\'] = $steward_id;\n' +
            '        $skill = M(\'Health_steward_skill\')->alias(\'s\')->join(\'left join health_skill as k on k.skill_id = s.skill_id\')\n' +
            '            ->where($map)->select();\n' +
            '        $detail = M(\'Health_steward\');\n' +
            '\n' +
            '        $manager = M(\'Health_steward_classify\');\n' +
            '        $detail = $detail->where($map)->find();\n' +
            '\n' +
            '        $this->assign(\'skill\', $skill);\n' +
            '        $this->assign(\'manager\', $detail);\n' +
            '        $this->grade = $grade;\n' +
            '        $this->display();\n' +
            '    }\n' +
            '      </code></pre>'
        },
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
