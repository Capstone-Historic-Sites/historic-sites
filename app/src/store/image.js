import {createAction, createSlice} from '@reduxjs/toolkit'
import {httpConfig} from '../utils/http-config'

const slice = createSlice({
  name: 'image',
  initialState: [],
  reducers: {
    getImageByHistoricSiteId : (posts, action) => {
      return action.payload
    }
  }
})

export const {getImageByHistoricSiteId} = slice.actions

export const fetchHistoricSiteImages = (historicSiteId) => async (dispatch) => {
  const {data} = await httpConfig(`/apis/image/historic-site/${historicSiteId}`)
  dispatch(getImageByHistoricSiteId(data))
}