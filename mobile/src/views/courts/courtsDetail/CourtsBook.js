import React from 'react'
import {
  View,
  Text,
  FlatList,
} from 'react-native'
import { text, textAttribute, heading } from '../../../styles/common/fontStyles'
import { renderFlatListItems } from '../../../utilities'
import CourtsBookItem from './CourtsBookItem'

export default class CourtsBook extends React.Component {
  state = {
    availableDays: [
      { id: 1, date: 'Tuesday, 18 Jun' },
      { id: 2, date: 'Tuesday, 19 Jun' },
      { id: 3, date: 'Tuesday, 20 Jun' }
    ],
  }

  flatListOptions = (item) => {
    return {
      Component: CourtsBookItem,
      data: item,
    }
  }

  render () {
    const { availableDays } = this.state

    return (
      <View>
        <Text style={[ textAttribute.bold, heading.large ]}>Find your Booking</Text>
        <Text>What Day?</Text>
        <FlatList
          style={styles.flatListContainer}
          horizontal={true}
          data={availableDays}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (renderFlatListItems(this.flatListOptions(item)))}
          showsHorizontalScrollIndicator={false}
        />
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
    marginTop: 15,
    padding: 10,
  },
  seeAllStyles: {
    color: 'green'
  },
  flatListContainer: {
    marginTop: 2,
  },
  scrollViewStyles: {

  }
}