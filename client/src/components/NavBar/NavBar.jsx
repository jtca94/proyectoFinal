import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import {NavLink, Link} from "react-router-dom";
import VideogameAssetIcon from "@mui/icons-material/VideogameAsset";

const drawerWidth = 240;
const navItems = [
  {name: "Productos", path: "/productos"},
  {name: "contacto", path: "/contacto"},
  {name: "Iniciar Sesión", path: "/login"},
  {name: "Mis Compras", path: "/pedidos"},
];

function NavBar(props) {
  const {window} = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{textAlign: "center"}}>
      <VideogameAssetIcon sx={{mt: 3}} fontSize="large" />
      <Typography variant="h6" sx={{my: 2}}>
        LA TIENDITA
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item.name} disablePadding>
            <ListItemButton sx={{textAlign: "center"}}>
              <NavLink
                className={({isActive}) =>
                  isActive ? "active" : "inactiveMobile"
                }
                style={{textDecoration: "none"}}
                to={item.path}
              >
                <ListItemText primary={item.name} />
              </NavLink>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{display: "flex", mb: {xs: 7, sm: 8}}}>
      <CssBaseline />
      <AppBar component="nav">
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{mr: 2, display: {md: "none"}}}
          >
            <MenuIcon />
          </IconButton>

          <Box sx={{display: "flex", flexGrow: 1}}>
            <VideogameAssetIcon fontSize="large" sx={{mr: 3}} />
            <Link to={"/"}
                style={{textDecoration: "none"}}
            >
              <Typography
                variant="h6"
                component="div"
                sx={{display: {sm: "block"}, textDecoration: "none"}}
              >
                LA TIENDITA
              </Typography>
            </Link>
          </Box>

          <Box sx={{display: {xs: "none", md: "block"}}}>
            {navItems.map((item) => (
              <Button key={item.name} sx={{color: "#fff", px: 3}}>
                <NavLink
                  className={({isActive}) => (isActive ? "active" : "inactive")}
                  style={{textDecoration: "none"}}
                  to={item.path}
                >
                  {item.name}
                </NavLink>
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: {xs: "block", md: "none"},
            "& .MuiDrawer-paper": {boxSizing: "border-box", width: drawerWidth},
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
}

NavBar.propTypes = {
  window: PropTypes.func,
};

export default NavBar;