import { UseFetchOptions } from '#app'

export default function useApiFetch<T> (url: string, options: UseFetchOptions<T> = {}) {
  const config = useRuntimeConfig()

  const defaults: UseFetchOptions<T> = {
    baseURL: config.public.baseURL
  }

  return useFetch(url, Object.assign(defaults, options))
}
