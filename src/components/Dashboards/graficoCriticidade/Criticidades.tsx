import React, {Component, useEffect, useState} from "react";
import Chart from "react-apexcharts"

import "./style.css"
import axios from "axios";

class Criticidades extends Component {

  constructor(props: any) {

    super(props);

          this.state = {
          
            series: [76, 67, 61],
            options: {
              chart: {
                height: 390,
                type: 'radialBar',
              },
              plotOptions: {
                radialBar: {
                  offsetY: 0,
                  startAngle: 0,
                  endAngle: 270,
                  hollow: {
                    margin: 5,
                    size: '5%',
                    background: 'transparent',
                    image: undefined,
                  },
                  dataLabels: {
                    name: {
                      show: false,
                    },
                    value: {
                      show: false,
                    }
                  }
                }
              },
              colors: ['#C40233', '#EF6C00', '#E1AD01'],
              labels: ['Crítico', 'Sério', 'Moderado'],
              legend: {
                show: true,
                floating: true,
                fontSize: '20px',
                position: 'left',
                offsetX: 260,
                offsetY: 30,
                labels: {
                  useSeriesColors: true,
                },
                markers: {
                  size: 0
                },
                formatter: function(seriesName, opts) {
                  return seriesName + ":  " + opts.w.globals.series[opts.seriesIndex]
                },
                itemMargin: {
                  vertical: 3
                }
              },
              responsive: [{
                breakpoint: 480,
                options: {
                  legend: {
                      show: false
                  }
                }
              }]
            },
          
          
          };
        }

        

  render() {
    
    return (
      <div className="app">
        <h2>Criticidade</h2>
        <div className="row">
          <div className="mixed-chart">
            <Chart
              options={this.state.options} 
              series={this.state.series} 
              type="radialBar" 
              height={390}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Criticidades;