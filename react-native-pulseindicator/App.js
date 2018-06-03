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
        minSize={80}
        maxSize={200}
        minOpacity={0}
        maxOpacity={0.15}
        gapDuration={700}
        maxOpacityDurationFactor={0.2}
        outerDuration={1700}
        innerDuration={1500}
        centerSize={20}
        centerOpacity={0.7}
        pulseColor={'green'}
        centerColor={'green'}
      />
    );
  }
}