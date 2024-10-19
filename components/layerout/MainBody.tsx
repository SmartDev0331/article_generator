import { ArticleProps } from "../props"
import Markdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import rehypeKatex from 'rehype-katex'

const MainBody = ({ articles }: { articles: ArticleProps[] }) => {


  return (
    <div className="px-40 py-5">
      <h1></h1>
      {articles.map((article, index) => (
        <div key={index}>
          {/* <h1>{article.input}</h1> */}
          {/* <p className="text-justify">{article.output}</p> */}
          <Markdown
            remarkPlugins={[remarkGfm]}
            rehypePlugins={[rehypeKatex]}
            components={{
              a: ({ children, ...props }) => (
                <a className="underline text-blue-700 text-justify" target="_blank" rel="noopener" {...props}>
                  {children}
                </a>
              ),
              p: ({ children }) => (
                <p className="text-justify">{children}</p>
              ),
              h3: ({ children }) => (
                <h2 className="text-justify">{children}</h2>
              ),
              h2: ({ children }) => (
                <h2 className="text-center text-sky-400 text-[18px]">{children}</h2>
              ),
              h1: ({ children }) => (
                <h2 className="text-center text-3xl text-rose-400">{children}</h2>
              ),
            }}
          >
            {article.output}
          </Markdown>
          <br></br>
        </div>
      ))}
    </div>
  )
}
export default MainBody