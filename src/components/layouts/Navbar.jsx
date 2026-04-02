import { useState } from "react";
import {
    AppBar,
    Toolbar,
    Button,
    Box,
    Menu,
    MenuItem,
    Drawer,
    IconButton,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";

export default function Navbar() {
    const [anchorEl, setAnchorEl] = useState(null);
    const [mobileOpen, setMobileOpen] = useState(false);

    const handleOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const toggleDrawer = () => {
        setMobileOpen(!mobileOpen);
    };

    return (
        <>
            <AppBar
                position="fixed"
                elevation={0}
                sx={{
                    background: "rgba(255,255,255,0.8)",
                    backdropFilter: "blur(10px)",
                    borderBottom: "1px solid rgba(0,0,0,0.08)",
                }}
            >
                <Toolbar
                    sx={{
                        maxWidth: "1200px",
                        width: "100%",
                        mx: "auto",
                        display: "flex",
                    }}
                >
                    {/* LOGO */}
                    <Box
                        component={Link}
                        to="/"
                        sx={{ display: "flex", alignItems: "center" }}
                    >
                        <Box
                            component="img"
                            src="/encode-studio-logo-web.png"
                            alt="Encode Studio"
                            sx={{ height: 40 }}
                        />
                    </Box>

                    {/* CENTER MENU (DESKTOP) */}
                    <Box
                        sx={{
                            flex: 1,
                            display: { xs: "none", md: "flex" },
                            justifyContent: "center",
                            gap: 2,
                        }}
                    >
                        <Button component={Link} to="/">Home</Button>

                        <Button component={Link} to="/services">
                            Services
                        </Button>

                        <Button onClick={handleOpen}>
                            Products
                        </Button>

                        <Menu
                            anchorEl={anchorEl}
                            open={Boolean(anchorEl)}
                            onClose={handleClose}
                        >
                            <MenuItem
                                component={Link}
                                to="/products/encode-campus"
                                onClick={handleClose}
                            >
                                Encode Campus
                            </MenuItem>

                            <MenuItem
                                component={Link}
                                to="/products/encode-verify"
                                onClick={handleClose}
                            >
                                Encode Verify
                            </MenuItem>
                        </Menu>

                        <Button component={Link} to="/about">
                            About
                        </Button>

                        <Button component={Link} to="/contact">
                            Contact
                        </Button>
                    </Box>

                    {/* CTA BUTTON (DESKTOP) */}
                    <Button
                        component={Link}
                        to="/contact"
                        variant="contained"
                        sx={{
                            display: { xs: "none", md: "block" },
                            background: "#3FA9F5",
                            color: "#fff",
                            borderRadius: "8px",
                            fontWeight: "bold",
                            "&:hover": {
                                background: "#2f8ad9",
                            },
                        }}
                    >
                        Get Started
                    </Button>

                    {/* HAMBURGER ICON (MOBILE) */}
                    <IconButton
                        sx={{ display: { xs: "block", md: "none" }, ml: "auto" }}
                        onClick={toggleDrawer}
                    >
                        <MenuIcon />
                    </IconButton>
                </Toolbar>
            </AppBar>

            {/* MOBILE DRAWER */}
            <Drawer
                anchor="right"
                open={mobileOpen}
                onClose={toggleDrawer}
                sx={{
                    "& .MuiDrawer-paper": {
                        width: 260,
                        padding: "20px",
                        background: "rgba(255,255,255,0.95)",
                        backdropFilter: "blur(10px)",
                    },
                }}
            >
                <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
                    <Button component={Link} to="/" onClick={toggleDrawer}>
                        Home
                    </Button>

                    <Button component={Link} to="/services" onClick={toggleDrawer}>
                        Services
                    </Button>

                    <Button component={Link} to="/products/encode-campus" onClick={toggleDrawer}>
                        Encode Campus
                    </Button>

                    <Button component={Link} to="/products/encode-verify" onClick={toggleDrawer}>
                        Encode Verify
                    </Button>

                    <Button component={Link} to="/about" onClick={toggleDrawer}>
                        About
                    </Button>

                    <Button component={Link} to="/contact" onClick={toggleDrawer}>
                        Contact
                    </Button>

                    <Button
                        variant="contained"
                        component={Link}
                        to="/contact"
                        onClick={toggleDrawer}
                        sx={{
                            mt: 2,
                            background: "#3FA9F5",
                            "&:hover": {
                                background: "#2f8ad9",
                            },
                        }}
                    >
                        Get Started
                    </Button>
                </Box>
            </Drawer>
        </>
    );
}