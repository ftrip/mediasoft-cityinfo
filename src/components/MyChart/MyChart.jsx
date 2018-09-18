import React from 'react';
import PropTypes from 'prop-types';
import Echarts from 'echarts';

class MyChart extends React.Component {
    componentDidMount = () => {
        const myChart = Echarts.init(this.chart);
        const option = {
            title: { text: 'ECharts Sample' },
            tooltip: { },
            legend: { data: ['Sales'] },
            xAxis: { data: ['shirt', 'cardign', 'chiffon shirt', 'pants', 'heels', 'socks'] },
            yAxis: { },
            series: [{
                name: 'Sales',
                type: 'bar',
                data: [5, 20, 36, 10, 10, 20]
            }]
        };
        myChart.setOption(option);
    }

    render = () => {
        const { width, height } = this.props;
        return <div
            ref={ (chart) => { this.chart = chart; } }
            style = {{ width, height }}>
        </div>;
    }
}

MyChart.propTypes = {
    width: PropTypes.number,
    height: PropTypes.number
};

export default MyChart;
