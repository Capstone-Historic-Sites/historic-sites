import { createAction, createSlice } from '@reduxjs/toolkit'
import { httpConfig } from '../utils/http-config'

const slice = createSlice({
  name: "tags",
  initialState: [],
  reducers: {
    getAllTags : (posts, action) => {
      return action.payload
    },
    getHistoricSiteTagsByHistoricSiteId : (posts, action) => {
      return action.payload
    }
  }
})

export const { getAllTags, getHistoricSiteTagsByHistoricSiteId } = slice.actions

export const fetchAllTags = () => async (dispatch) => {
  const {data} = await httpConfig('/apis/tag')
  dispatch(getAllTags(data))
}

export const fetchHistoricSiteTagsByHistoricSiteId = () => async  (dispatch) => {
  const {data} = await httpConfig('/apis/tag')
  dispatch(getHistoricSiteTagsByHistoricSiteId(data))
}

export default slice.reducer