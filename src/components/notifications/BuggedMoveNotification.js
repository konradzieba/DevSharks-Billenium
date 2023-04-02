import { IconX } from '@tabler/icons-react';
import { Text, Notification } from '@mantine/core';
import { useTranslation } from 'react-i18next';
const BuggedMoveNotification = () => {
	const { t } = useTranslation();
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
			{t('notyficationBuggedMove')}{' '}
			<Text color='red.6' display={'inline-block'}>
			{t('notyficationBuggedMoveStatus')}
			</Text>
		</Notification>
	);
};

export default BuggedMoveNotification;
