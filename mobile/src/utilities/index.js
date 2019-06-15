import React from 'react'

export const renderFlatListItems = ({ Component, props }) => {
  return (<Component {...props} />)
}

export const location = {
  getCurrentPosition: () => {
    navigator.geolocation.getCurrentPosition(
      position => {
        const location = JSON.stringify(position)
        return location
      },
      error => Alert.alert(error.message),
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
    )
  }
}