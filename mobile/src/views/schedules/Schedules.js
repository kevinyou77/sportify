import React, { Component } from 'react'
import ScheduleItem from './ScheduleItem'
import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  FlatList,
} from 'react-native'
import {
  text,
  textAttribute,
  heading
} from '../../styles/common/fontStyles'
import {
  renderFlatListItems,
} from '../../utilities/index'

export default class Schedules extends Component {
  constructor(props) {
    super(props)

    this.state = {
      isLoading: true,
      schedules: [{
        title: 'Champion Futsal',
        location: 'PALMERAH, JAKARTA BARAT',
        type: 'SOCCER',
        date: '2019-01-09',
        time: '17:00 - 19:00',
        description: 'Let\'s have fun together',
        rating: 4.8,
        participants: {
          totalParticipants: 12,
          data: [
            {
              imageUrl: 'https://pbs.twimg.com/profile_images/874276197357596672/kUuht00m_400x400.jpg'
            },
            {
              imageUrl: 'https://pbs.twimg.com/profile_images/874276197357596672/kUuht00m_400x400.jpg'
            },
            {
              imageUrl: 'https://pbs.twimg.com/profile_images/874276197357596672/kUuht00m_400x400.jpg'
            }
          ]
        }
      }, 
      {
        title: 'Champion Futsal',
        location: 'PALMERAH, JAKARTA BARAT',
        type: 'Soccer',
        date: '2019-01-09',
        time: '17:00 - 19:00',
        description: 'Let\'s have fun together',
        rating: 4.8,
        participants: {
          totalParticipants: 12,
          data: [
            {
              imageUrl: 'https://pbs.twimg.com/profile_images/874276197357596672/kUuht00m_400x400.jpg'
            },
            {
              imageUrl: 'https://pbs.twimg.com/profile_images/874276197357596672/kUuht00m_400x400.jpg'
            },
            {
              imageUrl: 'https://pbs.twimg.com/profile_images/874276197357596672/kUuht00m_400x400.jpg'
            }
          ]
        }
      },
      {
        title: 'Champion Futsal',
        location: 'PALMERAH, JAKARTA BARAT',
        type: 'Soccer',
        date: '2019-01-09',
        time: '17:00 - 19:00',
        description: 'Let\'s have fun together',
        rating: 4.8,
        participants: {
          totalParticipants: 12,
          data: [
            {
              imageUrl: 'https://pbs.twimg.com/profile_images/874276197357596672/kUuht00m_400x400.jpg'
            },
            {
              imageUrl: 'https://pbs.twimg.com/profile_images/874276197357596672/kUuht00m_400x400.jpg'
            },
            {
              imageUrl: 'https://pbs.twimg.com/profile_images/874276197357596672/kUuht00m_400x400.jpg'
            }
          ]
        }
      },
      {
        title: 'Champion Futsal',
        location: 'PALMERAH, JAKARTA BARAT',
        type: 'Soccer',
        date: '2019-01-09',
        time: '17:00 - 19:00',
        description: 'Let\'s have fun together',
        rating: 4.8,
        participants: {
          totalParticipants: 12,
          data: [
            {
              imageUrl: 'https://pbs.twimg.com/profile_images/874276197357596672/kUuht00m_400x400.jpg'
            },
            {
              imageUrl: 'https://pbs.twimg.com/profile_images/874276197357596672/kUuht00m_400x400.jpg'
            },
            {
              imageUrl: 'https://pbs.twimg.com/profile_images/874276197357596672/kUuht00m_400x400.jpg'
            }
          ]
        }
      },
      {
        title: 'Champion Futsal',
        location: 'PALMERAH, JAKARTA BARAT',
        type: 'Soccer',
        date: '2019-01-09',
        time: '17:00 - 19:00',
        description: 'Let\'s have fun together',
        rating: 4.8,
        participants: {
          totalParticipants: 12,
          data: [
            {
              imageUrl: 'https://pbs.twimg.com/profile_images/874276197357596672/kUuht00m_400x400.jpg'
            },
            {
              imageUrl: 'https://pbs.twimg.com/profile_images/874276197357596672/kUuht00m_400x400.jpg'
            },
            {
              imageUrl: 'https://pbs.twimg.com/profile_images/874276197357596672/kUuht00m_400x400.jpg'
            }
          ]
        }
      }],
    }
  }

  static navigationOptions = ({ navigation }) => {
    return {
       headerTintColor: 'white',
       headerStyle: {
          backgroundColor: '#222326'
       }
    }
 }

  componentDidMount() {
    //request to api
  }

  flatListOptions(item) {
    return {
      Component: ScheduleItem,
      props: {
        schedule: item,
      },
    }
  }

  render () {
    const {
      schedules,
    } = this.state

    return (
      <ScrollView style={[{ width: '100%' }]}>
        <View>
          <Text style={[ heading.medium, textAttribute.bold, { marginTop: 5, marginLeft: 22, } ]}>Sun, 17 April</Text>

          <View style={[{ alignItems: 'center', width: '100%' }]}>
            <FlatList
              style={styles.flatListContainer}
              contentContainerStyle={[styles.flatListContentContainerStyle]}
              horizontal={false}
              data={schedules}
              keyExtractor={(item, index) => index.toString()}
              renderItem={({item}) => renderFlatListItems(this.flatListOptions(item))}
            />
          </View>
        </View>
        
      </ScrollView>
    )
  }
}

const styles = {
  flatListContentContainerStyle: {
    flexDirection: 'column'
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
    width: '90%',
  },
  scrollViewStyles: {

  }
}
