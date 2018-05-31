/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import PulseIndicator from './PulseIndicator';
import { View } from 'react-native';

export default class App extends Component {
  render() {
    return (
      <PulseIndicator 
        minSize={50}
        maxSize={130}
        minOpacity={0}
        maxOpacity={0.2}
        gapFactor={0.4}
        openDuration={800}
        closeDuration={1200}
        finalDuration={1000}
        centerSize={15}
        centerOpacity={0.7}
        pulseColor={'green'}
        centerColor={'green'}
      />
    );
  }
}