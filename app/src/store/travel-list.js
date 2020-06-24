import { createAction, createSlice } from '@reduxjs/toolkit'
import {httpConfig} from '../utils/http-config'

const slice = createSlice({
  name: 'travelList',
  initialState: [],
  reducers:  {
    getTravelListByProfileId : (travelList, action) => {
      return action.payload
    },
    getTravelListByForeignKeys : (travelList, action) => {
      return action.payload
    }
  }
})

export const {getTravelListByProfileId, getTravelListByForeignKeys} = slice.actions

export const fetchTravelListByProfileId = () => async (dispatch) => {
  const {data} = await httpConfig('/apis/travel-list')
  dispatch(getTravelListByProfileId(data))
}

export const fetchTravelListByForeignKeys = (historicSiteId) => async (dispatch) => {
  const {data} = await httpConfig(`/apis/travel-list/${historicSiteId}`)
  dispatch(getTravelListByProfileId(data))
}

export default slice.reducer