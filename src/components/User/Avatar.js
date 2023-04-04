import { Tooltip } from '@mantine/core';

const getInitials = (firstName, lastName) => {
	return firstName.charAt(0) + lastName.charAt(0);
};

const Avatar = ({
	firstName,
	lastName,
	avatarColor,
	enabledTooltip = true,
	avatarUrl,
	assigneds,
  showAssigneds,
}) => {
	const taskNumberStyle = {
		position: 'absolute',
		top: '-4px',
		right: '-2px',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: 'limegreen',
		width: '15px',
		height: '15px',
		borderRadius: '50%',
		color: '#FFF',
		fontSize: '12px',
	};

	return (
		<>
			{enabledTooltip && avatarUrl !== '' ? (
				<Tooltip
					label={`${firstName} ${lastName}`}
					openDelay={200}
					withArrow
					arrowSize={10}
					position='bottom'
				>
					<div
						style={{
							position: 'relative',
							backgroundImage: `url(${avatarUrl})`,
							backgroundSize: 'cover',
							backgroundPosition: 'center',
							color: 'white',
							borderRadius: '50%',
							width: '40px',
							height: '40px',
						}}
					>
            {}
					</div>
				</Tooltip>
			) : enabledTooltip && avatarUrl === '' ? (
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
						{assigneds}
					</div>
				</Tooltip>
			) : !enabledTooltip && avatarUrl !== '' ? (
				<div
					style={{
						backgroundImage: `url(${avatarUrl})`,
						backgroundSize: 'cover',
						backgroundPosition: 'center',
						color: 'white',
						borderRadius: '50%',
						width: '40px',
						height: '40px',
					}}
				>
					{assigneds}
				</div>
			) : (
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
					{assigneds}
				</div>
			)}
		</>
	);
};

export default Avatar;
