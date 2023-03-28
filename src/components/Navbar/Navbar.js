import React, { useEffect, useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import './styles.scss';
import { UserAuth } from '../../context/AuthContext';
import Avatar from '../User/Avatar';
import UserPanel from '../User/UserPanel';
import { db } from '../../firebase';
import { collection, onSnapshot, query } from 'firebase/firestore';

const Navbar = () => {
	const [userList, setUsersList] = useState([]);

	const { user, logout } = UserAuth();
	const navigate = useNavigate();
	useEffect(() => {
		const users = query(collection(db, 'users'));
		onSnapshot(users, (snapShot) => {
			setUsersList(
				snapShot.docs.map((doc) => {
					return {
						id: doc.id,
						...doc.data(),
					};
				})
			);
		});
	}, []);

	const loggedUserInfo = userList.find(
		(userItem) => userItem.email === user.email
	);

	const handleLogout = async () => {
		try {
			await logout();
			navigate('/');
			console.log('Wylogowano');
		} catch (e) {
			console.log(e.message);
		}
	};
	return (
		<nav>
			<div className='container' style={{ position: 'relative' }}>
				<div>
					{/* <h1>Interaktywna tablica Kanban</h1> */}
					<h1>Email użytkownika: {user && user.email}</h1>
				</div>
				{/* <button onClick={handleLogout}>Wyloguj się</button> */}
				<div>{loggedUserInfo && <UserPanel loggedUserInfo={loggedUserInfo} handleLogout={handleLogout} />}</div>
			</div>
		</nav>
	);
};

export default Navbar;
