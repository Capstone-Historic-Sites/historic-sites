import {createAction, createSlice} from '@reduxjs/toolkit'
import {httpConfig} from '../utils/http-config'

const slice = createSlice({
  name: 'images',
  initialState: [],
  reducers: {
    getAllImages : (images, action) => {
      return action.payload
    },
    getImageByHistoricSiteId : (images, action) => {
      return action.payload
    }
  }
})

export const {getAllImages, getImageByHistoricSiteId} = slice.actions

export const fetchAllImages = () => async (dispatch) => {
  const {data} = await httpConfig('/apis/image/')
  dispatch(getAllImages(data))
}

export const fetchHistoricSiteImages = (historicSiteId) => async (dispatch) => {
  const {data} = await httpConfig(`/apis/image/historic-site/${historicSiteId}`)
  dispatch(getImageByHistoricSiteId(data))
}

export default slice.reducer