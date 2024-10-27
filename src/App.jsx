import { useState } from "react"
import Blog from "./components/blog/Blog"
import Bookmark from "./components/bookmark/Bookmark"
import Header from "./components/header/Header"


function App() {

const [bookmar,setbookmark] = useState([])



const handlembookmark = (blog,id) =>{
const markbookmar = [...bookmar,blog]
setbookmark(markbookmar)
  console.log(id);
  
}

const [readtime,setreadtime] = useState(0)


const clicknowread = time =>{
  setreadtime(readtime + time)
  
      
  }


  return (
    <>

<Header></Header>
<div className="flex p-4 gap-4 max-w-7xl mx-auto">
  <Blog clicknowread={clicknowread} handlembookmark={handlembookmark}></Blog>
<Bookmark readtime={readtime}  bookmar={bookmar}></Bookmark>
</div>



    </>
  )
}

export default App
