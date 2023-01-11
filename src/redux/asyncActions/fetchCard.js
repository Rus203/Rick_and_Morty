import { addCard } from '../actions/card'
import axios from 'axios'

const fetchCard = (currentPage) => {
  return function (dispatch) {
    axios.get('https://rickandmortyapi.com/api/character/')
      .then(res => {
        if (res.data.info.pages > currentPage) {
          axios.get(`https://rickandmortyapi.com/api/character/?page=${currentPage}`)
            .then(response => response.data.results.map((item) => dispatch(addCard({ image: item.image, name: item.name, status: item.status, type: item.type }))))
        }
      })
  }
}

export default fetchCard
