import React from 'react';
import { Line } from 'react-chartjs-2';
import { Link } from 'gatsby';
import firebase from 'firebase';
import dayjs from 'dayjs';

import css from '../css/components/Charts.module.css';

import IconHumidity from '../icons/IconHumidity';
import IconTouch from '../icons/IconTouch';
import IconLight from '../icons/IconLight';
import IconTemperature from '../icons/IconTemperature';

// firebase config
var firebaseConfig = {
  apiKey: 'AIzaSyAFcUyHDwnSbQhb8WXxyeQZBCbVpHe_lS8',
  authDomain: 'mdef-planty.firebaseapp.com',
  databaseURL: 'https://mdef-planty.firebaseio.com',
  projectId: 'mdef-planty',
  storageBucket: 'mdef-planty.appspot.com'
};

firebase.initializeApp(firebaseConfig);

var numberOfRecords = 20;

class Charts extends React.Component {
  constructor() {
    super();
    this.state = {
      databaseRef: '',
      plantData: [],
      humidity: {
        labels: [],
        datasets: [
          {
            label: 'Humidity',
            data: [],
            backgroundColor: ['rgba(54, 162, 235, 0.1)'],
            borderColor: ['rgba(54, 162, 235, 1)'],
            pointRadius: 2,
            pointBorderWidth: 2,
            borderWidth: 3
          }
        ]
      },
      touch: {
        labels: [],
        datasets: [
          {
            label: 'Touch',
            data: [],
            backgroundColor: ['rgba(153, 102, 255, 0.2)'],
            borderColor: ['rgba(153, 102, 255, 1)'],
            pointRadius: 2,
            pointBorderWidth: 2,
            borderWidth: 3
          }
        ]
      },
      light: {
        labels: [],
        datasets: [
          {
            label: 'Light',
            data: [],
            backgroundColor: ['rgba(255, 206, 86, 0.2)'],
            borderColor: ['rgba(255, 206, 86, 1))'],
            pointRadius: 2,
            pointBorderWidth: 2,
            borderWidth: 3
          }
        ]
      },
      temperature: {
        labels: [],
        datasets: [
          {
            label: 'Temperature',
            data: [],
            backgroundColor: ['rgba(255, 99, 132, 0.2)'],
            borderColor: ['rgba(255, 99, 132, 1))'],
            pointRadius: 2,
            pointBorderWidth: 2,
            borderWidth: 3
          }
        ]
      },
      moisture: {
        labels: [],
        datasets: [
          {
            label: 'Moisture',
            data: [],
            backgroundColor: ['rgba(75, 192, 192, 0.2)'],
            borderColor: ['rgba(75, 192, 192, 1)'],
            pointRadius: 2,
            pointBorderWidth: 2,
            borderWidth: 3
          }
        ]
      },
      chartOptions: {
        options: {
          legend: {
            display: false
          },
          scales: {
            xAxes: [
              {
                ticks: {
                  display: false
                },
                gridLines: {
                  display: false
                }
              }
            ],
            yAxes: [
              {
                ticks: {
                  beginAtZero: true
                  // min: 0,
                  // max: 300
                },
                gridLines: {
                  display: false
                }
              }
            ]
          }
        }
      }
    };
  }

  UNSAFE_componentWillMount() {
    this.setState({ databaseRef: firebase.database() });
  }

  componentDidMount() {
    var database = this.state.databaseRef;
    let newHumidity = this.state.humidity;
    let newTouch = this.state.touch;
    let newLight = this.state.light;
    let newTemperature = this.state.temperature;
    let newMoisture = this.state.moisture;
    var plantRef = database
      .ref('plant1')
      .orderByChild('timestamp')
      .limitToLast(numberOfRecords);
    plantRef.on('value', snapshot => {
      let items = snapshot.val();
      let newState = [];
      let newHumidityData = [];
      let newTouchData = [];
      let newLightData = [];
      let newTemperatureData = [];
      let newMoistureData = [];
      let newLabels = [];

      for (let item in items) {
        newState.push({
          id: item,
          humidity: items[item].humidity,
          touch: items[item].touch,
          light: items[item].light,
          temperature: items[item].temperature,
          moisture: items[item].moisture,
          timestamp: dayjs.unix(items[item].timestamp).format('H:mm D.MM.YYYY')
        });
        newHumidityData.push(items[item].humidity);
        newTouchData.push(items[item].touch);
        newLightData.push(items[item].light);
        newTemperatureData.push(items[item].temperature);
        newMoistureData.push(items[item].moisture);
        newLabels.push(dayjs.unix(items[item].timestamp).format('H:mm:ss'));
      }
      newHumidity.datasets[0].data = newHumidityData;
      newHumidity.labels = newLabels;
      newTouch.datasets[0].data = newTouchData;
      newTouch.labels = newLabels;
      newLight.datasets[0].data = newLightData;
      newLight.labels = newLabels;
      newTemperature.datasets[0].data = newTemperatureData;
      newTemperature.labels = newLabels;
      newMoisture.datasets[0].data = newMoistureData;
      newMoisture.labels = newLabels;
      this.setState({
        plantData: newState,
        humidity: newHumidity,
        touch: newTouch,
        light: newLight,
        temperature: newTemperature,
        moisture: newMoisture
      });
    });
  }

  componentWillUnmount() {}

  render() {
    return (
      <div className={css.charts}>
        <div className={css.chart}>
          <Line height={150} data={this.state.humidity} options={this.state.chartOptions.options} />
          <h2>
            <IconHumidity /> Air Humidity
          </h2>
        </div>
        <div className={css.chart}>
          <Line height={150} data={this.state.touch} options={this.state.chartOptions.options} />
          <h2>
            <IconTouch /> Touch
          </h2>
        </div>
        <div className={css.chart}>
          <Line height={150} data={this.state.light} options={this.state.chartOptions.options} />
          <h2>
            <IconLight /> Light
          </h2>
        </div>
        <div className={css.chart}>
          <Line
            height={150}
            data={this.state.temperature}
            options={this.state.chartOptions.options}
          />
          <h2>
            <IconTemperature /> Temperature
          </h2>
        </div>
      </div>
    );
  }
}

export default Charts;
