import { atom } from 'recoil'

export const bottomSheetShowState = atom({
  key: 'bottomSheetShowState', // unique ID (with respect to other atoms/selectors)
  default: false, // default value (aka initial value)
})
