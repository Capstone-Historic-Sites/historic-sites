import { createAction, createSlice } from '@reduxjs/toolkit'
import {httpConfig} from '../utils/http-config'

const slice = createSlice({
  name: 'relatedSites',
  initialState: [],
  reducers:  {
    getHistoricSiteByTagId : (relatedSites, action) => {
      return action.payload
    }
  }
})

export const {getHistoricSiteByTagId} = slice.actions

export const fetchHistoricSiteByTagId = (tags) => (dispatch) => {
  let historicSites = []
  tags.forEach(tag => {
    httpConfig(`/apis/historic-site/tagId/${tag.tagId}`).then(reply => {
      let {data} = reply
      console.log(data)
      historicSites.push(data)
    })
  })
  dispatch(getHistoricSiteByTagId(historicSites))
}

export default slice.reducer