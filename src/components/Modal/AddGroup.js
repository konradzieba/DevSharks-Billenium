import { useState } from 'react'
import { Modal, Button, TextInput } from '@mantine/core'
const AddGroupModal = ({ setAddGroupModalOpened, addMoreGroup, groups }) => {
	const selectedColumnInfo = <p>Dodaj nową grupę</p>
	const [actualInputValue, setActualInputValue] = useState('')
	const isUnique = groups.every(group => group.name.toLowerCase() !== actualInputValue.toLowerCase())
	const isValid = actualInputValue.trim().length > 0

	const inputDynamicProps = {
		label: 'Nazwa nowej grupy:',
		size: 'md',
		...(!isUnique && { error: 'Taka nazwa już istnieje. Wybierz inną' }),
	}
	const buttonDynamicProps = {
		type: 'submit',
		variant: 'default',
		color: 'gray',
		radius: 'md',
		size: 'sm',
		...(!isUnique && { disabled: true }),
		...(!isValid && { disabled: true }),
	}

	const handleSubmit = e => {
		e.preventDefault()
		addMoreGroup(actualInputValue)
		setAddGroupModalOpened(false)
		setActualInputValue('')
	}
	return (
		<Modal
			opened
			onClose={() => setAddGroupModalOpened(false)}
			title={selectedColumnInfo}
			overlayProps={{ blur: 3 }}
			radius='md'
			closeOnEscape={() => setAddGroupModalOpened(false)}>
			<form>
				<TextInput
					{...inputDynamicProps}
					onChange={e => {
						setActualInputValue(e.target.value)
					}}
				/>
				<Button
					style={{ display: 'block', margin: '20px auto 0', fontWeight: 'normal' }}
					{...buttonDynamicProps}
					onClick={handleSubmit}>
					Dodaj grupę
				</Button>
			</form>
		</Modal>
	)
}

export default AddGroupModal
