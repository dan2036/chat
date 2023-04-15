import React from "react";
import { Box, AppBar, IconButton, Typography } from "@mui/material"
import Grid from '@mui/material/Unstable_Grid2'
import PanelNavbar from "../components/navbar/panel_navbar";
import { StyledButtonLink } from "../components/navbar/styled";


const LayoutNavbar = ({children}) => {


    return(
       
 
   
              <Grid
                sx={{
                    width: "100vw",
                    minHeight: "788px",
                    height: "100vh",
                    minWidth:"1440px",
                    backgroundColor:"#F3F3F3",
                }}
              >
                       <Grid xs={12} >
                          <AppBar sx={{
                              width:"100%",
                              height: "70px",
                              backgroundColor: "white",
                              borderRadius: 0,
                              position:"static",
                              display: "flex",
                              justifyContent:"center",
                              pr:"112px",
                              pl:"112px"
                          }}
                          >
                              <PanelNavbar/>
                          </AppBar>
                
                  <AppBar  position="static" sx={{
                      height: "50px",
                      borderRadius:0,
                      display: "flex",
                      justifyContent: "center",
                      width:"100%",
                      background: '#222222',
                      boxShadow: "0px 4px 10px rgba(106, 99, 118, 0.15)",
                      
                      
                  }}>
                    
                               <Grid container rowSpacing={0} sx={{
                                  width: "470px",
                                  ml:"112px",
                                  display: "flex",
                                  justifyContent: "flex-start",
                                  flexGrow: 0
                               }}>
                               <Grid xs={4}>
                                          <StyledButtonLink textColor="rgba(255, 255, 255, 0.7)"
                                                            sx={{
                                                               
                                                                
                                                            }}
                                          >Личный кабинет</StyledButtonLink>
          
                               </Grid>
                               <Grid xs={3}>
                                          <StyledButtonLink textColor="rgba(255, 255, 255, 0.7)">Мои занятия</StyledButtonLink>
                               </Grid>
                               <Grid xs={4}>
                                          <StyledButtonLink textColor="rgba(255, 255, 255, 0.7)">Мои заказы</StyledButtonLink>
          
          
                               </Grid>
          
          
          
                               </Grid>
                           
         
                  </AppBar>
                       </Grid>
          
           
           
    
                   <Grid xs={12} > 
                          {children}
                   </Grid>
    
        
         
         </Grid>

    )
}

export default LayoutNavbar