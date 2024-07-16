import React from "react";
import Box from "@mui/material/Box";
import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Link
} from "@mui/material";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PagesIcon from "@mui/icons-material/Pages";
import MessageIcon from "@mui/icons-material/Message";
import SettingsIcon from "@mui/icons-material/Settings";
import PeopleIcon from "@mui/icons-material/People";
import HelpIcon from "@mui/icons-material/Help";
import Logout from "@mui/icons-material/Logout";

interface NavItem {
  text: string;
  icon: React.ReactElement;
  notify?: boolean;
}

const Sidebar = () => {
  const Items = [
    { text: "Profil", icon: <PeopleIcon />, notifiy: true, link: "/dashboard" },
    { text: "Test Kecermatan", icon: <PeopleIcon />, notifiy: true, link: "/dashboard/test_kecermatan" },
    { text: "Logout", icon: <Logout />, notifiy: false, link: "/dashboard/logout" },
  ];
  return (
    <Drawer variant="permanent" anchor="left">
      <Box
        sx={{
          width: 250,
          backgroundColor: "#333",
          color: "#fff",
          height: "100vh",
          padding: 2,
          boxSizing: "border-box",
        }}
      >
        <List>
          {Items.map((item, index) => (
            <Link
            href={ item.link }
            underline="none">
                <ListItem button key={item.text} sx={{
                ...(item.notifiy === true && {
                    borderRadius: "5px",
                    backgroundColor: '#444',
                    color: ''
                })
              }}>
              <ListItemIcon sx={{ color: "#fff" }}>{item.icon}</ListItemIcon>
              <ListItemText sx={{ color: "#fff" }} primary={item.text} />
            </ListItem>
            </Link>
          ))}
        </List>
      </Box>
    </Drawer>
  );
};

export default Sidebar;
