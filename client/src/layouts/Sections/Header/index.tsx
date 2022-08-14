import React from 'react'
import { AppBar, Typography } from '@mui/material';

const Header: React.FC = () => {
    return (
        <AppBar position="static" style={{ padding: '15px', textAlign: 'initial' }}>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                Weather Dashboard
            </Typography>
        </AppBar>
    )
}

export default Header