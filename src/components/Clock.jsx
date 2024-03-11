import { useEffect, useState } from 'react'

export default Clock

function Clock (props) {
  // On initialise l'état  local de l'horloge
  const [date, setDate] = useState(new Date())

  console.log(props)

  /**
  * Fonction pout mettre à jour la date de l'horloge
  */
  const tick = () => {
    setDate(new Date())
  }

  /**
  * Méthode fournie par React s'éxecutant à l'apparition du composant
  * La fonction retournée est automatiquement appelée à la disparition
  */
  useEffect(() => {
    const interval = setInterval(() => {
      tick()
    }, props.interval)
    return () => {
      clearInterval(interval)
    }
  }, [props.interval])

  // On retourne l'affichage du composant
  return (
    <h1>{date.toLocaleTimeString()}:{date.getMilliseconds()}</h1>
  )
}
