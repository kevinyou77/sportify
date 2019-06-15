import React, { Component } from 'react'
import {
  View,
  Text,
  TouchableOpacity,
  Picker,
  ScrollView
} from 'react-native'
import {
  formButtons
} from '../../styles/common/buttonStyles'
import {
  text,
  textAttribute,
  textColor,
  heading,
} from '../../styles/common/fontStyles'
import DatePicker from 'react-native-datepicker'
import PopUpLocationModal from './PopUpLocationModal'
import { Actions } from 'react-native-router-flux'
import SportTypeModal from './SportTypeModal';
 
export default class SearchBox extends Component {
  state = {
    startDate: '2017-01-01',
    endDate: '2017-01-02',
    languange: '',
    isModalVisible: false,
    isSportTypeModalVisible: false,
    locationText: '',
    sportType: '',
  }

  constructor(props){
    super(props)
  }

  onLocationButtonPress = () => {
    this.setState((prevState) => ({
      isModalVisible: !prevState.isModalVisible,
    }))
  }

  handleModalOnClick = (locationText) => {
    this.setState((prevState) => ({
      isModalVisible: !prevState.isModalVisible,
      locationText
    }))
  }

  handleSportModalClick = (sportType) => {
    this.setState((prevState) => ({
      isSportTypeModalVisible: !prevState.isSportTypeModalVisible,
      sportType
    }))
  }

  onSportTypeButtonPress = () => {
    this.setState((prevState) => ({
      isSportTypeModalVisible: !prevState.isSportTypeModalVisible,
    }))
  }

  onSearchPress = () => {
    Actions.courtsResult()
  }

  locationText = () => {
    return this.state.locationText !== '' ? this.state.locationText : 'Select Your Location'
  }

  sportTypeText = () => {
    return this.state.sportType !== '' ? this.state.sportType : 'Select Your Sport Type'
  }
 
  render() {
    const { startDate, endDate, isModalVisible, isSportTypeModalVisible } = this.state

    return (
      <View style={{
        backgroundColor: 'white', 
        width: '90%', 
        padding: 10,
        justifyContent: 'center', 
        borderRadius: 10,
        alignItems: 'center',
        marginTop: 25 }}>
          <PopUpLocationModal visible={isModalVisible} handleOnClose={this.handleModalOnClick} />
          <SportTypeModal visible={isSportTypeModalVisible} handleOnClose={this.handleSportModalClick} />

          <Text style={[heading.medium, textAttribute.bold]}>
            Find Courts
          </Text>
         <DatePicker
          style={{width: '90%', justifyContent: 'center', alignItems: 'center', marginBottom: 5, borderRadius: 10, marginBottom: 15, marginTop: 5}}
          date={startDate}
          mode="date"
          placeholder={startDate}
          format="dddd YYYY-MM-DD"
          minDate="2016-05-01"
          maxDate="2018-06-01"
          confirmBtnText="Confirm"
          cancelBtnText="Cancel"
          placeholder="Start Date"
          customStyles={{
            dateIcon: {
              display: 'none'
            },
            dateInput: {
              borderRadius: 5
            }
            // ... You can check the source to find the other keys.
          }}
          is24Hour={true}
          onDateChange={(date) => {this.setState({startDate: date})}}
        />

        <TouchableOpacity
          onPress={this.onLocationButtonPress}
          style={{
            width: '90%', 
            justifyContent: 'center', 
            alignItems: 'center', 
            marginBottom: 5, 
            borderRadius: 10, 
            marginBottom: 15,
            borderWidth: 1,
            height: 35,
          }}>
          <Text>{ this.locationText() }</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={this.onSportTypeButtonPress}
          style={{
            width: '90%', 
            justifyContent: 'center', 
            alignItems: 'center', 
            marginBottom: 5, 
            borderRadius: 10, 
            marginBottom: 15,
            borderWidth: 1,
            height: 35,
          }}>
          <Text>{ this.sportTypeText() }</Text>
        </TouchableOpacity>

        <View style={{width: '90%'}}>
          <TouchableOpacity style={formButtons.searchBox} onPress={this.onSearchPress}>
            <Text style={[textAttribute.bold, text.default, textColor.white]}>Search</Text>
          </TouchableOpacity>
        </View>
        
      </View>
     
    )
  }
}