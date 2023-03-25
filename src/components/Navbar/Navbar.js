import React from 'react'
import './styles.scss'
import { useNavigate } from 'react-router-dom'
import { UserAuth } from '../../context/AuthContext'

const Navbar = () => {
	const { user, logout } = UserAuth()
	const navigate = useNavigate()
	const handleLogout = async () => {
		try {
			await logout()
			navigate('/')
			console.log('Wylogowano');
		} catch (e) {
			console.log(e.message)
		}
	}
	return (
		<nav>
			<div className='container'>
				<div>
					{/* <h1>Interaktywna tablica Kanban</h1> */}
					<h1>Email użytkownika: {user && user.email}</h1>
					<button onClick={handleLogout}>Wyloguj się</button>
				</div>
			</div>
		</nav>
	)
}

export default Navbar
