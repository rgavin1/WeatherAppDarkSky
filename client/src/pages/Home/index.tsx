import React from 'react'
import { FullWidth } from '../../components/Cards'
import { Main, WeeklyForecast } from '../../layouts'
import { Container } from '@mui/material';
import * as testData from '../../services/exampleJson.json';

const index: React.FC = () => {
    return (
        <Container maxWidth="xl">
            <FullWidth data={testData} />
            <Main data={testData} />
            <FullWidth />
            <WeeklyForecast />
        </Container>
    )
}

export default index