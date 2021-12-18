import React, { useState } from 'react';
import {
  VStack,
  Button,
  Input,
  Icon,
  Box,
  Divider,
  Heading,
} from 'native-base';
import { Ionicons } from '@expo/vector-icons';
import { GeoCode } from '../api/GeoCoding'

interface coordinates {
  latitude: number,
  longitude: number
}

interface mapProps {
  setCoordinates: React.Dispatch<React.SetStateAction<coordinates>>,
}

export default function SearchBar({ setCoordinates }: mapProps) {

  const [value, setValue] = useState("")

  const handleChange = (event: NativeSyntheticEvent<TextInputChangeEventData>) => setValue(event.target.value)

  return (
    <VStack width="100%" space={5} alignItems="center">
      <Heading fontSize="lg">Cupertino</Heading>
      <Input
        placeholder="Search"
        variant="filled"
        bg="gray.100"
        color="gray.500"
        borderRadius="10"
        width="100%"
        py="1"
        px="2"
        placeholderTextColor="gray.500"
        _web={{
          width: "sm"
        }}
        _hover={{ bg: 'gray.200', borderWidth: 0 }}
        borderWidth="0"
        onChange={handleChange}
        InputLeftElement={
          <Icon
            ml="2"
            size="5"
            color="gray.500"
            as={<Ionicons name="ios-search" />}
            onPress={() => {
              GeoCode(value).then((data) => {
                setCoordinates({
                  latitude: data.latitude || data[0].latitude,
                  longitude: data.longitude || data[0].longitude,
                }
                )
              }).catch(err => { console.error(err) })
            }}
          />
        }
      />
    </VStack>
  );
}

