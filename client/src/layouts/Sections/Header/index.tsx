import React, { useState } from 'react'
import { AppBar, Typography, Grid, TextField, Button, Stack, Autocomplete } from '@mui/material';
import axios from 'axios';
import { countries } from '../../../helpers/countries';

// require('dotenv').config();

const API_KEY = "";

const Header: React.FC = () => {
    const [value, setValue] = useState("");
    const [searchedCountries, setSearchedCountries] = useState<any[]>([]);

    const searchCountry = async () => {
        try {
            const { data } = await axios.get(`http://api.openweathermap.org/geo/1.0/direct?q=${value}&limit=50&appid=${API_KEY}`)
            setSearchedCountries(data)
        } catch (error) {
            console.log("Error: ", error)
        }
    }

    // console.log('selectedCountry', selectedCountry)
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
                        <Autocomplete options={[countries]} renderInput={(params) => <TextField {...params} label="Country" />} />
                        <Button onClick={searchCountry} variant="contained">Search</Button>
                    </Stack>
                </Grid>
            </Grid>
        </AppBar>
    )
}

export default Header