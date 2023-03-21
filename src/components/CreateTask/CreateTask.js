import { Button } from '@mantine/core'
import React, { useContext, useState } from 'react'
import storeApi from '../../utils/storeApi'

import './styles.scss'

export default function CreateTask({ listId, type, group }) {
	const { addMoreCard, addMoreList } = useContext(storeApi)
	const [title, setTitle] = useState('')

	const handleBtnConfirm = () => {
		addMoreCard(title, listId, group.name)
		setTitle('')
	}

	return (
		<div className='create-task-btn'>
			<button onClick={handleBtnConfirm}>Dodaj zadanie</button>
		</div>
	)
}
