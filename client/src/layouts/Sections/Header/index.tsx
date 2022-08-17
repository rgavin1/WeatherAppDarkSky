import React, { useState, useEffect, useCallback } from 'react'
import { AppBar, Typography, Grid, TextField, Stack, Autocomplete } from '@mui/material';
import axios from 'axios';
import debounce from 'lodash.debounce';
import { getCountryFlag } from '../../../helpers/functions';
import { ResponseData } from '../../../helpers/types';

const API_KEY = process.env.REACT_APP_OPEN_WEATHER_API_KEY

const Header: React.FC<{ setCurrentWeatherForCountry: (data: ResponseData) => void, setWeatherForecast: (data: any) => void; }> = ({ setCurrentWeatherForCountry, setWeatherForecast }) => {
    const [query, setQuery] = useState("");
    const [selectedCity, setSelectedCity] = useState<ResponseData | null>(null)
    const [searchedCities, setSearchedCities] = useState<ResponseData[]>([])

    // FIXME: DONE
    useEffect(() => {
        if ("geolocation" in navigator) {
            navigator.geolocation.getCurrentPosition(async position => {
                await fetchCityByCoordinates(position.coords.latitude, position.coords.longitude)
            });
        } else {
            console.log("Not Available");
        }
    }, [])

    useEffect(() => {
        (async () => {
            if (query !== "") {
                await fetchCityByName()
            }
        })()
    }, [query])

    const fetchCityByCoordinates = async (latitude: number, longitude: number) => {
        try {
            const { data } = await axios.get(`http://api.openweathermap.org/geo/1.0/reverse?lat=${latitude}&lon=${longitude}&limit=20&appid=${API_KEY}`)
            setSearchedCities(data)
        } catch (error) {
            console.log("Error: ", error)
        }
    }


    const fetchCityByName = async () => {
        try {
            const { data } = await axios.get(`http://api.openweathermap.org/geo/1.0/direct?q=${query}&limit=50&appid=${API_KEY}`)
            setSearchedCities(data)
        } catch (error) {
            console.log("Error: ", error)
        }
    }

    const getFiveDayForecastByCoords = (country: ResponseData | null) => {
        (async () => {
            try {
                const { data } = await axios.get(`https://api.openweathermap.org/data/2.5/forecast?lat=${country?.lat}&lon=${country?.lon}&cnt=5&appid=${API_KEY}`)
                console.log('data', data)
                setWeatherForecast(data)
            } catch (error) {
                console.log('error', error)
            }
        })()
    }

    const callTheBackendForCountryData = (country: ResponseData | null) => {
        (async () => {
            try {
                const { data } = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${country?.lat}&lon=${country?.lon}&appid=${API_KEY}`)
                setCurrentWeatherForCountry(data)
            } catch (error) {
                console.log('Error', error)
            }
        })()
    }

    const handleUserInput = async (input: string) => setQuery(input);
    const debouncedChangehandler = useCallback(debounce(handleUserInput, 300), [query])

    return (
        <AppBar position="static" style={{ padding: '15px', textAlign: 'initial', marginBottom: '25px', background: '#484848' }}>
            <Grid container>
                <Grid item xs={8} style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        Weather Dashboard
                    </Typography>
                </Grid>
                <Grid item xs={4}>
                    <Stack direction="row">
                        <Autocomplete value={selectedCity}
                            onChange={(event: any, newValue: ResponseData | null) => {
                                setSelectedCity(newValue);
                                callTheBackendForCountryData(newValue)
                                getFiveDayForecastByCoords(newValue)
                            }} fullWidth options={searchedCities} getOptionLabel={(option) => `${option.name}, ${option.state} (${option.country}) ${getCountryFlag(option.country)}`} renderInput={(params) => <TextField {...params} label="City" value={query} onChange={(e) => debouncedChangehandler(e.target.value)} />} />
                    </Stack>
                </Grid>
            </Grid>
        </AppBar>
    )
}

export default Header