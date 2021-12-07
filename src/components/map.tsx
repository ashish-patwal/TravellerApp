import React from 'react'
import { Box } from 'native-base'
import MapView from 'react-native-maps'
import * as Location from 'expo-location'

class TrueMap extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      coordinates: null
    }
  }

  componentDidMount() {
    this.loadData()
  }

  async loadData() {
    const location = await Location.getCurrentPositionAsync({})
    this.setState({
      coordinates: {
        latitude: location.coords.latitude,
        longitude: location.coords.longitude
      }
    })
  }

  render() {
    if (this.state.coordinates) {
      return <Box h="40%" color="red"></Box>
    }

    return <MapView
      style={{ height: "40%" }}
      initialregion={this.state.coordinates}
    />
  }
}

export default function Map({ setCoordinates, setBounds, coordinates }) {
  return (
    <MapView
      style={{ height: "35%" }}
      initialRegion={{
        latitude: coordinates.latitude,
        longitude: coordinates.longitude,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      }}
    />
  )
}

