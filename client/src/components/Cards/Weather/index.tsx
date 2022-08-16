import React from 'react'
import { Card, CardContent, Typography } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSun } from '@fortawesome/free-solid-svg-icons'

const index: React.FC<{ temperature: number, title: string }> = ({ temperature, title }) => {
    const kelvinToFahrenheit = (kelvin: number): string => {
        const celsius = (kelvin - 273.15);
        const fahrenheit = (celsius * 1.8) + 32;
        return `${fahrenheit.toPrecision(2)}°F`;
    }
    return (
        <Card className="cardContainer1" style={{ background: '#36373ae8', color: '#ededed', }} sx={{ minWidth: 214 }}>
            <CardContent>
                <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: "solid 5px #0000001c", padding: '5px 15px' }}>
                    <Typography>
                        {title.toUpperCase()}
                    </Typography>
                    <Typography component="div">
                        <FontAwesomeIcon icon={faSun} />
                    </Typography>
                </div>
                <Typography style={{ padding: '15px ' }} component="div" variant="h3">
                    {kelvinToFahrenheit(temperature)}
                </Typography>
            </CardContent>
        </Card>
    )
}

export default index