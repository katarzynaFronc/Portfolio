import { Button, ButtonProps, styled } from "@mui/material";

export const CustomButton = styled(Button)<ButtonProps>(() => ({
  color: "#16161d",
  justifyContent: "flex-start",
  textTransform: "capitalize",
  textAlign: "left",
  fontFamily: "Mona Sans",
  fontSize: "1rem",
  fontWeight: "400",
  height: "1.5rem",
  "&:hover": {
    backgroundColor: "#cdcdcd",
  },
}));
