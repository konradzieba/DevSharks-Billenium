import { IconBug } from '@tabler/icons-react';
import { Tooltip, Text } from '@mantine/core';
import './styles.scss';
import { useTranslation } from 'react-i18next';

const BuggedStatus = () => {
	const { t } = useTranslation();
	return (
		<Tooltip
			label={
				<Text color='tomato' fz={14}>
					{t('notyficationBuggedCard')}
				</Text>
			}
			openDelay={200}
			position='right-end'
			color='#373A40'
			className='bugged-status__tooltip'
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
