import { IonInput, IonItem } from '@ionic/react'
import { getMenuByKey } from '../../config/config'

interface Props {
  handleButton: () => void
  changeFunctions: (ev: any) => void
  keyMenuAdminText: string
}

const ShortForm: React.FC<Props> = (Props) => {
  const { handleButton, changeFunctions, keyMenuAdminText } = Props
  const { placeholder, textButton } = getMenuByKey(keyMenuAdminText)!.page
  return (
    <>
      <IonItem>
        <IonInput
          placeholder={placeholder}
          type="text"
          onIonChange={changeFunctions}
        ></IonInput>
      </IonItem>
      <IonItem button onClick={handleButton}>
        Buscar {textButton}
      </IonItem>
    </>
  )
}

export default ShortForm
