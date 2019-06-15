import React, { Component } from 'react'
import {
  View,
  Text
} from 'react-native'
import {
  colors
} from '../../constants/colors'

export default class HomePageTabIcon extends Component {


  render() {
    const { color, title } = this.props

    return (
      <View style={[colors.defaultNavigation, styles.tabIconStyles]}>
        <Text style={{color: colors.white}}>{{ title }}</Text>
      </View>
    )
  }
}

const styles = {
  tabIconStyles: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
  }
}