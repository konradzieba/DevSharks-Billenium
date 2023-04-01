import { IconX } from '@tabler/icons-react';
import { Text, Notification } from '@mantine/core';
const BuggedMoveNotification = () => {
	return (
		<Notification
			style={{
				position: 'fixed',
				right: '2%',
				bottom: '3%',
				userSelect: 'none',
			}}
			icon={<IconX size='1rem' />}
			withCloseButton={false}
			color='red.9'
		>
			Nie można przenieść zadania w to miejsce, ponieważ posiada status{' '}
			<Text color='red.6' display={'inline-block'}>
				Bugged
			</Text>
		</Notification>
	);
};

export default BuggedMoveNotification;
