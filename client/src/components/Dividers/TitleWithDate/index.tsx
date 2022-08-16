import React from 'react'
import { Grid, Typography, Card, Stack } from '@mui/material';
import { convertUTCDateToLocalDate, getCurrentUtcTime, getCurrentDayMonth } from '../../../helpers/functions';

const index: React.FC<{ data?: any }> = ({ data }) => {

    return (
        <Card className="cardContainer" style={{ marginTop: '15px', marginBottom: '15px', background: '#21242a', color: '#ffffff' }}>
            <Grid container p={2} justifyContent="space-between">
                <Grid item xs={6}>
                    <Typography style={{ textAlign: 'initial' }} variant='h4' component="div">
                        {data?.name}
                    </Typography>
                    <Typography variant='subtitle2' component="div" style={{ textAlign: 'initial' }}>
                        {convertUTCDateToLocalDate(data?.dt)}
                    </Typography>
                </Grid>
                <Grid item xs={6}>
                    <Stack direction="column" justifyContent="end" alignItems="right" style={{ height: '100%' }}>
                        <Typography variant='h4' component="div" style={{ textAlign: 'end' }}>
                            {getCurrentUtcTime()}
                        </Typography>
                        <Typography variant='subtitle2' component="div" style={{ textAlign: 'end' }}>
                            {getCurrentDayMonth()}
                        </Typography>
                    </Stack>
                </Grid>
            </Grid>
        </Card>
    )
}

export default index