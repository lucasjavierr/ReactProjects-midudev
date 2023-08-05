import { useCatImage } from "../hooks/useCatImage";

export function Otro () {
  const { imageUrl } = useCatImage({ fact: 'Your crazy face'})

  return (
    <>
      <img src={imageUrl} />
    </>
  )
}