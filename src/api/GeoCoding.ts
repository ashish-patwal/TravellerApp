import axios, { AxiosResponse } from "axios";

export async function GeoCode(query: string) {

  const access_key = '171ba20b815ec1df5ee62b10a7c4c18b'

  return axios.request({
    method: 'GET',
    url: 'http://api.positionstack.com/v1/forward',
    params: {
      access_key: access_key,
      query: query
    }
  }).then(function({ data: { data } }: AxiosResponse) {
    return data
  }).catch(function(error) {
    console.log(error)
  })
}
