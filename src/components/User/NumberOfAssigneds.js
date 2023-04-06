const NumberOfAssigneds = ({ assigneds, assignLimit }) => {
	const assignedsLeft = assignLimit - assigneds
	return (
		<div
			style={{
				position: 'absolute',
				top: '-4px',
				right: '-2px',
				display: assignedsLeft <= 0 ? 'flex' : 'block',
				justifyContent: 'center',
				alignItems: 'center',
				backgroundColor: assignedsLeft <= 0 ? 'red' : '#2f9e44',
				width: '20px',
				height: '20px',
				padding: '1px',
				borderRadius: '45%',
				textAlign: 'center',
				color: assignedsLeft <= 0 ? '#FFF' : '#FFF',
				fontSize: '13px',
			}}>
			{assignedsLeft <= 0 ? '0' : assignedsLeft}
		</div>
	)
}

export default NumberOfAssigneds
