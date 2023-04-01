import { IconBug } from '@tabler/icons-react';
import { MantineProvider, Tooltip, Text } from '@mantine/core';
import './styles.scss';

const BuggedStatus = () => {
	return (
		<Tooltip
			label={
				<Text color='tomato' fz={14}>
					To zadanie zawiera błąd
				</Text>
			}
			openDelay={200}
			position='right-end'
			color='#373A40'
			style={{ border: '2px solid #25262B' }}
		>
			<div className='card-bug'>
				<p>
					<IconBug className='card-bug__icon' size='22px' />
				</p>
			</div>
		</Tooltip>
	);
};

export default BuggedStatus;
