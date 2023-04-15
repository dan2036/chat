import * as React from 'react';
import Grid from '@mui/material/Unstable_Grid2'
import HeaderFieldChat from './headerFieldChat';
import BotomFieldChat from './bottomFieldChat';
import { Box, Container } from '@mui/material';
import MessageReceiver from '../communication/messageReceiverCard';
import MessageSend from '../communication/messageSendCard';
import Evgen from "../../assets/avatars/Evgen.png"



const messages = [
    {
        typeMessage:"send",
        text:"Здравствуйте, Евгений Александрович!",
        time:"12:40",
        read:true
      },
      {
        typeMessage:"send",
        text:"Мне нужно подготовиться и сдать экзамен по английскому. Начать хочу на след. неделе, 2 занятия в неделю.",
        time:"12:40",
        read:true
      },
      
  {
    typeMessage:"receiver",
    avatar:Evgen,
    isNetwork:true,
    text:"Здравствуйте! Стоимость занятия 1350 рублей за 60 минут. Начать можем со след. недели.",
    time:"12:40",
  },
  {
    typeMessage:"send",
    text:"Хорошо",
    time:"12:40",
    read:false
  },
  {
    typeMessage:"send",
    text:"Спасибо",
    time:"12:40",
    read:false
  }






]



const GridFieldChat = () => {

    return (
        <Grid sx={{
            borderStyle: "solid",
            borderWidth: "1px",
            borderRadius: "20px",
            borderColor: "rgba(187, 187, 200, 1)",
            minWidth: "907px",
            width: "100%",
            minHeight: "100%",
            height: "100%",
            backgroundColor:"white"
        }}>
            <Grid container
               sx={{
                   height:"100%"
               }}
              
            >

                <Grid xs={12} sx={{
                    borderBottomStyle: "solid",
                    borderWidth: "1px",
                    borderBottomColor: "rgba(187, 187, 200, 1)",
                }}>
                    <HeaderFieldChat />

                </Grid>
                <Grid xs={12} sx={{
                    height: "75%",
                  

                }}>
                     <Box
                    sx={{
                        height: "100%",
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
                        },
                        mt:"16px",
                        mb: "16px"

                    }}
                >
                    {messages.map(message => {
                        return (
                           <> 
                           {
                            message.typeMessage === "receiver"? <MessageReceiver 
                                                                         avatar={message.avatar} 
                                                                         isNetwork={message.isNetwork}
                                                                         text={message.text}
                                                                         time={message.time}
                                                                         />:<MessageSend
                                                                            text={message.text}
                                                                            time={message.time}
                                                                            read={message.read}
                                                                         />
                           }
                           
                           
                           </>
                        )
                    })}
                </Box>

                </Grid>
                <Grid xs={12} sx={{
                 
                }}>
                         <BotomFieldChat></BotomFieldChat>
                </Grid>


            </Grid>

        </Grid>


    )



}


export default GridFieldChat
