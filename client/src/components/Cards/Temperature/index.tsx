import React from 'react'
import { Card, CardContent, Typography } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { faTemperatureQuarter } from '@fortawesome/free-solid-svg-icons'
import { kelvinToFahrenheit } from '../../../helpers/functions';

const index: React.FC<{ temperature: number, title: string, icon?: IconProp }> = ({ temperature, title, icon }) => {
    return (
        <Card className="cardContainer1" sx={{ minWidth: 214 }} style={{ background: '#21242a', color: '#ffffff' }}>
            <CardContent>
                <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: "solid 5px #171a21", padding: '5px 15px' }}>
                    <Typography variant="subtitle2">
                        {title.toUpperCase()}
                    </Typography>
                    <Typography component="div">
                        <FontAwesomeIcon icon={icon || faTemperatureQuarter} />
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