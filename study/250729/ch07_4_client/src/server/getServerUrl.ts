export const getServerUrl = (path: string) => {
  const host = 'http://0.0.0.0:3000'
  return [host, path].join('')
}
