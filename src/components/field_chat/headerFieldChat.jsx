import * as React from 'react';
import { Box, Typography, Button, IconButton } from "@mui/material"
import Grid from '@mui/material/Unstable_Grid2'

import Evgen from "../../assets/avatars/Evgen.png"
import IconSearchFilter from '../../assets/iconSearchChat';
import IconPoints from '../../assets/iconPoints';
import IconSmall from '../../assets/iconSmall';
import IconAvatarBoxChat from '../../assets/IconAvatarBoxChat';
import { StyledInfoCardText } from '../chat/styled';
import { StyledButtonLink } from '../navbar/styled';

const HeaderFieldChat = () => {

    return (
        <Grid container sx={{
            height: "71px",
            display: "flex",
            alignItems: "center"
        }}
        >
            <Grid xs={1}
                sx={{
                    display: "flex",
                    justifyContent: "end",
                    alignItems:"end",
                }}
            >
                <IconAvatarBoxChat isNetwork={true} avatar={Evgen} />
            </Grid>
            <Grid xs={6} sx={{

            }}>
                <Grid container
                >
                    <Grid xs={12}
                    >
                        <StyledInfoCardText
                            fontWeight={600}
                            fontSize={"14px"}
                            lineHeight={"20px"}
                            color={"rgba(34, 34, 34, 1)"}
                        >
                            Евгений Тихонов
                        </StyledInfoCardText>
                    </Grid>
                    <Grid xs={12}>
                        <StyledInfoCardText
                            fontWeight={400}
                            fontSize={"14px"}
                            lineHeight={"19px"}
                            color={"rgba(119, 119, 138, 1)"}
                        >
                            в сети
                        </StyledInfoCardText>
                    </Grid>


                </Grid>
            </Grid>
            <Grid xs={5}>
                <Grid container sx={{
                    display:"flex",
                    alignItems: "center",
                }}>
                    <Grid xs={7} sx={{
                        display:"flex",
                        alignItems: "center",
                        justifyContent:"end",
                        pr:"40px"
                }}
                       >
                        <StyledButtonLink textColor="white" sx={{
                            backgroundColor: "rgba(98, 18, 255, 1)",
                            padding: "10px 20px 11px",
                            borderRadius: "20px",
                            height:"40px",
                            minWidth:"210px",
                            "&:hover":{
                                backgroundColor:"rgba(98, 18, 255, 1)",
                            }
                        }}
                        >
                            Предложить заказ
                        </StyledButtonLink>
                    </Grid>
                    <Grid xs={1}>
                        <IconButton>
                            <IconSearchFilter />
                        </IconButton>
                    </Grid>
                    <Grid xs={1}>
                        <IconButton>
                            <IconPoints />
                        </IconButton>
                    </Grid>
        
                    <Grid xs={1}
                        sx={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                        }}
                    >
        
                        <Box sx={{
                            border: "1px solid #BBBBC8",
                            height: "34px",
                            width: "0px"
        
                        }}>
        
                        </Box>
                    </Grid>
        
                    <Grid xs={1}
                    >
                        <IconButton>
                            <IconSmall />
                        </IconButton>
        
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )

}


export default HeaderFieldChat