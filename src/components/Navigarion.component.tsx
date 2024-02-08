export interface ProjectsProps {
  value: string;
  name: string;
}

const projects = [
  {
    value: "Project 1",
    name: "Project 1",
  },
  {
    value: "Project 2",
    name: "Project 2",
  },
  {
    value: "Project 3",
    name: "Project 3",
  },
];

import "../assets/sass/style.css";
import * as React from "react";
import Menu from "@mui/material/Menu";

import { CustomButton } from "./CustomButton.component";
import { CustomMenuItem } from "./CustomMenu.component";

export default function Navigation() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className="menu-container">
      <CustomButton>About me</CustomButton>
      <CustomButton aria-controls={open ? "basic-menu" : undefined} aria-haspopup="true" aria-expanded={open ? "true" : undefined} onClick={handleClick}>
        Projects
      </CustomButton>
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}>
        {projects.map((project) => (
          <CustomMenuItem key={project.value} value={project.value} onClick={handleClose}>
            {project.name}
          </CustomMenuItem>
        ))}
      </Menu>
      <CustomButton>Contact</CustomButton>
    </div>
  );
}
