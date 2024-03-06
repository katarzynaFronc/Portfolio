import { Menu, MenuItem, MenuItemProps, MenuProps, styled } from "@mui/material";

export const CustomMenuItem = styled(MenuItem)<MenuItemProps>(() => ({
  fontFamily: "Montserrat Subrayada",
  paddingTop: "0",
  paddingBottom: "0",
  minHeight: "1.5rem",
  fontSize: "0.875rem",

  "&:hover": {
    backgroundColor: "#9cb1ce",
  },
}));

export const CustomMenu = styled(Menu)<MenuProps>(() => ({
  left: "100px",
}));
