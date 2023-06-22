import Header from "./Header";
import Write from "./Write";
import "../App.css";
import Output from "./Output";
import { DataContext } from "../contextcode/DataContext";
import { useState } from "react";
const CodeHome = () => {
    const [html, setHtml] = useState("<h1>hi</h1>");
    const [css, setCss] = useState("");
    const [js, setJs] = useState("");
    
  return (
    //could have used div element here but using empty react fragment element does not create an unnecessary child, saves space,faster
    <div className='Codepage'>
      <Header />
      <DataContext.Provider value={{ html: html, css: css, js: js}}>
        <Write setHtml={setHtml} setCss={setCss} setJs={setJs} />
        <Output />
      </DataContext.Provider>
    </div>
  );
};
export default CodeHome;
