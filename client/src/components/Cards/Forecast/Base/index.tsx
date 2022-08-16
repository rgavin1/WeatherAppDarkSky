import React from 'react';
import { faSun, faUmbrella, faDroplet } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Card, CardContent, Grid, Stack, Typography } from '@mui/material';
import { kelvinToFahrenheit, toCardinalDirection } from '../../../../helpers/functions';

const index: React.FC<{ data: any, title: string, city?: any }> = ({ data, title, city }) => {
    const { main: currentWeather, weather, pop, wind } = data;
    const [weatherInformation] = weather;
    const { main, icon } = weatherInformation;
    return (
        <Card className="cardContainer1" sx={{ minWidth: 214 }} style={{ background: '#21242a', color: '#ffffff' }}>
            <CardContent>
                {/* Card Header */}
                <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: "solid 5px #171a21", padding: '5px 15px' }}>
                    <Typography style={{ fontSize: '0.65rem' }}>
                        {title.toUpperCase()}
                    </Typography>
                    <Typography component="div">
                        <FontAwesomeIcon icon={faSun} />
                    </Typography>
                </div>
                {/* Card Body */}
                <Grid container wrap='wrap'>
                    <Grid item id="weatherMinMax" xs={12}>
                        <Stack direction="row" justifyContent="space-evenly" alignItems="center" style={{ marginTop: '15px', height: '100%' }}>
                            <div style={{
                                backgroundImage: `url(http://openweathermap.org/img/w/${icon}.png)`, backgroundSize: 'contain',
                                backgroundPosition: 'center',
                                backgroundRepeat: 'no-repeat',
                                width: '40%',
                                height: '100%'
                            }} />
                            <Stack>
                                <Typography component="div" variant="h4">
                                    {kelvinToFahrenheit(currentWeather.temp_max)}
                                </Typography>
                                <Typography style={{ textAlign: "initial" }} component="div" variant="h6">
                                    {kelvinToFahrenheit(currentWeather.temp_min)}
                                </Typography>
                            </Stack>
                        </Stack>
                    </Grid>
                    <Grid item id="weatherWindRainUv" xs={12} style={{ padding: '25px' }}>
                        <Typography style={{ textAlign: "initial", marginBottom: '15px' }} component="div" variant="h4">
                            {wind.speed}<span style={{ fontSize: '14px' }}>mph</span> {toCardinalDirection(wind.deg)}
                        </Typography>
                        <Typography style={{ textAlign: "initial", marginBottom: '15px' }} component="div" variant="body1">
                            <FontAwesomeIcon icon={faUmbrella} /> {pop}%
                        </Typography>
                        <Typography style={{ textAlign: "initial", marginBottom: '15px' }} component="div" variant="body1">
                            <FontAwesomeIcon icon={faDroplet} /> {currentWeather.humidity}%
                        </Typography>
                    </Grid>
                </Grid>
                {/* Card Footer */}
                <div style={{ display: 'flex', justifyContent: 'space-between', padding: '5px 15px' }}>
                    <Typography>
                        {main}
                    </Typography>
                </div>
            </CardContent>
        </Card>
    )
}

export default index