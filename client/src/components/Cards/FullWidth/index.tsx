import React from 'react'
import { Grid, Typography, Card } from '@mui/material';

const index: React.FC<{ data?: any }> = ({ data }) => {
    function convertUTCDateToLocalDate(unix_timestamp: any) {
        var date = new Date(unix_timestamp * 1000);
        return `Last updated: ${date}`;
    }
    return (
        <Card className="cardContainer" style={{ background: '#36373ae8', color: '#ededed', marginTop: '15px', marginBottom: '15px' }}>
            <Grid container p={2}>
                <Grid item>
                    <Typography style={{ textAlign: 'initial' }} variant='h4' component="div">
                        {data?.name}
                    </Typography>
                    <Typography variant='subtitle2' component="span">
                        {convertUTCDateToLocalDate(data?.dt)}
                    </Typography>
                </Grid>
            </Grid>
        </Card>
    )
}

export default index