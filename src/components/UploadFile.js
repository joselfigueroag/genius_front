import { useState } from "react";
import axios from "axios";

import DetailText from "./DetailText";


function UploadFile() {
  const [file, setFile] = useState(null);
  const [data, setData] = useState([]);
  const [error, setError] = useState("");
  const formData = new FormData();
  
  const handleSubmit = event => {
    event.preventDefault();
  }
  
  const handleValidateEmotions = () => {
    if(file){
      let headers = {"Authorization": `Token ${localStorage.getItem("token")}`}
      formData.append("file", file);

      axios.post("http://localhost:8000/huggingface/api/query_emotion_model/", formData, { headers })
        .then(response => {
          setData(response.data);
        })
        .catch(error => {
          console.log(error);
        })
    } else {
      setError("No se ha seleccionado un archivo.");
    }
  }
  
  const handleValidateSentiments = () => {
    if(file){
      let headers = {"Authorization": `Token ${localStorage.getItem("token")}`}
      formData.append("file", file);

      axios.post("http://localhost:8000/huggingface/api/query_sentiment_model/", formData, { headers })
        .then(response => {
          setData(response.data);
        })
        .catch(error => {
          console.log(error);
        })
    } else {
      setError("No se ha seleccionado un archivo.");
    }
  }

  return(
    <>
      <form className="d-flex justify-content-center" onSubmit={handleSubmit}>
        <div>
          <button type="submit" className="btn btn-info me-5" onClick={handleValidateEmotions}>Validar Emociones</button>
        </div>
        <div className="d-flex align-items-center">
          <input type="file" className="form-control" id="file" onChange={(e) => {setFile(e.target.files[0])}}/>
        </div>
        <div>
          <button type="submit" className="btn btn-info ms-5" onClick={handleValidateSentiments}>Validar Sentimientos</button>
        </div>
      </form>
      {error && <div className="error mt-3">*{error}</div>}
      <hr />
      <div className="d-flex justify-content-around">
        {data.length === 0 ? (
          <span>Resumen</span>
        ) : (
          <>
            <span><b>Total:</b> {data.data.length}</span>
            {
              data.count_labels && Object.entries(data.count_labels).map((key, value) => (
                <span key={value}><b>{`${key[0]}:`}</b> {key[1]}</span>
              ))
            }
          </>
        )}
      </div>
      <hr />
      <table className="table table-sm table-striped shadow-div table-bordered">
        <thead>
          <tr>
            <th>Texto</th>
            {data.motive && data.motive === "emotions" ? <th>Emocion</th> : <th>Sentimiento</th>}
          </tr>
        </thead>
        <tbody>
          {
            data.data && data.data.map((item, index) => (
              <DetailText key={index} text={item.text} label={item.label}></DetailText>
            ))
          }
        </tbody>
      </table>
    </>
  )
}

export default UploadFile