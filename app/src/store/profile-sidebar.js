import { createAction, createSlice } from '@reduxjs/toolkit'
import { httpConfig } from '../utils/http-config'

const slice = createSlice({
  name: "profileSidebar",
  initialState: [],
  reducers: {
    getProfileByProfileId : (profileSidebar, action) => {
      return action.payload
    },
  }
})

const {getProfileByProfileId} = slice.actions

export const fetchProfileByProfileId = () => async (dispatch) => {
  const {data} = await httpConfig('apis/profile')
  dispatch(getProfileByProfileId(data))
}

export default slice.reducer