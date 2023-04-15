import React from "react";
import { TextField, InputAdornment, Popover, Typography } from "@mui/material"
import Grid from '@mui/material/Unstable_Grid2'
import  IconSearchFilter from "../../assets/iconSearchChat"
import IconDirChat from "../../assets/iconDirChat";


const SearchChat = () => {


    return(
    <>  
    <Grid container sx={{
            display:"flex",
            justifyContent:"center",
            alignItems:"center",
            height: "62px",
            pl:"15px"
         }}
          >
    <Grid xs={10} sx={{
       
    }}>
  
        <TextField 
                sx={{
                    backgroundColor: 'rgba(187, 187, 200, 0.2)',
                    borderStyle:'solid',
                    borderWidth:'0px',
                    borderRadius: '8px',
                    width:"220px",
                    height:"32px",
                    
                    
                    
                  
                }}
                placeholder="Найти по имени" 
                  

        InputProps={{
          sx:{
            "&.MuiOutlinedInput-root":{
              borderWidth:0,
              width:"100%",
              height:"100%",
              borderRadius: "inherit",
              pl:"10px"
            },
            "&.Mui-focused .MuiOutlinedInput-notchedOutline":{
              borderWidth: 0,
            },
            "&:hover .MuiOutlinedInput-notchedOutline":{
              borderWidth: 0,
            },
            "& .MuiOutlinedInput-notchedOutline":{
              borderWidth: 0,
            },
            "& .MuiInputBase-input.MuiOutlinedInput-input":{
                    fontStyle: 'normal',
                    fontWeight: '400',
                    fontSize: '14px',
                    lineHeight: '20px',
                    color:"#222222"
            }     
            

          },
          startAdornment: (
            <InputAdornment position="start" >
              <IconSearchFilter />
            </InputAdornment>
          ),
        }}
    
    />
    </Grid>
    <Grid item  xs={2} display="flex" justifyContent="center" alignItems="center">
       <IconDirChat/>
    </Grid>
  
  </Grid>
 
</>
    )
}

export default SearchChat