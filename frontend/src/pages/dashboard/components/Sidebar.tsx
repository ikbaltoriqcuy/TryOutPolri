import React, { useState } from "react";
import {
  Box,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  Link,
  Avatar,
  Typography,
  Divider
} from "@mui/material";
import DashboardIcon from '@mui/icons-material/Dashboard';
import QuizIcon from "@mui/icons-material/Quiz";
import Logout from "@mui/icons-material/Logout";
import { removeCache, CACHE_KEY } from "../../../cache/CacheUtils";
import { useNavigate } from "react-router-dom";

interface NavItem {
  text: string;
  icon: React.ReactElement;
  notify?: boolean;
}

const Sidebar = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const Items = [
    {
      text: "Dashboard",
      icon: <DashboardIcon sx={{ height: 25 }} />,
      notifiy: false,
      link: "/dashboard",
    },
    {
      text: "Test Kecermatan",
      icon: <QuizIcon sx={{ height: 25 }} />,
      notifiy: false,
      link: "/dashboard/test_kecermatan",
    },
    { text: "Logout", icon: <Logout sx={{ height: 25 }}/>, notifiy: false, link: "/Login" },
  ];
  const navigate = useNavigate();

  return (
    <Drawer variant="permanent" anchor="left">
      <Box
        sx={{
          width: 200,
          borderRadius: "0px 4px 4px 0px",
          backgroundColor: "#131414",
          color: "#fff",
          height: "100vh",
          padding: 1,
          boxSizing: "border-box",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            padding: "16px",
            borderRadius: "12px",
            marginBottom: "24px",
            width: "fit-content",
          }}
        >
          <Avatar
            sx={{
              backgroundColor: "#6C63FF",
              width: 30,
              height: 30,
            }}
          />
          <Typography
            variant="body2"
            sx={{ marginLeft: "16px", fontWeight: 500, color: "#FFF" }}
          >
            Police Course
          </Typography>
        </Box>
        <List>
          {Items.map((item, index) => (
            <Link
              onClick={(e) => {
                if (item.text == "Logout") {
                  removeCache(CACHE_KEY);
                }
                navigate(item.link);
              }}
              underline="none"
            >
              <ListItem
                button
                key={item.text}
                sx={{
                  ...(item.notifiy === true && {
                    borderRadius: "5px",
                    backgroundColor:
                      selectedIndex === index ? "#FFF" : "transparent",
                    color: ""
                  }),
                  "&:hover": {
                    backgroundColor: "#555", // Highlight on hover
                  },
                  marginBottom: "16px"
                }}
              >
                <ListItemIcon sx={{ color: "#fff"}}>{item.icon}</ListItemIcon>
                <Typography variant="body2" color="white" >
                  {item.text}
              </Typography>
              </ListItem>
            </Link>
          ))}
        </List>
      </Box>
    </Drawer>
  );
};

export default Sidebar;
