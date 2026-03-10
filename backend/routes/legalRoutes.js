import express from "express"
import { analyzeCase } from "../services/groqService.js"
import { verifyToken } from "../middleware/auth.js"
import limiter from "../middleware/rateLimiter.js"

const router = express.Router()

router.post("/analyze",verifyToken,limiter,async(req,res)=>{

try{

const {caseText}=req.body

const response=await analyzeCase(caseText)

res.json({analysis:response})

}catch(err){

res.status(500).json({error:err.message})

}

})

export default router
