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
        {'tech_id':1,'tip':'【JavaScript之路】','title':'js多表单同时提交(input的name有可能相同并且个数也不确定，有可能不同)','is_rec':'0','rec_img':'','digest':'想必表单提交搞技术的朋友都遇见过，而且也不是啥难题，但是多个表单同时提交且不同表单里input的name有可能相同，input数量也不确定，这个问题还是比较棘手的，本人总结出了一套方法希望能和大家分享。','post_time':'2018-04-12','author':'唐彦武','type':'IT类博客',
            'content':'<pre><code>&lt!DOCTYPE html&gt\n' +
            '&lthtml lang="en"&gt\n' +
            '&lthead&gt\n' +
            '    &ltmeta charset="UTF-8"&gt\n' +
            '    &lttitle&gtTitle&lt/title&gt\n' +
            '    &ltmeta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no"&gt\n' +
            '    &ltmeta http-equiv="x-ua-compatible" content="ie=edge"&gt\n' +
            '    &ltscript src="js/jquery-2.1.0.js"&gt&lt/script&gt\n' +
            '&lt/head&gt\n' +
            '&ltbody style="width: 10rem;margin: auto;"&gt\n' +
            '    &ltp&gt表单一&lt/p&gt\n' +
            '    &ltform class="form_block"&gt\n' +
            '        姓名&ltinput name="name" type="text"&gt&ltbr&gt\n' +
            '        密码&ltinput name="password" type="password"&gt&ltbr&gt\n' +
            '    &lt/form&gt\n' +
            '    &ltp&gt表单二&lt/p&gt\n' +
            '    &ltform class="form_block"&gt\n' +
            '        姓名&ltinput name="name" type="text"&gt&ltbr&gt\n' +
            '        账号&ltinput name="login" type="text"&gt&ltbr&gt\n' +
            '        密码&ltinput name="password" type="password"&gt&ltbr&gt\n' +
            '        性别： 男&ltinput type="radio" name="sex" value="1"&gt女&ltinput type="radio" name="sex" value="2"&gt&ltbr&gt\n' +
            '        喜欢的食物\n' +
            '        苹果&ltinput type="checkbox" name="like-food" value="1"&gt\n' +
            '        香蕉&ltinput type="checkbox" name="like-food" value="2"&gt\n' +
            '        梨子&ltinput type="checkbox" name="like-food" value="3"&gt\n' +
            '    &lt/form&gt\n' +
            '    &ltp&gt表单3&lt/p&gt\n' +
            '    &ltform class="form_block"&gt\n' +
            '        姓名&ltinput name="name" type="text"&gt&ltbr&gt\n' +
            '        账号&ltinput name="login" type="text"&gt&ltbr&gt\n' +
            '        密码&ltinput name="password" type="password"&gt&ltbr&gt\n' +
            '        性别： 男&ltinput type="radio" name="sex" value="1"&gt女&ltinput type="radio" name="sex" value="2"&gt&ltbr&gt\n' +
            '        喜欢的食物\n' +
            '        苹果&ltinput type="checkbox" name="like-food" value="1"&gt\n' +
            '        香蕉&ltinput type="checkbox" name="like-food" value="2"&gt\n' +
            '        梨子&ltinput type="checkbox" name="like-food" value="3"&gt\n' +
            '    &lt/form&gt\n' +
            '    &ltbutton id="submit_form"&gt提交&lt/button&gt\n' +
            '&ltscript&gt\n' +
            '    //多表单同时提交\n' +
            '    $(\'#submit_form\').click(function(){\n' +
            '        var arr = new Array();\n' +
            '        //先获得表单的数量\n' +
            '        var length = $(\'.form_block\').length;\n' +
            '        for (var i = 0; i < length; i++) {\n' +
            '            arr[i] = {};\n' +
            '            var m = i+1;\n' +
            '            $.each($(\'.form_block\').eq(i).serializeArray(), function(n, field){\n' +
            '                //如果表单中有复选框（checkbox），则把他们的value值装在一个数组之中\n' +
            '                if($("input[name="+field.name+"]").attr(\'type\')==\'checkbox\'){\n' +
            '                    var mm = $(\'.form_block\').eq(i).find("input[name="+field.name+"]");\n' +
            '                    arr[i][field.name] = [];\n' +
            '                    for(var k = 0;k&ltmm.length;k++){\n' +
            '                        if(mm.eq(k).is(\':checked\')){arr[i][field.name].push(mm.eq(k).val())};\n' +
            '                    }\n' +
            '                }else{\n' +
            '                    arr[i][field.name] =field.value;\n' +
            '                }\n' +
            '            });\n' +
            '            //至此三个表单的数据已经装在了一个数组之中，通过ajax就可以传到后台;\n' +
            '            console.log(arr);\n' +
            '        }\n' +
            '        $.ajax({\n' +
            '            type: \'post\',\n' +
            '            url: \'{:U(\'addJournal\')}\',\n' +
            '            data: {data:arr},\n' +
            '            dataType: \'json\',\n' +
            '            success: function(data) {\n' +
            '                if(data.status == 0){\n' +
            '                    layer.msg(data.msg,{icon:5});\n' +
            '                }else if(data.status == 1){\n' +
            '                    layer.msg(\'成功,即将跳转！\',{icon:1});\n' +
            '                    setTimeout("skip()",1500);\n' +
            '                }else{\n' +
            '                    layer.msg(\'提交失败，请稍后再试！\',{icon:5});\n' +
            '                }\n' +
            '                return false;\n' +
            '            },\n' +
            '            error:function(XMLHttpRequest, textStatus){\n' +
            '                layer.close(index_load);\n' +
            '                layer.msg(\'提交失败，原因可能如下：<br>选项重复\',{icon:5});\n' +
            '            }\n' +
            '        }, function(){});\n' +
            '    });\n' +
            '&lt/script&gt\n' +
            '&lt/body&gt\n' +
            '&lt/html&gt</code></pre>'+
            '<p class="word">这是前端的数据处理功能，至此数据处理完毕，交由后台存储数据，后台原理与前端原理也差不多，也是通过循环来存储数据，这里我就不演示，大家自己尝试即可</p>'
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
