import { Group } from '@mantine/core';
import Avatar from './Avatar';
const AssignedUsersAvatars = ({ assignedUser, usersList }) => {
	// console.log(assignedUser);
	const filteredUsers = usersList.filter((user) =>
		assignedUser.includes(user.id)
	);
	const threeUsers = filteredUsers.slice(0, 3);
	return (
		<Group spacing='xs'>
			{threeUsers.map((user) => (
				<Avatar
					key={user.id}
					firstName={user.firstName}
					lastName={user.lastName}
					avatarColor={user.avatarColor}
					avatarUrl={user.avatarUrl}
					enabledTooltip={true}
				/>
			))}
			{/* {filteredUsers.length > 3 && (
				<Avatar
					style={{ cursor: 'default', fontsize: '32px' }}
					firstName='+1'
					lastName={(filteredUsers.length - 3).toString()}
					avatarColor='gray'
					avatarUrl=''
				/>
			)} */}
		</Group>
	);
};

export default AssignedUsersAvatars;
