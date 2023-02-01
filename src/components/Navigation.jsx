import React from 'react';
import { NavLink } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Logo from '../assets/bv-logo.png';

export default function Navigation() {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position='static'>
                <Toolbar>
                    <IconButton
                        size='large'
                        edge='start'
                        color='inherit'
                        aria-label='menu'
                        sx={{ mr: 2 }}>
                        <img src={Logo} width='70px' />
                    </IconButton>
                    <Typography
                        variant='h6'
                        component='div'
                        sx={{ flexGrow: 1 }}>
                        BukitVista-Test
                    </Typography>
                    <div className='flex gap-5 fw-bold text-lg'>
                        <NavLink to={'/'} end>
                            Home
                        </NavLink>
                        <NavLink to={'/post'} end>
                            Post
                        </NavLink>
                        <NavLink to={'/user'} end>
                            User
                        </NavLink>
                    </div>
                </Toolbar>
            </AppBar>
        </Box>
    );
}
