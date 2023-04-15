import * as React from 'react';
import { TextField, IconButton } from "@mui/material"
import Grid from '@mui/material/Unstable_Grid2'



import IconClip from '../../assets/iconClip';
import IconArrow from '../../assets/iconArrow';
import IconEmoji from '../../assets/iconEmoji';



const BotomFieldChat = () => {
    return (
       
            <Grid container sx={{
                height: "64px",
                display:"flex",
                alignItems:"center",
                borderTop: "1px solid #BBBBC8"
                
            }}
            columns={20}
            >
                <Grid xs={1} sx={{
                    display:"flex",
                    justifyContent:"end"
                }}
                >
                    <IconButton>
                        <IconClip />
                    </IconButton>
                </Grid>
                <Grid xs={16} 
                >
                    <TextField 
                sx={{
                    borderStyle:'solid',
                    borderWidth:'0px',
                    borderRadius: '8px',
                    width:"220px",
                    height:"32px",

                    
                    
                    
                  
                }}
                placeholder="Сообщение..." 
                  

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
            }     
            

          },
       
        }}
    
    />
                </Grid>
                <Grid xs={1} sx={{
                    display:"flex",
                    justifyContent:"end"
                }}
                >
                    <IconButton>
                        <IconArrow />
                    </IconButton>
                </Grid>
                <Grid xs={2} sx={{
                    display:"flex",
                    justifyContent:"center",
                    pr:4
                }}
                >
                    <IconButton>
                        <IconEmoji />
                    </IconButton>

                </Grid>
            </Grid>



    )

}


export default BotomFieldChat