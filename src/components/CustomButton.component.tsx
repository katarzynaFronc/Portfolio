import { Button, ButtonProps, styled } from "@mui/material";
import "../assets/sass/utilities/_variables.scss";

export const CustomButton = styled(Button)<ButtonProps>(() => ({
  color: "#16161d",
  justifyContent: "flex-start",
  textAlign: "left",
  fontFamily: "Montserrat Subrayada",
  fontWeight: "400",
  height: "1.5rem",
  "&:hover": {
    backgroundColor: "#9cb1ce",
  },
}));

export const CustomButtonLink = styled(Button)<ButtonProps>(() => ({
  color: "#16161d",
  justifyContent: "flex-start",
  textAlign: "left",
  fontFamily: "Montserrat Subrayada",
  fontWeight: "400",
  height: "2rem",
  minWidth: "10rem",

  "&:hover": {
    backgroundColor: "#9cb1ce",
  },
}));
