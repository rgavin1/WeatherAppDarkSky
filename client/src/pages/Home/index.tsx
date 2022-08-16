import React from 'react'

import { Main, WeeklyForecast } from '../../layouts'
import { Container } from '@mui/material';
import * as testData from '../../services/exampleJson.json';
import { TitleWithDate, BaseTitle } from '../../components/Dividers';

const index: React.FC = () => {
    return (
        <Container maxWidth="xl">
            <TitleWithDate data={testData} />
            <Main data={testData} />
            <BaseTitle title="Forcast 5 days" />
            <WeeklyForecast />
        </Container>
    )
}

export default index