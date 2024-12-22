import store from '../stores'

export const isDataFetchedBefore = async (pageNumber) => {
  const pageExists = store.state.pages.some((page) => page.numberPage === pageNumber)

  return pageExists
}
