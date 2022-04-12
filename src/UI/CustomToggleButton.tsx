import styled from "@emotion/styled";
import {ToggleButton} from "@mui/material";
import arrow from '../assets/images/selectarrow.svg'

export const CustomToggleButton = styled(ToggleButton)({
    boxShadow: 'none',
    color: '#41522E',
    textTransform: 'none',
    fontWeight: 400,
    fontSize: "16px",
    lineHeight: "19px",
    padding: '4px 30px 4px 8px',
    background: "#fff",
    border: '1px solid #41522E',
    borderRadius: "4px",
    fontFamily: 'Roboto',
    position: 'relative',
    '&::after': {
        position: 'absolute',
        right: '13px',
        top: '8px',
        content: '""',
        backgroundImage: `url(${arrow})`,
        width: '8.49px',
        height: '5.3px',
        opacity: 0.4,
    },
    '&::before': {
        position: 'absolute',
        right: '13px',
        bottom: '7px',
        content: '""',
        transform: "rotate(180deg)",
        backgroundImage: `url(${arrow})`,
        width: '8.49px',
        height: '5.3px',
        opacity: 0.4,
    },
    '&.Mui-selected': {
        color: '#41522E',
        background: "#fff",
        '&:hover': {
            background: "#fff",
        },
        '&::after': {
            opacity: 1,
        }
    },
    '&:hover': {
        backgroundColor: "#fff",
    }
});