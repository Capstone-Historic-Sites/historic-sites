import { createAction, createSlice } from '@reduxjs/toolkit'
import {httpConfig} from '../utils/http-config'

const slice = createSlice({
  name: 'historicSite',
  initialState: [],
  reducers:  {
    getAllHistoricSites : (historicSite, action) => {
      return action.payload
    },
    getHistoricSiteByHistoricSiteId : (historicSite, action) => {
      return action.payload
    },
    getHistoricSiteBySearch : (historicSite, action) => {
      return action.payload
    }
  }
})

export const {getAllHistoricSites, getHistoricSiteByHistoricSiteId, getHistoricSiteBySearch} = slice.actions

export const fetchAllHistoricSites = () => async (dispatch) => {
  const {data} = await httpConfig('/apis/historic-site')
  dispatch(getAllHistoricSites(data))
}

export const fetchHistoricSiteByHistoricSiteId = (historicSiteId) => async (dispatch) => {
  const {data} = await httpConfig(`/apis/historic-site/${historicSiteId}`)
  dispatch(getHistoricSiteByHistoricSiteId(data))
}

export const fetchHistoricSiteBySearch = (search) => async (dispatch) => {
  const {data} = await httpConfig(`/apis/historic-site/search/${search}`)
  dispatch(getHistoricSiteBySearch(data))
}

export default slice.reducer