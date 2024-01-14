import { useState } from "react"
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";

function Register() {
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

    axios.post(`${process.env.REACT_APP_API_URL}/authentication/api/user_register/`, data)
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

  return(
    <div className="login-and-register-container">
    <div className="border border-info rounded p-5">
      <h1 className="mb-5">Crear cuenta</h1>
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
          <button type="submit" className="btn btn-info">Registrar</button>
        </div>
      </form>
      <Link to="/login" className="d-flex justify-content-center mt-3 link-success link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover">Iniciar Sesion</Link>
      {error && <div className="error mt-3">*{error}</div>}
    </div>
  </div>
  )
}

export default Register