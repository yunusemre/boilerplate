import axios from "axios"

const httpAuthorizationErrorCode = 401
const httpForbiddenErrorCode = 403

const axiosInterceptor = () => {
  const requestSuccess = config => {
    if (isAuthenticated) {
      config.headers["Content-Type"] = "application/json; charset=UTF-8"
      config.headers["Authorization"] = "Bearer xxx"
    }
    config.timeout = 60000
    return config
  }
  const responseSuccess = response => {
    return response
  }

  const responseError = error => {
    let statusCode = error.response ? error.response.status : 0

    if (error.status == httpForbiddenErrorCode) {
      return ""
    } else if (statusCode == httpAuthorizationErrorCode) {
      if (isAuthenticated) {
        isAuthenticated = false
        window.location.href = "/login"
      }
    }
    return Promise.reject(error.message)
  }

  axios.interceptors.request.use(requestSuccess)
  axios.interceptors.response.use(responseSuccess, responseError)
}

export default axiosInterceptor
