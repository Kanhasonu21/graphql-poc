const { buildSchema } = require('graphql');

const schema = buildSchema(`
    type Course{
        id : String
        name : String
        createdAt : String
        type : Stack
        teachingAssistant: [teachingAssist]
    }

    enum Stack {
        MERN
        MEAN
        JavaScript
        Java
    }
    
    type teachingAssist {
        id: String
        name : String
        email : String
        phone : Int

    }

    input CourseInput {
        id : String
        name : String
        createdAt : String
        type : Stack
        teachingAssistant: [teachingAssistInput]
    }

    input teachingAssistInput {
        id: String
        name : String
        email : String
        phone : Int
    }

    type Query {
        getCourse(id:ID):Course
    }

    type Mutation {
        createCourse(input:CourseInput):Course
    }
`);

module.exports = schema