import { IonButton } from '@ionic/react'
import { useState } from 'react'

import './UploadCsvForm.css'
const UploadCsvForm: React.FC = () => {
  const [file, setFile] = useState<File>()

  const handleFile = (e: any) => {
    setFile(e.target.files[0])
    console.log('SUBIDO')
  }

  return (
    <>
      <form className="form-control">
        <input
          placeholder="Seleccionar archivo"
          type="file"
          id="files"
          className="form-control-input"
          accept=".csv"
          required
        />
        <IonButton onClick={handleFile} class="form-control-button">
          Subir
        </IonButton>
      </form>
      {file ? <h2>archivo subido</h2> : <> </>}
    </>
  )
}

export default UploadCsvForm
