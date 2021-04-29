import './Chart.css';
import ChartBar from './ChartBar';

const Chart = (props) => {
  const dataPointValue = props.dataPoints.map((dp) => dp.value);
  const totalMax = Math.max(...dataPointValue);

  return (
    <div className='chart'>
      {props.dataPoints.map((datapoint) => (
        <ChartBar
          key={datapoint.label}
          value={datapoint.value}
          maxValue={totalMax}
          label={datapoint.label}
        />
      ))}
    </div>
  );
};

export default Chart;
