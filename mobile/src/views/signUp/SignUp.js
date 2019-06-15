import React, { Component } from 'react'
import _ from 'lodash'
import { 
  View,
  StyleSheet,
  Button,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  StatusBar,
  ScrollView
} from 'react-native';
import {
  heading,
  textAttribute,
  textColor
} from '../../styles/common/fontStyles'
import {
  formButtons,
} from '../../styles/common/buttonStyles'
import {
  formatDate
} from '../../utilities/date'

import t from 'tcomb-form-native'
import { Actions } from 'react-native-router-flux'

const Form = t.form.Form

const User = t.struct({
  firstName: t.String,
  lastName: t.String,
  email: t.String,
  password: t.String,
  phoneNumber: t.String,
  username: t.String,
  dateOfBirth: t.Date,
})

const dateFormat = (format) => (date) => formatDate(date, format)

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

const stylesheet = _.cloneDeep(t.form.Form.stylesheet)
stylesheet.textbox.normal.borderRadius = 5
stylesheet.textbox.normal.color = 'white'
stylesheet.textbox.normal.placeholder
stylesheet.textbox.normal.borderWidth = 0
stylesheet.textbox.error.borderWidth = 0
stylesheet.textbox.normal.marginBottom = 0
stylesheet.textbox.error.marginBottom = 0

stylesheet.textboxView.normal.borderColor = 'white'
stylesheet.textboxView.normal.borderWidth = 0
stylesheet.textboxView.error.borderWidth = 0
stylesheet.textboxView.normal.borderRadius = 0
stylesheet.textboxView.error.borderRadius = 0
stylesheet.textboxView.normal.borderBottomWidth = 1
stylesheet.textboxView.error.borderBottomWidth = 1
stylesheet.textboxView.normal.marginBottom = 5
stylesheet.textboxView.error.marginBottom = 5

stylesheet.textboxView.normal.placeholderTextColor = 'white'

const options = {
  fields: {
    firstName: {
      error: 'Please enter your first name',
      placeholderTextColor: 'white',
      stylesheet
    },
    lastName: {
      error: 'Please enter your last name',
      placeholderTextColor: 'white',
      stylesheet
    },
    email: {
      error: 'Please enter valid email',
      placeholderTextColor: 'white',
      stylesheet
    },
    username: {
      error: 'Please enter valid username',
      placeholderTextColor: 'white',
      stylesheet
    },
    phoneNumber: {
      error: 'Please enter valid phone number',
      placeholderTextColor: 'white',
      stylesheet
    },
    password: {
      error: 'Password cannot be empty',
      placeholderTextColor: 'white',
      secureTextEntry: true,
      stylesheet
    },
    dateOfBirth: {
      error: 'Invalid day of birth',
      placeholderTextColor: 'white',
      mode: 'date',
      config: {
        format: dateFormat('abc')
      }
    }
  },
  stylesheet: formStyles,
  auto: 'placeholders'
}

export default class LoginForm extends Component {
  handleSubmit = () => {
    const value = this._form.getValue()

    if (value !== null) {
      Actions.initialPage()
    }
  }

  static navigationOptions = ({ navigation }) => {
    return {
       headerTintColor: 'white',
       headerStyle: {
          backgroundColor: '#222326'
       }
    }
 }
  
  render() {
    const { large } = heading
    const { bold } = textAttribute
    const { white } = textColor
    const { primaryWhite } = formButtons
    const { container, wrapper, fixedButton, scrollViewWrapper } = styles

    return (
      <View style={wrapper}> 
        <ScrollView style={scrollViewWrapper} >
          <StatusBar backgroundColor="blue" barStyle="light-content" />
          <View style={container}>
            <Text style={ [large, bold, white] }>Welcome to Sportify!</Text>
            <Form
              ref={c => this._form = c}
              type={User} 
              options={options}
            />
          </View>
        </ScrollView>
        
        <View style={fixedButton}>
          <TouchableOpacity
            onPress={this.handleSubmit}
            style={ [primaryWhite] }>
            <Text style={ textColor.white }>Login</Text>
          </TouchableOpacity>
        </View>
      </View>
      
    )
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    padding: 20,   
    backgroundColor: '#121212',
  },
  wrapper: {
    height: '100%',
    width: '100%',
    backgroundColor: '#121212',
  },
  fixedButton: {
    width: '90%',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 7,
    right: 0
  },
  scrollViewWrapper: {
    maxHeight: '90%',
  }
})