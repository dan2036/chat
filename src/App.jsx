import React from 'react';
import { Paper } from "@mui/material"


import LayoutChat from "./layouts/layout_chat"
import LayoutNavbar from "./layouts/layout_navbar"
import BoxChat from './components/chat/box_chat';
import GridFieldChat from './components/field_chat/gridFieldChat';


const App = () => {
    return (
      <LayoutNavbar>  
            <LayoutChat>
                <BoxChat>
                    
                </BoxChat>
                <GridFieldChat>
                </GridFieldChat>
            </LayoutChat>
       </LayoutNavbar>
    )
}

export default App;