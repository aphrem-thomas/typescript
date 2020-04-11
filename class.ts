export {};
class Student{
    name:string;
    id:number;
    classNo:number;
    constructor(name:string,id:number,classNo:number){
        this.name=name;
        this.id=id;
        this.classNo=classNo;
    }
}

let Jack = new Student("Jack Daniels",1,10);
console.log(Jack);
