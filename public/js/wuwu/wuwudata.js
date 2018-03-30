var hello = {'person':[{'name':'wuwu','age':22},{'name':'bobo','age':23}],
                'function':[{'eat':'food'},{'eat':'noddle'}]};
(function(){
	function person(name){
		
	}
	person.prototype.name = name,
	person.prototype.person = function(){
		this.name = name;
	},
	window.person = person;
}());

(function () {
    function wuwu(name) {
		
    }
    wuwu.prototype = new person();
    wuwu.prototype.say = function () {
//        supersay.call(this);
        alert("stu-hello");
		alert(name)
    },
	wuwu.prototype.data = {'person':[{'name':'wuwu','age':22},{'name':'bobo','age':23}],
                'function':[{'eat':'food'},{'eat':'noddle'}]},
    window.wuwu = wuwu;
}());









