//buildSchema for create a shcema for graphql.
const {buildSchema} = require('graphql');

//create our schema in stenderd graphql language.
const schema = buildSchema(`
    type student {
        id: ID
        studentName: String
        studentAge: Int
        studentClass: Int
        studentAddress: String
        StudentIntrest: String
        StudentStrem: Stack
        StudentTeacher: [Teacher]
    }

    type Teacher {
        name: String
        subject: String
    }

    enum Stack {
        Science
        Maths
        Art
    }

    type Query {
        getStudent(id: ID): student
    }

    input studentInput {
        id: ID
        studentName: String!
        studentAge: Int
        studentClass: Int!
        studentAddress: String
        StudentIntrest: String
        StudentStrem: Stack
        StudentTeacher: [TeacherInput]!
    }

    input TeacherInput {
        name: String!
        subject: String!
    }

    type Mutation {
        addStudent(input: studentInput): student
    }
`)


//export for use outside.
module.exports=schema;