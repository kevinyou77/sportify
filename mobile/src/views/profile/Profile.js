import React, { Component } from 'react'
import {
  Text,
  View,
  Image,
  Linking,
  FlatList,
  ScrollView
} from 'react-native'
import FriendBar from "./FriendBar";

class Profile extends Component {

  static navigationOptions = ({ navigation }) => {
    return {
       headerTintColor: 'white',
       headerStyle: {
          backgroundColor: '#222326'
       }
    }
  }  

  render () {
    return (
      <View>
        <FriendBar stats={{
          reviews: 12,
          friends: 75,
          location: 'Jakarta'
        }} />
      </View>
    )
  }
}

const styles = {
  trendingNowStyles: {
  },
  trendingNowWrapperStyles: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: 25,
    padding: 10,
  },
  seeAllStyles: {
    color: 'lightgreen'
  },
  flatListContainer: {
    marginTop: 5,
  },
  scrollViewStyles: {

  }
}

export default Profile