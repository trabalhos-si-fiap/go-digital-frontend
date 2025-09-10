import { zodResolver } from '@hookform/resolvers/zod'
import { useMutation } from '@tanstack/react-query'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { z } from 'zod'
import { signIn } from '../../../api/sign-in'
import { validate2FA } from '../../../api/validate-2fa'
import larosLogin from '../../../assets/laros-login.svg'
import { LoginContainer, LoginForm, TwoFactorForm } from './styles'

const signInFormSchema = z.object({
  email: z.string().email('E-mail inválido'),
  password: z.string().min(1, 'Senha obrigatória'),
})
type SignInFormSchema = z.infer<typeof signInFormSchema>

const twoFactorFormSchema = z.object({
  email: z.string().email(),
  code: z.string().regex(/^\d{6}$/, 'Código inválido'),
})
type TwoFactorFormSchema = z.infer<typeof twoFactorFormSchema>

export default function Login() {
  const [isCredentialValid, setIsCredentialValid] = useState(false)
  const [emailFirstStep, setEmailFirstStep] = useState('')
  const navigate = useNavigate()

  const {
    register: registerCredential,
    handleSubmit: handleSubmitCredential,
    formState: { isSubmitting: isSubmittingCredential, errors: errorsCredential },
    reset: resetCredential,
  } = useForm<SignInFormSchema>({
    resolver: zodResolver(signInFormSchema),
  })

  const {
    register: register2FA,
    handleSubmit: handleSubmit2FA,
    formState: { isSubmitting: isSubmitting2FA, errors: errors2FA },
    reset: reset2FA,
  } = useForm<TwoFactorFormSchema>({
    resolver: zodResolver(twoFactorFormSchema),
    defaultValues: { email: emailFirstStep, code: '' },
    values: { email: emailFirstStep, code: '' },
  })

  const { mutateAsync: authenticate } = useMutation({
    mutationFn: signIn,
  })

  const { mutateAsync: validateCode } = useMutation({
    mutationFn: validate2FA,
    onSuccess: () => {
      navigate('/')
    },
  })

  async function handleSignIn(data: SignInFormSchema) {
    try {
      await authenticate({ email: data.email, password: data.password })

      setIsCredentialValid(true)
      setEmailFirstStep(data.email)
    } catch (error) {
      console.log(`Login error: ${error}`)
    }
  }

  async function handleTwoFactorValidate(data: TwoFactorFormSchema) {
    try {
      const token = await validateCode({ email: data.email, code: data.code })

      localStorage.setItem('token', token)
    } catch (error) {
      console.log(`Login error: ${error}`)
    }
  }

  return (
    <LoginContainer>
      <img src={larosLogin} alt="Larós Logo" />

      {isCredentialValid ? (
        <TwoFactorForm onSubmit={handleSubmit2FA(handleTwoFactorValidate)}>
          <div>
            <label htmlFor="email">E-mail</label>
            <input type="email" id="email" {...register2FA('email')} disabled />
          </div>

          <div>
            <label htmlFor="code">2FA Code</label>
            <input
              type="text"
              inputMode="numeric"
              maxLength={6}
              id="code"
              {...register2FA('code')}
            />
          </div>

          <button type="submit" disabled={isSubmitting2FA}>
            Validar
          </button>
        </TwoFactorForm>
      ) : (
        <LoginForm onSubmit={handleSubmitCredential(handleSignIn)}>
          <div>
            <label htmlFor="email">E-mail</label>
            <input type="email" id="email" {...registerCredential('email')} />
          </div>

          <div>
            <label htmlFor="password">Senha</label>
            <input type="password" id="password" {...registerCredential('password')} />
          </div>

          <button type="button">Esqueceu a senha?</button>

          <button type="submit" disabled={isSubmittingCredential}>
            Entrar
          </button>
        </LoginForm>
      )}
    </LoginContainer>
  )
}
