import React, { Component } from 'react'
import CourtsResultItem from './CourtsResultItem'
import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  FlatList,
  TouchableHighlight
} from 'react-native'
import {
  text,
  textAttribute,
  heading
} from '../../styles/common/fontStyles'
import {
  renderFlatListItems,
} from '../../utilities/index'
import { formButtons } from '../../styles/common/buttonStyles'
import { colors } from '../../constants/colors'
import { Actions } from 'react-native-router-flux';

export default class CourtsResult extends Component {
  constructor(props) {
    super(props)

    this.state = {
      isLoading: true,
      selectedTime: [],
      selectedCourt: -1,
      schedules: [{
        id: 1,
        title: 'Champion Futsal',
        price: '170.000 / hour',
        location: 'PALMERAH, JAKARTA BARAT',
        type: 'SOCCER',
        date: '2019-01-09',
        time: '17:00 - 19:00',
        description: 'Let\'s have fun together',
        rating: 4.8,
        availableTimes: [
          '13.00',
          '14.00',
          '15.00',
          '16.00'
        ],
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
        price: '170.000 / hour',
        id: 2,
        location: 'PALMERAH, JAKARTA BARAT',
        type: 'Soccer',
        date: '2019-01-09',
        time: '17:00 - 19:00',
        description: 'Let\'s have fun together',
        rating: 4.8,
        availableTimes: [
          '13.00',
          '14.00',
          '15.00',
          '16.00'
        ],
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
        price: '170.000 / hour',
        id: 3,
        location: 'PALMERAH, JAKARTA BARAT',
        type: 'Soccer',
        date: '2019-01-09',
        time: '17:00 - 19:00',
        description: 'Let\'s have fun together',
        rating: 4.8,
        availableTimes: [
          '13.00',
          '14.00',
          '15.00',
          '16.00'
        ],
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
        price: '170.000 / hour',
        id: 4,
        location: 'PALMERAH, JAKARTA BARAT',
        type: 'Soccer',
        date: '2019-01-09',
        time: '17:00 - 19:00',
        description: 'Let\'s have fun together',
        rating: 4.8,
        availableTimes: [
          '13.00',
          '14.00',
          '15.00',
          '16.00'
        ],
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
        price: '170.000 / hour',
        id: 5,
        location: 'PALMERAH, JAKARTA BARAT',
        type: 'Soccer',
        date: '2019-01-09',
        time: '17:00 - 19:00',
        description: 'Let\'s have fun together',
        rating: 4.8,
        availableTimes: [
          '13.00',
          '14.00',
          '15.00',
          '16.00'
        ],
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

  timeExists = (time) => {
    return this.state.selectedTime.find((item) => item === time) !== undefined
  }

  handleTimePress = (item, courtId) => {
    const { selectedTime } = this.state

    if (this.timeExists(item)) return
    if (selectedTime.length !== 0 && this.state.courtId !== courtId) return

    const newArr = [ ...this.state.selectedTime, item ]
    this.setState({
      selectedTime: newArr,
      courtId,
    })
  }

  flatListOptions(item, handleTimePress, isSelected) {
    return {
      Component: CourtsResultItem,
      props: {
        schedule: item,
        handleTimePress,
      },
    }
  }

  popTimeList (time) {
    const filtered = this.state.schedules.filter(item => {
      return item !== time
    })

    this.setState({
      schedules: filtered
    })
  }

  render () {
    const {
      schedules,
    } = this.state

    return (
      <View>
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
                renderItem={({item}) => renderFlatListItems(this.flatListOptions(item, this.handleTimePress))}
              />
            </View>
          </View>
          
        </ScrollView>

        <View
          style={[
            styles.bookWrapper,
            {
              width: '100%'
            }
          ]}>
          <View style={[
            {
              backgroundColor: colors.grey,
              height: 50,
              width: '100%',
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center'
            },
            
          ]}>
            {
              this.state.selectedTime.map(item => {
                return (
                  <TouchableOpacity
                    onPress={(id) => ((e) => {
                      this.popTimeList(id)
                    })(item)}
                    style={[{
                      height: 30,
                      width: 50,
                      borderWidth: 1,
                      borderColor: 'white',
                      borderRadius: 20,
                      marginLeft: 3,
                      padding: 5,
                    }]}>
                    <Text style={[ { color: colors.white } ]}>{ item }</Text>
                  </TouchableOpacity>
                )
              })
            }
          </View>

          <TouchableHighlight style={[formButtons.greenButton]}
            onPress={() => {
              Actions.payment()
            }} >
            <Text style={[text.default, { color: colors.white }]}>BOOK</Text>
          </TouchableHighlight>
        </View>
        
      </View>
      
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

  },
  bookWrapper: {
    position: "absolute",
    bottom: 0
  }
}
