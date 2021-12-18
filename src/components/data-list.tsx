import React from 'react'
import Card from '../components/new_card'
import { VStack } from 'native-base'
import { placeData } from '../components/interfaces'

export default function DataList({ places }: placeData) {
  return (
    <VStack space={5} pb={10} alignItems="center">{
      places?.map((place, i: React.Key) => (
        <Card key={i} place={place} />
      ))}
    </VStack>
  )
}
