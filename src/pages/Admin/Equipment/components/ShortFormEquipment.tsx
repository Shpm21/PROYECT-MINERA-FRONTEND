import { IonInput, IonItem } from '@ionic/react'
import { useState } from 'react'
import { Equipment, getEquipment } from '../../../../data/equipment'

interface Props {
  setEquipment: (equipment: Equipment) => void
  textButton: string
  placeholder: string
}

const ShortFormEquipment: React.FC<Props> = (Props) => {
  const { setEquipment, textButton, placeholder } = Props
  const [id, setId] = useState<string>('')

  const handleButton = () => {
    const e = getEquipment(parseInt(id, 10))
    setEquipment(e!)
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

export default ShortFormEquipment
