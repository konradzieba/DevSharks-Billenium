import { forwardRef, useState } from 'react';
import { Modal, Button, Group, Text, Select } from '@mantine/core';
import Avatar from '../User/Avatar';

const AssignUserModal = ({
	setAssignUserModalOpened,
	users,
	cardId,
	listId,
	setCardId,
	setListId,
	assignUserToCard,
	assignUserId,
	setAssignUserId,
	setOldAssignedUser,
	oldAssignedUser,
}) => {
	const [isOpened, setIsOpened] = useState(false);
	// const [selectedUser, setSelectedUser] = useState('');
	const [notFoundUserInData, setNotFoundUserInData] = useState(false);
	// console.log(oldAssignedUser);
	// console.log(oldUser.firstName + oldUser.lastName);
	const prevData = users.map((user) => {
		return {
			label: `${user.firstName} ${user.lastName}`,
			value: user.id,
			firstName: user.firstName.toString(),
			lastName: user.lastName.toString(),
			avatarColor: user.avatarColor.toString(),
		};
	});

	const data = [
		{
			label: 'Brak przypisania',
			value: '',
			firstName: '',
			lastName: '',
			avatarColor: '',
		},
		...prevData,
	];

	const SelectItem = forwardRef(
		({ firstName, lastName, avatarColor, label, ...others }, ref) => (
			<div ref={ref} {...others}>
				<Group noWrap>
					<Avatar
						firstName={firstName}
						lastName={lastName}
						avatarColor={avatarColor}
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
			title='Przypisywanie użytkownika do zadania'
			overlayProps={{ blur: 3 }}
			radius='md'
			closeOnEscape={() => setAssignUserModalOpened(false)}
		>
			<div style={{ height: `${isOpened ? '250px' : 'auto'}` }}>
				<Select
					placeholder='Brak przypisania'
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
					label='Wybierz użytkownika'
					data={data}
					itemComponent={SelectItem}
					searchable={true}
					maxDropdownHeight={175}
					nothingFound='Brak użytkowników do przypisania'
					dropdownPosition='bottom'
					selectOnBlur
					allowDeselect
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
				Przypisz
			</Button>
		</Modal>
	);
};

export default AssignUserModal;
