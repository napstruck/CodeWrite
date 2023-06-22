import { useContext } from "react";
import { Box,styled } from "@mui/material";
import Editor from "./Editor";
import { DataContext } from "../contextcode/DataContext";

const Container=styled(Box)`
display:flex;
background-color:#060606;
hight:50vh;
`
const Write=({ setHtml, setCss, setJs })=>{

    const { html, css, js } = useContext(DataContext);

    return (
       <Container>

       <Editor
       headingLang='HTML'
       mime="text/html"
       icon=' / '
       color="#FF3C41"
       value={html}
       onChange={setHtml}
       ></Editor>

       <Editor
        headingLang='CSS'
        mime="text/css"
        icon=' * '
        color="#0EBEFF"
        value={css}
        onChange={setCss}
       ></Editor>

       <Editor
        headingLang='JavaScript'
        mime="text/javascript"
        icon='( )'
        color="#FCD000"
        value={js}
        onChange={setJs}
       ></Editor>
       
       </Container>
    )
}
export default Write;