import express from "express"
import cors from "cors"
import dotenv from "dotenv"
import legalRoutes from "./routes/legalRoutes.js"

dotenv.config()

const app = express()

app.use(cors())
app.use(express.json())

app.use("/api/legal", legalRoutes)

app.get("/",(req,res)=>{
res.json({message:"LexGPT Legal AI API running"})
})

const PORT=process.env.PORT || 5000

app.listen(PORT,()=>{
console.log(`Server running on ${PORT}`)
})
