import { createContext,useState } from "react";

const DataContext=createContext();
const Data=({children})=>{
  const[html,setHtml]=useState('');
  const[css,setCss]=useState('');
  const[js,setJs]=useState('');


    return (
        <DataContext.Provider
        values={{
            html,
            setHtml,
            css,
            setCss,
            js,
            setJs

        }}
        >
           {children}
        </DataContext.Provider>
    )
}
export default Data;