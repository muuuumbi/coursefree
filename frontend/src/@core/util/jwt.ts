export function getJWT(key: string) {
  return localStorage.getItem(key)
}
