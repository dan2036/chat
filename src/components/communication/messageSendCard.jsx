import * as React from 'react';
import { Box, Typography } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2/Grid2';
import IconOK from '../../assets/iconOK';

const MessageSend = ({text, time, read}) => {
   

   return(


    <Grid sx={{
      display:"flex",
      justifyContent:"end"
    }}>
       <Box sx={{
                     backgroundColor: "rgba(226, 223, 255, 0.5)",
                     maxWidth:"350px",
                     padding: "8px 8px 8px",
                     borderRadius: "15px",
                     margin:"4px",
                     marginRight:"22px",
                    
         
        }}>
         
          
                     <Typography sx={{
                       fontFamily: 'Inter',
                       fontStyle: 'normal',
                       fontWeight: '400',
                       fontSize: '14px',
                       lineHeight: '135%',
                       padding:"4px 10px",
                       
                     }}>
                          {text}
                                 <Typography sx={{
                                      float: 'right',
                                      fontFamily: 'Inter',
                                      fontStyle: 'normal',
                                      fontWeight: '400',
                                      fontSize: '12px',
                                      lineHeight: '130%',
                                      color: "#9E9EB0",
                                      mt: "6px",
                                      pl:"4px",
                                     
                                   }}>
                                         {time}
                                           <IconOK color={read?"rgba(98, 18, 255, 1)":"rgba(158, 158, 176, 1)"}/>
                                 </Typography>
                          </Typography>
           </Box>
    </Grid>




)}

export default MessageSend