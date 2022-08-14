import React from 'react'
import { Grid } from '@mui/material';
import { BasicCard } from '../../../components/Cards';

const index: React.FC = () => {
    return (
        <Grid container spacing={2} justifyContent="space-between" style={{ marginBottom: "15px" }}>
            <Grid item xs={4}>
                <BasicCard />
            </Grid>
            <Grid item xs={2}>
                <BasicCard />
            </Grid>
            <Grid item xs={2}>
                <BasicCard />
            </Grid>
            <Grid item xs={2}>
                <BasicCard />
            </Grid>
            <Grid item xs={2}>
                <BasicCard />
            </Grid>
        </Grid>
    )
}

export default index