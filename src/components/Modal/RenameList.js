import { Modal, TextInput, Button } from '@mantine/core'
import { useState } from 'react'

const RenameListModal = ({
	renameListModalOpened,
	setRenameListModalOpened,
	updateListTitle,
	oldListTitle,
	setOldListTitle,
	renameListId,
	setRenameListId,
}) => {
	const selectedColumnInfo = <p>Zmień nazwę kolumny</p>
	const [actualInputValue, setActualInputValue] = useState('')
	const isValid = oldListTitle.trim().length > 0

	const inputDynamicProps = {
		label: 'Nowa nazwa kolumny:',
		size: 'md',
		...(!isValid && { error: 'Sprawdź poprawność wpisanej nazwy.' }),
	}
	const buttonDynamicProps = {
		type: 'submit',
		variant: 'default',
		color: 'gray',
		radius: 'md',
		size: 'sm',
		...(!isValid && { disabled: true }),
	}

	const handleSubmit = e => {
		e.preventDefault()
		updateListTitle(oldListTitle, renameListId)
		setRenameListModalOpened(false)
		setOldListTitle('')
		setRenameListId('')
	}

	return (
		<Modal
			opened={renameListModalOpened}
			onClose={() => setRenameListModalOpened(false)}
			title={selectedColumnInfo}
			overlayProps={{ blur: 3 }}
			radius='md'
			closeOnEscape={() => setRenameListModalOpened(false)}>
			<form>
				<TextInput
					{...inputDynamicProps}
					value={oldListTitle}
					onChange={e => {
						setOldListTitle(e.target.value)
						setActualInputValue(e.target.value)
					}}
				/>
				<Button
					style={{ display: 'block', margin: '20px auto 0', fontWeight: 'normal' }}
					{...buttonDynamicProps}
					onClick={handleSubmit}>
					Zmień nazwę
				</Button>
			</form>
		</Modal>
	)
}

export default RenameListModal
