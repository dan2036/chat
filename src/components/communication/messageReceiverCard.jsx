import * as React from 'react';
import IconAvatarBoxChat from '../../assets/IconAvatarBoxChat';
import Evgen from "../../assets/avatars/Evgen.png"
import { Box, Typography } from '@mui/material';
import { Height } from '@mui/icons-material';
import Grid from '@mui/material/Unstable_Grid2/Grid2';
import IconOK from '../../assets/iconOK';


const MessageReceiver = ({avatar, isNetwork, text, time}) => {
   

   return(
       
      
         <Box sx={{
            paddingLeft:"14px",
            display:"flex",
            alignItems:"end",
            margin:"4px",
            marginLeft:"14px"
         }}>
            <IconAvatarBoxChat 
            isNetwork={isNetwork} 
            avatar={avatar} 
            />
            <Box sx={{
                  backgroundColor: "rgba(187, 187, 200, 0.15)",
                  maxWidth:"350px",
                  padding: "8px 8px 8px",
                  borderRadius: "15px",
                  

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
                                       mt: "5px",
                                       pl:"4px",
                                      
                                    }}>
                                          {time}
                                    
                                  </Typography>
                           </Typography>
                  
                     
                
            </Box>


         </Box>


   )


}


export default MessageReceiver