import React from "react";
import { Box } from "@mui/material"
import Avatar from "@mui/material";


const IconAvatarBoxChat = ({isNetwork, avatar}) => {


    return(
    <Box sx={{
        width: 50,
        height: 50,
        display:"flex",
        justifyContent:"start",
        alignItems:"center"
    }}>
       <img style={{
                 position: "absolute",
              }} 
              src={avatar} alt="Logo"></img> 
              {isNetwork?
              <Box 
              sx={{
                backgroundColor: "rgba(25, 178, 12, 1)",
                width: "12px",
                height: "12px",
                borderWidth: "2px",
                borderStyle: "solid",
                borderRadius: "10px",
                color: "white",
                position: "relative",
                ml:"25px",
                mt:"22px"
              }}
              
              >
               
              </Box>
              :""}





    </Box>    
    
    
    
    
)
}


export default IconAvatarBoxChat