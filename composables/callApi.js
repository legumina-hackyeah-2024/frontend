export const callApi = async (url, options, token = '') => {
  const config = useRuntimeConfig();

  let mergedOptions = {
    headers: {
      // 'access-token': `${token}`,
    },
    baseURL: config.public.base_URL,
    ...options
  }

  return useFetch(url, mergedOptions);
}
