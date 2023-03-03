import React from "react";
import { useSelector } from "react-redux";

export default function Home() {
  const data =  useSelector((state) =>{
    return state.first
  })
  return(
  <>
  <div>
    Home
  </div>
  <div>
    <h1>Welcome to React!</h1>
    <p>{data}</p>
  </div>
  </> 
)}
