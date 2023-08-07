
export default function chunk<T> (array: T[], chunkSize: number) {
  return Array.from(
    { length: Math.ceil(array.length / chunkSize) },
    (_, i) => array.slice(i * chunkSize, (i + 1) * chunkSize)
  )
}
