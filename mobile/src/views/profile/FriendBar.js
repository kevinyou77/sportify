import React, { Component } from 'react'
import {
  View,
  Text,
} from 'react-native'

export default class FriendBar extends Component {

  render() {
    const { stats } = this.props
    return (
      <View>
        <View style={ styles.friendBarWrapperStyles }>
          <Text>{ stats.posts }</Text>
        </View>

        <View>
          <Text>{ stats.friends }</Text>
        </View>

        <View>
          <Text>{ stats.location }</Text>
        </View>
      </View>
    )
  }
}

const styles = {
  friendBarWrapperStyles: {
    flexDirection: 'column'
  }
}