import React, { FC, useContext } from "react";
import { LightMode, DarkMode, NotificationsNone } from "@mui/icons-material";
import { Grid, IconButton, useTheme } from "@mui/material";
import { ColorModeContext } from "../../theme";
import styled from "./style.module.css";

export const ThemeSwitcherComponent: FC = (): JSX.Element => {
  const theme = useTheme();
  const colorMode: any = useContext(ColorModeContext);

  return (
    <Grid onClick={colorMode.toggleColorMode} className={styled.iconBlock}>
      <IconButton className={styled.themeIcon}>
        {theme.palette.mode === "dark" ? <DarkMode /> : <LightMode />}
      </IconButton>
      <IconButton>
        <NotificationsNone />
      </IconButton>
    </Grid>
  );
};
export default ThemeSwitcherComponent;
