 import { useState } from 'react';

import { Box ,styled} from "@mui/material";
import CloseFullscreenIcon from '@mui/icons-material/CloseFullscreen';
import { Controlled as ControlledEditor } from "react-codemirror2";
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';
import 'codemirror/mode/xml/xml';
import'codemirror/mode/javascript/javascript';
import'codemirror/mode/css/css';
import '../App.css';

const SubHead=styled(Box)`
background:#1d1e22;
padding: 10px 12px;
    display: flex
`
const Heading=styled( Box)`
background:#060606;
display:flex;
justify-content:space-between;
color:#AAAEBC;
font-weight:700
`

const Container =styled(Box)`
flex-grow:1;
flex-basic:0;
display:flex;
flex-direction:column;
padding:0 8px 8px;
`

const Editor=({headingLang,value,onChange,icon,color})=>{
const [open,setOpen]=useState(true);
  const handleChange=(editor,data,value)=>{
    onChange(value);
  }
    return (
      <Container style={open?null:{flexGrow:0}}>
        <Heading>
            <SubHead>
                <Box component="span"
                style={{
                    background:color,
                    height:20,
                    widht:20,
                    display:'flex',
                    placeContent:'center',
                    marginRight:10,
                    borderRadius:5,
                    paddingBottom:5,
                    color:'#000'
                }}>{icon}</Box>{headingLang}
            </SubHead>
            {/* used as a component here although its a icon hence self closing tag */}
          <  CloseFullscreenIcon fontSize="small" style={{alignSelf:"center", cursor:"pointer"}} onClick={()=>setOpen(prevState=>!prevState)} />
        </Heading>

        <ControlledEditor 
         onBeforeChange={handleChange}
        value={value}
        className='controlled-editor'
        
                     options={{
                           lineNumbers:true,
                           theme:'material'
                       }}/>
      </Container>
    )
}
export default Editor;