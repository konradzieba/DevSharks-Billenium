import { IconX } from '@tabler/icons-react';
import { Notification } from '@mantine/core';
import { useTranslation } from 'react-i18next';
import './styles.scss';

const ChildNotDoneNotyfication = () => {
  const { t } = useTranslation();
	return (
		<Notification className='notyfication-container' icon={<IconX size='1rem' />} withCloseButton={false} color='red.9'>
			<span className='notyfication-text'>{t('notyficationChildIsNotDone')}</span>
		</Notification>
	);
}

export default ChildNotDoneNotyfication