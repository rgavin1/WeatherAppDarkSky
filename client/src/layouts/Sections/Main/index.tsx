import React from 'react'
import { Grid } from '@mui/material'
import { TemperatureCard, WindGaugeCard } from '../../../components'
import { faPerson, faTemperatureHigh, faTemperatureLow } from '@fortawesome/free-solid-svg-icons'

const Main: React.FC<{ data?: any }> = ({ data }) => {
  return (
    <Grid container spacing={1} columns={{ xs: 12, xl: 12 }}>
      {/* Left Column */}
      <Grid container item spacing={1} xl={4} columns={{ xs: 12, sm: 8, lg: 4, xl: 12 }}>
        <Grid item xs={12} sm={4} lg={1} xl={6}>
          <TemperatureCard temperature={data?.main?.temp} title="Temperature" />
        </Grid>
        <Grid item xs={12} sm={4} lg={1} xl={4}>
          <TemperatureCard temperature={data?.main?.feels_like} icon={faPerson} title="Feels Like" />
        </Grid>
        <Grid item xs={12} sm={4} lg={1} xl={6}>
          <TemperatureCard temperature={data?.main?.temp_min} icon={faTemperatureLow} title="Temperature min" />
        </Grid>
        <Grid item xs={12} sm={4} lg={1} xl={4}>
          <TemperatureCard temperature={data?.main?.temp_max} icon={faTemperatureHigh} title="Temperature max" />
        </Grid>
      </Grid>
      {/* Right Column */}
      <Grid container item spacing={1} xl={8}>
        <Grid item xs={12} xl={12}>
          <WindGaugeCard speed={data?.wind?.speed} deg={data?.wind?.deg} />
        </Grid>
      </Grid>
    </Grid>
  )
}

export default Main