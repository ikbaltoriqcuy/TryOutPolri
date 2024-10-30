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
import { useTheme } from "@mui/material/styles";
import logo from '/images/logo.png'; // Ganti dengan path logo-mu

const Navigation = (props: { currPage: number }) => {
  const labels: string[] = ["Home", "Kalkulator", "Kecermatan", "Login", "Register"];
  const path: string[] = ["/", "/Calculator", "/Test_Kecermatan", "/Login", "/Register"];
  
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm")); // Cek ukuran layar
  const [currentPage, setCurrentPage] = useState(props.currPage);
  
  const [openDrawer, setOpenDrawer] = useState(false); // State untuk drawer

  const onLinkClick = (currPage: number) => {
    setCurrentPage(currPage);
  };

  const toggleDrawer = (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
    setOpenDrawer(open); // Mengatur drawer terbuka atau tertutup
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
          {/* Logo dan Teks PoliceCourse */}
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <img
              src={logo} // Logo
              alt="Logo"
              style={{ width: "40px", height: "40px", marginRight: "10px" }}
            />
            <Typography variant="h6" color={"white"}>
              PoliceCourse
            </Typography>
          </Box>

          {/* Menu Responsif */}
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
              {/* Drawer untuk perangkat mobile */}
              <Drawer
                anchor="right"
                open={openDrawer}
                onClose={toggleDrawer(false)} // Tutup drawer saat di-klik di luar
              >
                <Box
                  sx={{ width: 250 }}
                  role="presentation"
                  onClick={toggleDrawer(false)} // Tutup drawer saat item di klik
                  onKeyDown={toggleDrawer(false)}
                >
                  <List>
                    {labels.map((label, index) => (
                      <ListItem button key={label} component="a" href={path[index]}>
                        <ListItemText primary={label} />
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
        <Divider orientation="vertical" variant="middle" sx={{ height: "24px" }} />
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
