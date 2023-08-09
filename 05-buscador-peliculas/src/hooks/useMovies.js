import { useRef, useState, useMemo, useCallback } from 'react'
import { searchMovies } from '../services/movies'

export function useMovies ({ search, sort }) {
  const [movies, setMovies] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const previusSearch = useRef(search)

  const getMovies = useCallback(
    async ({ search }) => {
      if (search === previusSearch.current) return

      try {
        setLoading(true)
        setError(null)
        previusSearch.current = search
        const newMovies = await searchMovies({ search })
        setMovies(newMovies)
        setLoading(false)
      } catch (e) {
        setError(e.message)
      } finally {
        setLoading(false)
      }
    }, [])

  // la diferencia de hacerlo con useMemo y useCallback es que a useCallback directamente le
  // pasamos la funcion, mientras que con useMemo debemos retornar la funcion a ejecutar
  /*
  useMemo(() => {
    return function()
  },[])
  */
  /*
    useCallback(
      function(){
        codeToExecute
    }, [])
  */

  // basicamente el useCallback es una sintaxis azucarada del useMemo

  const sortedMovies = useMemo(() => {
    return sort
      ? [...movies].sort((a, b) => a.title.localeCompare(b.title))
      : movies
  }, [movies, sort])

  return { movies: sortedMovies, getMovies, loading, error }
}
