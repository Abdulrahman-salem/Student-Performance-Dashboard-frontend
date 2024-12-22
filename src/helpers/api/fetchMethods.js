const urlAndOptionsToFetchData = async (url, options) => {
  try {
    const response = await fetch(url, options)
    if (response.ok) {
      return await response.json()
    }
  } catch (error) {
    console.log(error)
  }
}

export const getData = async (url) => {
  return await urlAndOptionsToFetchData(url, { method: 'GET' })
}
