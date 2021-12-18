import axios, { AxiosResponse } from "axios";

interface APIprops {
  service: string,
  coordinates: {
    longitude: number,
    latitude: number
  }
}

export async function getPlacesData({ service, coordinates }: APIprops) {
  return axios.request({
    method: 'GET',
    url: `https://travel-advisor.p.rapidapi.com/${service}/list-by-latlng`,
    params: {
      latitude: coordinates.latitude,
      longitude: coordinates.longitude,
      limit: '30',
      currency: 'USD',
      distance: '2',
      open_now: 'false',
      lunit: 'km',
      lang: 'en'
    },
    headers: {
      'x-rapidapi-host': 'travel-advisor.p.rapidapi.com',
      'x-rapidapi-key': '82aa3c8703msh03c3c841c171ee8p14d689jsn7172ca56ba59'
    }
  }
  ).then(function({ data: { data } }: AxiosResponse) {
    return data;
  }).catch(function(error) {
    console.error(error);
  });
}
