/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  NavigatorIOS
} from 'react-native';
import SmartSchoolTabBar from './js/components/SmarSchoolTabBar';

export default class SmartSchool extends Component {

  render() {
    return (
        <SmartSchoolTabBar />
    );
  }
}


AppRegistry.registerComponent('SmartSchool', () => SmartSchool);
