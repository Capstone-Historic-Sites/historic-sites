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
      return action.payload
    }
  }
})

export const {getAllHistoricSites, getHistoricSiteByHistoricSiteId} = slice.actions

export const fetchAllHistoricSites = () => async (dispatch) => {
  const {data} = await httpConfig('/apis/historic-site')
  dispatch(getAllHistoricSites(data))
}

export const fetchHistoricSiteByHistoricSiteId = () => async (dispatch) => {
  const {data} = await httpConfig('/apis/historic-site/7f2bfb47-b340-11ea-ad34-0242c0a82003')
  dispatch(getHistoricSiteByHistoricSiteId(data))
}

export default slice.reducer