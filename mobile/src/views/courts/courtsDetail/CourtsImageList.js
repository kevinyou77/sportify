import React from 'react'
import {
  View,
  Text,
  Image,
  TouchableOpacity,
} from 'react-native'
import {
  text,
  textAttribute,
} from '../../../styles/common/fontStyles'

const CourtsImageList = ({ image }) => {

  return (
    <TouchableOpacity
      style={styles.container}>
        <Image
          style={ styles.imageStyles }
          source={{uri: image}} />
        {/* <View
          style={styles.ratingBoxWrapperStyles}>
          <Text style={styles.ratingBoxStyles}>hehe</Text>
        </View> */}
    </TouchableOpacity>
  )
}

const styles = {
  container: {
    width: '100%',
  },
  imageStyles: {
    height: 200,
    width: 450,
    borderRadius: 4
  },
  textContainer: {
    marginTop: 10,
    marginBottom: 0,
    overflow: 'hidden'
  },
  imageContainerStyles: {
     
  },
  ratingBoxStyles: {
    justifyContent: 'center',
    textAlign: 'center',
    color: 'white',
    fontWeight: '700'
  },
  ratingBoxWrapperStyles: {
    position: 'absolute',
    bottom: 4,
    right: 4,
    borderRadius: 20,
    backgroundColor: '#00b900',
    width: 30,
    padding: 2
  }
}

export default CourtsImageList