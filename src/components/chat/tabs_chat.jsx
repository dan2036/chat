import * as React from 'react';
import { Tabs, Tab, Box } from '@mui/material';
import IconTabsChat from '../../assets/iconTabsChat';
import { styled } from '@mui/material/styles';


const StyledTab = styled((props) => <Tab  disableRipple TabIndicatorProps={{
    sx: { backgroundColor: "red" } }} {...props} />)(
    ({ theme }) => ({
      
      textTransform: 'none',
      padding:0,
      marginLeft:13,
      minHeight:0,
      padding:0,
      paddingTop:"15px",
      color: 'rgba(119, 119, 138, 1)',
      '&.Mui-selected': {
        color: 'rgba(98, 18, 255, 1)',
      },
      


      '&.Mui-focusVisible': {
        backgroundColor: 'rgba(187, 187, 200, 0.2)',
        borderRadius: "0px",
      },
     
    }),
  );



const TabsChat = () => {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
  
    return (
      <Tabs
        value={value}
        onChange={handleChange}
        aria-label="icon position tabs example"
        scrollButtons="auto"
        sx={{ height: '46px',
              fontFamily: 'Inter',
              fontStyle: 'normal',
              fontWeight: '400',
              fontSize: '13px',
              lineHeight: '130%',
              borderTopStyle:"solid",
              borderBottomStyle:"solid",
              borderWidth:"1px",
              borderColor: "rgba(187, 187, 200, 0.5)",
        '& .MuiTabs-indicator': {
           backgroundColor:"rgba(98, 18, 255, 1)",
          },
    
    
    }}
      >
      <StyledTab icon={<IconTabsChat width={"16px"} height={"16px"} margin={"0px 0px 0px 4px"}/>} iconPosition="end" label="Все чаты" />
      <StyledTab  iconPosition="end" label="Мои репетиторы" />
      <StyledTab icon={<IconTabsChat width={"16px"} height={"16px"} margin={"0px 0px 0px 4px"}/>} iconPosition="end" label="Архив" />
      <StyledTab icon={<IconTabsChat width={"16px"} height={"16px"} margin={"0px 0px 0px 4px"}/>} iconPosition="end" label="Личное" />
    </Tabs>
  );
}

export default TabsChat