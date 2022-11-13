import { IonInput, IonItem } from '@ionic/react'
import { useState } from 'react'
import { getUser, User } from '../../../../data/user'

interface Props {
  setUser: (user: User) => void
  textButton: string
  placeholder: string
}

const ShortFormUser: React.FC<Props> = (Props) => {
  const { setUser, textButton, placeholder } = Props
  const [rut, setRut] = useState<string>('')

  const handleButton = () => {
    const u = getUser(rut)
    setUser(u!)
  }

  return (
    <>
      <IonItem>
        <IonInput
          placeholder={placeholder}
          type="text"
          onIonChange={(ev) => {
            setRut(ev.detail.value!)
          }}
          required
        ></IonInput>
      </IonItem>
      <IonItem button disabled={!rut} onClick={handleButton}>
        {textButton}
      </IonItem>
    </>
  )
}

export default ShortFormUser
