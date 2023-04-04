import { IconAlertTriangleFilled } from '@tabler/icons-react';

const NumberOfAssigneds = ({ assigneds, assignLimit }) => {
	const assignedsLeft = assignLimit - assigneds
	return (
		<div
			style={{
				position: 'absolute',
				top: '-4px',
				right: '-2px',
				display: assignedsLeft === 0 ? 'flex' : 'block',
				justifyContent: 'center',
				alignItems: 'center',
				backgroundColor: assignedsLeft === 0 ? 'transparent' : '#8DC44F',
				width: '15px',
				height: '15px',
				padding: '1px',
				borderRadius: '50%',
				textAlign: 'center',
				color: assignedsLeft === 0 ? 'red' : '#FFF',
				fontSize: '10px',
			}}>
			{assignedsLeft === 0 ? <IconAlertTriangleFilled /> : assignedsLeft}
		</div>
	)
}

export default NumberOfAssigneds
