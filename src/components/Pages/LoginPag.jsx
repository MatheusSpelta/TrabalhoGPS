import { useState } from 'react';
import 'D:/Gerenciar de Projeto/front-end/TrabalhoGPS/src/styles/stylesLoginPag.css';


function LoginPag() {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  console.log(email);
  console.log(password);

  return (
    <div className="container">
      <div className="container-login">
        <div className="wrap-login">
          <form className="login-form">
            <span className="login-form-title">Bem Vindo!</span>

            <div className="wrap-input">
              <input className={email !== "" ? 'has-val input' : 'input'}
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)} />
              <span className="focus-input" data-placeholder="Email"></span>
            </div>

            <div className="wrap-input">
              <input className={password !== "" ? 'has-val input' : 'input'}
                type="password"
                value={password}
                onChange={e => setPassword(e.target.value)} />
              <span className="focus-input" data-placeholder="Password"></span>
            </div>

            <div className="container-login-form-btn">
              <button className="login-form-btn" href="#">Login</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default LoginPag;