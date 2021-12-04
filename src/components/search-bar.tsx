import React from 'react';
import {
  VStack,
  Input,
  Button,
  IconButton,
  Icon,
  Text,
  NativeBaseProvider,
  Center,
  Box,
  Divider,
  Heading,
} from 'native-base';
import { Ionicons } from '@expo/vector-icons';

export default function SearchBar() {
  return (
    <VStack
      space={5}
      width="100%"
      divider={
        <Box px="2">
          <Divider />
        </Box>
      }>
      <VStack width="100%" space={5} alignItems="center">
        <Heading fontSize="lg">Cupertino</Heading>
        <Input
          placeholder="Search"
          variant="filled"
          width="100%"
          bg="gray.100"
          borderRadius="10"
          py="1"
          px="2"
          placeholderTextColor="black"
          _hover={{ bg: 'gray.200', borderWidth: 0 }}
          borderWidth="0"
          InputLeftElement={
            <Icon
              ml="2"
              size="5"
              color="gray.500"
              as={<Ionicons name="ios-search" />}
            />
          }
        />
      </VStack>
    </VStack>
  );
}

