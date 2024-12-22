export default {
  getPageData: (state) => (pageNumber) => {
    return state.pages.find((page) => page.numberPage === pageNumber)
  },
  getAllPages: (state) => state.pages,
}
