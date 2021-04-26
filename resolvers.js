//nanoid for giving uniqe id on out fake database.
const {nanoid} = require('nanoid');

//student class for make student object easy to manage.
class student {
    constructor(id, {
        studentName, studentAge, studentClass, studentAddress, StudentIntrest, StudentStrem, StudentTeacher
    }){
        this.id = id;
        this.studentName = studentName;
        this.studentAge = studentAge;
        this.studentClass = studentClass
        this.studentAddress = studentAddress;
        this.StudentIntrest = StudentIntrest;
        this.StudentStrem = StudentStrem;
        this.StudentTeacher = StudentTeacher;
    }
}

//fake database for stroing the student class students.
const studentDb = {}

//resolver for resolve the graphql querys [query or mutation]
const resolvers = {
    getStudent : ({ id }) => {
        return new student(id, studentDb[id])
    },
    addStudent : ({ input }) => {
        let id = nanoid()
        studentDb[id] = input
        console.log(studentDb)
        return new student(id, input)
    }
}

//export for use out of the file.
module.exports=resolvers;