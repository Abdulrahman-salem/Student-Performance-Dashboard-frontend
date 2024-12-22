import { URL_STUDENTS } from '../constants/endpoints'
import { getData } from './fetchMethods'
import store from '../../stores'
import { isDataFetchedBefore } from '../isDataFetchedBefore'

const fetchMorePage = async (pageNumber) => {
  try {
    if (pageNumber) {
      const isDataFetched = await isDataFetchedBefore(pageNumber)

      if (isDataFetched) {
        store.dispatch('setCurrentPage', pageNumber)
      } else {
        const url = `${URL_STUDENTS}?nextPage=${pageNumber}`
        const response = await getData(url)

        if (response) {
          store.dispatch('setAddPage', response)

          return response
        }
      }
    }
  } catch (error) {
    console.error('Error fetching students data:', error)
    return null
  }
}

export default fetchMorePage
