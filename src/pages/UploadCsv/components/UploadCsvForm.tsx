import { IonItem } from '@ionic/react'
import { CSSProperties, useState } from 'react'

import { useCSVReader } from 'react-papaparse'

interface Malla {
  codigoCarrera: string
  sede: string
  carrera: string
}

const styles = {
  csvReader: {
    display: 'flex',
    flexDirection: 'row',
    marginBottom: 10
  } as CSSProperties,
  browseFile: {
    width: '20%'
  } as CSSProperties,
  acceptedFile: {
    border: '1px solid #ccc',
    height: 45,
    lineHeight: 2.5,
    paddingLeft: 10,
    width: '80%'
  } as CSSProperties,
  remove: {
    borderRadius: 0,
    padding: '0 20px'
  } as CSSProperties,
  progressBarBackgroundColor: {
    backgroundColor: 'red'
  } as CSSProperties
}

const UploadCsvForm = () => {
  const { CSVReader } = useCSVReader()

  const [data, setData] = useState([])

  return (
    <>
      <CSVReader
        onUploadAccepted={(results: any) => {
          setData(results.data)
        }}
      >
        {({
          getRootProps,
          acceptedFile,
          ProgressBar,
          getRemoveFileProps
        }: any) => (
          <>
            <div style={styles.csvReader}>
              <button
                type="button"
                {...getRootProps()}
                style={styles.browseFile}
              >
                Subir archivo
              </button>
              <div style={styles.acceptedFile}>
                {acceptedFile && acceptedFile.name}
              </div>
              <button {...getRemoveFileProps()} style={styles.remove}>
                Eliminar
              </button>
            </div>
            <ProgressBar style={styles.progressBarBackgroundColor} />
          </>
        )}
      </CSVReader>
      {data ? (
        <div>
          <h2>CSV Data</h2>

          {/* <pre>{JSON.stringify(data, null, 2)}</pre> */}
          {data.map((row: any) => (
            <div className="div-scroll">
              <IonItem>
                <p>
                  Código: {row[0]} Sede: {row[1]} Carrera: {row[2]}
                </p>
              </IonItem>
            </div>
          ))}
        </div>
      ) : (
        <p>No hay datos</p>
      )}
    </>
  )
}
export default UploadCsvForm
