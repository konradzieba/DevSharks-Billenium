import { Tooltip } from '@mantine/core';

const getInitials = (firstName, lastName) => {
	return firstName.charAt(0) + lastName.charAt(0);
};

const Avatar = ({ firstName, lastName, avatarColor }) => {
	return (
		<Tooltip
			label={`${firstName} ${lastName}`}
			openDelay={200}
			withArrow
			arrowSize={10}
			position='bottom'
		>
			<div
				style={{
					backgroundColor: `${avatarColor}`,
					color: 'white',
					borderRadius: '50%',
					width: '40px',
					height: '40px',
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
					fontSize: '16px',
				}}
			>
				{getInitials(firstName, lastName)}
			</div>
		</Tooltip>
	);
};

export default Avatar;
