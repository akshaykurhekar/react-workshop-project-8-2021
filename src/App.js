import "./App.css";
import { useEffect, useState } from "react";
import BackgroundCard from "./components/backgroundCard/BackgroundCard";
import InputElement from "./components/inputElement/inputElement";

function App() {

  const [zoom, setZoom] = useState(20);
  const [title, setTitle] = useState("Welcome to React world");

useEffect(()=>{
    setTimeout( ()=>{
        setTitle("With Akshay Kurhekar");
    },2000)
    setTimeout( ()=>{
        setTitle("By ACM");
    },4000)
},[])

  
  return (
   <div className='flex'>
      <div style={{width:'750px', textAlign:'center', marginTop:'3rem'}}>
          <InputElement title={title}  setTitle={setTitle} zoom={zoom} setZoom={setZoom} />
      </div>
      <div>
      <BackgroundCard title={title} fontSize={zoom} />
      </div>     
    </div>
  );
}

export default App;
