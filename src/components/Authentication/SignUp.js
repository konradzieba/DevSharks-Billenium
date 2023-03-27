import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { UserAuth } from '../../context/AuthContext'
import { addDoc, collection} from 'firebase/firestore'
import { db } from '../../firebase'

const avatarColors = ['yellowgreen', 'royalblue', 'lime', 'orange']

const SignUp = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const navigate = useNavigate()
    const { createUser } = UserAuth()

    const handleSubmit = async e => {
        e.preventDefault()
        setError('')
        try {
            await createUser(email, password)
            await addDoc(collection(db, 'users'), {
                email: email,
                firstName: firstName,
                lastName: lastName,
                avatarUrl: '',
                avatarColor: avatarColors[Math.floor(Math.random() * avatarColors.length)],
            })
            navigate('/kanban')
        } catch {
            setError(e.message)
            console.log(e.message)
        }
    }
    return (
        <div>
            <div>
                <h2>Zarejestruj się za darmo</h2>
                <p>
                    Masz już konto? <Link to='/'>Zaloguj się</Link>
                </p>
            </div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>E-mail</label>
                    <input onChange={e => setEmail(e.target.value)} type='email' />
                </div>
                <div>
                    <label>Imię</label>
                    <input onChange={e => setFirstName(e.target.value)} type='text' />
                </div>
                <div>
                    <label>Nazwisko</label>
                    <input onChange={e => setLastName(e.target.value)} type='text' />
                </div>
                <div>
                    <label>Hasło</label>
                    <input onChange={e => setPassword(e.target.value)} type='password' />
                </div>
                {/* <div>
                    <label>Potwierdź hasło</label>
                    <input onChange={e => setPassword(e.target.value)} type='password' />
                </div> */}
                <button>Zarejestruj się</button>
            </form>
        </div>
    )
}

export default SignUp