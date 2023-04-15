import React from "react";
import Grid from '@mui/material/Unstable_Grid2'



const LayoutChat = ({children}) => {
const childrens = React.Children.toArray(children)
return(
      
        <Grid container xs={12}
         sx={{
            pl:"112px",
            pt: "20px",
            pr: "112px",
            height: "calc(100vh - 140px)",
            minHeight:"640px",
            minWidth:"1440px",
            

          }}
  
       
         >       
    <Grid 
          xs={3}
          sx={{
            height:"100%"
          }}
        
     >
                    
            {childrens[0]}
    </Grid>    
    <Grid xs={9}
     sx={{
      height:"100%"
    }}
     
    >
               
        {childrens[1]}
       
    </Grid> 
  </Grid>
  
)  

}


export default LayoutChat