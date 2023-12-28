
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Tooltip from "@mui/material/Tooltip";
import Typography from "@mui/material/Typography";
import React from "react";


interface userMenuData {
    anchorElNav: any;
    anchorElUser: any;
    handleOpenNavMenu: (event: React.MouseEvent<HTMLElement>) => void;
    handleOpenUserMenu: (event: React.MouseEvent<HTMLElement>) => void;
    handleCloseUserMenu: (event: React.MouseEvent<HTMLElement>) => void;
    settings: Array<string>;
}

export default function UserMenu(props: userMenuData) {    
    return (
        <Box>
            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={props.handleOpenNavMenu}
                color="inherit"
                >
                </IconButton>
            </Box>

            <Box sx={{ flexGrow: 0 }}>
                <Tooltip title="Open settings">
                <IconButton onClick={props.handleOpenUserMenu} sx={{ p: 0 }}>
                    <Avatar alt="Hilton Costa" src="/static/images/avatar/2.jpg" />
                </IconButton>
                </Tooltip>
                <Menu
                sx={{ mt: '45px' }}
                id="menu-appbar"
                anchorEl={props.anchorElUser}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                open={Boolean(props.anchorElUser)}
                onClose={props.handleCloseUserMenu}
                >
                {props.settings.map((setting) => (
                    <MenuItem key={setting} value={setting} onClick={props.handleCloseUserMenu}>
                    <Typography color="#30f504" textAlign="center">{setting}</Typography>
                    </MenuItem>
                ))}
                </Menu>
            </Box>
      </Box>
    )
}