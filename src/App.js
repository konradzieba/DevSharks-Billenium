import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Home from './Home/Home'
import './index.scss'
import kanbanBoard from './components/img/kanban-board.svg'
import kanbanKnowlege from './components/img/kanban-knowlege.svg'
import { Routes, Route } from 'react-router-dom'
import SignIn from './components/Authentication/SignIn'
import SignUp from './components/Authentication/SignUp'
import ProtectedRoute from './components/Authentication/ProtectedRoute'
import { AuthContextProvider } from './context/AuthContext'

const App = () => {
	return (
		<div style={{ height: '100vh' }}>
			{/* <Navbar />
			<Home /> */}
			<img className='kanban-board' src={kanbanBoard} alt='two people standing next to kanbanboard'></img>
			<img className='kanban-knowlege' src={kanbanKnowlege} alt='two people standing next to kanbanboard'></img>
			<AuthContextProvider>
				<Routes>
					<Route path='/' element={<SignIn />} />
					<Route path='/signup' element={<SignUp />} />
					<Route
						path='/kanban'
						element={
							<ProtectedRoute>
								<Navbar  /> <Home />
							</ProtectedRoute>
						}
					/>
				</Routes>
			</AuthContextProvider>
		</div>
	)
}

export default App
