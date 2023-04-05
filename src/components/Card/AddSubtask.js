import React, { useState } from 'react'
import { IconPlus, IconX } from '@tabler/icons-react'
import { v4 as uuid } from 'uuid'
import { TextInput, Button } from '@mantine/core'
const AddSubtask = ({ listId, cardId, addSubtask }) => {
	const [inputValue, setInputValue] = useState('New subtask')
	const [isInputOpen, setIsInputOpen] = useState(false)
	const [isError, setIsError] = useState(null)

	const newSubtask = {
		id: uuid(),
		name: inputValue,
		isDone: false,
	}

	const handleSubmit = e => {
		e.preventDefault()
		if (inputValue.trim().length === 0) {
			setIsError(true)
			return
		}
		addSubtask(listId, cardId, newSubtask)
		setInputValue('New subtask')
		setIsInputOpen(false)
	}

	return (
		<div style={{ display: 'flex', alignItems: 'center' }}>
			{isInputOpen ? (
				<IconX size={16} cursor='pointer' onClick={() => setIsInputOpen(prev => !prev)} />
			) : (
				<IconPlus size={16} cursor='pointer' onClick={() => setIsInputOpen(prev => !prev)} />
			)}
			{isInputOpen && (
				<form onSubmit={handleSubmit}>
					<div style={{ display: 'flex', alignItems: 'center', marginLeft: '5px'}}>
						<TextInput
							style={{ flex: 1 }}
							value={inputValue}
							onChange={e => {
								setIsError(null)
								setInputValue(e.target.value)
							}}
							error={isError && true}
						/>
						<Button ml={6} py={2} px={4} size='xxs' type='submit'>
							<IconPlus size={16}/>
						</Button>
					</div>
				</form>
			)}
		</div>
	)
}

export default AddSubtask
