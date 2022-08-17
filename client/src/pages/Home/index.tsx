import React from 'react'

import { Main, WeeklyForecast } from '../../layouts'
import { Container } from '@mui/material';
import * as testData from '../../services/exampleJson.json';
import { TitleWithDate, BaseTitle } from '../../components/Dividers';
import { ResponseData } from '../../helpers/types';

const index: React.FC<{ currentWeatherForCountry: ResponseData | null; weatherForecast: any | null; }> = ({ currentWeatherForCountry, weatherForecast }) => {
    return (
        <Container maxWidth="xl">
            <TitleWithDate data={currentWeatherForCountry || testData} />
            <Main data={currentWeatherForCountry || testData} />
            <BaseTitle title="Forcast 5 days" />
            <WeeklyForecast {...{ weatherForecast }} />
        </Container>
    )
}

export default index