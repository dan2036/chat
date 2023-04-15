import { Typography } from '@mui/material';
import { styled } from '@mui/system';

export const StyledInfoCardText = styled(Typography)((props) => ({
    fontWeight: "bold",
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
    fontFamily: 'Inter',
    fontStyle: 'normal',
    fontWeight: props.fontWeight,
    fontSize: props.fontSize,
    lineHeight: props.lineHeight,
    color: props.color

}))