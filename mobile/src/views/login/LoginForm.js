import React, { Component } from 'react';
import { 
  View,
  StyleSheet,
  Button,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  StatusBar
} from 'react-native';
import {
  heading,
  textAttribute,
} from '../../styles/common/fontStyles'
import {
  formButtons,
} from '../../styles/common/buttonStyles'

import t from 'tcomb-form-native';
import { Actions } from 'react-native-router-flux';

const Form = t.form.Form;

const User = t.struct({
  email: t.String,
  password: t.String,
})

const formStyles = {
  ...Form.stylesheet,
  formGroup: {
    normal: {
      marginBottom: 5,
      marginTop: 10
    },
  },
  controlLabel: {
    normal: {
      color: 'black',
      fontSize: 18,
      marginBottom: 7,
      fontWeight: '600'
    },
    error: {
      color: 'red',
      fontSize: 18,
      marginBottom: 7,
      fontWeight: '600'
    }
  }
}

const options = {
  fields: {
    email: {
      error: 'Please enter valid email'
    },
    password: {
      error: 'Password Empty',
      secureTextEntry: true
    },
  },
  stylesheet: formStyles,
}

export default class LoginForm extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
       headerTintColor: 'white',
       headerStyle: {
          backgroundColor: '#222326'
       }
    }
 }

  handleSubmit = () => {
    const value = this._form.getValue()

    if (value !== null) {
      Actions.initialPage()
    }
  }
  
  render() {
    const { large } = heading
    const { bold } = textAttribute
    const { primary } = formButtons
    const { container, wrapper } = styles

    return (
      <View style={wrapper}>
        <StatusBar backgroundColor="blue" barStyle="dark-content" />
        <View style={container}>
          <Text style={ [large, bold] }>Welcome to Sportify!</Text>
          <Form
            ref={c => this._form = c}
            type={User} 
            options={options}
          />
          <TouchableOpacity
            onPress={this.handleSubmit}
            style={ primary }>
            <Text>Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    marginTop: 25,
    padding: 20,   
    backgroundColor: '#ffffff',
  },
  wrapper: {
    height: '100%',
    width: '100%',
    backgroundColor: '#ffffff',
  },
})