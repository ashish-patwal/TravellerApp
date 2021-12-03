import React from 'react';
import {
  VStack,
  Input,
  Icon,
  Box,
  Divider,
  Heading,
  useColorModeValue
} from 'native-base';

import { Ionicons } from '@expo/vector-icons';

export default function SearchBar() {
  return (
    <VStack width="100%" space={5} alignItems="center">
      <Heading fontSize="lg">Traveller Buddy</Heading>
      <Input
        placeholder="Search"
        variant="filled"
        width="100%"
        bg={useColorModeValue("violet.500", "gray.100")}
        borderRadius="10"
        py="1"
        px="2"
        placeholderTextColor={useColorModeValue("warmGray.50", "gray.500")}
        _hover={{ bg: 'gray.200', borderWidth: 0 }}
        borderWidth="0"
        InputLeftElement={
          <Icon
            ml="2"
            size="5"
            color={useColorModeValue("warmGray.50", "gray.500")}
            as={<Ionicons name="ios-search" />}
          />
        }
      />
    </VStack>
  );
}
