export const buildPrompt=(caseText)=>{

return `You are an expert legal AI assistant trained on Indian and European law.

Analyze the following legal case.

Provide:
1. Legal interpretation
2. Relevant precedents
3. Possible outcomes
4. Suggested legal strategy

Case:
${caseText}
`

}
