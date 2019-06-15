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
} from '../../styles/common/fontStyles'
import { Actions } from 'react-native-router-flux';

const TrendingNow = ({ data }) => {
  const { title, location, rating } = data

  return (
    <TouchableOpacity
      onPress={() => {
        Actions.courtsDetail()
      }}
      style={styles.container}>
      <View
        styles={styles.imageContainerStyles}>
        <Image
          style={ styles.imageStyles }
          source={{uri: 'https://img.fifa.com/image/upload/t_l4/c66wodrhc27coham0zkz.jpg'}} />
        <View
          style={styles.ratingBoxWrapperStyles}>
          <Text style={styles.ratingBoxStyles}>{ rating }</Text>
        </View>
      </View>

      <View style={ styles.textContainer }>
        <Text style={[textAttribute.bold]}>{ title }</Text>
        <Text style={[text.small, textAttribute.bold]}>Rp. 150.000 / hour</Text>
        <Text style={[text.medium]}>Soccer</Text>
        <Text style={[text.small]}>{ location }</Text>
        
      </View>
    </TouchableOpacity>
  )
}

const styles = {
  imageStyles: {
    height: 150,
    width: 150,
    borderRadius: 4
  },
  container: {
    padding: 10
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

export default TrendingNow