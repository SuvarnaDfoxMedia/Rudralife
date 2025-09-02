import React from "react";
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Container,
  Button,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Menu,
  MenuItem,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import {
  Menu as MenuIcon,
  Phone,
  Email,
  Facebook,
  LinkedIn,
  Instagram,
  YouTube,
  ExpandMore,
  Close,
} from "@mui/icons-material";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [menuId, setMenuId] = React.useState(null);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleMenuOpen = (event, id) => {
    setAnchorEl(event.currentTarget);
    setMenuId(id);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    setMenuId(null);
  };

  const drawer = (
    <Box sx={{ width: 250 }} onClick={handleDrawerToggle}>
        {/* Close Icon */}
    <Box sx={{ display: "flex", justifyContent: "flex-end", p: 1 }}>
      <IconButton onClick={handleDrawerToggle}>
        <Close />
      </IconButton>
    </Box>
      <List>
        {[
          "About Us",
          "Services",
          "Healthcare Specialist",
          "Resources",
          "Contact Us",
        ].map((text) => (
          <ListItem button key={text}>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <div>
      {/* Top Blue Bar */}
      <AppBar
        position="static"
        sx={{ backgroundColor: "#007fa3", padding: "5px 0" }}
      >
        <Container maxWidth="lg">
          <Toolbar
            sx={{
              justifyContent: "space-between",
              minHeight: "40px!important",
            }}
          >
            <Box
              sx={{
                display: { xs: "block", sm: "flex" },
                alignItems: "center",
                gap: { xs: 1, sm: 2 },
                ml: "auto",
                textAlign: { xs: "center", sm: "inherit" },
              }}
            >
              <Box display="flex" alignItems="center" gap={2}>
                <Box display="flex" alignItems="center" gap={0.5}>
                  <Phone fontSize="small" />
                  <Typography
                    variant="body2"
                    sx={{ fontSize: { xs: "13px", sm: "13px", md: "16px" } }}
                  >
                    +91 7977669727
                  </Typography>
                </Box>
                <Box display="flex" alignItems="center" gap={0.5}>
                  <Email fontSize="small" />
                  <Typography
                    variant="body2"
                    sx={{ fontSize: { xs: "13px", sm: "13px", md: "16px" } }}
                  >
                    info@medigodigital.com
                  </Typography>
                </Box>
              </Box>

              <Box>
                <IconButton size="small" color="inherit">
                  <Facebook />
                </IconButton>
                <IconButton size="small" color="inherit">
                  <LinkedIn />
                </IconButton>
                <IconButton size="small" color="inherit">
                  <Instagram />
                </IconButton>
                <IconButton size="small" color="inherit">
                  <YouTube />
                </IconButton>
              </Box>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>

      {/* Main Navbar */}
      <AppBar position="static" color="default" elevation={0}>
        <Container maxWidth="lg">
          <Toolbar disableGutters sx={{ justifyContent: "space-between" }}>
            {/* Logo Section */}
            <Box display="flex" alignItems="center" gap={1}>
              <img
                src="/images/medigo-logo.webp"
                alt="Logo"
                width="200px"
                height="auto"
              />
            </Box>

            {/* Desktop Menu with Dropdowns */}
            {!isMobile && (
              <Box display="flex" gap={2}>
                <Button color="inherit" sx={{ fontWeight: 500 }}>
                  About Us
                </Button>

                <Button
                  color="inherit"
                  sx={{ fontWeight: 500 }}
                  endIcon={<ExpandMore />}
                  onClick={(e) => handleMenuOpen(e, "services")}
                >
                  Services
                </Button>

                <Button
                  color="inherit"
                  sx={{ fontWeight: 500 }}
                  endIcon={<ExpandMore />}
                  onClick={(e) => handleMenuOpen(e, "specialist")}
                >
                  Healthcare Specialist
                </Button>

                <Button
                  color="inherit"
                  sx={{ fontWeight: 500 }}
                  endIcon={<ExpandMore />}
                  onClick={(e) => handleMenuOpen(e, "resources")}
                >
                  Resources
                </Button>

                <Button color="inherit" sx={{ fontWeight: 500 }}>
                  Contact Us
                </Button>
              </Box>
            )}

            {/* Mobile Menu Icon */}
            {isMobile && (
              <IconButton edge="end" onClick={handleDrawerToggle}>
                <MenuIcon />
              </IconButton>
            )}
          </Toolbar>
        </Container>
      </AppBar>

      {/* Dropdown Menus with fixed width */}
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl) && menuId === "services"}
        onClose={handleMenuClose}
        anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
        transformOrigin={{ vertical: "top", horizontal: "left" }}
        PaperProps={{ sx: { width: 220 } }}
      >
        <MenuItem onClick={handleMenuClose}>Web Design</MenuItem>
        <MenuItem onClick={handleMenuClose}>SEO Services</MenuItem>
        <MenuItem onClick={handleMenuClose}>Digital Marketing</MenuItem>
      </Menu>

      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl) && menuId === "specialist"}
        onClose={handleMenuClose}
        anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
        transformOrigin={{ vertical: "top", horizontal: "left" }}
        PaperProps={{ sx: { width: 220 } }}
      >
        <MenuItem onClick={handleMenuClose}>Dentists</MenuItem>
        <MenuItem onClick={handleMenuClose}>Surgeons</MenuItem>
        <MenuItem onClick={handleMenuClose}>Therapists</MenuItem>
      </Menu>

      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl) && menuId === "resources"}
        onClose={handleMenuClose}
        anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
        transformOrigin={{ vertical: "top", horizontal: "left" }}
        PaperProps={{ sx: { width: 220 } }}
      >
        <MenuItem onClick={handleMenuClose}>Blog</MenuItem>
        <MenuItem onClick={handleMenuClose}>Case Studies</MenuItem>
        <MenuItem onClick={handleMenuClose}>FAQs</MenuItem>
      </Menu>

      {/* Mobile Drawer Menu */}
      <Drawer anchor="right" open={mobileOpen} onClose={handleDrawerToggle}>
        {drawer}
      </Drawer>
    </div>
  );
};

export default Navbar;
