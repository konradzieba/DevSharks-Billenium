import { Tooltip } from '@mantine/core';
import NumberOfAssigneds from './NumberOfAssigneds';

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
  showAssigneds = false,
	assignLimit,
}) => {

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
						{showAssigneds && ( <NumberOfAssigneds assigneds={assigneds} assignLimit={assignLimit} /> )}
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
							position: 'relative',
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
						{showAssigneds && ( <NumberOfAssigneds assigneds={assigneds} assignLimit={assignLimit} /> )}
					</div>
				</Tooltip>
			) : !enabledTooltip && avatarUrl !== '' ? (
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
				</div>
			) : (
				<div
					style={{
						position: 'relative',
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
					{showAssigneds && ( <NumberOfAssigneds assigneds={assigneds} assignLimit={assignLimit} /> )}
				</div>
			)}
		</>
	);
};

export default Avatar;
