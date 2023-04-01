import React, { useContext, useState } from 'react';
import storeApi from '../../utils/storeApi';
import { useTranslation } from 'react-i18next';
import './styles.scss';

export default function CreateTask({ listId, type, group }) {
	const { t } = useTranslation();
	const { addMoreCard, addMoreList } = useContext(storeApi);
	const [title, setTitle] = useState('');

	const handleBtnConfirm = () => {
		addMoreCard(title, listId, group.name);
		setTitle('');
	};

	return (
		<div className='create-task-btn'>
			<button onClick={handleBtnConfirm}>{t('addTask')}</button>
		</div>
	);
}
