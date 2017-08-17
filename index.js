import React, { Component } from 'react';
import {  Text, View,Alert,  NavigatorIOS, TextInput,Button, StyleSheet, Dropdown  ,Autocomplete , Value,Picker, event, Prompt, TouchableHighlight} from 'react-native';
import PropTypes from 'prop-types';
import { Navigation } from 'react-native-navigation';


import App from './App';
import login from './login';


// register all screens of the app (including internal ones)
export function registerScreens() {
  Navigation.registerComponent('installateur.login', () => login);
  Navigation.registerComponent('installateur.App', () => App);
}
