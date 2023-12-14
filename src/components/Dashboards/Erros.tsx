// import React, { Component } from "react";
import React, {Component} from "react";
import Chart from "react-apexcharts"

import "./graficoErro/style.css"

class Erros extends Component {
  constructor(props: any) {
    super(props);


    this.state = {
      options: {
        chart: {
          id: "basic-bar"
        },
        xaxis: {
          categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999]
          // categories: [props.data_erro]
        }
      },
      series: [
        {
          name: "series-1",
          data: [30, 40, 45, 50, 49, 60, 70, 91, 100]
          // data: [k]
        }
      ]
    };
  }

  render() {
    return (
      <div className="app">
        <h2>Erros notificados por período</h2>
        <div className="row">
          <div className="mixed-chart">
            <Chart
              options={this.state.options}
              series={this.state.series}
              type="bar"
              width="500"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Erros;