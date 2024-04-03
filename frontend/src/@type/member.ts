import { Categories } from './preference'

export interface Token {}

export interface OnBoardingQuestion {
  text: string
  category: string
}
export interface UserFavoriteInfo {
  first: Categories
  second: Categories
  third: Categories
}

export interface UserData {
  name: string
  gender: string
  preference: UserFavoriteInfo
}

export interface UserProfile {
  nickname: string
  image: string
}

export interface CoupleUserProfile {
  nickname: string
  image: string
  coupleNickname: string
}