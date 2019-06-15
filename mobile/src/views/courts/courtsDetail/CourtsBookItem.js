import React, { Component } from 'react'
import {
  View,
  Text,
} from 'react-native'

export default class CourtsBookItem extends Component {
  render() {
    const { data } = this.state

    return (
      <View style={styles.courtsBookItemStyles}>

      </View>
    )
  }
}

const styles = {
  courtsBookItemStyles: {
    height: 50,
    width: 50,
  }
}