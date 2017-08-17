import React, { Component } from 'react';
import {Text, View,Alert,  TextInput,Button, StyleSheet, Dropdown  ,Autocomplete , Value,Picker, event, Prompt, TouchableHighlight} from 'react-native';
//import { StackNavigator } from 'react-navigation';
///import { Navigation } from 'react-native-navigation';
//import PropTypes from 'prop-types';
//import { registerScreens } from './screens';
//registerScreens();


/*class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Welcome',
  };
  render() {
    return <Text>Hello, Navigation!</Text>;
  }
}

const SimpleApp = StackNavigator({
  Home: { screen: HomeScreen },
  Chat: { screen: Main },
});*/
// Navigation.startTabBasedApp({
//   tabs: [
//     {
//       label: 'One',
//       screen: 'installateur.login', // this is a registered name for a screen
//       icon: require('../img/one.png'),
//
//       title: 'ScreenOne'
//     },
//     {
//       label: 'Two',
//       screen: 'installateur.App',
//       icon: require('../img/two.png'),
//
//       title: 'ScreenTwo'
//     }
//   ]
// });





export default class Main extends Component {

  constructor(props) {
    super(props);
    this.state = {text: '',   username:'',
  password:''};

  }
/*  sendToServer(bob){
    console.log('http://192.168.100.62:54525/FabeltaJaxRsApi/webresources/Person/addPerson'+"/"+bob.firstName+'/'+bob.lastName);
    fetch('http://192.168.100.62:54525/FabeltaJaxRsApi/webresources/Person/addPerson'+"/"+bob.firstName+'/'+bob.lastName,{
      method:'GET',
      headers:{
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
    })
  }*/


  sendToServerPOST(roger){

    console.log('http://192.168.100.62:54525/FabeltaJaxRsApi/webresources/Person/addTest');
  var personTest_JSONObject = JSON.stringify(roger)
  console.log(personTest_JSONObject);
    fetch('http://192.168.100.62:54525/FabeltaJaxRsApi/webresources/Person/addTest',{
      method:'POST',
      headers:{
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: personTest_JSONObject
    })
  }

  render() {



var valeur = "pepito";
var js = "js";
var java = "java";

var personTest = JSON.parse('{ "firstName":"bob","lastName":"Gratton"}');
var bob = JSON.stringify({"firstname":valeur , "lastname":valeur});

console.log(personTest);
console.log(bob);

/*this.sendToServerPOST(bob);*/
    return (



      <View style={{flex: 4}}>






      <View style={{flex: 1, backgroundColor: 'grey'}} >

      <TextInput
      style={{height: 40}}
      placeholder="Nombre d'heures travailler"

      />

      <Picker
      style={{height: 40}}
            selectedValue={this.state.language}
            onValueChange={(itemValue, itemIndex) => this.setState({language: itemValue})}>
                  <Picker.Item label="Résidentiel léger" value="Residentielleger" />
                  <Picker.Item label="Résidentiel Lourd" value= "RésidentielLourd" />
                  <Picker.Item label="Rénovation" value= "Rénovation" />
                  <Picker.Item label="Voyagement" value= "Voyagement" />
                  <Picker.Item label="Mesure et inspection" value= "Mesureetinspection" />
                  <Picker.Item label="Usine" value= "Usine" />
                  <Picker.Item label="Service Chantier Régis" value= "ServiceChantierRegis" />
                  <Picker.Item label="Service Réno Non-Régis" value= "ServiceRenoNon-Régis" />
            </Picker>

            // <Button
            // onPress={this.PropsTypes.Navigator.push({
            // screen: 'installateur.login',
            // title: 'ScreenTwo'
            // })}
            // title="changing"
            // color="#841584"
            //
            // />
      </View>


      <View style={{flex: 1, backgroundColor: 'skyblue'}} >





            <Button
            onPress={() => { Alert.alert(
        'Alert Title',
        'My Alert Msg',
        [
          {text: 'Ask me later', onPress: () => console.log('Ask me later pressed')},
          {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
          {text: 'OK', onPress: () => console.log('OK Pressed')},
        ],
        { cancelable: false }
      )}}
            title= "string"
            color="#841584"
            />

            <TextInput
            style={{height: 40}}
            placeholder="username"

            />
            <TextInput
            style={{height: 40}}
            placeholder="password"

            />

      </View>

    {

      /*
this.sendToServerPOST(this.state.language
this.sendToServerPOST(this.state.language)

      <View style={{flex: 1, backgroundColor: 'skyblue'}} >
      <Greeting name='Rexxar' />
      <Greeting name='Jaina' />
      <Greeting name='Valeera' />

      </View>

      this.sendToServer(personTest)

      <View style={{flex: 1, backgroundColor: 'skyblue'}} >

      <Picker
      selectedValue={this.state.language}
      onValueChange={(itemValue, itemIndex) => this.setState({language: itemValue})}>
      <Picker.Item label="Java" value="java" />
      <Picker.Item label="JavaScript" value= "js" />
      </Picker>


      </View>


      <View style={{flex: 2, backgroundColor: 'steelblue'}} >

      <Blink text='I love to blink'  />
      <Blink text='Yes blinking is so great' />
      </View>
      */}
      </View>

    );
  }
}


class Movie extends Component {
  render() {
    return (
      <Text style={styles.bigblue, styles.red}>Hello {this.props.name}!</Text>
    );
  }
}



class Greeting extends Component {
  render() {
    return (
      <Text style={styles.bigblue, styles.red}>Hello {this.props.name}!</Text>
    );
  }
}


class Blink extends Component {
  constructor(props) {
    super(props);
    this.state = {showText: true};

    // Toggle the state every second
    setInterval(() => {
      this.setState(previousState => {
        return { showText: !previousState.showText };
      });
    }, 1000);
  }

  render() {
    let display = this.state.showText ? this.props.text : ' ';
    return (
      <Text style={styles.bigblue}>{display}</Text>
    );
  }
}

const styles = StyleSheet.create({
  bigblue: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 30,
  },
  red: {
    color: 'red',
  },
});
