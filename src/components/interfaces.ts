export type categories = 'restaurants' | 'hotels' | 'attractions'

export interface coordinates {
  latitude: number,
  longitude: number
}

export interface mapProps {
  setCoordinates: React.Dispatch<React.SetStateAction<coordinates>>,
}

export interface placeData {
  places: object[] | null
}
