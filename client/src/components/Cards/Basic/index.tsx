import React from 'react'
import { Card, CardContent, Typography } from '@mui/material';

const Basic: React.FC<{ data?: any }> = ({ data }) => {
    function kelvinToFahrenheit(kelvin: any) {
        const celsius = (kelvin - 273.15);
        const fahrenheit = (celsius * 1.8) + 32;
        return `${fahrenheit.toPrecision(2)}°F`;
    }
    return (
        <Card className="cardContainer1" style={{ background: '#36373ae8', color: '#ededed', }} sx={{ minWidth: 214 }}>
            <CardContent>
                <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: "solid 5px #000", padding: '0 15px' }}>
                    <Typography color="text.secondary">
                        TEMPERATURE
                    </Typography>
                    <Typography component="div">
                        Icon
                    </Typography>
                </div>
                <Typography component="div" variant="h2">
                    {kelvinToFahrenheit(data?.main?.temp)}
                </Typography>
            </CardContent>
        </Card>
    )
}

export default Basic