import { Tooltip } from '@mantine/core';
import NumberOfAssigneds from './NumberOfAssigneds';
import './styles.scss';
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
				<Tooltip label={`${firstName} ${lastName}`} openDelay={200} withArrow arrowSize={10} position='bottom'>
					<div
						className='avatar-image'
						style={{
							backgroundImage: `url(${avatarUrl})`,
						}}>
						{showAssigneds && <NumberOfAssigneds assigneds={assigneds} assignLimit={assignLimit} />}
					</div>
				</Tooltip>
			) : enabledTooltip && avatarUrl === '' ? (
				<Tooltip label={`${firstName} ${lastName}`} openDelay={200} withArrow arrowSize={10} position='bottom'>
					<div
						className='avatar-no-image'
						style={{
							backgroundColor: `${avatarColor}`,
						}}>
						{getInitials(firstName, lastName)}
						{showAssigneds && <NumberOfAssigneds assigneds={assigneds} assignLimit={assignLimit} />}
					</div>
				</Tooltip>
			) : !enabledTooltip && avatarUrl !== '' ? (
				<div
					className='avatar-image'
					style={{
						backgroundImage: `url(${avatarUrl})`,
					}}></div>
			) : (
				<div
					className='avatar-no-image'
					style={{
						backgroundColor: `${avatarColor}`,
					}}>
					{getInitials(firstName, lastName)}
					{showAssigneds && <NumberOfAssigneds assigneds={assigneds} assignLimit={assignLimit} />}
				</div>
			)}
		</>
	);
};

export default Avatar;
