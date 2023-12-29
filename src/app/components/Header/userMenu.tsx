'use client'

import { useSession } from 'next-auth/react';
import * as React from 'react';
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Tooltip from "@mui/material/Tooltip";
import Typography from "@mui/material/Typography";
import { useRouter } from "next/navigation";
import { signOut } from "next-auth/react";


export default function UserMenu() {
    const { data: session } = useSession();    
    const settings = ['Profile', 'Logout'];
    const router = useRouter();
    const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);  

    const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
      setAnchorElUser(event.currentTarget);
    };
  
    async function logout(){
      await signOut({
          redirect: false
      });
      router.replace('/login')
    }
    
    const handleCloseUserMenu = (event: React.MouseEvent<HTMLElement>) => {
      const usersActionChoiced = event.currentTarget.getAttribute("value");
      switch (usersActionChoiced) {
        case settings[0]:
          console.log(settings[0]);
          break;
        case settings[1]:
          console.log(settings[1]);
          break;
        case settings[2]:
          console.log(settings[2]);
          break;
        case settings[3]:
          logout()
          break;
        default:
          console.log("No definition!")
      }
      setAnchorElUser(null);
    };

    if (!session)
        return null
    
    return (
        <Box>
            <Box sx={{ flexGrow: 0 }}>
                <Tooltip title="Open settings">
                    <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                        <Avatar>HC</Avatar>
                    </IconButton>
                </Tooltip>
                <Menu
                    sx={{ mt: '45px' }}
                    id="menu-appbar"
                    anchorEl={anchorElUser}
                    anchorOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                    }}
                    keepMounted
                    transformOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                    }}
                    open={Boolean(anchorElUser)}
                    onClose={handleCloseUserMenu}
                    >
                    {settings.map((setting) => (
                        <MenuItem key={setting} value={setting} onClick={handleCloseUserMenu}>
                        <Typography color="#30f504" textAlign="center">{setting}</Typography>
                        </MenuItem>
                    ))}
                </Menu>
            </Box>
      </Box>
    )
}