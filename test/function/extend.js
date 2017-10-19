/**
 * js 中的继承测试
 * 猫的名字叫mimi，因为java的教程里面马士兵经常举这个例子。
 */

/**
 * 父类
 * @param name
 * @constructor
 */
var Animal = function (name) {
    var that = this;
    that.name = name || 'animal';
    that.introduce = function () {
        console.log('hello ,my name is ' + name);
    };
    return this;
};

Animal.prototype.run = function () {
    console.log(this.name + " is running...");
};


var Cat = function () {
     Animal.apply(this, arguments);
};

(function () {
    var f = function (){};
    f.prototype = Animal.prototype;
    Cat.prototype = new f();
})();

var cat = new Cat('mimi');
cat.introduce();
cat.run();


