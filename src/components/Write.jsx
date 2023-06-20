
import Editor from "./Editor";

const Write=()=>{
    return (
       <>
       <Editor
       headingLang='HTML'
       icon='/'
       color="#FF3C41"
       ></Editor>
       <Editor
        headingLang='CSS'
        icon='*'
        color="#0EBEFF"
       ></Editor>
       <Editor
        headingLang='JavaScript'
        icon='()'
        color="#FCD000"
       ></Editor>
       </>
    )
}
export default Write;