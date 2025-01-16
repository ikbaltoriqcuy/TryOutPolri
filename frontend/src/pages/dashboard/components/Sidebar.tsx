import React, { useState } from "react";
import {
  Box,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  Link,
  Typography,
  useMediaQuery,
  IconButton,
  Toolbar,
  AppBar
} from "@mui/material";
import DashboardIcon from "@mui/icons-material/Dashboard";
import QuizIcon from "@mui/icons-material/Quiz";
import LogoutIcon from "@mui/icons-material/Logout";
import PaymentIcon from "@mui/icons-material/Payment";
import { removeCache, CACHE_KEY } from "../../../cache/CacheUtils";
import { useNavigate } from "react-router-dom";
import { useTheme } from "@mui/material/styles";
import logo from "/images/logo.png";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

interface NavItem {
  text: string;
  icon: React.ReactElement;
  link: string;
  notify?: boolean;
}

const Sidebar: React.FC = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [openDrawer, setOpenDrawer] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const navigate = useNavigate();

  const Items: NavItem[] = [
    {
      text: "Dashboard",
      icon: <DashboardIcon sx={{ height: 25 }} />,
      link: "/dashboard",
    },
    {
      text: "Test Kecermatan",
      icon: <QuizIcon sx={{ height: 25 }} />,
      link: "/dashboard/test_kecermatan",
    },
    {
      text: "Payment",
      icon: <PaymentIcon sx={{ height: 25 }} />,
      link: "/dashboard/payment",
    },
    {
      text: "Logout",
      icon: <LogoutIcon sx={{ height: 25 }} />,
      link: "/Login",
    },
  ];

  const handleDrawerToggle = () => {
    setOpenDrawer(!openDrawer);
  };

  const handleItemClick = (index: number, link: string, text: string) => {
    setSelectedIndex(index);
    if (text === "Logout") {
      removeCache(CACHE_KEY);
    }
    navigate(link);
    setOpenDrawer(false); // Close the drawer after navigation
  };

  const toggleDrawer =
  (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
    setOpenDrawer(open); 
  };

  return (
    <>
      {isMobile ? (
        <AppBar elevation={0} sx={{ backgroundColor: "#333333" }}>
          <Toolbar
            sx={{
              display: "flex",
              justifyContent: "space-between",
              paddingLeft: "16px",
              paddingRight: "16px",
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <img
                src={logo}
                alt="Logo"
                style={{ width: "50px", height: "auto", marginRight: "10px" }}
              />
              <Typography variant="h6" color="white">
                PoliceCourse
              </Typography>
            </Box>

            <IconButton
              size="large"
              edge="end"
              color="inherit"
              aria-label="menu"
              onClick={handleDrawerToggle}
            >
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
      ) : null}

      <Drawer
        anchor="left"
        open={!isMobile || openDrawer}
        onClose={handleDrawerToggle}
        variant={isMobile ? "temporary" : "persistent"} // Adjust variant for mobile/desktop
      >
        <Box
          sx={{
            width: 240,
            borderRadius: "0px 4px 4px 0px",
            backgroundColor: "#333333",
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
            <img
              src={logo}
              alt="Logo"
              style={{ width: "50px", height: "40px" }}
            />
            <Typography
              variant="body2"
              sx={{ marginLeft: "16px", fontWeight: 500, color: "#FFF" }}
            >
              Police Course
            </Typography>

            <Box>
              <IconButton
                onClick={toggleDrawer(false)}
                aria-label="close"
                sx={{
                  display: "flex",
                  alignItems: "center",
                  padding: "16px",
                  color: "white",
                  borderRadius: "12px",
                  marginBottom: "24px",
                  width: "fit-content",
                }}
              >
                <CloseIcon />
              </IconButton>
            </Box>

          </Box>
          <List>
            {Items.map((item, index) => (
              <Link
                key={index}
                onClick={() => handleItemClick(index, item.link, item.text)}
                underline="none"
                sx={{
                  color: "#FFF",
                  textDecoration: "none",
                  cursor: "pointer",
                }}
              >
                <ListItem
                  button
                  selected={selectedIndex === index}
                  sx={{
                    ...(item.notify && {
                      borderRadius: "5px",
                      backgroundColor:
                        selectedIndex === index ? "#FFF" : "transparent",
                    }),
                    "&:hover": {
                      backgroundColor: "#555",
                    },
                    marginBottom: "16px",
                  }}
                >
                  <ListItemIcon sx={{ color: "#fff" }}>
                    {item.icon}
                  </ListItemIcon>
                  <Typography variant="body2" color="white">
                    {item.text}
                  </Typography>
                </ListItem>
              </Link>
            ))}
          </List>
        </Box>
      </Drawer>
    </>
  );
};

export default Sidebar;
