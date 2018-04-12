(function(){
    function person(){

    }
    person.prototype.say = function(){
        alert('hello');
    }
    window.person = person;
}());

(function(){
    function people(){}
    people.prototype = new person();
    people.prototype.name = 'wuwu';
    window.people = people;
}());

(function(){
    function student(){}
    student.prototype = new people();
    student.prototype.haha = function(){
        alert('我们都是好孩子');
    }
    window.student = student;
}());
