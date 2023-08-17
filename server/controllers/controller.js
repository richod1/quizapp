const QuestionsModel=require("../models/qustionSchema")
const AnswersModel=require("../models/resultSchema")
const {answers,questions}=require("../database/data")


/**get all questions */

const getAllQuestions=async (req,res)=>{
    try {
        const q = await QuestionsModel.find();
        res.json(q)
    } catch (error) {
        res.json({ error })
    }
}


/**insert questions */
const insertQuestions=async(req,res)=>{
    try {
        QuestionsModel.insertMany({ questions, answers }, function(err, data){
            res.json({ msg: "Data Saved Successfully...!"})
        })
    } catch (error) {
        res.json({ error })
    }
}


/**drop question */
const dropQuestion=async(req,res)=>{
    try {
        await QuestionsModel.deleteMany();
        res.json({ msg: "Questions Deleted Successfully...!"});
   } catch (error) {
        res.json({ error })
   }
}

/**get result */
const getResult=async(req,res)=>{
    try {
        const r = await Results.find();
        res.json(r)
    } catch (error) {
        res.json({ error })
    }
}

const storeResult=async(req,res)=>{
    try {
        const { username, result, attempts, points, achived } = req.body;
        if(!username && !result) throw new Error('Data Not Provided...!');

        AnswersModel.create({ username, result, attempts, points, achived }, function(err, data){
            res.json({ msg : "Result Saved Successfully...!"})
        })

   } catch (error) {
        res.json({error})
   }
}

const dropResult=async(req,res)=>{
    try {
        await Results.deleteMany();
        res.json({ msg : "Result Deleted Successfully...!"})
    } catch (error) {
        res.json({ error })
    }
}

module.exports={
   insertQuestions,
    getAllQuestions,
    dropQuestion,
    getResult,
    storeResult,
    dropResult
}