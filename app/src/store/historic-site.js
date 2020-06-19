import { createAction, createSlice } from '@reduxjs/toolkit'
import {httpConfig} from '../utils/http-config'

const slice = createSlice({
  name: 'historicSite',
  initialState: [],
  reducers:  {
    getAllHistoricSites : (posts, action) => {
      return action.payload
    },
    getHistoricSiteByHistoricSiteId : (posts, action) => {
      posts.push(action.payload)
    }
  }
})

export const {getAllHistoricSites, getHistoricSiteByHistoricSiteId} = slice.actions

export const fetchAllHistoricSites = () => async (dispatch) => {
  const {data} = await httpConfig('/apis/historic-site')
  dispatch(getAllHistoricSites(data))
}

export default slice.reducer