import React, { useState } from "react";
import Logo from "../../assets/logo.png";
import { Box, Divider, Typography, Button, IconButton, Drawer, List, ListItem, ListItemButton, ListItemText } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useNavigate, useLocation } from "react-router-dom";


const drawerWidth = 240;
const navItems = ["Home", "Products", "About", "Contact"];

function Header() {
  const navigate = useNavigate();
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prev) => !prev);
  };

  // Sidebar Drawer for Mobile View
  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2, fontFamily: "Poppins, sans-serif", }}>
        ESSENTIA
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => {
          const path = item === "Home" ? "/" : `/${item.toLowerCase()}`;
          const isActive = location.pathname === path;

          return (
            <ListItem key={item} disablePadding>
              <ListItemButton
                onClick={() => navigate(path)}
                sx={{
                  color: isActive ? "white" : "rgb(30, 58, 138)",
                  backgroundColor: isActive ? "rgb(96, 165, 250)" : "transparent",
                  textTransform: "capitalize",
                  fontFamily: "Poppins, sans-serif",
                  fontSize: { xs: "12px", sm: "14px", md: "16px", lg: "16px" },
                  "&:hover": {
                    color:"rgb(30, 58, 138)",
                    backgroundColor: "rgba(96, 165, 250, 0.3)", 
                  },
                }}
              >
                <ListItemText primary={item} />
              </ListItemButton>
            </ListItem>
          );
        })}
      </List>
    </Box>
  );

  return (
    <div className="flex flex-row bg-white w-full items-center px-4 shadow-lg">
      {/* Logo */}
      <div className="flex h-20 p-2">
        {/* Mobile Menu Button */}
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={handleDrawerToggle}
          sx={{ display: { md: "none" }, color: "rgb(30, 58, 138)" }}
        >
          <MenuIcon />
        </IconButton>
        <img src={Logo} alt="Logo" className="h-full" />
      </div>

      {/* Title */}
      <Typography
        component="div"
        sx={{
          fontFamily: "Poppins, sans-serif",
          fontSize: { xs: "16px", sm: "18px", md: "20px", lg: "22px" },
          marginRight: 5
        }}
        className="text-blue-900"
      >
        ESSENTIA
      </Typography>

      {/* Navigation Links (Hidden in Mobile) */}
      <Box sx={{ display: { xs: "none", md: "block" } }}>
        {navItems.map((item) => {
          const path = item === "Home" ? "/" : `/${item.toLowerCase()}`;
          const isActive = location.pathname === path;

          return (
            <Button
              key={item}
              sx={{
                color: isActive ? "white" : "rgb(30, 58, 138)",
                backgroundColor: isActive ? "rgb(96, 165, 250)" : "transparent", 
                textTransform: "capitalize",
                marginRight:2,
                fontFamily: "Poppins, sans-serif",
                fontSize: { xs: "12px", sm: "14px", md: "16px", lg: "16px" },
                "&:hover": {
                  color:"rgb(30, 58, 138)",
                  backgroundColor: "rgba(96, 165, 250, 0.3)", 
                },
              }}
              onClick={() => navigate(path)}
            >
              {item}
            </Button>
          );
        })}
      </Box>

      {/* Spacer to push button to right */}
      <div className="flex-grow"></div>

      {/* Login Button */}
      <div>
        <IconButton
          sx={{ color: "rgb(30, 58, 138)" }}
          onClick={() => navigate('/cart')}
        >
          <ShoppingCartIcon />
        </IconButton>
        <Button
          variant="contained"
          sx={{
            height: "fit-content",
            fontFamily: "Poppins, sans-serif",
            fontSize: { xs: "12px", sm: "14px", md: "16px", lg: "16px" },
          }}
          className="!bg-blue-900 hover:!bg-blue-400"
          onClick={() => navigate("/login")}
        >
          Login
        </Button>
      </div>

      {/* Mobile Sidebar Drawer */}
      <nav>
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{ keepMounted: true }}
          sx={{
            display: { xs: "block", md: "none" },
            "& .MuiDrawer-paper": { boxSizing: "border-box", width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    </div>
  );
}

export default Header;
