import React, {useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { UserAuth } from '../../context/AuthContext'

const SignIn = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const navigate = useNavigate()
  const { signIn } = UserAuth()

  const handleSubmit = async e => {
    e.preventDefault()
    setError('')
    try {
      await signIn(email, password)
      navigate('/kanban')
    } catch {
      setError(e.message)
      console.log(e.message)
    }
  }
	return (
		<div>
			<div>
				<h2>Zaloguj się</h2>
				<p>
					Nie masz konta? <Link to='/signup'>Zarejestruj się</Link>
				</p>
			</div>
			<form onSubmit={handleSubmit}>
				<div>
					<label>E-mail</label>
					<input onChange={e => setEmail(e.target.value)}type='email' />
				</div>
				<div>
					<label>Hasło</label>
					<input onChange={e => setPassword(e.target.value)} type='password' />
				</div>
				<button>Zaloguj się</button>
			</form>
		</div>
	)
}

export default SignIn
