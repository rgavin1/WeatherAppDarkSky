import React from 'react'
import { Grid } from '@mui/material';
import { TodayForcastCard, BaseForcastCard } from '../../../components/Cards';
import { weeklyforecastExample } from '../../../services/exampleJson5dayforecast';
import { getCurrentDayMonth } from '../../../helpers/functions';

// TODO: Create a list to loop through
const index: React.FC = () => {
    const days = weeklyforecastExample.list
    const city = weeklyforecastExample.city
    return (
        <Grid container direction="row"
            justifyContent="center"
            alignItems="stretch" spacing={2} style={{ marginBottom: "15px" }}>
            <Grid item xs={4}>
                <TodayForcastCard title="Today" data={days[0]} city={city} />
            </Grid>
            <Grid item xs={2}>
                <BaseForcastCard title="Tommorrow" data={days[1]} />
            </Grid>
            <Grid item xs={2}>
                <BaseForcastCard title={getCurrentDayMonth(2)} data={days[2]} />
            </Grid>
            <Grid item xs={2}>
                <BaseForcastCard title={getCurrentDayMonth(3)} data={days[3]} />
            </Grid>
            <Grid item xs={2}>
                <BaseForcastCard title={getCurrentDayMonth(4)} data={days[4]} />
            </Grid>
        </Grid>
    )
}

export default index