import usePromise from './usePromise';

export default function useFetch<T = any>(url: string) {
  return usePromise<T, any>(fetch, (data: Response) => data.json() as T, url);
}
