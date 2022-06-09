const { v4: uuidv4 } = require('uuid');

const data = {}

const resolver = {

    getCourse: ({id})=>{
        return data[id];
    },

    createCourse:({input})=>{
        let value = JSON.parse(JSON.stringify(input))
        let id = uuidv4();
        data[id] = {id,...value};
        return data[id]
    }    
}
module.exports = resolver