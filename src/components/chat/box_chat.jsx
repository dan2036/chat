import React, { useState } from "react";
import { Box, List, ListSubheader, Container, Toolbar } from "@mui/material"
import Grid from '@mui/material/Unstable_Grid2'
import AppBar from '@mui/material/AppBar';




import SearchChat from "./search_chat";
import TabsChat from "./tabs_chat"
import InfoCardChat from "./info_card_chat";
import Evgen from "../../assets/avatars/Evgen.png"
import Admin from "../../assets/avatars/Admin.png"
import Ekater from "../../assets/avatars/Ekater.png"
import Pavel from "../../assets/avatars/Pavel.png"
import Maria from "../../assets/avatars/Maria.png"
import IconOK from "../../assets/iconOK";
import IconPushPin from "../../assets/iconPushPin";
import IconTabsChat from "../../assets/iconTabsChat";


const Peoples = [
    {
        message: "Спасибо",
        name: "Евгений Тихонов",
        avatar: Evgen,
        isNetwork: true,
        timeMessage: "10:45",
        icon: <IconOK color="rgba(158, 158, 176, 1)"/>,

    },

    {
        message: "За занятие 1350",
        name: "Мария Иванова",
        avatar: Maria,
        isNetwork: true,
        timeMessage: "9:45",
        icon: <IconOK color="rgba(158, 158, 176, 1)"/>,

    },
    {
        message: "Со  всеми правилами ознакомлен",
        name: "Bot StuddyBuddy",
        avatar: Admin,
        isNetwork: false,
        timeMessage: "8:44",
        icon:<IconTabsChat width={"18px"} height={"18px"} margin="0px 0px 0px 8px" value={7}/>

    }, {
        message: "Хорошо",
        name: "Екатерина Стрельцова",
        avatar: Ekater,
        isNetwork: false,
        timeMessage: "11:45",
        icon: <IconPushPin/>

    },
    {
        message: "За занятие 1350",
        name: "Мария Иванова",
        avatar: Maria,
        isNetwork: true,
        timeMessage: "9:45",
        icon:<IconTabsChat width={"18px"} height={"18px"} margin="0px 0px 0px 8px"/>


    },
    {
        message: "Со всеми правила",
        name: "Bot StuddyBuddy",
        avatar: Admin,
        isNetwork: false,
        timeMessage: "8:44",
        icon:<IconTabsChat width={"18px"} 
                            height={"18px"} 
                            margin="0px 0px 0px 8px"
                            bg="rgba(187, 187, 200, 1)"
                            value={15}
                            />


    }, {
        message: "Хорошо",
        name: "Екатерина Стрельцова",
        avatar: Ekater,
        isNetwork: false,
        timeMessage: "11:45",
        icon:<IconTabsChat width={"18px"} 
                           height={"18px"} 
                           margin="0px 0px 0px 8px"/>

    },
    , {
        message: "Хорошо",
        name: "Екатерина Стрельцова",
        avatar: Ekater,
        isNetwork: false,
        timeMessage: "11:45",
        icon:<IconTabsChat width={"18px"} 
                            height={"18px"} 
                            margin="0px 0px 0px 8px"
                            bg="rgba(187, 187, 200, 1)"
                            />


    },
    , {
        message: "Хорошо",
        name: "Екатерина Стрельцова",
        avatar: Ekater,
        isNetwork: false,
        timeMessage: "11:45",
        icon:<IconTabsChat width={"18px"} 
                            height={"18px"} 
                            margin="0px 0px 0px 8px"
                            bg="rgba(187, 187, 200, 1)"
                            />

    }



]




const BoxChat = () => {

    return (
        <Grid sx={{
            width: "289px",
            height: "100%",
            borderStyle: "solid",
            borderWidth: "1px",
            borderRadius: "20px",
            borderColor: "rgba(187, 187, 200, 0.5)",
            backgroundColor:"#FFFFFF",
            overflow:"hidden",
        }}>
          
                <Grid xs={12}
                >
                    <SearchChat />
                </Grid>
                <Grid xs={12}
                >
                  <TabsChat />
                </Grid>
                <Grid xs={12} sx={{
                    height:"100%"
                }}>
                <Box
                    sx={{
                        height: "85%",
                        width: "100%",
                        position: "fixed",
                        overflowX: 'scroll',
                        overflowY: 'auto',
                        position: "relative",
                        "&::-webkit-scrollbar": {
                            width: 0
                        },
                        "&::-webkit-scrollbar-thumb": {
                            borderRadius: 0
                        }
                    }}
                >
                    {Peoples.map(value => {
                        return (
                            <InfoCardChat
                                message={value.message}
                                name={value.name}
                                avatar={value.avatar}
                                isNetwork={value.isNetwork}
                                timeMessage={value.timeMessage}
                                icon={value.icon}
                            >
                            </InfoCardChat>
                        )
                    })}
                </Box>
            </Grid>
        </Grid>

    )
}

export default BoxChat