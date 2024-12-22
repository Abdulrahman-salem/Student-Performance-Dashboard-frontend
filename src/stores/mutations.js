export default {
  setPagesData(state, data) {
    // console.log(state)
    // console.log(data)

    //   console.log(state.pages[0].numberPage)
    if (data.numberPage == 1) {
      state.maxPages = data.maxPages
      state.pages[0].studentsData = data.studentsData
      state.pages[0].numberPage = data.numberPage
      return
    }

    // state.pages.push({ studentsData: data.studentsData, numberPage: data.numberPage })
    state.pages = data
    // state.currentPage =
    console.log('1', state.pages)
  },
  setCurrentPage(state, data) {
    state.currentPage = data
  },
}
