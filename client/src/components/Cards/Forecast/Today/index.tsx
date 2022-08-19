import React from 'react';
import { faMoon, faSun, faUmbrella, faDroplet } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Card, CardContent, Grid, Stack, Typography } from '@mui/material';
import { kelvinToFahrenheit, toCardinalDirection, toTime } from '../../../../helpers/functions';


const index: React.FC<{ data: any, title: string, city?: any }> = ({ data, title, city }) => {
    const { main: currentWeather, weather, pop, wind } = data;
    const [weatherInformation] = weather;
    const { main, icon } = weatherInformation;

    const sunrise = city?.sunrise || "-";
    const sunset = city?.sunset || "-";

    const showSunsetTime = title === 'Today'
    return (
        <Card className="cardContainer1" style={{ height: '100%', background: '#131518', color: '#ffffff' }} sx={{ minWidth: 214 }}>
            <CardContent style={{
                display: 'flex',
                width: '100%',
                flexDirection: 'column',
                justifyContent: 'space-between',
                height: '100%'
            }}>
                {/* Card Header */}
                <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: "solid 5px #171a21", padding: '5px 15px' }}>
                    <Typography>
                        {title.toUpperCase()}
                    </Typography>
                    <Typography component="div">
                        <FontAwesomeIcon icon={faSun} />
                    </Typography>
                </div>
                {/* Card Body */}
                <Grid container>
                    <Grid item id="weatherMinMax" xs={6}>
                        <Stack direction="row" justifyContent="space-evenly" alignItems="center" style={{ height: '100%' }}>
                            <div style={{
                                backgroundImage: `url(http://openweathermap.org/img/w/${icon}.png)`, backgroundSize: 'contain',
                                backgroundPosition: 'center',
                                backgroundRepeat: 'no-repeat',
                                width: '100%',
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
                    <Grid item id="weatherWindRainUv" xs={6} style={{ padding: '25px' }}>
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
                    {
                        showSunsetTime &&
                        <Stack direction="row" spacing={3}>

                            <Typography component="div">
                                <FontAwesomeIcon icon={faSun} /> {toTime(sunrise)} AM
                            </Typography>
                            <Typography component="div">
                                <FontAwesomeIcon icon={faMoon} /> {toTime(sunset)} PM
                            </Typography>

                        </Stack>
                    }
                </div>
            </CardContent>
        </Card>
    )
}

export default index