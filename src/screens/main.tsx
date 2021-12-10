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
import Card from '../components/card'
import SearchBar from '../components/search-bar'
import AnimatedColorBox from '../components/animated-color-box'
import ThemeToggle from '../components/theme-toggle'

type categories = 'restaurants' | 'hotels' | 'attractions'

interface coordinates {
  latitude: number,
  longitude: number
}

interface mapProps {
  setCoordinates: React.Dispatch<React.SetStateAction<object>>,
  setBounds: React.Dispatch<React.SetStateAction<object>>,
  coordinates: coordinates
}

export default function MainScreen() {

  const [places, setPlaces] = useState<object[]>([])
  const [service, setService] = useState<categories>('restaurants')
  const [coordinates, setCoordinates] = useState<coordinates | {}>({})
  const [bounds, setBounds] = useState<object | null>(null)

  useEffect(() => {
    console.log(coordinates, bounds)
    getPlacesData().then((data) => {
      setPlaces(data)
    })
  }, [])

  return (
    <AnimatedColorBox
      flex={1}
      bg={useColorModeValue('warmGray.50', 'warmGray.900')}
      w="full"
    >
      <Map
        setCoordinates={setCoordinates}
        setBounds={setBounds}
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
          <SearchBar />
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
          <ThemeToggle />
          {console.log(places)}
          {
            places?.map((place, i) => (
              <Pressable>
                <Card key={i} place={place} />
              </Pressable>
            ))
          }
        </VStack>
      </ScrollView>
    </AnimatedColorBox>
  )
}
