import { Button, ButtonProps, styled } from "@mui/material";

export const CustomButton = styled(Button)<ButtonProps>(() => ({
  color: "#16161d",
  justifyContent: "flex-start",
  textAlign: "left",
  fontFamily: "Montserrat Subrayada",
  fontWeight: "400",
  height: "1.5rem",
  "&:hover": {
    backgroundColor: "#cdcdcd",
  },
}));

export const CustomButtonLink = styled(Button)<ButtonProps>(() => ({
  color: "#16161d",
  justifyContent: "flex-start",
  textAlign: "left",
  fontFamily: "Montserrat Subrayada",
  fontWeight: "400",
  height: "2rem",
  "&:hover": {
    backgroundColor: "#cdcdcd",
  },
}));
