import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import {
  AppBar,
  Box,
  ThemeProvider,
  Typography,
  Toolbar,
  Link,
  Divider
} from "@mui/material";

const Navigation = (props: {currPage: number}) => {
  const labels: string[] = ["Home", "Kalkulator", "Kecermatan", "Login", "Register"];
  const path: string[] = ["/", "/Calculator", "/Test_Kecermatan", "/Login", "/Register"];

  const [currentPage, setCurrentPage] = useState(props.currPage);
  const onLinkClick = (currPage: number) => {
    console.info("I'm a button." + currentPage); 
    setCurrentPage(currPage)
  }

  return (
    <Box
      sx={{
        margin: 0,
        top: 0,
        left: 0,
        width: "100vw",
      }}
    >
      <AppBar elevation={0}>
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
            paddingLeft: "64px",
            background: "white",
          }}
        >
          <Box>
            <Typography variant="h6" color={"black"}>
              PoliceCourse
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              width: "400px",
              marginRight: "32px",
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
    { props.label === "Login" &&  <Divider orientation="vertical" variant="middle" sx={{ height: "24px" }}/> }
    <Box
      sx={{
        ...(props.currentPage === props.index && {
          backgroundColor: "#ffca28",
          borderRadius: "10px",
          paddingX: "5px",
          marginX: "5px",
          display: "inline-block"        
        }),
        display: "flex",
        paddingY: "3px",
      }}
    >
      <Link
        href={ props.path }
        color={props.currentPage === props.index ? "#ffffff" : "black"}
        underline="none"
        onClick={() => { 
          props.onLinkClick(props.index);
          console.info("I'm a button."); 
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
