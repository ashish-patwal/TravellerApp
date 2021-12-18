import React from 'react'
import Card from '../components/card'
import { VStack } from 'native-base'
import { placeData } from '../components/interfaces'

export default function DataList({ places }: placeData) {
  return (
    <VStack>{
      places?.map((place, i: React.Key) => (
        <Card key={i} place={place} />
      ))}
    </VStack>
  )
}
