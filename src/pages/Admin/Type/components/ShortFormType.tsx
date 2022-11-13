import { IonInput, IonItem } from '@ionic/react'
import { useState } from 'react'
import { getType, Type } from '../../../../data/type'

interface Props {
  setType: (type: Type) => void
  textButton: string
  placeholder: string
}

const ShortFormType: React.FC<Props> = (Props) => {
  const { setType, textButton, placeholder } = Props
  const [id, setId] = useState<string>('')

  const handleButton = () => {
    const t = getType(parseInt(id, 10))
    setType(t!)
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

export default ShortFormType
