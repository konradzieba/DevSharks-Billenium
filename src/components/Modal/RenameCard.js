import { forwardRef } from 'react';
import { Modal, TextInput, Button, Box, Text, Switch, Group, MultiSelect } from '@mantine/core';
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

	//find in list card with renameCardId
	const renameCard = lists.flatMap(column => column.cards).find(card => card.id === renameCardId);
	// console.log('all children', allChildren);
	// console.log('old children: ', oldChildren);
	// console.log(allChildren);
	const prevDataList = lists
		.flatMap(column => column.cards)
		.filter(
			card => !card.isChild && card.id !== renameCardId && (!card.children || card.children.length === 0)

			//&& (renameCard.children.includes(card.id) || !renameCard.children.includes(card.id))
			//TU DODAŁEM KOD
		);
	const dataList = prevDataList.map(card => {
		return {
			...card,
			isChild: oldChildren.includes(card.id),
		};
	});
	
	console.log(dataList);

	const [data, setData] = useState(
		dataList.map(card => {
			return {
				label: card.title,
				value: card.id,
				color: card.color,
				ischild: card.isChild,
			};
		})
	);

	const SelectItem = forwardRef(({ label, value, color, ischild, ...others }, ref) => (
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
						setIsBugged(prevState => !prevState);
					}}
				/>
				<MultiSelect
					placeholder={t('assignUserModalPlaceholder')}
					value={oldChildren}
					onChange={value => {
						setOldChildren(value);
						// setData(
						// 	prevData =>
						// 		prevData.map(card => ({
						// 			...card,
						// 			children: value.includes(card.id),
						// 		})) // TU COS TRZEBA KURWA ZROBIC
						// );
					}}
					label={t('assignUserModalSelectLabel')}
					data={data}
					itemComponent={SelectItem}
					searchable={true}
					maxDropdownHeight={175}
					nothingFound={t('assignUserModalNothingFound')}
					dropdownPosition='bottom'
					// allowDeselect
					// onDropdownOpen={() => setIsOpened(true)}
					// onDropdownClose={() => setIsOpened(false)}
					hoverOnSearchChange
					clearable
				/>
				<pre>{JSON.stringify(data, null, 2)}</pre>
				{/* <pre>{JSON.stringify(oldChildren, null, 2)}</pre> */}

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
