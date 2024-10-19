import axios from "axios"


const BACKEND_API = import.meta.env.VITE_BACKEND_URL


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