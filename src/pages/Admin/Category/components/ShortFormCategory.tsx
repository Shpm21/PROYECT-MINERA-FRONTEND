import { IonInput, IonItem } from '@ionic/react'
import { useState } from 'react'
import { Category, getCategory } from '../../../../data/category'

interface Props {
  setCategory: (category: Category) => void
  textButton: string
  placeholder: string
}

const ShortFormCategory: React.FC<Props> = (Props) => {
  const { setCategory, textButton, placeholder } = Props
  const [id, setId] = useState<string>('')

  const handleButton = () => {
    const c = getCategory(parseInt(id, 10))
    setCategory(c!)
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

export default ShortFormCategory
