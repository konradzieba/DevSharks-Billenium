import { useState } from 'react';
import { Modal, Button, TextInput } from '@mantine/core';
import { useTranslation } from 'react-i18next';
const AddGroupModal = ({ setAddGroupModalOpened, addMoreGroup, groups }) => {
	const { t } = useTranslation();
	const selectedColumnInfo = <p>{t('addGroupModalTitle')}</p>;
	const [actualInputValue, setActualInputValue] = useState('');
	const isUnique = groups.every(
		(group) => group.name.toLowerCase() !== actualInputValue.toLowerCase()
	);
	const isValid = actualInputValue.trim().length > 0;

	const inputDynamicProps = {
		label: t('addGroupModalInputLabel'),
		size: 'md',
		...(!isUnique && { error: t('addGroupModalExistsError') }),
	};
	const buttonDynamicProps = {
		type: 'submit',
		variant: 'default',
		color: 'gray',
		radius: 'md',
		size: 'sm',
		...(!isUnique && { disabled: true }),
		...(!isValid && { disabled: true }),
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		addMoreGroup(actualInputValue);
		setAddGroupModalOpened(false);
		setActualInputValue('');
	};
	return (
		<Modal
			className='modal-font'
			opened
			onClose={() => setAddGroupModalOpened(false)}
			title={selectedColumnInfo}
			overlayProps={{ blur: 3 }}
			radius='md'
			closeOnEscape={() => setAddGroupModalOpened(false)}
		>
			<form>
				<TextInput
					{...inputDynamicProps}
					onChange={(e) => {
						setActualInputValue(e.target.value);
					}}
				/>
				<Button
					style={{ display: 'block', margin: '20px auto 0', fontWeight: 'normal' }}
					{...buttonDynamicProps}
					onClick={handleSubmit}
				>
					{t('addGroupModalBtn')}
				</Button>
			</form>
		</Modal>
	);
};

export default AddGroupModal;
