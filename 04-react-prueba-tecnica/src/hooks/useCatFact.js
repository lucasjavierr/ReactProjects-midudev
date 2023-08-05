import { useState, useEffect } from "react"
import { getRandomFact } from "../services/facts"

export function useCatFact () {
  const [fact, setFact] = useState('')

  const refreshFact = () => {
    getRandomFact().then(fact => setFact(fact))
    // aca debo evitar retornar el setFact para poder reutilizarlo
    // ya que el estado es interno, tambien lo actualizo internamente
    // para eso creo una funcion que setea el estado y esa funcion es la que retorno
  }

  useEffect(refreshFact, [])

  return { fact, refreshFact }
}