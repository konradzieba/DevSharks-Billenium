import { Modal, Button } from '@mantine/core'
const DeleteCardModal = ({
	deleteCardModalOpened,
	setDeleteCardModalOpened,
	deleteCardId,
	setDeleteCardId,
	deleteCardListId,
	setDeleteCardListId,
	removeCard,
}) => {
	const modalTitle = <p>Czy na pewno chcesz usunąć zadanie?</p>
	const handleDelete = () => {
		removeCard(deleteCardListId, deleteCardId)
		setDeleteCardId(null)
		setDeleteCardListId(null)
		setDeleteCardModalOpened(false)
	}
	return (
		<Modal
			opened={deleteCardModalOpened}
			onClose={() => setDeleteCardModalOpened(false)}
			title={modalTitle}
			overlayProps={{ blur: 3 }}
			radius='md'
			closeOnEscape={() => setDeleteCardModalOpened(false)}>
			<div style={{ display: 'flex', justifyContent: 'center', gap: '1rem' }}>
				<Button
					color='gray'
					radius='md'
					size='sm'
					style={{ fontWeight: 'normal' }}
					onClick={() => setDeleteCardModalOpened(false)}>
					Anuluj
				</Button>
				<Button color='red' radius='md' size='sm' onClick={handleDelete} style={{ fontWeight: 'normal' }}>
					Usuń
				</Button>
			</div>
		</Modal>
	)
}

export default DeleteCardModal
