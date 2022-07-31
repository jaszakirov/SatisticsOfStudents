const {Schema , model} = require('mongoose')
const studentSchema = new Schema({
    Number : Number , 
    name : {
        type : String , 
    } , 
    course : {
        type : String , 
    } , 
    group : {
        type : String , 
    }  , 
    points : {
        type : Number , 
        default : 0  
    } ,
})
module.exports = model(`student` , studentSchema)