import larosLogin from '../../assets/laros-login.svg'
import { LoginContainer, LoginForm } from './styles'

export default function Login() {
  return (
    <LoginContainer>
      <img src={larosLogin} alt="Larós Logo" />

      <LoginForm id="login">
        <div>
          <label htmlFor="email">E-mail</label>
          <input type="email" name="email" id="email" />
        </div>

        <div>
          <label htmlFor="password">Senha</label>
          <input type="password" name="password" id="password" />
        </div>

        <button type="button">Esqueceu a senha?</button>

        <button type="button">Entrar</button>
      </LoginForm>
    </LoginContainer>
  )
}
