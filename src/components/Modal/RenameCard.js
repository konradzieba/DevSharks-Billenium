import { Modal, TextInput, Button } from '@mantine/core'
import { useState } from 'react'

const RenameCardModal = ({
	renameCardModalOpened,
	setRenameCardModalOpened,
	updateCardTitle,
	oldCardTitle,
	setOldCardTitle,
	setRenameCardId,
	setRenameCardListId,
	renameCardId,
	renameCardListId,
}) => {
	const selectedColumnInfo = <p>Zmień nazwę zadania</p>
	const [actualInputValue, setActualInputValue] = useState('')
	const isValid = oldCardTitle.trim().length > 0

	const inputDynamicProps = {
		label: 'Nowa nazwa zadania:',
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
		updateCardTitle(oldCardTitle, renameCardListId, renameCardId)
		setRenameCardModalOpened(false)
		setOldCardTitle('')
		setRenameCardId('')
		setRenameCardListId('')
	}

	return (
		<Modal
			opened={renameCardModalOpened}
			onClose={() => setRenameCardModalOpened(false)}
			title={selectedColumnInfo}
			overlayProps={{ blur: 3 }}
			radius='md'
			closeOnEscape={() => setRenameCardModalOpened(false)}>
			<form>
				<TextInput
					{...inputDynamicProps}
					value={oldCardTitle}
					onChange={e => {
						setOldCardTitle(e.target.value)
						setActualInputValue(e.target.value)
					}}
				/>
				<Button
					{...buttonDynamicProps}
					onClick={handleSubmit}
					style={{ display: 'block', margin: '20px auto 0', fontWeight: 'normal' }}>
					Zmień nazwę
				</Button>
			</form>
		</Modal>
	)
}

export default RenameCardModal
