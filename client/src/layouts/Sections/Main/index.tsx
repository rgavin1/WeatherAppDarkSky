import React from 'react'
import { Grid } from '@mui/material'
import { BasicCard } from '../../../components/Cards'

const currentWeatherCards = [
  {
    title: "temp",
    icon: "",
    content: "20",
    unit_of_measure: "°C"
  },
  {
    title: "feels_like",
    icon: "",
    content: "20",
    unit_of_measure: "°C"
  },
  {
    title: "pressure",
    icon: "",
    content: "20",
    unit_of_measure: "°C"
  },
  {
    title: "humidity",
    icon: "",
    content: "50",
    unit_of_measure: "%"
  },
]

const Main: React.FC<{ data?: any }> = ({ data }) => {
  return (
    <Grid container direction="row" justifyContent="space-between">
      <Grid container xs={12} spacing={2} justifyContent="space-between" style={{ marginBottom: "15px" }}>
        <Grid item zeroMinWidth xs={4}>
          {/* TODO: Create another card */}
          <BasicCard />
        </Grid>
        <Grid item zeroMinWidth xs={4}>
          <BasicCard />
        </Grid>
        <Grid item zeroMinWidth xs={4}>
          <BasicCard />
        </Grid>
      </Grid>
      <Grid container xs={6} spacing={2} justifyContent="space-between">
        <Grid item zeroMinWidth xs={6}>
          <BasicCard data={data} />
        </Grid>
        <Grid item zeroMinWidth xs={6}>
          <BasicCard />
        </Grid>
        <Grid item zeroMinWidth xs={6}>
          <BasicCard />
        </Grid>
        <Grid item zeroMinWidth xs={6}>
          <BasicCard />
        </Grid>
      </Grid>
      <Grid container xs={6} spacing={2} justifyContent="space-between">
        <Grid item zeroMinWidth xs={8}>
          <BasicCard />
        </Grid>
        <Grid item zeroMinWidth xs={4}>
          <BasicCard />
        </Grid>
        <Grid item zeroMinWidth xs={12}>
          <BasicCard />
        </Grid>
      </Grid>
    </Grid>
  )
}

export default Main