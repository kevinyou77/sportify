import React from 'react'
import {
  Text,
  View,
  Image,
} from 'react-native'
import { colors } from '../../../constants/colors'
import { text, textAttribute } from '../../../styles/common/fontStyles';

export default class CourtsReviewItem extends React.Component {
  state = {
    
  }

  render() {
    const { review } = this.props

    return (
      <View style={[ styles.courtsReviewItemWrapper ]}>
        <View style={[ styles.userInfoWrapper ]}>
          <Image
            style={{
              width: 40,
              height: 40, 
              borderRadius: 40 / 2
            }}
            source={{ uri: review.item.userImage }} />
            
            <View style={[ styles.userRating ]}>
              
              <View style={[ { flexDirection: 'row' } ]}>
                <Text style={[ text.default, textAttribute.bold ]}>{ review.item.username }</Text>
                <View style={[ styles.userRatingBox ]}>
                  <Text style={[styles.userRatingText, {
                    color: colors.white,
                  }]}>{ review.item.rating }</Text>
                </View>
              </View>
              
              <View style={[  ]}> 
                <Text>{ review.item.description }</Text>
              </View>
              
              
            </View>
         
        </View>
      
      </View>
    )
  }
}

const styles = {
  courtsReviewItemWrapper: {
    padding: 10
  },
  userInfoWrapper: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: colors.grey,
    paddingBottom: 5
  },
  userRating: {
    marginLeft: 10,
  },
  userRatingText: {

  },
  userRatingBox: {
    justifyContent: 'center',
    marginLeft: 3,
    alignItems: 'center',
    width: 15,
    height: 15,
    backgroundColor: colors.green,
    borderRadius: 15 / 2,
  }
}