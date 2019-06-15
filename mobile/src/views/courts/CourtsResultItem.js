import React, { Component } from 'react'
import {
  View,
  Image,
  Text,
  TouchableOpacity
} from 'react-native'
import { 
  text,
  textAttribute,
} from '../../styles/common/fontStyles'
import { colors } from '../../constants/colors'
import Slideshow from '../../components/common/Slideshow'

export default class CourtsResultItem extends Component {
  state = {
    selected: false,
    courtImages: [
      {
        url:
          "https://lapanganfutsal.id/wp-content/uploads/2017/08/qs-lapangan-futsal-medan-a.png"
      },
      {
        url:
          "https://apollo-singapore.akamaized.net/v1/files/kz70wxs55xzw2-ID/image;s=966x691;olx-st/_1_.jpg"
      },
      {
        url:
          "http://www.staradmiral.com/wp-content/uploads/2017/01/Empat-Macam-Lapangan-Futsal.jpg"
      }
    ],
  }

  onPressSelect = () => {
    this.setState({
      selected: !this.state.selected
    })
  }

  render() {
    const { 
      schedule,
      handleTimePress,
      selected,
    } = this.props

    const { courtImages } = this.state

    return (
      <View style={[styles.scheduleItemStyles]}>
        <Slideshow containerStyle={[{
          borderRadius: 10,
          marginBottom: 10,
        }]} 
        dataSource={courtImages} 
        arrowSize="0" />

        <Text style={[text.small]}><Text style={[{ color: colors.green }]}>AVAILABLE</Text> / { schedule.type.toUpperCase() }</Text>
        <Text style={[text.big, textAttribute.bold]}>{ schedule.title }</Text>
        <Text style={[text.small, textAttribute.bold]}>{ schedule.price }</Text>
        <Text style={[text.default]}>{ schedule.time }</Text>
        <Text style={[text.default]}>{ schedule.description }</Text>
        <Text style={[text.small]}>{ schedule.location }</Text>
{/* 
        <View style={[styles.imageGroupWrapper]}>
         <Text style={[text.default, styles.totalParticipantsStyles]}>{ schedule.participants.totalParticipants }</Text>
        </View> */}

        <View
          style={styles.ratingBoxWrapperStyles}>
          <Text style={styles.ratingBoxStyles}>{ schedule.rating }</Text>
        </View>

        <View>
          <Text style={styles.ratingBoxStyles}>72 reviews</Text>
        </View>

        <Text style={[
            text.small,
            textAttribute.bold,
            {
              marginBottom: 5
            }
          ]}>AVAILABLE TIMES</Text>

        <View style={[
          {
            flexDirection: 'row',
          }
        ]}>
          {
            schedule.availableTimes.map(item => {
              return (
                <TouchableOpacity
                  onPress={() => {
                    handleTimePress(item, schedule.id)
                    this.onPressSelect()
                  }}
                 style={[{
                  borderWidth: 1,
                  borderColor: 'black',
                  borderRadius: 20,
                  marginLeft: 3,
                  padding: 5,
                  backgroundColor: selected ? 'green' : 'transparent'
                }]}>
                  <Text>{ item }</Text>
                </TouchableOpacity>
              )
            })
          }
        </View>

      </View>
    )
  }
}

const styles = {
  scheduleItemStyles: {
    width: '100%',
    padding: 10,
    shadowOffset: {  
      width: 5,  
      height: 5,  
    },
    shadowColor: 'black',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    backgroundColor: 'white',
    borderRadius: 6,
    marginTop: 5,
    marginBottom: 8,
    justifyContent: 'center',
  },
  ratingBoxWrapperStyles: {
    position: 'absolute',
    bottom: 150,
    right: 8,
    borderRadius: 20,
    backgroundColor: '#00b900',
    width: 30,
    padding: 2
  },
  ratingBoxStyles: {
    justifyContent: 'center',
    textAlign: 'center',
    color: 'white',
    fontWeight: '700'
  },
  participantImageStyles: {
    width: 30,
    height: 30,
    borderRadius: 30 / 2,
    marginRight: -12,
    borderWidth: 2,
    borderColor: 'white'
  },
  imageGroupWrapper: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  totalParticipantsStyles: {
    marginLeft: 15,
  }
}