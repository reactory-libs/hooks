import { useCallback, useEffect, useState } from 'react';

export type usePromiseReturnType<T = any> = {
  data: T | null;
  loading: boolean;
  error: any;
  exec: Function;
};

export default function usePromise<T = any, P extends any[] = []>(
  callback: (...args: P) => Promise<T | any>,
  selector?: ((data: any) => T) | null,
  ...params: P
): usePromiseReturnType {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<any | null>(null);

  const exec = useCallback(() => {
    setLoading(true);
    setError(null);
    callback(...params)
      .then((data) => {
        setData(selector ? selector(data) : data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err);
        setLoading(false);
      })
  }, [callback, selector, params]);

  useEffect(() => {
    exec();
  }, [callback, selector, params]);

  return { data, loading, error, exec };
}
