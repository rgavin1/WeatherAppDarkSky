import React from 'react'
import { Grid, Typography, Card } from '@mui/material';

const index: React.FC<{ title?: any }> = ({ title }) => {
    return (
        <Card className="cardContainer" style={{ marginTop: '15px', marginBottom: '15px', background: '#21242a', color: '#ffffff' }} >
            <Grid container p={2}>
                <Grid item>
                    <Typography style={{ textAlign: 'initial' }} variant='h6' component="div">
                        {title}
                    </Typography>
                </Grid>
            </Grid>
        </Card>
    )
}

export default index