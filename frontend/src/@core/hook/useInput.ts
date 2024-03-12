import { useState } from 'react'

/**
 * input 태그의 값을 state로 관리하는 방법
 * @param state
 */
const useInput = (data: string) => {
  const [state, setState] = useState<string>(data)

  function onChangeHandler(e: React.ChangeEvent<HTMLInputElement>) {
    if (e.target) {
      setState(e.target.value)
    }
  }

  return { state, onChangeHandler }
}
export default useInput
