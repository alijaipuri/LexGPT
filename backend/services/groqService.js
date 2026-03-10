import axios from "axios"
import dotenv from "dotenv"
import { buildPrompt } from "../utils/promptBuilder.js"

dotenv.config()

export const analyzeCase = async(caseText)=>{

const prompt=buildPrompt(caseText)

const response = await axios.post(
"https://api.groq.com/openai/v1/chat/completions",
{
model:"llama3-70b-8192",
messages:[{role:"user",content:prompt}]
},
{
headers:{
Authorization:`Bearer ${process.env.GROQ_API_KEY}`
}
}
)

return response.data.choices[0].message.content
}
