import React, { useEffect, useState } from 'react';
import { useNavigate, Link, useLocation } from 'react-router-dom';
import './styles.scss';
import { UserAuth } from '../../context/AuthContext';
import UserPanel from '../User/UserPanel';
import { db, storage } from '../../firebase';
import { collection, onSnapshot, query } from 'firebase/firestore';
import { ref, getDownloadURL, uploadBytesResumable } from 'firebase/storage';
import { doc, updateDoc } from 'firebase/firestore';
import { useTranslation } from 'react-i18next';
import { IconFileText, IconBrandTrello } from '@tabler/icons-react';
import LanguageSelector from '../User/LanguageSelector';

const Navbar = () => {
	const { t } = useTranslation();
	const [userList, setUsersList] = useState([]);
	const [file, setFile] = useState(null);
	const { user, logout } = UserAuth();
	const navigate = useNavigate();
	useEffect(() => {
		const users = query(collection(db, 'users'));
		onSnapshot(users, snapShot => {
			setUsersList(
				snapShot.docs.map(doc => {
					return {
						id: doc.id,
						...doc.data(),
					};
				})
			);
		});
	}, []);

	const loggedUserInfo = userList.find(userItem => userItem.email === user.email);

	const uploadUserAvatar = async userId => {
		const fileName = new Date().getTime() + file.name;
		const storageRef = ref(storage, `images/${fileName}`);
		const uploadTask = uploadBytesResumable(storageRef, file);
		uploadTask.on(
			'state_changed',
			snapshot => {
				const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
				console.log('Upload is ' + progress + '% done');
				switch (snapshot.state) {
					case 'paused':
						console.log('Upload is paused');
						break;
					case 'running':
						console.log('Upload is running');
						break;
					default:
						break;
				}
			},
			error => {
				console.log(error);
			},
			() => {
				getDownloadURL(uploadTask.snapshot.ref).then(downloadURL => {
					console.log('File available at', downloadURL);
					const usersRef = doc(db, 'users', userId);
					updateDoc(usersRef, {
						avatarUrl: downloadURL,
					});
				});
			}
		);
	};

	const handleLogout = async () => {
		try {
			await logout();
			navigate('/');
		} catch (e) {
			console.log(e.message);
		}
	};
	const location = useLocation();

	return (
		<nav style={{ width: '100%' }}>
			<div className='container' style={{ position: 'relative', width: '100%' }}>
				<div className='lang-selector'>
					<LanguageSelector />
					{location.pathname === '/kanban' ? <Link to='/kanban/doc'><IconFileText size={36} /></Link> : <Link to='/kanban'><IconBrandTrello size={36} /></Link>}
				</div>
				<div>
				{location.pathname === '/kanban' ? <h1>{t('kanbanTitle')}</h1> : <h1>{t('documentationTitle')}</h1>}
				</div>
				<div className='nav-avatar'>
					{loggedUserInfo && (
						<UserPanel
							file={file}
							loggedUserInfo={loggedUserInfo}
							handleLogout={handleLogout}
							uploadUserAvatar={uploadUserAvatar}
							setFile={setFile}
						/>
					)}
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
