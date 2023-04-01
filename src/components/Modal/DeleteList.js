import { Modal, Button } from '@mantine/core';
import { useTranslation } from 'react-i18next';

const DeleteListModal = ({
	deleteListModalOpened,
	setDeleteListModalOpened,
	deleteList,
	setDeleteListId,
	deleteListId,
}) => {
	const { t } = useTranslation();
	const modalTitle = <p>{t('deleteListModalTitle')}</p>;
	return (
		<Modal
			opened={deleteListModalOpened}
			onClose={() => setDeleteListModalOpened(false)}
			title={modalTitle}
			overlayProps={{ blur: 3 }}
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
					{t('deleteListModalCancelBtn')}
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
					{t('deleteListModalDeleteBtn')}
				</Button>
			</div>
		</Modal>
	);
};

export default DeleteListModal;
