import { forwardRef, useState } from 'react';
import { Modal, Button, Group, Text, MultiSelect } from '@mantine/core';
import { useTranslation } from 'react-i18next';
import Avatar from '../User/Avatar';

const AssignUserModal = ({
	setAssignUserModalOpened,
	users,
	cardId,
	listId,
	setCardId,
	setListId,
	assignUserToCard,
	setAssignUserId,
	setOldAssignedUser,
	oldAssignedUser,
	style,
}) => {
	const { t } = useTranslation();
	const [isOpened, setIsOpened] = useState(false);
	const [notFoundUserInData, setNotFoundUserInData] = useState(false);
	const prevData = users.map((user) => {
		return {
			label: `${user.firstName} ${user.lastName}`,
			value: user.id,
			firstName: user.firstName.toString(),
			lastName: user.lastName.toString(),
			avatarColor: user.avatarColor.toString(),
			avatarUrl: user.avatarUrl.toString(),
		};
	});

	const data = [
		{
			label: t('assignUserModalNoAssign'),
			value: '',
			firstName: '',
			lastName: '',
			avatarColor: '',
			avatarUrl: '',
		},
		...prevData,
	];

	const SelectItem = forwardRef(
		({ firstName, lastName, avatarColor, label, avatarUrl, ...others }, ref) => (
			<div ref={ref} {...others}>
				<Group noWrap>
					<Avatar
						style={style}
						firstName={firstName}
						lastName={lastName}
						avatarColor={avatarColor}
						avatarUrl={avatarUrl}
						enabledTooltip={false}
					/>
					<div>
						<Text size='sm'>{label}</Text>
					</div>
				</Group>
			</div>
		)
	);

	return (
		<Modal
			opened
			onClose={() => setAssignUserModalOpened(false)}
			title={t('assignUserModalTitle')}
			overlayProps={{ blur: 3 }}
			radius='md'
			closeOnEscape={() => setAssignUserModalOpened(false)}
		>
			<div style={{ height: `${isOpened ? '250px' : 'auto'}` }}>
				<MultiSelect
					placeholder={t('assignUserModalPlaceholder')}
					value={oldAssignedUser}
					onChange={(value) => {
						setOldAssignedUser(value);
					}}
					onKeyUp={(e) => {
						const user = data.find((user) =>
							user.label.toLowerCase().includes(e.target.value.toLowerCase())
						);
						if (user) {
							setNotFoundUserInData(false);
						} else {
							setNotFoundUserInData(true);
						}
					}}
					label={t('assignUserModalSelectLabel')}
					data={data}
					itemComponent={SelectItem}
					searchable={true}
					maxDropdownHeight={175}
					nothingFound={t('assignUserModalNothingFound')}
					dropdownPosition='bottom'
					selectOnBlur
					// allowDeselect
					onDropdownOpen={() => setIsOpened(true)}
					onDropdownClose={() => setIsOpened(false)}
					hoverOnSearchChange
				/>
			</div>
			<Button
				color='gray'
				radius='md'
				size='sm'
				style={{
					fontWeight: 'normal',
					display: 'block',
					margin: '0 auto',
					marginTop: '10px',
				}}
				onClick={() => {
					setAssignUserId('');
					setListId(null);
					setCardId(null);
					setOldAssignedUser(null);
					assignUserToCard(listId, cardId, oldAssignedUser);
					setAssignUserModalOpened(false);
				}}
				disabled={notFoundUserInData}
			>
				{t('assignUserModalBtn')}
			</Button>
		</Modal>
	);
};

export default AssignUserModal;
