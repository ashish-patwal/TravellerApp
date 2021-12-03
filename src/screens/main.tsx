import * as React from 'react'
import {
  Text,
  Box,
  Center,
  VStack,
  ScrollView,
  useColorModeValue
} from 'native-base'
import ThemeToggle from '../components/theme-toggle'
import Card from '../components/card'
import SearchBar from '../components/search-bar'

export default function MainScreen() {
  return (
    <ScrollView
      borderTopLeftRadius="20px"
      borderTopRightRadius="20px"
      bg={useColorModeValue('warmGray.50', 'primary.900')}
      mt="-20px"
      pt="30px"
      p={4}
    >
      <Center _dark={{ bg: 'blueGray.900' }} _light={{ bg: 'blueGray.50' }} px={4} flex={1}>
        <VStack space={5} alignItems="center">
          <SearchBar />
          <Card />
          <Card />
          <Card />
          <ThemeToggle />
        </VStack>
      </Center>
    </ScrollView>
  )
}
