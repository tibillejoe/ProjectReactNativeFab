import React, { Component } from 'react';
import { AppRegistry, Text, View,Alert,  TextInput,Button, StyleSheet, Dropdown  ,Autocomplete , Value,Picker, event} from 'react-native';


export default class Main extends Component {

  constructor(props) {
    super(props);
    this.state = {text: '',   username:'',
  password:''};
  }
  // sendToServer(personTest){
  //   console.log('http://192.168.100.62:54525/FabeltaJaxRsApi/webresources/Person/addPerson'+"/"+personTest.firstName+'/'+personTest.lastName);
  //   fetch('http://192.168.100.62:54525/FabeltaJaxRsApi/webresources/Person/addPerson'+"/"+personTest.firstName+'/'+personTest.lastName,{
  //     method:'GET',
  //     headers:{
  //       'Accept': 'application/json',
  //       'Content-Type': 'application/json',
  //     },
  //   })
  // }



  render() {


var personTest = JSON.parse('{ "firstName":"BOB","lastName":"Gratton"}');
var valeur = "bob";
var js = "js";
var java = " java ";
//this.sendToServer(personTest)


    return (

      <View style={{flex: 1}}>



      <View style={{flex: 1, backgroundColor: 'skyblue'}} >
      <Greeting name='Rexxar' />
      <Greeting name='Jaina' />
      <Greeting name='Valeera' />

      </View>

      <View style={{flex: 1, backgroundColor: 'grey'}} >

      <TextInput
      style={{height: 40}}
      placeholder="Type here to translate!"
      onChangeText={(text) => this.setState({text})}
      />
      <Text style={{padding: 10, fontSize: 42}}>
      {this.state.text.split(' ').map((word) => word && '🍕').join(' ')}
      </Text>
      </View>


      <View style={{flex: 1, backgroundColor: 'skyblue'}} >


      <Button
      onPress={() => { Alert.alert(this.state.language)}}
      title= "string"
      color="#841584"
      />

      </View>

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
