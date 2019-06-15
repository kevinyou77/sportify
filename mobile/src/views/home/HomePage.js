import React, { Component } from 'react'
import {
  Text,
  View,
  Image,
  Linking,
  FlatList,
  ScrollView,
  StatusBar,
} from 'react-native'
import {
  heading,
  text,
  textAttribute
} from '../../styles/common/fontStyles'
import SearchBox from './SearchBox'
import TrendingNow from './TrendingNow'
import Axios from 'axios'
import { location } from '../../utilities'

class HomePage extends Component {
  state = {
    flatListData: [
      {
        title: 'Super Futsals', 
        location: 'KEBON JERUK, JAKARTA',
        rating: 4.0
      },
      {
        title: 'Noob Futsal', 
        location: 'GATOT SUBROTO, JAKARTA', 
        rating: 3.5
      },
      {
        title: 'Futsal Premium KW', 
        location: 'PLUIT, JAKARTA', 
        rating: 4.8
      },
    ],
  }

  static navigationOptions = ({ navigation }) => {
    return {
       headerTintColor: 'white',
       headerStyle: {
          backgroundColor: '#222326'
       }
    }
 }

  renderFlatListItems = ({item}) => (<TrendingNow key={"item"} data={item} />)

  componentDidMount () {
    const params = {
      username: "budi",
      password: "secret"
    }

    // Axios.post({3
    //   method: 'post',
    //   url: 'http://192.168.6.56:9000/signIn',
    //   data: params,
    //   headers: {
    //     'Content-Type': 'application/json',
    //     'Access-Control-Allow-Origin': '*'
    //   }
    // }).then(res => {
    //   console.log('resresrs')  
    //   console.log(res)
    // })

    // Axios.post('http://10.232.172.11:9000/user/login', params).then(res => {
    //   console.log('bbb')
    //   console.log(res)
    // })

    Axios({
      method: 'get',
      baseURL: 'http://10.232.172.11:9000/get5Data',
      headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
          },
    }).then (res => {
      console.log(res)
    }).catch(err => {
      console.log(err)
    })

    // Axios.get('http://10.232.172.11:9000/get5Data').then(res => {
    //   console.log('bbb')
    //   console.log(res)
    // })

    // Axios.get('http://192.168.6.56:9000').then(res => {
    //   console.log(res)
    // }).catch(err => {
    //   console.log(err)
    // })
  }

  render () {
    const { flatListData } = this.state
    return (
      
      <ScrollView
        style={[ styles.scrollViewStyles ]}
        showsHorizontalScrollIndicator={false}>
          <StatusBar backgroundColor="blue" barStyle="dark-content" />
        <View style={{ 
          shadowOffset: {  
            width: 5,  
            height: 5,  
          },
          shadowColor: 'black',
          shadowOpacity: 0.1,
          justifyContent: 'center', 
          alignItems: 'center',
          shadowRadius: 10,
        }}>
          <SearchBox />
        </View>

        <View style={[styles.trendingNowWrapperStyles]}>
          <Text style={[
            heading.large,
            styles.trendingNowStyles, 
            textAttribute.bold
          ]}>Trending Now</Text>
          <Text style={[styles.seeAllStyles]}>See all</Text>
        </View>

        <FlatList
          style={styles.flatListContainer}
          horizontal={true}
          data={flatListData}
          keyExtractor={(item, index) => index.toString()}
          renderItem={this.renderFlatListItems}
          showsHorizontalScrollIndicator={false}
        />

        <View style={[styles.trendingNowWrapperStyles]}>
          <Text style={[
            heading.large,
            styles.trendingNowStyles, 
            textAttribute.bold
          ]}>Popular in Palmerah</Text>
          <Text style={[styles.seeAllStyles]}>See all</Text>
        </View>

        <FlatList
          style={styles.flatListContainer}
          horizontal={true}
          data={flatListData}
          keyExtractor={(item, index) => index.toString()}
          renderItem={this.renderFlatListItems}
          showsHorizontalScrollIndicator={false}
        />

        <View style={[styles.trendingNowWrapperStyles]}>
          <Text style={[
            heading.large,
            styles.trendingNowStyles, 
            textAttribute.bold
          ]}>Affordable Courts</Text>
          <Text style={[styles.seeAllStyles]}>See all</Text>
        </View>

        <FlatList
          style={styles.flatListContainer}
          horizontal={true}
          data={flatListData}
          keyExtractor={(item, index) => index.toString()}
          renderItem={this.renderFlatListItems}
          showsHorizontalScrollIndicator={false}
        />
      </ScrollView>
    )
  }
}

const styles = {
  trendingNowStyles: {
    
    
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
  },
  scrollViewStyles: {

  }
}

export default HomePage