import React, {FC} from 'react';
import {CustomPaper} from "../UI/CustomPaper";
import {styled, ToggleButton, ToggleButtonGroup, Typography} from "@mui/material";

const FavoritesTitle = styled(Typography)`
  font-weight: 500;
  font-size: 24px;
  line-height: 28px;
`

const FavoritesButton = styled(ToggleButton )`
`

const FavoritesBlock:FC = () => {
    return (
        <CustomPaper>
            <FavoritesTitle variant='h4' mb={'32px'}>
                Избранное
            </FavoritesTitle>
            <ToggleButtonGroup
                color="primary"
                // value={alignment}
                exclusive
                // onChange={handleChange}
            >
                <FavoritesButton value={"rating"}>Рейтинг</FavoritesButton>
                <FavoritesButton value={"price"}>Цена</FavoritesButton>
            </ToggleButtonGroup>
        </CustomPaper>
    );
};

export default FavoritesBlock;