import { useState } from "react";
import { GenerateAriticle } from "../../src/api/route";
import Loading from "../Loading"
import { toast } from "react-toastify";
import MainBody from "../layerout/MainBody"
import { ArticleProps } from "../props"


const ArticleHeadline = () => {

  const [prompts, setPrompts] = useState<string>("")
  const [article, setArticle] = useState<ArticleProps[]>([])
  const [loading, setLoading] = useState<boolean>(false)

  const sendPrompts = async () => {
    if (prompts) {
      setLoading(true)
      const formData = new FormData()
      prompts.split("/n").forEach((line) => {
        if (line !== "") {
          formData.append("prompts", line)
          // console.log("line---->", line)
        }
        // console.log("formData---->", formData)
      })

      await GenerateAriticle(formData).then((res: unknown) => {
        if (res && typeof res === 'object' && 'error' in res) {
          toast.error("Failed to merge items");
        } else {

          console.log(res)
          toast.success("Successfully generate articles");
          if (res && typeof res === 'object' && 'data' in res) {
            console.log("res---->", res);
            console.log("res.data---->", res.data);
            if (Array.isArray(res.data)) {
              setArticle(res.data as ArticleProps[]);
            }
          }
        }
      })
      setLoading(false)
    } else {
      toast.warn("Please input your article headlines")
    }
  }

  const changePrompts = (content: string) => {
    setPrompts(content)
  }

  return (
    <div className="">
      <div className="flex flex-row w-full">
        <div className="flex flex-col w-full px-40 py-10">
          <div className="flex justify-between items-center w-full py-1">
            <div className="flex-1 flex justify-center">
              <span className="mx-auto text-2xl font-bold">Input your article headlines</span>
            </div>
            <button className=" inline-block" onClick={sendPrompts}>
              {loading === true ? <span className="flex flex-row justify-center"><Loading />loading...</span> : (
                <span>Submit</span>
              )}
            </button>
          </div>
          <textarea className="h-32 w-full py-3 px-5 text-xl rounded-2xl" onChange={e => changePrompts(e.target.value)}></textarea>
        </div>
      </div>

      <MainBody articles={article} />
    </div>


  )
}
export default ArticleHeadline;