const express=require("express")
const router=express.Router();
const {insertQuestions,getAllQuestions,dropQuestion,
    getResult,storeResult,dropResult}=require("../controllers/controller")

router.route('/questions')
        .get(getAllQuestions) /** GET Request */
        .post(insertQuestions) /** POST Request */
        .delete(dropQuestion) /** DELETE Request */



router.route("/answers")
        .get(getResult)
        .post(storeResult)
        .delete(dropResult)
module.exports=router;