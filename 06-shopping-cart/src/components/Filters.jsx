import { useId } from 'react'
import './Filters.css'
import { useFilters } from '../hooks/useFilters'

export function Filters () {
  const { filters, setFilters } = useFilters()
  const minPriceFilterId = useId()
  const categoryFilterId = useId()

  const handleMinPrice = (event) => {
    setFilters((prev) => ({
      ...prev,
      minPrice: event.target.value
    }))
  }

  const handleChangeCategory = (event) => {
    setFilters((prev) => ({
      ...prev,
      category: event.target.value
    }))
  }

  return (
    <section className='filters'>
      <div>
        <label htmlFor={minPriceFilterId}>Precio mínimo:</label>
        <input
          type='range'
          id={minPriceFilterId}
          min='0'
          max='1000'
          onChange={handleMinPrice}
          value={filters.minPrice}
        />
        <span>{filters.minPrice}</span>
      </div>
      <div>
        <label htmlFor={categoryFilterId}>Categoría</label>
        <select id={categoryFilterId} onChange={handleChangeCategory}>
          <option value='all'>Todos</option>
          <option value='laptops'>Portátiles</option>
          <option value='smartphones'>Celulares</option>
          <option value='home-decoration'>Decoración</option>
          <option value='fragrances'>Perfumes</option>
          <option value='skincare'>SkinCare</option>
          <option value='groceries'>Alimentos</option>
        </select>
      </div>
    </section>
  )
}
