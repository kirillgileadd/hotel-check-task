import styled from "@emotion/styled";
import {Button} from "@mui/material";

export const CustomButton = styled(Button)({
    boxShadow: 'none',
    textTransform: 'none',
    fontWeight: 500,
    fontSize: "16px",
    lineHeight: "19px",
    padding: '10px 17px',
    background: "linear-gradient(104.34deg, #41522E -15.34%, #BE8022 145.95%)",
    borderRadius: "4px",
    fontFamily: 'Roboto',
    '&:hover': {
        background: 'linear-gradient(0deg, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.2)), linear-gradient(104.34deg, #41522E -15.34%, #BE8022 145.95%)',
        boxShadow: 'none',
    },
    '&:active': {
        background: 'linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), linear-gradient(104.34deg, #41522E -15.34%, #BE8022 145.95%)',
    },
});