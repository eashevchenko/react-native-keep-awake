// @flow

import React, { Component } from 'react';
import { NativeModules, Platform } from 'react-native';

export default class KeepAwake extends Component<{}> {
  static activate() {
    NativeModules.KCKeepAwake.activate();
  }

  static deactivate() {
    NativeModules.KCKeepAwake.deactivate();
  }

  static openFromBackground() {
    if(Platform.OS === 'android') {
        NativeModules.KCKeepAwake.openFromBackground();
    }
  }

  componentWillMount() {
    KeepAwake.activate();
  }

  componentWillUnmount() {
    KeepAwake.deactivate();
  }

  render() {
    return null;
  }
}
