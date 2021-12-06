import * as React from 'react'
import {
  Select,
  CheckIcon,
  VStack,
  ScrollView,
  useColorModeValue
} from 'native-base'
import Card from '../components/card'
import SearchBar from '../components/search-bar'
import AnimatedColorBox from '../components/animated-color-box'
import Map from '../components/map'

export default function MainScreen() {
  let [service, setService] = React.useState("restaurants")
  return (
    <AnimatedColorBox
      flex={1}
      bg={useColorModeValue('warmGray.50', 'warmGray.900')}
      w="full"
    >
      <Map />
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
          <Card />
          <Card />
          <Card />
        </VStack>
      </ScrollView>
    </AnimatedColorBox>
  )
}
