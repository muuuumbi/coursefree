import { useEffect, useRef } from 'react'

export default function useObserver(observedItemsRef: any) {
  const observerRootRef = useRef<HTMLDivElement>(null)
  const ioRef = useRef(null)
  useEffect(() => {
    ioRef.current = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            // const ele = entry.target as any as HTMLElement
            alert(123)
          }
        })
      },
      {
        root: document.querySelector('.App'),
        threshold: 0.3,
        rootMargin: '-200px 0px -300px 0px',
      },
    )
    ioRef.current.root.style.border = '1px solid red'
    observedItemsRef.forEach(e => {
      //   console.log(e)
      ioRef.current.observe(e.current)
    })
  }, [])
  return { observerRootRef }
}
