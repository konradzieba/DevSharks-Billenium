import { Modal, TextInput, Button, Box, Text, Group, Switch } from '@mantine/core';
import { IconBug } from '@tabler/icons-react';
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
	bugged,
}) => {
	const { t } = useTranslation();
	const selectedColumnInfo = <p>{t('renameCardModalTitle')}</p>;
	const [actualInputValue, setActualInputValue] = useState('');
	const [choosenColor, setChoosenColor] = useState(cardColor);
	const [isBugged, setIsBugged] = useState(bugged);

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

	const handleSubmit = e => {
		e.preventDefault();
		updateCardTitle(oldCardTitle, renameCardListId, renameCardId, choosenColor, isBugged);
		setRenameCardModalOpened(false);
		setOldCardTitle('');
		setRenameCardId('');
		setRenameCardListId('');
		setCardColor('');
	};

	return (
		<Modal
			className='modal-font'
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
							}}></button>
					))}
				</Box>
				<Text mt={10}>{t('renameCardModalIsBugged')}</Text>
				<Switch
					checked={isBugged}
					ml={4}
					mt={3}
					size='md'
					color='red.8'
					onLabel={<IconBug size='1.1rem' stroke={2} color='white' />}
					onChange={() => {
						setIsBugged(prevState => !isBugged);
					}}
				/>
				<Button
					{...buttonDynamicProps}
					onClick={handleSubmit}
					style={{ display: 'block', margin: '20px auto 0', fontWeight: 'normal' }}>
					{t('renameCardModalBtn')}
				</Button>
			</form>
		</Modal>
	);
};

export default RenameCardModal;
