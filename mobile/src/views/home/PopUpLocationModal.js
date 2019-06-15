import React, { Component } from 'react'
import {
  View,
  Modal,
  Text,
  TouchableHighlight,
  StatusBar,
  TextInput,
  TouchableOpacity
} from 'react-native'
import { text, textAttribute } from '../../styles/common/fontStyles'
import { colors } from '../../constants/colors'

const styles = {
  searchFieldStyle: {
    marginTop: 30,
    fontSize: 25,
    width: '90%',
    borderBottomWidth: 1,
    borderBottomColor: 'black',
    justifyContent: 'center',
    alignItems: 'center'
  }
}

export default class PopUpLocationModal extends Component {
  state = {
    searchText: '',
    location: '',
    locationList: [
      'Palmerah',
      'Pluit',
      'Kalideres',
      'Kelapa Gading',
    ]
  }

  constructor(props) {
    super(props)
  }

  setModalVisible() {
    const { visible } = this.props
    this.setState({ visible })
  }

  handleOnChangeText = (text) => {
    const filtered = this.state.locationList.filter(item => {
      return item.includes(text)
    })

    this.setState({
      text,
      locationList: filtered
    })
  }

  render() {
    const { visible, handleOnClose } = this.props 
    const { locationList } = this.state
    return (
      <View>
        <Modal
          animationType="slide"
          transparent={false}
          visible={visible}>
            
          <View style={{marginTop: 22}}>
            <TouchableHighlight
              onPress={() => {
                handleOnClose()
              }}>
              <Text>Back</Text>
            </TouchableHighlight>

            <View style={{ alignItems: 'center' }}>
              <TextInput
                style={[ styles.searchFieldStyle ]}
                placeholder="Search your location"
                onChangeText={this.handleOnChangeText}>
              </TextInput>
            </View>

            <View
              style={[ { width: '90%' } ]}>
              {
                locationList.map(item => {
                  return (
                    <TouchableOpacity
                      onPress={() => {
                        handleOnClose(item)
                      }}
                      style={[ { padding: 10 } ]}>
                      <Text style={[ text.default, textAttribute.bold ]}>{ item }</Text>
                    </TouchableOpacity>
                  )
                })
              }
            </View>
          </View>
        </Modal>
      </View>
    )
  }
}
