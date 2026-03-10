import {useState} from "react"
import axios from "axios"

export default function ChatBox(){

const [text,setText]=useState("")
const [response,setResponse]=useState("")

const analyze=async()=>{

const res=await axios.post("http://localhost:5000/api/legal/analyze",{
caseText:text
})

setResponse(res.data.analysis)

}

return(

<div className="p-6 w-full">

<textarea
className="w-full border p-4"
placeholder="Paste legal case..."
onChange={(e)=>setText(e.target.value)}
/>

<button
className="bg-blue-600 text-white p-2 mt-2"
onClick={analyze}
>

Analyze Case

</button>

<div className="mt-4">
{response}
</div>

</div>

)

}
