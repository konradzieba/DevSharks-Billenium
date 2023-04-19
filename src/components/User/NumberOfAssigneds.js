import './styles.scss';

const NumberOfAssigneds = ({ assigneds, assignLimit }) => {
	const assignedsLeft = assignLimit - assigneds;
	return (
		<div
			className='number-of-assigeds-info'
			style={{
				backgroundColor: assignedsLeft <= 0 ? 'red' : '#2f9e44',
			}}>
			{assignedsLeft <= 0 ? '0' : assignedsLeft}
		</div>
	);
};

export default NumberOfAssigneds;
