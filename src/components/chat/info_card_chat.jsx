import React, { useState } from "react";
import { Box, Typography, Popover, Paper, List, ListItem, TextField, Popper } from "@mui/material"
import Grid from '@mui/material/Unstable_Grid2'
import IconAvatarBoxChat from "../../assets/IconAvatarBoxChat";
import { StyledInfoCardText } from "./styled";
import { StyledButtonLink } from "../navbar/styled";
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import { styled } from '@mui/system';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import { StyledTextfieldSelect } from "../navbar/styled";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import CheckIcon from '@mui/icons-material/Check';
import ListItemIcon from '@mui/material/ListItemIcon';
import IconOK from "../../assets/iconOK";

export const StyledListItem = styled(ListItem)((props) => ({

  padding: 0,

}))





const InfoCardChat = ({ message, name, avatar, isNetwork, timeMessage, icon }) => {

  const [open_, setOpen_] = React.useState(false);
  const [anchorEl_, setAnchorEl_] = React.useState(null);
  const handleClick_ = (event) => {
    setAnchorEl_(event.currentTarget);
    setOpen_((previousOpen) => !previousOpen);
    console.log(event.target)
  };


  const [open, setOpen] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const handleClick = (event) => {
    event.preventDefault();
    setAnchorEl(event.currentTarget);
    setOpen((previousOpen) => !previousOpen);
    setOpen_(false)
  };




  return (
    <div onMouseLeave={
      () => {
        setOpen_(false)
        setOpen(false)
      }
    }
    >

      <div
      >
        <MenuItem
          sx={{
            height: "74px",
            width: "100%",
            borderBottom: "1px solid rgba(187, 187, 200, 0.3)",
            borderLeft: "2px solid rgba(187, 187, 200, 0)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            "&:hover": {
              background: 'rgba(226, 223, 255, 0.5)',
              borderLeft: '2px solid #6212FF',
            },

          }}
          variant="contained"
          onContextMenu=
          {
            handleClick
          }
        >
          <Grid container columns={20}

          >

            <Grid xs={4} sx={{
              display: "flex",
              justifyContent: "end",
              alignItems: "end",
            }}
            >
              <IconAvatarBoxChat isNetwork={isNetwork} avatar={avatar} />

            </Grid>
            <Grid xs={13} sx={{
              display: "flex",
              alignItems: "center",
            }}

            >
              <Grid container
              >
                <Grid xs={12} sx={{ pb: .5 }}
                >
                  <StyledInfoCardText
                    fontWeight={600}
                    fontSize={"14px"}
                    lineHeight={"20px"}
                    color={"rgba(34, 34, 34, 1)"}
                  >
                    {name}
                  </StyledInfoCardText>
                </Grid>
                <Grid xs={12}>
                  <StyledInfoCardText
                    fontWeight={400}
                    fontSize={"14px"}
                    lineHeight={"19px"}
                    color={"rgba(119, 119, 138, 1)"}
                  >
                    {message}
                  </StyledInfoCardText>
                </Grid>


              </Grid>






            </Grid>
            <Grid item xs={3}>
              <Grid container
              >

                <Grid item xs={12} sx={{
                  display: "flex",
                  justifyContent: "end"
                }}>
                  <StyledInfoCardText
                    fontWeight={400}
                    fontSize={"12px"}
                    lineHeight={"16px"}
                    color={"rgba(158, 158, 176, 1)"}
                  >
                    {timeMessage}
                  </StyledInfoCardText>
                </Grid>
                <Grid item xs={12} sx={{
                  height:"32px",
                  display:"flex",
                  justifyContent:"center",
                  alignItems:"center"
                }}>
                    {icon}
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </MenuItem>

      </div>




      <Popper
        anchorEl={anchorEl}
        open={open}
        placement="right"
        id={"modal_2"}
        onMouseLeave={
          (e) => {
            if (e.relatedTarget.id != ("modal" || "modal_2)")) {
              setOpen(false)
            }
          }
        }


        sx={{
          backgroundColor: '#FFFFFF',
          borderRadius: "10px",
          border: "1px solid rgba(187, 187, 200, 0.3)",
          marginRight: "20px",
          filter: 'drop-shadow(0px 4px 10px rgba(106, 99, 118, 0.15))',
          marginLeft: "-15px !important",
          "& li": {
            fontFamily: 'Inter',
            fontStyle: 'normal',
            fontWeight: '400',
            fontSize: '14px',
            lineHeight: '135%',
            color: "#222222",
            "&:last-child": {
              color: "rgba(225, 38, 38, 1)"
            },
            "&:nth-child(3)": {
              borderTop: "solid 1px rgba(187, 187, 200, 0.2)"
            },
            "&:nth-child(4)": {
              borderBottom: "solid 1px rgba(187, 187, 200, 0.2)"
            },

            padding: "6px 6px 6px",
          },


        }}
      >
        <MenuItem id={"modal_2"} onClick={handleClick}>Закрепить чат</MenuItem>
        <MenuItem id={"modal_2"} onClick={handleClick}>Отключить уведомления</MenuItem>
        <MenuItem id={"modal_2"} onClick={handleClick}>Перенести в архив</MenuItem>
        <MenuItem sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}
          id={"modal_2"}
          onClick={handleClick_}
          onMouseLeave={(e) => {
            if (e.relatedTarget.id != "modal") {
              setOpen_(false)
            }
          }}
          onMouseEnter={
            handleClick_
          }
        >
          Добавить в папку
          <ArrowForwardIosIcon sx={{
            width: "15px",
            height: "15px",
            paddingRight: "4px"
          }} />
        </MenuItem>
        <MenuItem id={"modal_2"} onClick={handleClick}>Очистить историю</MenuItem>
        <MenuItem id={"modal_2"} onClick={handleClick}>Удалить чат</MenuItem>
      </Popper>

      <Popper
        id={"modal"}
        anchorEl={anchorEl_}
        open={open_}
        onMouseLeave={() => setOpen_(false)}
        placement="right"
        sx={{
          marginLeft: "-10px !important",
          backgroundColor: '#FFFFFF',
          borderRadius: "10px",
          border: "1px solid rgba(187, 187, 200, 0.3)",
          filter: 'drop-shadow(0px 4px 10px rgba(106, 99, 118, 0.15))',
          width: "175px",
          overflow: "hidden",
          "& li": {
            fontFamily: 'Inter',
            fontStyle: 'normal',
            fontWeight: '400',
            fontSize: '14px',
            lineHeight: '135%',
            color: "#222222",
            padding: "3px 6px 3px",
            "&:hover": {
              backgroundColor: "rgba(98, 18, 255, 1)",
              color: "white"
            },
            "&:last-child": {
              marginBottom: "8px"
            },
            "&:first-child": {
              marginTop: "8px"
            },
          },
        }}
      >



        <MenuItem sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}
          id={"modal"}
          onClick={handleClick_}
        > Все чаты
          <CheckIcon sx={{
            width: "15px",
            height: "15px",
            paddingRight: "4px"
          }} />
        </MenuItem>
        <MenuItem sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}
          id={"modal"}
          onClick={handleClick_}>
          Мои репетиторы
          <CheckIcon sx={{
            width: "15px",
            height: "15px",
            paddingRight: "4px"
          }} />
        </MenuItem>
        <MenuItem sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}
          id={"modal"}
          onClick={handleClick_}>
          Архив
          <CheckIcon sx={{
            width: "15px",
            height: "15px",
            paddingRight: "4px"
          }} />
        </MenuItem>
        <MenuItem sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}
          id={"modal"}
          onClick={handleClick_}>
          Личное
          <CheckIcon sx={{
            width: "15px",
            height: "15px",
            paddingRight: "4px"
          }} />
        </MenuItem>
      </Popper>

    </div>
  )
}


export default InfoCardChat