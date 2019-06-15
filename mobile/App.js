import React from 'react'
import Header from './src/components/common/Header'
import Login from './src/views/login/Login'
import InitialPage from './src/views/InitialPage'
import HomePage from './src/views/home/HomePage'
import SignUp from './src/views/signUp/SignUp'
import Profile from './src/views/profile/Profile'
import { StyleSheet, Text, View } from 'react-native'
import { 
  Scene,
  Router,
} from 'react-native-router-flux'
import {
  colors
} from './src/constants/colors'
import Schedules from './src/views/schedules/Schedules'
import CourtsResult from './src/views/courts/CourtsResult'
import CourtsDetail from './src/views/courts/courtsDetail/CourtsDetail'
import CourtsBook from './src/views/courts/courtsDetail/CourtsBook'
import Payment from './src/views/payment/Payment'

let style = StyleSheet.create({
  tabBarStyle: {
    borderTopWidth : .5,
    borderColor    : '#b7b7b7',
    backgroundColor: colors.defaultNavigation,
    opacity        : 1
  }
})

export default function App() {
  return (
    <Router>
      <Scene key="root">
        <Scene key="initialPage" component={ InitialPage } hideNavBar />
        <Scene key="login" component={ Login } title="Login" />
        <Scene key="signUp" component={ SignUp } title="Sign Up" />
        <Scene key="homepage" key="myTabBar" tabs={true} component={ HomePage } hideNavBar />

        <Scene key="courtsResult" key="courtsResult" title="Search Result" component={ CourtsResult } />
        <Scene key="courtsDetail" key="courtsDetail" title="CourtsDetail" component={ CourtsDetail } hideNavBar />
        <Scene key="courtsBook" key="courtsBook" title="Book a Court" component={ CourtsBook } />

        <Scene key="payment" key="payment" title="Payment" component={ Payment } />

        <Scene key='tabBar' tabs={true} tabBarStyle={[style.tabBarStyle]} initial hideNavBar>
          <Scene key='home' title='Home' component={HomePage} />
          <Scene key='Schedules' title='Schedules' component={Schedules} />
          <Scene key='Groups' title='Groups' component={Schedules} />
          <Scene key='Profile' title='Profile' component={Profile} />
        </Scene>
      </Scene>
    </Router>
  )
}