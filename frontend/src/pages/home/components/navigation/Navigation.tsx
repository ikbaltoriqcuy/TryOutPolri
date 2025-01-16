import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import {
  AppBar,
  Box,
  Typography,
  Toolbar,
  Link,
  Divider,
  IconButton,
  useMediaQuery,
  Drawer,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { useTheme } from "@mui/material/styles";
import logo from "/images/logo.png";

const Navigation = (props: { currPage: number }) => {
  const labels: string[] = [
    "Home",
    "Kalkulator",
    "Kecermatan",
    "Login",
    "Register",
  ];
  const path: string[] = [
    "/",
    "/Calculator",
    "/Test_Kecermatan",
    "/Login",
    "/Register",
  ];

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm")); // Cek ukuran layar
  const [currentPage, setCurrentPage] = useState(props.currPage);

  const [openDrawer, setOpenDrawer] = useState(false); // State untuk drawer

  const onLinkClick = (currPage: number) => {
    setCurrentPage(currPage);
  };

  const toggleDrawer =
    (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
      setOpenDrawer(open); 
    };

  return (
    <Box sx={{ margin: 0, top: 0, left: 0, width: "100vw" }}>
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
              src={logo} // Logo
              alt="Logo"
              style={{ width: "50px", height: "auto", marginRight: "10px" }}
            />
            <Typography variant="h6" color={"white"}>
              PoliceCourse
            </Typography>
          </Box>

          {!isMobile ? (
            <Box
              sx={{
                display: "flex",
                width: "400px",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              {labels.map((label, index) => (
                <LabelLink
                  key={index}
                  label={label}
                  path={path[index]}
                  index={index}
                  currentPage={currentPage}
                  onLinkClick={onLinkClick}
                />
              ))}
            </Box>
          ) : (
            // Jika Mobile, tampilkan Menu Icon
            <>
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2 }}
                onClick={toggleDrawer(true)} // Buka drawer saat klik MenuIcon
              >
                <MenuIcon />
              </IconButton>
              <Drawer
                anchor="left"
                open={openDrawer}
                onClose={toggleDrawer(false)} // Tutup drawer saat di-klik di luar
              >
                <Box
                  sx={{
                    width: 250,
                    backgroundColor: "#333333",
                    height: "100%",
                  }}
                  role="presentation"
                  onClick={toggleDrawer(false)} // Tutup drawer saat item di klik
                  onKeyDown={toggleDrawer(false)}
                >
                  <List>
                    <Box sx={{
                                display: "flex",
                                alignItems: "center",
                                padding: "16px",
                                borderRadius: "12px",
                                marginBottom: "24px",
                                width: "fit-content",
                    }}>
                      <img
                        src={logo}
                        alt="Logo"
                        style={{ width: "50px", height: "40px" }}
                      />
                      <Typography
                        variant="body2"
                        sx={{
                          marginLeft: "16px",
                          fontWeight: 500,
                          color: "#FFF",
                        }}
                      >
                        Police Course
                      </Typography>

                      <IconButton
                        onClick={toggleDrawer(false)}
                        aria-label="close"
                        sx={{ color: "white", padding: "8px", marginLeft:"32px" }}
                      >
                        <CloseIcon />
                      </IconButton>
                    </Box>

                    {labels.map((label, index) => (
                      <ListItem
                        button
                        key={label}
                        component="a"
                        href={path[index]}
                      >
                        <ListItemText sx={{ color: "white" }} primary={label} />
                      </ListItem>
                    ))}
                  </List>
                </Box>
              </Drawer>
            </>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
};

const LabelLink = (props: {
  label: string;
  path: string;
  index: number;
  currentPage: number;
  onLinkClick: any;
}) => {
  return (
    <>
      {props.label === "Login" && (
        <Divider
          orientation="vertical"
          variant="middle"
          sx={{ height: "24px" }}
        />
      )}
      <Box
        sx={{
          ...(props.currentPage === props.index && {
            backgroundColor: "rgba(255, 255, 255, 0.10)",
            borderRadius: "10px",
            paddingX: "5px",
            marginX: "5px",
            display: "inline-block",
          }),
          display: "flex",
          paddingY: "3px",
        }}
      >
        <Link
          href={props.path}
          color={props.currentPage === props.index ? "#ffffff" : "white"}
          underline="none"
          onClick={() => {
            props.onLinkClick(props.index);
          }}
          sx={{
            paddingX: "16px",
          }}
        >
          {props.label}
        </Link>
      </Box>
    </>
  );
};

export default Navigation;
