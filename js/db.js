function getCurrentDb() {
    //打开数据库，或者直接连接数据库参数：数据库名称，版本，概述，大小
    var db = openDatabase("myDb", "1.0", "it's to save user data!", 1024 * 1024);
    return db;
}

function initDatabase() {//初始化数据库
    var db = getCurrentDb();
    if (!db) {
        alert("您的浏览器不支持HTML5");
        return;
    }
    db.transaction(function (trans) {
        trans.executeSql("DROP TABLE IF EXISTS user", [], function (trans, result) {

        }, function (trans, message) {
            alert(message);
        });
    }, function (trans, result) {
    }, function (trans, message) {
    });
    db.transaction(function (trans) {
        trans.executeSql("CREATE TABLE IF NOT EXISTS user(name TEXT NULL,password TEXT NULL)", [], function (trans, result) {

        }, function (trans, message) {
            alert(message);
        });
    }, function (trans, result) {
    }, function (trans, message) {
    });
}

function insertData() {
    var db = getCurrentDb();
    //插入数据
    db.transaction(function (trans) {
        trans.executeSql("INSERT INTO user(name,password) VALUES('唐彦武','123')," +
            "('唐艳丽','123'),('唐博','123'),('唐斌','123'),('唐彦龙','123'),('唐燕蓉','123')", [], function (ts, data) {
        }, function (ts, message) {
            alert(message);
        });

    });
}

function selectData() {
    var db = getCurrentDb();
    //插入数据
    db.transaction(function (trans) {

        trans.executeSql("SELECT * FROM user", [], function (ts, data) {
            if (data.rows.length>0) {
                // for (var i = 0; i < data.rows.length; i++) {
                //     console.log(data.rows.item(i));//获取某行数据的json对象
                // }
            }


        }, function (ts, message) {
            insertData();
        });

    });
}


// $(function () {
//     initDatabase();
//     var arr = getRequest();
//     var name = arr['name'];//参数名
//     var password = arr['password'];
//     alert(name);
//     if (name != null && name.toString().length > 1) {
//         var db = getCurrentDb();
//         //插入数据
//         db.transaction(function (trans) {
//
//             trans.executeSql("INSERT INTO user(name,password) VALUES(?,?) ", [name, password], function (ts, data) {
//
//             }, function (ts, message) {
//                 alert(message);
//             });
//
//         });
//
//     }
// });