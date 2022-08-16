import React from 'react'
import { Card, CardContent, Typography, Grid, Stack } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWind } from '@fortawesome/free-solid-svg-icons'
import GaugeChart from 'react-gauge-chart'
import { toMilePerHour, toCardinalDirection } from '../../../../helpers/functions';


const index: React.FC<{ speed: number; deg: number }> = ({ speed, deg }) => {
    return (
        <Card id="wind-gauge" className="cardContainer1" sx={{ minWidth: 214 }} style={{ background: '#21242a', color: '#ffffff' }}>
            <CardContent>
                <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: "solid 5px #171a21", padding: '5px 15px' }}>
                    <Typography>
                        WIND
                    </Typography>
                    <Typography component="div">
                        <FontAwesomeIcon icon={faWind} />
                    </Typography>
                </div>
                <Grid container style={{ paddingTop: '5px', paddingBottom: '5px' }}>
                    <Grid item xs={6}>
                        <GaugeChart id="wind-gauge-chart1" formatTextValue={(value: number) => value + "mph"} nrOfLevels={45} textColor="#ffffff" percent={toMilePerHour(speed)} />
                    </Grid>
                    <Grid item xs={6} style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center'
                    }} >
                        <Stack direction="row" justifyContent="center">
                            <Typography component="div" variant="h2">
                                {deg}°
                            </Typography>
                            <Typography component="div" variant="h2">
                                {toCardinalDirection(deg)}
                            </Typography>
                        </Stack>
                    </Grid>
                </Grid>
            </CardContent>
        </Card >
    )
}

export default index