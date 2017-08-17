import React, { Component } from 'react';
import { Text, View,Alert,  NavigatorIOS, TextInput,Button, StyleSheet, Dropdown  ,Autocomplete , Value,Picker, event, Prompt, TouchableHighlight} from 'react-native';
import { Navigation } from 'react-native-navigation';
import PropTypes from 'prop-types';
import { registerScreens } from './screens';
registerScreens();

class login extends React.Component {

  render() {
    return <Text>Hello, Navigation!</Text>;
  }
}
