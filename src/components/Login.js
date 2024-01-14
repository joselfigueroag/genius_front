import { useState } from "react"
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Login() {
  let navigate = useNavigate();
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")

  const handleSubmit = async (event) => {
    event.preventDefault();

    const data = {
      email,
      password
    }

    axios.post(`${process.env.REACT_APP_API_URL}/authentication/api/login/`, data)
      .then(response => {
        localStorage.setItem("email", response.data.email)
        localStorage.setItem("token", response.data.token)
        return navigate("/home")
      })
      .catch(error => {
        if (error.response.status === 400 || error.response.status === 404) {
          setError(error.response.data.msg)
        } else {
          console.log(error.response)
        }
      })
  }

  return (
    <div className="login-and-register-container">
      <div className="border border-info rounded p-5">
        <h1 className="mb-5">Iniciar Sesion</h1>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="email" className="form-label">Correo electronico:</label>
            <input type="email" className="form-control" id="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
          </div>
          <div>
            <label htmlFor="password" className="form-label">Contraseña:</label>
            <input type="password" className="form-control" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          </div>
          <div className="d-flex justify-content-center mt-3">
            <button type="submit" className="btn btn-info">Ingresar</button>
          </div>
        </form>
        {error && <div className="error mt-3">*{error}</div>}
      </div>
    </div>
  )
}

export default Login