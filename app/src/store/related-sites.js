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

export const fetchHistoricSiteByTagId = (tags) => async (dispatch) => {
  //let historicSites = []
  let {data} = await httpConfig(`/apis/historic-site/tagId/${tags[0].tagId}`)
  console.log(data)
  //historicSites.push(data)
  //console.log(historicSites)
  // await tags.map(async tag => {
  //   let {data} = await httpConfig(`/apis/historic-site/tagId/${tag.tagId}`)
  //   console.log(data)
  //   historicSites.push(data)
  //   console.log(historicSites)
  // })
  dispatch(getHistoricSiteByTagId(data))
}

export default slice.reducer