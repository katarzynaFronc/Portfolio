import { Menu, MenuItem, MenuItemProps, MenuProps, styled } from "@mui/material";

export const CustomMenuItem = styled(MenuItem)<MenuItemProps>(() => ({
  fontFamily: "Montserrat",
  paddingTop: "0",
  paddingBottom: "0",
  minHeight: "1.5rem",
}));

export const CustomMenu = styled(Menu)<MenuProps>(() => ({
  left: "100px",
  top: "-65px",
}));
