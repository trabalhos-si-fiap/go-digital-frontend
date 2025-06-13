import { useMutation } from '@tanstack/react-query'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { z } from 'zod'
import { signIn } from '../../../api/sign-in'
import larosLogin from '../../../assets/laros-login.svg'
import { api } from '../../../lib/axios'
import { LoginContainer, LoginForm } from './styles'

const signInFormSchema = z.object({
  email: z.string().email(),
  password: z.string(),
})

type SignInFormSchema = z.infer<typeof signInFormSchema>

export default function Login() {
  const navigate = useNavigate()

  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<SignInFormSchema>()

  const { mutateAsync: authenticate } = useMutation({
    mutationFn: signIn,
    onSuccess: () => {
      navigate('/')
    },
  })

  async function handleSignIn(data: SignInFormSchema) {
    try {
      console.log(data)

      const token = await authenticate({ email: data.email, password: data.password })

      localStorage.setItem('token', token)

      api.defaults.headers.common.Authorization = `Bearer ${token}`
    } catch (error) {
      console.log(`Login error: ${error}`)
    }
  }

  return (
    <LoginContainer>
      <img src={larosLogin} alt="Larós Logo" />

      <LoginForm onSubmit={handleSubmit(handleSignIn)}>
        <div>
          <label htmlFor="email">E-mail</label>
          <input type="email" id="email" {...register('email')} />
        </div>

        <div>
          <label htmlFor="password">Senha</label>
          <input type="password" id="password" {...register('password')} />
        </div>

        <button type="button">Esqueceu a senha?</button>

        <button type="submit" disabled={isSubmitting}>
          Entrar
        </button>
      </LoginForm>
    </LoginContainer>
  )
}
