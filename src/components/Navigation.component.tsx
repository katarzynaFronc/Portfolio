import * as React from "react";
import "../assets/sass/style.css";
import { CustomButton } from "./CustomButton.component";
import { CustomMenu, CustomMenuItem } from "./CustomMenu.component";
import { useNavigate } from "react-router-dom";
import projects from "../api/db.json";

export default function Navigation() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const navigate = useNavigate();

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleMenuClose = (projectId: number) => {
    const project = projects.find((p) => p.id === projectId);
    navigate(`/projectPage/${projectId}`, { state: { project } });
    setAnchorEl(null);
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 0);
  };

  return (
    <div className="menu-container">
      <CustomButton>About me</CustomButton>
      <CustomButton aria-controls={open ? "basic-menu" : undefined} aria-haspopup="true" aria-expanded={open ? "true" : undefined} onClick={handleClick}>
        Projects
      </CustomButton>
      <CustomMenu
        anchorEl={anchorEl}
        open={open}
        onClick={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}>
        {projects.map((project) => (
          <CustomMenuItem key={project.id} value={project.id} onClick={() => handleMenuClose(project.id)}>
            {project.name}
          </CustomMenuItem>
        ))}
      </CustomMenu>
      <CustomButton>Contact</CustomButton>
    </div>
  );
}
