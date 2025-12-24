from openai import AsyncOpenAI
from fastapi import FastAPI, HTTPException
import os
import json
from pydantic import BaseModel, Field
from typing import List, Dict
from dotenv import load_dotenv
import uvicorn
from fastapi.middleware.cors import CORSMiddleware

load_dotenv()

portfolio_data = {
    "personal_info": {
        "name": "Olusola Somorin",
        "role": "AI Developer & Full Stack Developer",
        "location": "Lagos, Nigeria",
        "email": "somorinolusola1@gmail.com", 
        "availability": "Open to freelance and full-time roles"
    },
    "education": {
        "degree": "B.Sc.Ed Mathematics and Education",
        "university": "Olabisi Onabanjo University",
        "grade": "Second Class Upper Credit"
    },
    "skills": {
        "languages": ["Python", "JavaScript", "SQL"],
        "frameworks": ["FastAPI", "React", "LangChain"],
        "ai_specialties": ["Prompt Engineering", "RAG Systems", "Chatbot Development"],
        "tools": ["Git", "Vercel", "GitHub", "Postman"]
    },
    
    "projects": "I have worked on several exciting projects! Please kindly check the 'Projects' section of this portfolio to explore them in detail.",

    "experience": "For a comprehensive view of my professional work history, please refer to my CV/Resume available on this site."
}

api_key = os.getenv("Api_key")

client = AsyncOpenAI(api_key=api_key)


app = FastAPI(title="My AI Assistant",  version="1.0.0")

app.add_middleware(
    CORSMiddleware,
    allow_origins =["*"],
    allow_credentials = True,
    allow_methods = ["*"],
    allow_headers = ["*"],
)

chat_memory: Dict[str, List[dict]] = {}

class UserRequest(BaseModel):
    message:str=Field(..., example="Who is olusola")
    session_id: str

@app.post("/chat")
async def chat_endpoint(input: UserRequest):
    if not api_key:
        raise HTTPException(status_code=500,  detail="Api key not found in .env file")
    
    user_history = chat_memory.get(input.session_id, [])

    if not user_history:
        data_string = json.dumps(portfolio_data, indent=2)

        system_prompt = {
            "role": "system",
            "content": f"""You are the professional AI Assistant for {portfolio_data['personal_info']['name']}.
        
            YOUR KNOWLEDGE BASE (JSON):
            {data_string}

            YOUR INSTRUCTIONS:
            1. Answer questions based ONLY on the JSON data provided above.
            
            2. **MANDATORY START:** When answering any question about {portfolio_data['personal_info']['name']}, YOU MUST START THE SENTENCE WITH "Olusola".
            - Example: "Olusola is a Mathematics graduate..."
            - Example: "Olusola specializes in AI Engineering..."
            
            3. **Projects & Experience Rules:**
            - If asked about Projects, strictly say: "{portfolio_data['projects']}"
            - If asked about Experience, strictly say: "{portfolio_data['experience']}"
            
            4. **Education:** If asked about background/study, mention his Mathematics degree from Olabisi Onabanjo University.
            
            5. Tone: Professional, enthusiastic, and concise.
            """
        }

        user_history.append(system_prompt)

    user_history.append({"role": "user", "content": input.message})

    try:
        response =await client.chat.completions.create(
            model="gpt-4o-mini",
            messages=user_history
        )

        ai_reply = response.choices[0].message.content

        # send AI's reply to history so it remembers it next time
        user_history.append({"role": "assistant", "content": ai_reply})

        chat_memory[input.session_id] = user_history

        return {"reply": ai_reply}
    
    except Exception as e:
        print(f"Error: {e}")
        raise HTTPException(status_code=500, detail=str(e))
    
if __name__=="__main__":
    host = os.getenv("host", "127.0.0.1")
    port = int(os.getenv("port", 8000))
    uvicorn.run(app, host=host, port=port)