
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
background:#1d1e22;
display:flex;
justify-content:space-between;
color:white;
font-weight:700
`
const Editor=({headingLang,icon,color})=>{
    return (
      <Box>
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
                    paddingBottom:5
                }}>{icon}</Box>{headingLang}
            </SubHead>
            {/* used as a component here although its a icon hence self closing tag */}
          <  CloseFullscreenIcon />
        </Heading>

        <ControlledEditor className='controlled-editor'
                     options={{
                           lineNumbers:true,
                           theme:'material'
                       }}/>
      </Box>
    )
}
export default Editor;