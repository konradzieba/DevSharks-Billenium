import { Modal, TextInput, Button, Box, Text } from '@mantine/core';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

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
	setCardColor,
	cardColor,
}) => {
	const { t } = useTranslation();
	const selectedColumnInfo = <p>{t('renameCardModalTitle')}</p>;
	const [actualInputValue, setActualInputValue] = useState('');
	const [choosenColor, setChoosenColor] = useState(cardColor);
	const isValid = oldCardTitle.trim().length > 0;
	const colors = ['#8DC44F', '#FFC718', '#FF9E0F', '#DA483B'];
	const inputDynamicProps = {
		label: t('renameCardModalInputLabel'),
		size: 'md',
		...(!isValid && { error: t('renameCardModalInvalidInputError') }),
	};
	const buttonDynamicProps = {
		type: 'submit',
		variant: 'default',
		color: 'gray',
		radius: 'md',
		size: 'sm',
		...(!isValid && { disabled: true }),
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		updateCardTitle(oldCardTitle, renameCardListId, renameCardId, choosenColor);
		setRenameCardModalOpened(false);
		setOldCardTitle('');
		setRenameCardId('');
		setRenameCardListId('');
		setCardColor('');
	};

	return (
		<Modal
			opened={renameCardModalOpened}
			onClose={() => setRenameCardModalOpened(false)}
			title={selectedColumnInfo}
			overlayProps={{ blur: 3 }}
			radius='md'
			closeOnEscape={() => setRenameCardModalOpened(false)}
		>
			<form>
				<TextInput
					{...inputDynamicProps}
					value={oldCardTitle}
					onChange={(e) => {
						setOldCardTitle(e.target.value);
						setActualInputValue(e.target.value);
					}}
				/>
				<Text mt={10}>{t('renameCardModalSelectColor')}</Text>
				<Box mt={3} style={{ display: 'flex', justifyContent: 'flex-start' }}>
					{colors.map((color, index) => (
						<button
							key={index}
							type='button'
							className='color-btn'
							style={{
								backgroundColor: color,
								width: '30px',
								height: '30px',
								margin: '0 5px',
								border: `${choosenColor === color ? '2px solid white' : 'none'}`,
								borderRadius: '50%',
							}}
							onClick={() => {
								setChoosenColor(color);
							}}
						></button>
					))}
				</Box>
				<Button
					{...buttonDynamicProps}
					onClick={handleSubmit}
					style={{ display: 'block', margin: '20px auto 0', fontWeight: 'normal' }}
				>
					{t('renameCardModalBtn')}
				</Button>
			</form>
		</Modal>
	);
};

export default RenameCardModal;
