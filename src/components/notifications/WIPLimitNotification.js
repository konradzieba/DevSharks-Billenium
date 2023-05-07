import React from 'react';
import { Text, Notification } from '@mantine/core';
import { useTranslation } from 'react-i18next';
import './styles.scss';

const WIPLimitNotification = () => {
	const { t } = useTranslation();
	return (
		<Notification className='notyfication-container' color='red'
		onClick={() => console.log('hejka')}
		>
			<Text className='notyfication-text' color='red.6' display={'inline-block'}>
				{t('notyficationWIPWarning')}
			</Text>
			<span className='notyfication-text'> {t('notyficationWIPText')}</span>
		</Notification>
	);
};

export default WIPLimitNotification;
