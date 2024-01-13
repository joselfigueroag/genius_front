function UploadFile() {
  return(
    <>
      <form className="d-flex justify-content-center">
        <div>
          <button type="submit" className="btn btn-info me-5">Validar Emociones</button>
        </div>
        <div className="d-flex align-items-center">
          <input type="file" className="form-control" id="file"/>
        </div>
        <div>
          <button type="submit" className="btn btn-info ms-5">Validar Sentimientos</button>
        </div>
      </form>
    </>
  )
}

export default UploadFile