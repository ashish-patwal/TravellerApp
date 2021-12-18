import React, { useEffect, useState } from 'react'
import { Box } from 'native-base'
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps'
import * as Location from 'expo-location'

const Map = ({ setCoordinates, coordinates }) => {

  return (
    <MapView
      style={{ height: "35%" }}
      provider={PROVIDER_GOOGLE}
      showsTraffic={true}
      initialRegion={{
        latitude: 37.78825,
        longitude: -122.4324,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      }}
    />
  )
}

export default Map
