import { Modal, Button } from '@mantine/core';
const DeleteListModal = ({
	deleteListModalOpened,
	setDeleteListModalOpened,
	deleteList,
	setDeleteListId,
	deleteListId
}) => {
	const modalTitle = <p>Czy na pewno chcesz usunąć kolumnę?</p>;
	return (
		<Modal
			opened={deleteListModalOpened}
			onClose={() => setDeleteListModalOpened(false)}
			title={modalTitle}
			overlayProps={{blur: 3}}
			radius='md'
			closeOnEscape={() => setDeleteListModalOpened(false)}
		>
			<div style={{ display: 'flex', justifyContent: 'center', gap: '1rem' }}>
				<Button
					color='gray'
					radius='md'
					size='sm'
					style={{ fontWeight: 'normal' }}
					onClick={() => setDeleteListModalOpened(false)}
				>
					Anuluj
				</Button>
				<Button
					color='red'
					radius='md'
					size='sm'
					style={{ fontWeight: 'normal' }}
					onClick={() => {
						//tutaj funkcja do usuwania
						deleteList(deleteListId);
						setDeleteListId(null);
						setDeleteListModalOpened(false);
					}}
				>
					Usuń
				</Button>
			</div>
		</Modal>
	);
};

export default DeleteListModal;
