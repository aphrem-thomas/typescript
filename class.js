"use strict";
exports.__esModule = true;
var Student = /** @class */ (function () {
    function Student(name, id, classNo) {
        this.name = name;
        this.id = id;
        this.classNo = classNo;
    }
    return Student;
}());
var Jack = new Student("Jack Daniels", 1, 10);
console.log(Jack);
