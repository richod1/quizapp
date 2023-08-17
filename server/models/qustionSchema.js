const mongoose=require("mongoose")

const questionModel = new mongoose.Schema({
    questions: { type : Array, default: []}, // create question with [] default value
    answers : { type : Array, default: []},
    createdAt: { type: Date, default: Date.now },
});

module.exports=mongoose.model('question',questionModel)