import axios, { AxiosResponse, AxiosRequestConfig } from "axios";

const options: AxiosRequestConfig = {
  method: 'GET',
  url: 'https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary',
  params: {
    bl_latitude: '11.847676',
    tr_latitude: '12.838442',
    bl_longitude: '109.095887',
    tr_longitude: '109.149359',
  },
  headers: {
    'x-rapidapi-host': 'travel-advisor.p.rapidapi.com',
    'x-rapidapi-key': '5e0117beb2msh6d865fd75758213p174ee0jsndb659512de60'
  }
};

export async function getPlacesData() {
  return axios.request(options).then(function({ data: { data } }: AxiosResponse) {
    return data;
  }).catch(function(error) {
    console.error(error);
  });
}
