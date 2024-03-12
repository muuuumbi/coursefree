import worker from './Browser'

const initMockAPI = async (): Promise<void> => {
  if (import.meta.env.VITE_ENV === 'development') {
    console.log('hihi')
    worker.start()
  }
}
export default initMockAPI
