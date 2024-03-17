import { CSSProperties } from 'react'

export type BottomSheet = {
  height?: CSSProperties['height']
  title: string
  children?: React.ReactNode
  handler: any
}
