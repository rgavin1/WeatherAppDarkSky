import React from 'react'
import { Grid } from '@mui/material';
import { TodayForcastCard, BaseForcastCard } from '../../../components/Cards';
import { weeklyforecastExample } from '../../../services/exampleJson5dayforecast';
import { getCurrentDayMonth } from '../../../helpers/functions';

// TODO: Create a list to loop through
const index: React.FC<{ weatherForecast: any }> = ({ weatherForecast }) => {
    const days = weatherForecast?.list || weeklyforecastExample.list
    const city = weatherForecast?.list || weeklyforecastExample.city
    return (
        <Grid container spacing={2} columns={{ xs: 12, sm: 12, md: 12, lg: 12, xl: 12 }} style={{ marginBottom: "15px" }}>
            <Grid item xs={12} sm={12} md={8} lg={12} xl={4}>
                <TodayForcastCard title="Today" data={days[0]} city={city} />
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
                <BaseForcastCard title="Tommorrow" data={days[1]} />
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
                <BaseForcastCard title={getCurrentDayMonth(2)} data={days[2]} />
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
                <BaseForcastCard title={getCurrentDayMonth(3)} data={days[3]} />
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
                <BaseForcastCard title={getCurrentDayMonth(4)} data={days[4]} />
            </Grid>
        </Grid>
    )
}

export default index