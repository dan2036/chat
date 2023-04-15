import * as React from 'react';
import { Typography, Button, TextField, MenuItem } from '@mui/material';
import {  StyledTextfieldSelect, styledMenuProps } from '../styled';
import KeyboardArrowDownRoundedIcon from '@mui/icons-material/KeyboardArrowDownRounded';





const CustomStyledTextfieldSelect = ({arrayValue}) => {
return(
<StyledTextfieldSelect
                            select
                            defaultValue={arrayValue[0].value}
                            
                            
                            SelectProps={
                                
                                {
                                    
                                    IconComponent:KeyboardArrowDownRoundedIcon,
                                    ...styledMenuProps
                                }
                            }
                            
                           
                        >
                             {arrayValue.map((option) => (
                                    <MenuItem key={option.value} value={option.value}>
                                            {option.label}
                                    </MenuItem>
                        ))}
                            
                        </StyledTextfieldSelect>

                             )}

export default CustomStyledTextfieldSelect                             