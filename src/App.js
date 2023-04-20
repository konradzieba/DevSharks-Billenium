import React from 'react';
import Home from './Home/Home';
import './index.scss';
import { Routes, Route } from 'react-router-dom';
import SignIn from './components/Authentication/SignIn';
import SignUp from './components/Authentication/SignUp';
import ProtectedRoute from './components/Authentication/ProtectedRoute';
import { AuthContextProvider } from './context/AuthContext';
import LanguageSelector from './components/User/LanguageSelector';

const App = () => {
	return (
		<div>
			<LanguageSelector className='lang-selector' />
			<AuthContextProvider>
				<Routes>
						<Route path='/' element={<SignIn />} />
						<Route path='/signup' element={<SignUp />} />
					<Route
						path='/kanban'
						element={
							<ProtectedRoute>
								<Home />
							</ProtectedRoute>
						}
					/>
				</Routes>
			</AuthContextProvider>
		</div>
	);
};

export default App;
