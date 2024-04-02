export function debounce(func, timeout = 300) {
<<<<<<< HEAD
=======
  // 클로저를 활용해 timer 변수에 계속 접근 가능
>>>>>>> 0b3029b1a41f4081998bf5df8f60d339391b7e47
  let timer
  return (...args) => {
    clearTimeout(timer)
    timer = setTimeout(() => {
<<<<<<< HEAD
      func.apply(this, args)
=======
      func.apply(this, args) //args를 배열 형태로 전달
>>>>>>> 0b3029b1a41f4081998bf5df8f60d339391b7e47
    }, timeout)
  }
}
