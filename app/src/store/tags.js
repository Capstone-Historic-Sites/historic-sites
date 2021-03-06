import { createAction, createSlice } from '@reduxjs/toolkit'
import { httpConfig } from '../utils/http-config'

const slice = createSlice({
  name: "tags",
  initialState: [],
  reducers: {
    getAllTags : (tags, action) => {
      return action.payload
    },
    getHistoricSiteTagsByHistoricSiteId : (tags, action) => {
      return action.payload
    }
  }
})

export const { getAllTags, getHistoricSiteTagsByHistoricSiteId } = slice.actions

export const fetchAllTags = () => async (dispatch) => {
  const {data} = await httpConfig('/apis/tag')
  dispatch(getAllTags(data))
}

export const fetchHistoricSiteTagsByHistoricSiteId = (historicSiteId) => async  (dispatch) => {
  const {data} = await httpConfig(`/apis/tag/${historicSiteId}`)
  dispatch(getHistoricSiteTagsByHistoricSiteId(data))
}

export default slice.reducer