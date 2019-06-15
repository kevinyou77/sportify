import React from 'react'
import {
  View,
  Text,
  Modal,
  TouchableHighlight
} from 'react-native'
import { Dimensions } from 'react-native'

export default class CourtsBookModal extends React.Component {
  state = {

  }

  getDimensions () {
    const window = Dimensions.get('window');
    const screenHeight = window.height
    const screenWidth = window.width

    return screenHeight - 70
  }

  render() {
    const { visible, handleOnClose } = this.props
    return (
      <View>
        <Modal
          animationType="slide"
          transparent={true}
          visible={visible}>
            <View style={{ backgroundColor: 'white', bottom: 0, justifyContent: 'flex-end', position: 'absolute', bottom: 0, height: 200, width: '100%'}}>
              <View style={{  }}>
                <TouchableHighlight
                  onPress={() => {
                    handleOnClose()
                  }}>
                  <Text>Back</Text>
                </TouchableHighlight>
              </View>
             
            </View>

        </Modal>
      </View>
    )
  }
}