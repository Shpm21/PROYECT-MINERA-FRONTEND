import { IonInput, IonItem } from '@ionic/react'
import { useState } from 'react'
import { getLocation, Location } from '../../../../data/location'

interface Props {
  setLocation: (location: Location) => void
  textButton: string
  placeholder: string
}

const ShortFormLocation: React.FC<Props> = (Props) => {
  const { setLocation, textButton, placeholder } = Props
  const [id, setId] = useState<string>('')

  const handleButton = () => {
    const l = getLocation(parseInt(id, 10))
    setLocation(l!)
  }

  return (
    <>
      <IonItem>
        <IonInput
          placeholder={placeholder}
          type="text"
          onIonChange={(ev) => {
            setId(ev.detail.value!)
          }}
          required
        ></IonInput>
      </IonItem>
      <IonItem button disabled={!id} onClick={handleButton}>
        {textButton}
      </IonItem>
    </>
  )
}

export default ShortFormLocation
