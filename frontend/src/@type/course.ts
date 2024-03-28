export interface Place {
  name: string
  placeId: number
  location: string
  latlng: number[]
}
export interface DateCourse {
  courseTitle: string
  placeList: Place[]
}
export interface Station {
  line: string[]
  stationName: string
  point: LatLng
}
export interface LatLng {
  lat: number
  lng: number
}
