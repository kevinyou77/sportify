import React, { Component } from 'react'
import {
  Text,
  View,
  Image,
  FlatList,
  TouchableOpacity
} from 'react-native'
import { renderFlatListItems } from '../../../utilities'
import CourtsReviewItem from './CourtsReviewItem'
import { text, textAttribute } from '../../../styles/common/fontStyles'

export default class CourtsReview extends Component {
  state = {
  }

  flatListOptions(item) {
    return {
      Component: CourtsReviewItem,
      props: {
        review: item,
      },
    }
  }

  render() {
    const { reviews } = this.props

    return (
      <View>
        <Text style={[ textAttribute.bold, text.default, { paddingLeft: 10, paddingRight: 10, } ]}>Reviews</Text>
        <FlatList
          style={styles.flatListContainer}
          horizontal={false}
          data={reviews}
          keyExtractor={(item, index) => index.toString()}
          renderItem={(item) => renderFlatListItems(this.flatListOptions(item)) }
          showsHorizontalScrollIndicator={false}
        />
      </View>
    )
  }
}

const styles = {
  courtsReviewWrapper: {

  },
}