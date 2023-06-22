import { useContext } from "react";
import { Box,styled } from "@mui/material";
import Editor from "./Editor";
import { DataContext } from "../contextcode/DataProvider";

const Container=styled(Box)`
display:flex;
background-color:#060606;
hight:50vh;
`
const Write=()=>{

    const{html,css,js,setHtml,setCss,setJs}= useContext(DataContext);

    return (
       <Container>
       <Editor
       headingLang='HTML'
       icon=' / '
       color="#FF3C41"
       value={html}
       onChange={setHtml}
       ></Editor>
       <Editor
        headingLang='CSS'
        icon=' * '
        color="#0EBEFF"
        value={css}
        onChange={setCss}
       ></Editor>
       <Editor
        headingLang='JavaScript'
        icon='( )'
        color="#FCD000"
        value={js}
        onChange={setJs}
       ></Editor>
       
       </Container>
    )
}
export default Write;