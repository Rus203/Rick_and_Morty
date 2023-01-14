import axios from 'axios'

export async function fetchPage (pageNum) {
  const page = await axios.get(
    `https://rickandmortyapi.com/api/character/?page=${pageNum}`)
  return { [pageNum]: page.data.results }
}

export async function fetchTotalPages () {
  const pages = await axios.get('https://rickandmortyapi.com/api/character/')
  return pages.data.info
}
