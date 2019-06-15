import React from 'react'
import {
  Text,
  View,
} from 'react-native'

const Header = ({ title }) => {
  const { viewStyles, textStyles } = styles

  return (
    <View style={ viewStyles }>
      <Text style={ textStyles }>{ title }</Text>
    </View>
  )
}

const styles = {
  viewStyles: {
    backgroundColor: 'blue',
    justifyContent: 'center',
    alignItems: 'center',
    height: 90,
    paddingTop: 35,
    position: 'relative',
    elevation: 2,
  },
  textStyles: {
    fontSize: 20,
    color: 'white',
  },
}

export default Header