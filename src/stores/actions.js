export default {
  setFirstPage({ commit }, newData) {
    commit('setPagesData', newData)
  },

  setAddPage({ commit, state }, newData) {
    // console.log('commit', commit)
    // console.log('state', state)
    // console.log('newData', newData)

    // console.log([...state.pages, newData])
    const updatedPages = [...state.pages, newData]
    // console.log(updatedPages)

    commit('setPagesData', updatedPages)
    const updatedCurrentPage = newData.numberPage
    commit('setCurrentPage', updatedCurrentPage)
  },
  setCurrentPage({ commit }, pageNumber) {
    // const updatedCurrentPage = pageNumber
    commit('setCurrentPage', pageNumber)
  },
}
