(function(){
	function person(){
//		this.name = name;
	}
	window.person = person;
}());

(function () {
    function wuwu() {

    }
    wuwu.prototype = new person();
    wuwu.prototype.say = function () {
//        supersay.call(this);
        alert("stu-hello");
    },
//	wuwu.prototype.data = {[{'name':'wuwu','age':22},{'name':'bobo','age':23}]},
    window.wuwu = wuwu;
}());









