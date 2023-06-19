
import { Box ,styled} from "@mui/material";

const SubHead=styled(Box)`
background:#1d1e22
`
const Editor=()=>{
    return (
      <Box>
        <Box>
            <SubHead>
                <Box component="span"
                style={{
                    background:'red',
                    height:20,
                    widht:20,
                    display:'flex',
                    placeContent:'center',
                    marginRight:5,
                    borderRadius:5,
                    paddingBottom:2
                }}>/</Box>HTML
            </SubHead>
        </Box>

        <Box>
        </Box>
      </Box>
    )
}
export default Editor;