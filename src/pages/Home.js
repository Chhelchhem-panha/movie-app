import { Container, Row, useAccordionButton } from 'react-bootstrap'
import LoadingView from '../components/LoadingView'
import Cards from './../components/Cards';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMovies } from '../redux/actions/movieActions';
import { useEffect, useState } from 'react';

export default function Home() {

  const dispatch = useDispatch()
  const {movies} = useSelector(state => state.movieR)
  const [limit , setLimit] = useState(12)
  const [offset, setOffset] = useSelector(1)

  useEffect(() => {
    dispatch(fetchMovies(offset, limit))
  })
  return (
    <Container>
        <h1 className='h1 mt-3'>Popular Movie</h1>
        <Row className='g-3 mt-3'>
            {
               movies.length == 0 ? <LoadingView /> : <Cards movies={movies} title="Little Kid" />
            }
        </Row>
        <section 
            className='mt-4 text-center'
            onClick={() => {
                setOffset(offset + 1)
                dispatch(fetchMovies(offset, limit))
            }}
        >
            <button className='btn btn-primary text-center btn-block text-center'>Load more</button>
        </section>
    </Container>
  )
}
