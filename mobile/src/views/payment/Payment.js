import React, { Component } from 'react'
import {
  Text,
  View,
  TouchableOpacity,
} from 'react-native'
import { text, textAttribute, heading } from '../../styles/common/fontStyles'
import { colors } from '../../constants/colors'
import { formButtons } from '../../styles/common/buttonStyles'

export default class Payment extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
       headerTintColor: 'white',
       headerStyle: {
          backgroundColor: '#222326'
       }
    }
 }

  render() {
    return (
      <View style={[{ flex: 1 }]}>
        <View>
           <Text
            style={[ heading.large, textAttribute.bold ]}>
            Complete your payment
          </Text>

          <View>
            <Text>Transfer Rp. 250.000 to</Text>
            <Text>2345 6789 102</Text>
            <Text>in 35 minutes</Text>
          </View>
        </View>
          

        <TouchableOpacity style={[formButtons.greenButton, styles.bookButton]}>
          <Text style={[text.default, { color: colors.white }]}>PAY NOW</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = {
  bookButton: {
    position: "absolute",
    bottom: 0
  }
}