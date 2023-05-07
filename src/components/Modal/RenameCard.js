import { forwardRef } from 'react';
import { Modal, TextInput, Button, Box, Text, Switch, Group, MultiSelect, Tooltip } from '@mantine/core';
import { IconBug, IconInfoCircle } from '@tabler/icons-react';
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
	lists,
	oldChildren,
	setOldChildren,
	setLists,
	allChildren, // TU DODAŁEM KOD
}) => {
	const { t } = useTranslation();
	const selectedColumnInfo = <p>{t('renameCardModalTitle')}</p>;
	const [actualInputValue, setActualInputValue] = useState('');
	const [choosenColor, setChoosenColor] = useState(cardColor);
	const [isBugged, setIsBugged] = useState(bugged);
	const [isOpened, setIsOpened] = useState(false);

	const renameCardObj = lists.flatMap(column => column.cards).find(card => card.id === renameCardId).children;
	const prevDataList = lists
		.flatMap(column => column.cards)
		.filter(card =>
			renameCardObj.length > 0 && renameCardObj.includes(`${card.id}`)
				? card.id !== renameCardId && card.children.length === 0
				: !allChildren.includes(card.id) && card.id !== renameCardId && card.children.length === 0
		);

	const [data, setData] = useState(
		prevDataList.map(card => {
			return {
				label: card.title,
				value: card.id,
				color: card.color,
			};
		})
	);

	const SelectItem = forwardRef(({ label, value, color, ...others }, ref) => (
		<div ref={ref} {...others}>
			<Group noWrap>
				<div style={{ width: '20px', height: '20px', backgroundColor: color }}></div>
				<div>
					<Text size='sm'>{label}</Text>
				</div>
			</Group>
		</div>
	));

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

		updateCardTitle(oldCardTitle, renameCardListId, renameCardId, choosenColor, isBugged, oldChildren);
		setRenameCardModalOpened(false);
		setOldCardTitle('');
		setRenameCardId('');
		setRenameCardListId('');
		setCardColor('');
		setOldChildren(null);
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
				<Box mt={10} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
					<Text>{t('renameCardModalSelectColor')}</Text>
					<Tooltip multiline width={225} position='right-start' label={t('renameCardModalColorTooltip')}>
						<IconInfoCircle size={18} />
					</Tooltip>
				</Box>
				<Box mt={3} style={{ display: 'flex' }}>
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
						setIsBugged(prevState => !prevState);
					}}
				/>
				{allChildren.includes(renameCardId) ? (
					<Text mt={10} c='dimmed' align='center'>
						{t('assignTaskChildInfo')}
					</Text>
				) : (
					<div style={{ height: `${isOpened ? '250px' : 'auto'}` }}>
						<Text mt={10}>{t('assignTaskModalSelectLabel')}</Text>
						<MultiSelect
							mt={3}
							placeholder={t('assignTaskModalPlaceholder')}
							value={oldChildren}
							onChange={value => {
								setOldChildren(value);
							}}
							data={data}
							itemComponent={SelectItem}
							searchable={true}
							maxDropdownHeight={175}
							nothingFound={t('assignTaskModalNothingFound')}
							dropdownPosition='bottom'
							onDropdownOpen={() => setIsOpened(true)}
							onDropdownClose={() => setIsOpened(false)}
							hoverOnSearchChange
							clearable
						/>
					</div>
				)}

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
