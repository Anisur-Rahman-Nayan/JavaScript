class Student {
    name;
    id;
    designation = "Student";
    constructor(name,id){
        this.name = name;
        this.id = id
    }
    startSession(){
        console.log(this.name,"Joining a class")
    }
}
const nayan = new Student("Nayan",21)
const messi = new Student("Messi",10)

console.log(nayan)
nayan.startSession()