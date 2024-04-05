import { lazy } from 'react'

export default function lazyFunc(path) {
  return lazy(() => import(path))
}
