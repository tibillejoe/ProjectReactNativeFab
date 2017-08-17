import React, { Component } from 'react';
import { AppRegistry, Text, View,Alert,  NavigatorIOS, TextInput,Button, StyleSheet, Dropdown  ,Autocomplete , Value,Picker, event, Prompt, TouchableHighlight} from 'react-native';
import { Navigation } from 'react-native-navigation';
import PropTypes from 'prop-types'; // ES6
//import { registerScreens } from './index';
//registerScreens();



// register all screens of the app (including internal ones)
// export function registerScreens() {
//   Navigation.registerComponent('installateur.login', () => login);
//   Navigation.registerComponent('installateur.App', () => App);
// }



export default class Main extends Component {

  constructor(props) {
     super(props);
    this.state = {text: '',   username:'',
  password:''};

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


      </View>


      <View style={{flex: 1, backgroundColor: 'skyblue'}} >


      <Button
      onPress={() => {( this.sendToServerPOST(this.state.language)

)}}
      title= "string"
      color="#841584"
      />


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
