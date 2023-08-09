import { useCatFact } from "./hooks/useCatFact"
import { useCatImage } from "./hooks/useCatImage"
import './App.css'
import { Otro } from "./components/Otro"

// const CAT_ENDPOINT_IMAGE_URL = `https://cataas.com/cat/says/${firstWord}?size=50&color=red&json=true`


function App () {
  const { fact, refreshFact } = useCatFact()
  const { imageUrl } = useCatImage({ fact })

  const handleClick = async () => {
    refreshFact()
  }

  return (
    <main>
      <h1>App de gatitos</h1>
      <button onClick={handleClick}>Refrescar</button>
      {fact && <p>{fact}</p>}
      {imageUrl && <img src={imageUrl} alt={`Imagen extraida utilizando las tres primeras palabras de ${fact}`} />}


      {/* <Otro /> */}
    </main>
  )
}

export default App
// clase 5 incio