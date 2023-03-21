import { Modal, TextInput, Button } from '@mantine/core'

const RenameGroupModal = ({
	setRenameGroupModalOpened,
	groups,
	renameGroup,
	oldGroupName,
	setOldGroupName,
	renameGroupId,
	setRenameGroupId,
	renameGroupListId,
}) => {
	const selectedColumnInfo = <p>Zmień nazwę grupy</p>
	const isUnique = groups.every(
		group => group.id === renameGroupId.id || group.name.toLowerCase() !== oldGroupName.toLowerCase()
	)
	const isValid = oldGroupName.trim().length > 0

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
		renameGroup(renameGroupListId, renameGroupId, oldGroupName)
		setOldGroupName('')
		setRenameGroupId(null)
		setRenameGroupModalOpened(false)
	}

	return (
		<Modal
			opened
			onClose={() => setRenameGroupModalOpened(false)}
			title={selectedColumnInfo}
			overlayProps={{ blur: 3 }}
			radius='md'
			closeOnEscape={() => setRenameGroupModalOpened(false)}>
			<form>
				<TextInput
					{...inputDynamicProps}
					value={oldGroupName}
					onChange={e => {
						setOldGroupName(e.target.value)
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

export default RenameGroupModal
