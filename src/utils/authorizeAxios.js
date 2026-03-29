import axios from 'axios'
import { toast } from 'react-toastify'
import { interceptorLoadingElements } from '~/utils/formatters'

let authorizeAxiosInstance = axios.create()

authorizeAxiosInstance.defaults.timeout = 1000 * 60 * 10
authorizeAxiosInstance.defaults.withCredentials = true

// Add a request interceptor
authorizeAxiosInstance.interceptors.request.use((config) => {
  interceptorLoadingElements(true)

  return config
}, (error) => {
  return Promise.reject(error)
}
)

// Add a response interceptor
authorizeAxiosInstance.interceptors.response.use((response) => {
  interceptorLoadingElements(false)
  // Any status code that lie within the range of 2xx cause this function to trigger
  // Do something with response data
  return response
}, (error) => {
  interceptorLoadingElements(false)
  // Any status codes that falls outside the range of 2xx cause this function to trigger
  // Do something with response error
  let errorMessage = error?.message
  if ( error.response?.data?.message ) {
    errorMessage = error.response.data.message
  }

  if (error.response?.status !== 410) {
    toast.error(errorMessage)
  }

  return Promise.reject(error)
})

export default authorizeAxiosInstance
