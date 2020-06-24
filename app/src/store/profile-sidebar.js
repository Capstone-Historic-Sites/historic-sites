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
  const {data} = await httpConfig('apis/profile/d88793bf-b33d-11ea-bb68-0242c0a82002')
  dispatch(getProfileByProfileId(data))
}

export default slice.reducer