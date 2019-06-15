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
import { colors } from '../../constants/colors';

export default class ScheduleItem extends Component {
  render() {
    const {
      schedule,
    } = this.props

    return (
      <TouchableOpacity style={[styles.scheduleItemStyles]}>
        <Text style={[text.small]}>{ schedule.type.toUpperCase() }</Text>
        <Text style={[text.big, textAttribute.bold]}>{ schedule.title }</Text>
        <Text style={[text.default]}>{ schedule.time }</Text>
        <Text style={[text.default]}>{ schedule.description }</Text>
        <Text style={[text.small]}>{ schedule.location }</Text>

        <View style={[styles.imageGroupWrapper]}>
          {
            schedule.participants.data.map((item, idx) => {
              return (
                <Image key={idx} style={[styles.participantImageStyles]} source={{uri: item.imageUrl}} />
              )
            })
          }
         
         <Text style={[text.default, styles.totalParticipantsStyles]}>{ schedule.participants.totalParticipants }</Text>
        </View>

        <View
          style={styles.ratingBoxWrapperStyles}>
          <Text style={styles.ratingBoxStyles}>{ schedule.rating }</Text>
        </View>

      </TouchableOpacity>
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
    top: 7,
    right: 4,
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