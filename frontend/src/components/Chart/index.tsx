import * as React from 'react';
import Stack from '@mui/material/Stack';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Radio from '@mui/material/Radio';
import { BarChart } from '@mui/x-charts/BarChart';
import { axisClasses } from '@mui/x-charts/ChartsAxis';
import { dataset, valueFormatter } from './dataset';

type TickParamsSelectorProps = {
  tickPlacement: 'end' | 'start' | 'middle' | 'extremities';
  tickLabelPlacement: 'tick' | 'middle';
  setTickPlacement: React.Dispatch<
    React.SetStateAction<'end' | 'start' | 'middle' | 'extremities'>
  >;
  setTickLabelPlacement: React.Dispatch<React.SetStateAction<'tick' | 'middle'>>;
};

function TickParamsSelector({
  tickPlacement,
  tickLabelPlacement,
  setTickPlacement,
  setTickLabelPlacement,
}: TickParamsSelectorProps) {
  return (
    <Stack direction="column" justifyContent="space-between" sx={{ width: '100%' }}>
      <FormControl>
        <FormLabel id="tick-placement-radio-buttons-group-label">
          tickPlacement
        </FormLabel>
        <RadioGroup
          row
          aria-labelledby="tick-placement-radio-buttons-group-label"
          name="tick-placement"
          value={tickPlacement}
          onChange={(event) =>
            setTickPlacement(
              event.target.value as 'start' | 'end' | 'middle' | 'extremities',
            )
          }
        >
          <FormControlLabel value="start" control={<Radio />} label="start" />
          <FormControlLabel value="end" control={<Radio />} label="end" />
          <FormControlLabel value="middle" control={<Radio />} label="middle" />
          <FormControlLabel
            value="extremities"
            control={<Radio />}
            label="extremities"
          />
        </RadioGroup>
      </FormControl>
      <FormControl>
        <FormLabel id="label-placement-radio-buttons-group-label">
          tickLabelPlacement
        </FormLabel>
        <RadioGroup
          row
          aria-labelledby="label-placement-radio-buttons-group-label"
          name="label-placement"
          value={tickLabelPlacement}
          onChange={(event) =>
            setTickLabelPlacement(event.target.value as 'tick' | 'middle')
          }
        >
          <FormControlLabel value="tick" control={<Radio />} label="tick" />
          <FormControlLabel value="middle" control={<Radio />} label="middle" />
        </RadioGroup>
      </FormControl>
    </Stack>
  );
}

const chartSetting = {
  yAxis: [
    {
      label: 'Lucros Mensais',
    },
  ],
  series: [{ dataKey: 'investimento1', label: 'Investimento 1', valueFormatter }],
  height: 300,
  sx: {
    [`& .${axisClasses.directionY} .${axisClasses.label}`]: {
      transform: 'translateX(-10px)',
    },
  },
};

export default function TickPlacementBars() {
  const [tickPlacement, setTickPlacement] = React.useState<
    'start' | 'end' | 'middle' | 'extremities'
  >('middle');
  const [tickLabelPlacement, setTickLabelPlacement] = React.useState<
    'middle' | 'tick'
  >('middle');

  return (
    <div style={{ width: 1000 }}>
      <BarChart
        dataset={dataset}
        xAxis={[
          { scaleType: 'band', dataKey: 'month'},
        ]}
        {...chartSetting}
      />
    </div>
  );
}