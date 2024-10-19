import axios from "axios"

const BACKEND_API = "http://127.0.0.1:5000"

const GenerateAriticle = async (prompts: FormData): Promise<string> => {
  const res = await axios.post(`${BACKEND_API}/generate`, prompts, {
    headers: {
      "Content-Type": "multipart/form-data"
    }
  })

  return res.data
}

export {
  GenerateAriticle
}