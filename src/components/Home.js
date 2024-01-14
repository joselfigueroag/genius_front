import { useNavigate } from "react-router-dom";
import axios from "axios";

import UploadFile from "./UploadFile";

function Home() {
  let navigate = useNavigate();

  let handleLogout = () => {
    let headers = {"Authorization": `Token ${localStorage.getItem("token")}`}

    axios.get(`${process.env.REACT_APP_API_URL}/authentication/api/logout/`, { headers })
      .then(response => {
        localStorage.clear();
        return navigate("/")
      })
      .catch(error => {
        if (error.response.status === 401) {
          console.log(error.response.data.detail);
        }
      })
  }

  return(
    <div className="data-process">
      <div className="d-flex justify-content-between">
        <div>
          <h2>Procesar datos</h2>
        </div>
        <div className="d-flex align-items-center">
          <button className="link logout" onClick={handleLogout}>Cerrar Sesion</button>
        </div>
      </div>
      <div className="border rounded p-3">
        <UploadFile></UploadFile>
      </div>
    </div>
  )
}

export default Home