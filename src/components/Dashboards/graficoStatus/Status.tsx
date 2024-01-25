import React, {Component} from "react";
import Chart from "react-apexcharts"

import "./style.css"

class Status extends Component {
    constructor(props: any) {
        super(props);

        this.state = {
        
          series: [{
            name: 'Resolvido',
            data: [31, 40, 28, 51, 42, 109, 100, 88, 75, 87, 109, 103, 75, 90, 99]
          }, {
            name: 'Em Andamento',
            data: [11, 32, 45, 32, 34, 52, 41, 55, 65, 43, 58, 67, 89, 95, 110]
          }, {
            name: 'Não Atribuído',
            data: [21, 52, 45, 51, 34, 72, 101, 99, 48, 57, 60, 87, 65, 99, 200]
          }],
          options: {
            chart: {
              height: 350,
              type: 'area'
            },
            dataLabels: {
              enabled: false
            },
            stroke: {
              curve: 'smooth'
            },
            xaxis: {
              type: 'datetime',
              categories: ["2018-09-19T00:00:00.000Z", "2018-09-19T00:10:00.000Z", "2018-09-19T00:23:00.000Z", "2018-09-19T00:30:00.000Z", "2018-09-19T00:37:00.000Z", "2018-09-19T05:30:00.000Z", "2018-09-19T06:00:00.000Z" , "2018-09-19T06:10:00.000Z", "2018-09-19T06:20:00.000Z", "2018-09-19T06:30:00.000Z", "2018-09-19T06:33:00.000Z", "2018-09-19T06:40:00.000Z", "2018-09-19T06:45:00.000Z", "2018-09-19T06:50:00.000Z", "2018-09-19T06:54:00.000Z"]
            },
            tooltip: {
              x: {
                format: 'dd/MM/yy HH:mm'
              },
            },
            colors: ['#2DA815', '#E1AD01', '#474B4E'],
          },
        
        
        };
      }

  render() {
    return (
      <div className="app">
        <h2>Status</h2>
        <div className="row">
          <div className="mixed-chart">
            <Chart
              options={this.state.options} 
              series={this.state.series} 
              type="area" 
              height={350}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Status;