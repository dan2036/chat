import { styled } from '@mui/system';
import { Typography, Button, TextField } from '@mui/material';


export const StyledTittleTypography = styled(Typography)({
    color:"black",
    fontWeight: "bold",
    lineHeight:1
  });


  export const StyledButtonLink = styled(Button)((props) => ({

    
    
       textTransform: "none",
       color: props.textColor,
       fontFamily: 'Inter',
       fontStyle: "normal",
       fontWeight: 400,
       fontSize: "15px",
       lineHeight: "150%",
       padding:0,
       borderStyle:"solid",
       lineHeight: "22.5px",
       textAlign:"center",
       
       
       
      
      
      
  }));


  export const StyledTextfieldSelect = styled(TextField)(
    {
        "&.MuiTextField-root": {
            borderStyle: "none",
            borderWidth: 0,
        },
        "& .MuiOutlinedInput-notchedOutline": {
            borderWidth: 0
        },
        "& .MuiOutlinedInput-root.Mui-focused \
           .MuiOutlinedInput-notchedOutline": {
            borderWidth: 0
        },
        "& .MuiSelect-select.MuiInputBase-input.MuiOutlinedInput-input" : {
            fontFamily: 'Inter',
            fontStyle: 'normal',
            fontWeight: '400',
            fontSize: '15px',
            lineHeight: '140%',
            paddingLeft:0,

            
        }, 
      
    }
)

export const styledMenuProps = {

  MenuProps:
{
sx:{
    
  "& .MuiPopover-paper": {
    borderRadius:"10px",
    
  }, 
  "& li": {
    fontFamily: 'Inter',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: '15px',
    lineHeight: '140%',
  }



  }}}