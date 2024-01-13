import "../styles/Login.css"

function Login() {
  return (
    <div className="login-container">
      <div className="border border-info rounded p-5">
        <h1 className="mb-5">Iniciar Sesion</h1>
        <form>
          <div>
            <label for="email" className="form-label">Correo electronico:</label>
            <input type="email" className="form-control" id="email"/>
          </div>
          <div>
            <label for="password" className="form-label">Contraseña:</label>
            <input type="password" className="form-control" />
          </div>
          <div className="d-flex justify-content-center mt-3">
            <button type="submit" className="btn btn-info">Ingresar</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login