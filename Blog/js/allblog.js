(function(){
    function allblog(){}
    allblog.prototype = new blog();
    allblog.prototype.article =
        (new life())['article'].concat((new technogloy())['article']);
    window.allblog = allblog;
}());