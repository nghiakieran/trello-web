import axios from 'axios'
import { toast } from 'react-toastify'

import { interceptorLoadingElements } from '~/utils/formatters'
import { refreshTokenAPI } from '~/apis'
import { loggoutUserAPI } from '~/redux/slice/userSlice'

let axiosReduxStore
export const injectStore = mainStore => { axiosReduxStore = mainStore }

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

// Cách để chỉ gọi 1 refresh token 1 lần khi có nhiều request bị lỗi access token expired cùng lúc
// ránh việc gọi nhiều lần API refresh token dẫn đến tình trạng thừa
let refreshTokenPromise = null

// Add a response interceptor
authorizeAxiosInstance.interceptors.response.use((response) => {
  interceptorLoadingElements(false)
  // Any status code that lie within the range of 2xx cause this function to trigger
  // Do something with response data
  return response
}, (error) => {
  interceptorLoadingElements(false)

  // Handle auto refresh token
  if (error.response?.status === 401) {
    axiosReduxStore.dispatch(loggoutUserAPI(false))
  }

  // Lay cac api dang bi loi thong qua error.config
  const originalRequests = error.config

  if (error.response?.status === 410 && !originalRequests._retry) {
    originalRequests._retry = true

    if (!refreshTokenPromise) {
      refreshTokenPromise = refreshTokenAPI()
        .then(data => {
          return data?.accessToken
        })
        .catch((_error) => {
          // Nếu gặp bất kì lỗi nào khi refresh token thì sẽ tự động loggout user luôn
          axiosReduxStore.dispatch(loggoutUserAPI(false))
          return Promise.reject(_error)
        })
        .finally(() => {
          refreshTokenPromise = null
        })
    }

    // eslint-disable-next-line no-unused-vars
    return refreshTokenPromise.then((accessToken) => {
      // B1: Đối với trường hợp dự án có sử dụng accessToken trong localstorage thì sẽ thêm logic ở đây
      // B2: Để gọi lại api đang bị lỗi sau khi đã refresh token thành công
      return authorizeAxiosInstance(originalRequests)
    })
  }
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
