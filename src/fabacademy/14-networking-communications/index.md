---
title: 'Networking & Communications'
slug: 'networking-and-communications'
date: '2019-04-24'
endDate: '2019-04-30'
lastUpdated: '2019-06-22'
hero: './hero.jpg'
published: true
---

For networking and communications week I developed an interactive exhibition as part of my [second term's presentation](/reflections/continuing-the-dialogues/) as well as integrating it with the objects I designed and fabricated in previous weeks.

## Description of the exhibition


For my display I choose to go with a refined and more focused version of my [display from the first term](/reflections/design-dialogues/). I turned two plants into capacitive sensors that triggered different actions when touched. The purpose of the display was to present a rudimentary plant-human-machine interface.

![](table-display.jpg 'Display')

Firstly, when touched it would light up a corresponding resin crystal on top of the ‘mycotower’ that was planted in each of the pots. The intensity of the light was determined by the intensity of touching. This provided an immediate visual response to the person touching the plant and served as an explicit acknowledgement that a human-plant contact has been established.

Secondly, when touched the plants would start connecting floating particles on the [Cyberbiomes website](https://cyberbiomes.org). The number of connections depended on the intensity of touching. This gave the plant a form of an agency to affect the user experience of a person browsing the site from the disparate corner of the world. The plant was connected to the world wide web and was able to communicate changes in relation to its immediate environment.

I had to ground the whole circuit because of interference from various electronic devices in the room. Due to the position of my display the only viable option was to use my own body to ground the entire setup. I had to take off one of my shoes to provide sufficient contact with the Earth.

![](grounding.jpg 'Bodily connection with Earth')

## Behind the scenes

The two plants are connected via crocodile clips to a breadboard and act as capacitive sensors. Each of the capacitive sensors use an analog-in pin and a 1M ohm resistor in-between. The sensing is controlled via Arduino Uno which was simply logging the sensor values to a Serial.

Unfortunately, I have formatted the SD card from Raspberry that contained the source code for the sensors before I had a chance to archive it somewhere. But it was simply using [Capacitive Sensing Library](https://playground.arduino.cc/Main/CapacitiveSensor/) to read sensor data and log it to serial.

The Arduino was connected to a Raspberry Pi with Node-RED installed which enables easy access to data from the serial. I used a [node-red-contrib-firebase](https://flows.nodered.org/node/node-red-contrib-firebase) to send the received data to Firebase real-time database.

From there, it was quite easy to connect the sensor data with the website using Firebase API which uses web sockets to establish a persistent connection to the database so it can continuously update the DOM as changes occur. Since the website was already built with GatsbyJS, it was quite easy to plug in data from Firebase to change the connectivity of the particles as described in detail in the previous section.

Here is a corresponding React component that is handling the real-time data coming from sensors:


```javascript
// ParticlesBackground.js
import React, { Component } from 'react';
import Particles from 'react-particles-js';
// import * as firebase from '@firebase/app';
import firebase from 'firebase';

import particlesInitialParams from '../utils/particles';

import css from '../css/components/ParticlesBackground.module.css';

// firebase config
var firebaseConfig = {
  apiKey: '******',
  authDomain: '******',
  databaseURL: '******',
  projectId: '******',
  storageBucket: '******',
  messagingSenderId: '******'
};

firebase.initializeApp(firebaseConfig);

function mapRange(value, low1, high1, low2, high2) {
  return low2 + ((high2 - low2) * (value - low1)) / (high1 - low1);
}

class ParticlesBackground extends Component {
  constructor(props) {
    super(props);
    this.state = { particleParams: particlesInitialParams, height: 2000 };
  }

  componentDidMount() {
    var database = this.state.databaseRef;
    var plant1Ref = firebase.database().ref('data/plant1');
    var plant2Ref = firebase.database().ref('data/plant1');

    plant1Ref.on('value', snapshot => {
      const plant1Data = mapRange(snapshot.val(), 0, 255, 0, 150);

      this.setState(prevState => ({
        ...prevState,
        particleParams: {
          ...prevState.particleParams,
          particles: {
            ...prevState.particleParams.particles,
            line_linked: {
              ...prevState.particleParams.particles.line_linked,
              distance: plant1Data
            }
          }
        }
      }));
    });

  }

  render() {
    return (
      <Particles
        // height={this.state.height}
        params={this.state.particleParams}
        canvasClassName={css.particlesCanvas}
      />
    );
  }
}

export default ParticlesBackground;
