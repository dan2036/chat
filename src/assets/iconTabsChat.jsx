import React from "react";
import { Box } from "@mui/material";



const IconTabsChat = ({width, height, margin, bg, value=2}) => {


    return (
      <Box 
      sx={{
        backgroundColor: bg?bg:"rgba(98, 18, 255, 1)",
        width: {width},
        height: {height},
        borderRadius: "10px",
        color: "white",
        fontSize: ".8em",
        textAlign:"center",
        fontFamily:"Inter",
        position:"relative",
        margin: {margin},
        display:"flex",
        justifyContent:"center",
        alignItems:"center"

      }}
      
      >
        {value}
      </Box>
    )
}

export default IconTabsChat