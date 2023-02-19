import React from "react";
import  "./header.css";

const handleClick=()=>{
    window.scrollTo(0,600)
}
const handleClick2=()=>{
    window.scrollTo(0,1650)
}
const handleClick3=()=>{
    window.scrollTo(0,2200)
}


export default function Header(){

return(
    <div   className="title" >
    <button  onClick={handleClick} className="title1">Skills</button>
    <button   onClick={handleClick2} className="title2">Projects</button>
    <button  onClick={handleClick3}className="title3">Hire Me</button> 
    </div>
)
}
