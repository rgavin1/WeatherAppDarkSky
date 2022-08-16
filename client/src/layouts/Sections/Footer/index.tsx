import React from 'react'
import { AppBar, Link } from '@mui/material';

const Footer: React.FC = () => {
    return (
        <AppBar position="static" style={{ padding: '15px', textAlign: 'initial', background: '#484848' }}>
            <Link underline="none" href="https://www.ramseygavin.dev">Built by Ramsey Gavin</Link>
            <Link underline="none" href="https://openweathermap.org/">Powered by OpenWeather API </Link>
        </AppBar>
    )
}

export default Footer