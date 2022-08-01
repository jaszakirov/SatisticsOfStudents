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
        default : 0  ,
        type : Number , 
        
    } ,
})
module.exports = model(`student` , studentSchema)