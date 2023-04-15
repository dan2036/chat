import * as React from 'react';
import Grid from '@mui/material/Unstable_Grid2'
import { Link, Box,} from '@mui/material';
import { StyledTittleTypography, StyledButtonLink, StyledTextfieldSelect, styledMenuProps } from './styled';
import CustomStyledTextfieldSelect from './components/CustomTextfieldSelect';
import Admin from "../../assets/avatars/Admin.png"
import IconPayment from '../../assets/iconPayment';
import IconChats from '../../assets/iconChats';
import { IconButton } from '@mui/material';
import IconFavourites from '../../assets/favourites';
import IconNotifications from '../../assets/iconNotifications';
import Profile from "../../assets/avatars/profile_navbar.png"
import IconLogo from '../../assets/iconLogo';




const citys = [
    {
        value: 'Москва',
        label: 'Москва',
    },
    {
        value: 'Казань',
        label: 'Казань',
    },
    {
        value: 'Самара',
        label: 'Самара',
    },

];



const currencys = [
    {
        value: 'Русский, USD',
        label: 'Русский, USD',
    },

];

const PanelNavbar = () => {
    return (

        <Grid container
            columns={3}
            sx={{
                display: "flex",
                alignitems: "center",
                justifyContent: "space-between",
                minWidth: "1220px",

            }

            }>
            <Grid xs={1} sx={{
                width: "620px",
            }}>
                <Grid container>
                    <Grid xs={3}
                        sx={{
                            width: "70px",
                            height: "50px",
                            display: "flex",
                            justifyContent: "start",
                            alignitems: "center",
                        }}

                    >

                        <Grid container>
                            <Grid xs={12} sx={{
                                display:"flex",
                                justifyContent:"center",
                                alignItems:"center"
                            }}>
                                <IconLogo/>
                            </Grid>
                           
                            </Grid>



                    </Grid>

                    <Grid xs={9}
                        sx={{
                            display: "flex",
                            alignItems: "center",
                            ml: "40px",

                        }}
                    >
                        <Grid container
                            columns={20}
                            sx={{
                                color: "black",
                                display: "flex",
                                width: "100%",
                            }}>
                            <Grid xs={7}                    >
                                <StyledButtonLink component={Link} textColor={"rgba(34, 34, 34, 1)"} sx={{
                                   
                                }}>
                                    Найти репетитора
                                </StyledButtonLink>
                            </Grid>
                            <Grid xs={8} sx={{
                            }}>
                                <StyledButtonLink component={Link} textColor={"rgba(34, 34, 34, 1)"}>
                                    Помощь с работами
                                </StyledButtonLink>
                            </Grid>
                            <Grid xs={5} sx={{
                            }}>
                                <StyledButtonLink component={Link} textColor={"rgba(34, 34, 34, 1)"}>
                                    Все репетиторы
                                </StyledButtonLink>
                            </Grid>
                        </Grid>

                    </Grid>
                </Grid>
            </Grid>







            <Grid xs={2} sx={{
                display: "flex",
                minWidth: "500px",
                width: "500px",
                borderStyle: "solid",

            }}>

                <Grid container sx={{
                    width: "100%",


                }}>

                    <Grid xs={3} sx={{
                        display:"flex",
                        justifyContent: "end"
                    }}>
                        <CustomStyledTextfieldSelect
                            arrayValue={citys}
                        >
                        </CustomStyledTextfieldSelect>
                    </Grid>
                    <Grid xs={3}>
                        <CustomStyledTextfieldSelect
                            arrayValue={currencys}
                        >
                        </CustomStyledTextfieldSelect>
                    </Grid>
                    <Grid xs={6} sx={{
                        display: "flex",
                        alignItems: "center",
                    }}>
                        <Grid container sx={{
                            width: "241px",
                            display: "flex",
                            alignItems: "center",
                        }}>
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
                                    width: 0
                                }}>
                                </Box>
                            </Grid>

                            <Grid xs={3} sx={{
                                display: "flex",
                                justifyContent: "start",
                            }}>
                                <IconPayment />
                            </Grid>


                            <Grid xs={5} sx={{
                                display: "flex",
                                justifyContent: "end",
                                alignItems: "center",
                            }}>
                                <Grid container sx={{
                                    display: "flex",
                                    justifyContent: "end",
                                    alignItems: "center",
                                }}>

                                    <Grid xs={4} sx={{
                                        display: "flex",
                                        justifyContent: "end",
                                        alignItems: "center",
                                    }}>
                                        <IconButton>
                                            <IconChats />
                                        </IconButton>
                                    </Grid>
                                    <Grid xs={4} sx={{
                                        display: "flex",
                                        justifyContent: "center",
                                        alignItems: "center",
                                    }}>
                                        <IconFavourites />
                                    </Grid>
                                    <Grid xs={4} sx={{
                                        display: "flex",
                                        justifyContent: "end",
                                        alignItems: "center",
                                    }}>
                                        <IconNotifications />

                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid
                                xs={3}
                                sx={{
                                    display: "flex",
                                    justifyContent: "end"
                                }}

                            >
                                <img style={{
                                    display: "flex",
                                    justifyContent: "end"
                                }} src={Profile} alt="" />

                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>

    )
}




export default PanelNavbar