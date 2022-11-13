const UploadCsv: React.FC = () => {
  return (
    <>
      <form className="form-inline">
        <div className="form-group">
          <label htmlFor="files">Upload a CSV formatted file:</label>
          <input
            type="file"
            id="files"
            className="form-control"
            accept=".csv"
            required
          />
        </div>

        <div className="form-group">
          <button type="submit" id="submit-file" className="btn btn-primary">
            Upload File
          </button>
        </div>
      </form>
    </>
  )
}

export default UploadCsv
