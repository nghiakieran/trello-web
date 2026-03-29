import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

import authorizeAxiosInstance from '~/utils/authorizeAxios'
import { API_ROOT } from '~/utils/constants'

const initialState = {
  currentUser: null
}

export const loginUserAPI = createAsyncThunk(
  'user/loginUserAPI',
  async (data) => {
    const response = await authorizeAxiosInstance.post(`${API_ROOT}/v1/users/login`, data)
    return response.data
  }
)

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(loginUserAPI.fulfilled, (state, action) => {
      state.currentUser = action.payload
    })
  }
})

// export const { } = userSlice.actions
export const selectCurrentuser = (state) => {
  return state.user.currentuser
}
export const userReducer = userSlice.reducer
