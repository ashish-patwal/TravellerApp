import React from "react"
import {
  Box,
  Badge,
  Heading,
  AspectRatio,
  Image,
  Icon,
  Text,
  Center,
  HStack,
  VStack,
  Stack,
} from "native-base"
import { Entypo, Feather } from '@expo/vector-icons'

export default function Card({ place }) {
  return (
    <Box
      maxW="sm"
      rounded="lg"
      borderColor="coolGray.200"
      borderWidth="1"
      _dark={{
        borderColor: "coolGray.600",
        backgroundColor: "gray.700",
      }}
      _web={{
        shadow: 2,
        borderWidth: 0,
      }}
      _light={{
        backgroundColor: "gray.50",
      }}
    >
      <Box>
        <AspectRatio w="100%" ratio={16 / 9}>
          <Image
            rounded="lg"
            source={{
              uri: place.photo ? place.photo.images.large.url : "https://img.lovepik.com/element/40021/7866.png_860.png"
            }}
            alt={place.name ? place.name : "Not Available Right Now"}
          />
        </AspectRatio>
        <Center
          bg="violet.500"
          _dark={{
            bg: "violet.400",
          }}
          _text={{
            color: "warmGray.50",
            fontWeight: "700",
            fontSize: "xs",
          }}
          position="absolute"
          bottom="0"
          px="3"
          py="1.5"
        >
          PHOTOS
        </Center>
      </Box>
      <Stack p="4" space={2}>
        <Stack space={2}>
          <Heading size="md" ml="-1">
            {place.name ? place.name : "△ n̶ ̶e̶ ̶v̶ ̶e̶ ̶r̶ ̶( ͜。 ͡ʖ ͜。) ̶m̶ ̶i̶ ̶n̶ ̶d̶ ▼"}
          </Heading>
          {place.address && (
            <Text
              fontSize="xs"
              _light={{
                color: "violet.500",
              }}
              _dark={{
                color: "violet.400",
              }}
              fontWeight="500"
              ml="-0.5"
              mt="-1"
            >
              <Icon
                as={Entypo}
                name="location-pin"
                size="xs"
                _dark={{
                  color: "blueGray.500"
                }}
              />
              {place.address}
            </Text>
          )}
          {place.phone && (
            <Text
              fontSize="xs"
              _light={{
                color: "violet.500",
              }}
              _dark={{
                color: "violet.400",
              }}
              fontWeight="500"
              ml="-0.5"
              mt="-1"
            >
              <Icon
                as={Entypo}
                name="phone"
                size="xs"
                _dark={{
                  color: "blueGray.500"
                }}
              />
              {place.phone}
            </Text>
          )}
        </Stack>
        <Text fontWeight="400">
          Bengaluru (also called Bangalore) is the center of India's high-tech
          industry. The city is also known for its parks and nightlife.
        </Text>
        <Box
          p={2}
          rounded="lg"
          m={0}
          _light={{
            backgroundColor: "violet.500"
          }}
          _dark={{
            backgroundColor: "violet.400"
          }}
        >
          <HStack alignItems="center" space={4} justifyContent="space-between">
            <Text
              color="warmGray.50"
              _dark={{
                color: "warmGray.200",
              }}
              fontWeight="400"
            >
              Price
            </Text>
            <Text
              color="warmGray.50"
              _dark={{
                color: "warmGray.200",
              }}
              fontWeight="400"
            >
              {place.price_level ? place.price_level : "¯\\_(ツ)_/¯"}
            </Text>
          </HStack>
          <HStack alignItems="center" space={4} justifyContent="space-between">
            <Text
              color="warmGray.50"
              _dark={{
                color: "warmGray.200",
              }}
              fontWeight="400"
            >
              Ranking
            </Text>
            <Text
              color="warmGray.50"
              _dark={{
                color: "warmGray.200",
              }}
              fontWeight="400"
            >
              {place.ranking ? place.ranking : "¯\\_(ツ)_/¯"}
            </Text>
          </HStack>
        </Box>
        {place?.awards?.map(award => (
          <HStack alignItems="center" space={4} justifyContent="space-between">
            <Image
              source={{
                uri: award.images.small
              }}
              alt={award.display_name}
            />
            <Text
              color="coolGray.600"
              _dark={{
                color: "warmGray.200",
              }}
              fontWeight="400"
            >{award.display_name}</Text>
          </HStack>
        ))}
        <HStack justifyContent="space-between">
          {place?.cuisine?.map(({ name }, i: number) => (
            <Badge key={i} rounded="md" colorScheme="secondary">{name}</Badge>
          ))}
        </HStack>
      </Stack>
    </Box>
  )
}
