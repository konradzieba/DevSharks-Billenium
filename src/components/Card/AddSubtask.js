import React, { useState } from 'react'
import { IconPlus, IconX } from '@tabler/icons-react'
import { v4 as uuid } from 'uuid'
import { TextInput, Button } from '@mantine/core'
import { useTranslation } from 'react-i18next'
import './styles.scss'

const AddSubtask = ({ listId, cardId, addSubtask }) => {
	const { t } = useTranslation()
	const [inputValue, setInputValue] = useState(t('subtask'))
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
		setInputValue(t('subtask'))
		setIsInputOpen(false)
	}

	return (
		<div className='add-subtask'>
			{isInputOpen ? (
				<IconX size={16} cursor='pointer' onClick={() => setIsInputOpen(prev => !prev)} />
			) : (
				<div onClick={() => setIsInputOpen(prev => !prev)} className='add-subtask__show-input'>
					<IconPlus size={16} cursor='pointer'  />
					<span className='add-subtask__show-input-span'>{t('addSubtask')}</span>
				</div>
			)}
			{isInputOpen && (
				<form onSubmit={handleSubmit}>
					<div className='add-subtask__input'>
						<TextInput
							style={{ flex: 1 }}
							value={inputValue}
							size='sm'
							onChange={e => {
								setIsError(null)
								setInputValue(e.target.value)
							}}
							error={isError && true}
						/>
						<Button ml={6} py={2} px={2} size='xxs' type='submit' color='green'>
							<IconPlus size={16} />
						</Button>
					</div>
				</form>
			)}
		</div>
	)
}

export default AddSubtask
