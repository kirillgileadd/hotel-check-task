import styled from "@emotion/styled";
import {Paper} from "@mui/material";

export const CustomPaper = styled(Paper)`
  background: #FFFFFF;
  box-shadow: 0px 4px 33px rgba(0, 0, 0, 0.04);
  border-radius: 16px;
  padding: 32px;
  @media(max-width: 600px) {
    padding: 16px;
  }
`