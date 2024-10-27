
import { useEffect } from "react";
import { useState } from "react";
import Singlebl from "../singleblog/Singlebl";

const Blog = ({handlembookmark,clicknowread}) => {
 
 const [blog,setblog] = useState([])
 
useEffect((()=>{
    fetch('blog.json')
    .then((res)=>res.json())
      .then((data)=>setblog(data))
}),[])







    return (
        <div className="md:w-2/3 border">
          
            {blog.map((bl,idx)=><Singlebl clicknowread={clicknowread} handlembookmark={handlembookmark} key={idx} singl={bl}></Singlebl>)}
      {

      }
        </div>
    );
};

export default Blog;