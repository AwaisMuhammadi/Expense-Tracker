import ChartBar from "./ChartBar";
import './Chart.css';

const Chart =(props)=>{
    const chartDataPoint =[
        {label: "Jan", value : 0},
        {label: "Feb", value : 0},
        {label: "Mar", value : 0},
        {label: "Apr", value : 0},
        {label: "May", value : 0},
        {label: "Jun", value : 0},
        {label: "Jul", value : 0},
        {label: "Aug", value : 0},
        {label: "Sep", value : 0},
        {label: "Oct", value : 0},
        {label: "Nov", value : 0},
        {label: "Dec", value : 0}
    ]
    for(const expense of props.expensesFilteredList){
        const month = expense.date.getMonth();
        chartDataPoint[month].value += expense.amount;
    };
    const dataPointValues = chartDataPoint.map(dataPoint=>dataPoint.value);
    const maxValue = Math.max(...dataPointValues);
    return (
        <div className="chart">
            {chartDataPoint.map(dataPoint=>
                <ChartBar key={dataPoint.label} value={dataPoint.value} label={dataPoint.label} maxValue={maxValue}/>
                )}
        </div>
    );
}

export default Chart;