const {Schema , model} = require('mongoose')
const studentSchema = new Schema({
    name : {
        type : String , 
        required : true 
    } , 
    surname : {
        type : String , 
    } , 
    group : {
        type : String , 
        required : true 
    }  , 
    points : {
        type : Number , 
        default : 0 
    }
})
module.exports = model(`student` , studentSchema)