import React, { useState, useEffect } from 'react'
import {
  Select,
  VStack,
  CheckIcon,
  Pressable,
  ScrollView,
  useColorModeValue
} from 'native-base'
import { getPlacesData } from '../api/API'
import Map from '../components/map'
import SearchBar from '../components/search-bar'
import AnimatedColorBox from '../components/animated-color-box'
import ThemeToggle from '../components/theme-toggle'
import DataList from '../components/data-list'
import { categories, coordinates, mapProps } from '../components/interfaces'


export default function MainScreen() {

  const [places, setPlaces] = useState<object[]>([])
  const [service, setService] = useState<categories>('restaurants')
  const [coordinates, setCoordinates] = useState<coordinates>({ latitude: 12.91285, longitude: 100.87808 })

  useEffect(() => {
    console.log(coordinates)
    setPlaces([])
    getPlacesData({ service, coordinates }).then((data) => {
      setPlaces(data)
    })
  }, [service, coordinates])

  return (
    <AnimatedColorBox
      flex={1}
      bg={useColorModeValue('warmGray.50', 'warmGray.900')}
      w="full"
    >
      <Map
        setCoordinates={setCoordinates}
        coordinates={coordinates}
      />
      <ScrollView
        borderTopLeftRadius="20px"
        borderTopRightRadius="20px"
        showsVerticalScrollIndicator={false}
        bg={useColorModeValue('warmGray.50', 'primary.900')}
        mt="-30px"
        pt="30px"
        p={4}
        style={{
          shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: 5,
          },
          shadowOpacity: 0.39,
          shadowRadius: 8.30,
          elevation: 13,
        }}
      >
        <VStack space={5} pb={10} alignItems="center">
          <SearchBar setCoordinates={setCoordinates} />
          <Select
            selectedValue={service}
            minWidth="xs"
            accessibilityLabel="Choose Service"
            placeholder="Choose Service"
            _selectedItem={{
              bg: "teal.600",
              endIcon: <CheckIcon size="5" />,
            }}
            mt={1}
            onValueChange={(itemValue) => setService(itemValue)}
          >
            <Select.Item label="Restaurants" value="restaurants" />
            <Select.Item label="Hotels" value="hotels" />
            <Select.Item label="Attractions" value="attractions" />
          </Select>
          {console.log(places)}
          <DataList places={places} />
        </VStack>
      </ScrollView>
    </AnimatedColorBox>
  )
}
