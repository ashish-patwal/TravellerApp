import React from "react"
import {
  Box,
  Badge,
  Heading,
  AspectRatio,
  Image,
  Link,
  Icon,
  Text,
  Center,
  HStack,
  Stack,
} from "native-base"
import { Entypo } from '@expo/vector-icons'

export default function Card({ place }) {
  return (
    <Box
      maxW="80"
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
        {place.description ? (
          <Text fontWeight="400">
            {place.description}
          </Text>
        ) : false
        }
        <HStack space={2}>
          <Link href={place.web_url}><Badge alignItems="center" rounded="md" colorScheme="violet">Trip-Advisor</Badge></Link>
          <Link href={place.website}><Badge alignItems="center" rounded="md" colorScheme="violet">Website</Badge></Link>
        </HStack>
        <Box
          p={2}
          rounded="sm"
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
        <Text>
          {place?.cuisine?.map(({ name }, i: number) => (
            <Badge key={i} rounded="md" colorScheme="secondary">{name}</Badge>
          ))}</Text>
      </Stack>
    </Box>
  )
}
