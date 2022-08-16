import React from 'react'
import { Grid } from '@mui/material'
import { TemperatureCard, WindGaugeCard } from '../../../components'
import { faPerson, faTemperatureHigh, faTemperatureLow } from '@fortawesome/free-solid-svg-icons'

const Main: React.FC<{ data?: any }> = ({ data }) => {
  return (
    <Grid container direction="row" justifyContent="space-between" style={{ height: '100%', alignItems: "stretch" }}>
      {/* Left Column */}
      <Grid container xs={4} spacing={1} justifyContent="space-between" style={{ height: '100%', alignItems: "stretch" }}>
        <Grid item zeroMinWidth xs={6} style={{ height: '100%', alignItems: "stretch" }}>
          <TemperatureCard temperature={data?.main?.temp} title="Temperature" />
        </Grid>
        <Grid item zeroMinWidth xs={6}>
          <TemperatureCard temperature={data?.main?.feels_like} icon={faPerson} title="Feels Like" />
        </Grid>
        <Grid item zeroMinWidth xs={6}>
          <TemperatureCard temperature={data?.main?.temp_min} icon={faTemperatureLow} title="Temperature min" />
        </Grid>
        <Grid item zeroMinWidth xs={6}>
          <TemperatureCard temperature={data?.main?.temp_max} icon={faTemperatureHigh} title="Temperature max" />
        </Grid>
      </Grid>
      {/* Right Column */}
      <Grid container xs={8} spacing={1} justifyContent="space-between">
        <Grid item zeroMinWidth xs={12}>
          <WindGaugeCard speed={data?.wind?.speed} deg={data?.wind?.deg} />
        </Grid>
      </Grid>
    </Grid>
  )
}

export default Main