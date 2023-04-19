import { IconX } from '@tabler/icons-react';
import { Text, Notification } from '@mantine/core';
import { useTranslation } from 'react-i18next';
import './styles.scss';

const BuggedMoveNotification = () => {
	const { t } = useTranslation();
	return (
		<Notification className='notyfication-container' icon={<IconX size='1rem' />} withCloseButton={false} color='red.9'>
			{t('notyficationBuggedMove')}{' '}
			<Text color='red.6' display={'inline-block'}>
				{t('notyficationBuggedMoveStatus')}
			</Text>
		</Notification>
	);
};

export default BuggedMoveNotification;
