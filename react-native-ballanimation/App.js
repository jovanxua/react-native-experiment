/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Text,
  View
} from 'react-native';

import GravitationalBounce from './GravitationalBounce';

export default class App extends Component {
  render() {
    return (
      <GravitationalBounce />
    );
  }
}
