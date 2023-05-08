import {
	Button,
	Box,
	rem,
	MantineProvider,
	ScrollArea,
} from '@mantine/core';
import './styles.scss';
import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'tabler-icons-react';
import { useTranslation } from 'react-i18next';

const props = {
	margin: '0 auto',
	padding: 0,
	display: 'flex',
	flexDirection: 'column',
	gap: '5px',
};

export const AsideMenu = () => {
	const { t } = useTranslation();
	const mainButtons = [
		{
			label: t('docStart'),
			link: '#',
		},
		{
			label: t('docTechnologies'),
			link: '#Technologies',
		},
		{
			label: t('docInstalation'),
			link: '#Installation',
		},
	];
	
	const menuButtons = [
		{
			label: t('docLanguageChange'),
			link: '#LanguageChange',
		},
		{
			label: t('docSignIn'),
			link: '#SignIn',
		},
		{
			label: t('docSignUp'),
			link: '#SignUp',
		},
		{
			label: t('docAssignAvatar'),
			link: '#AssignAvatar',
		},
		{
			label: t('docCreateColumn'),
			link: '#CreateColumn',
		},
		{
			label: t('docChangeColumnName'),
			link: '#ChangeColumnName',
		},
		{
			label: t('docChangeTaskLimitInColumn'),
			link: '#ChangeTaskLimitInColumn',
		},
		{
			label: t('docCreateGroup'),
			link: '#CreateGroup',
		},
		{
			label: t('docChangeGroupName'),
			link: '#ChangeGroupName',
		},
		{
			label: t('docCreateTask'),
			link: '#CreateTask',
		},
		{
			label: t('docChangeTaskName'),
			link: '#ChangeTaskName',
		},
		{
			label: t('docChangeTaskColor'),
			link: '#ChangeTaskColor',
		},
		{
			label: t('docTaskBugStatus'),
			link: '#TaskBugStatus',
		},
		{
			label: t('docSubtasks'),
			link: '#Subtasks',
		},
		{
			label: t('docAssignUserLimit'),
			link: '#AssignUserLimit',
		},
		{
			label: t('docAssignUserToTask'),
			link: '#AssignUserToTask',
		},
		{
			label: t('docDelete'),
			link: '#Delete',
		},
	];

	const [isMenuOpen, setIsMenuOpen] = useState(false);
	return (
		<MantineProvider theme={{ colorScheme: 'dark' }}>
			<aside>
				<div>
					<Box
						sx={() => ({
							...props,
						})}
					>
						{mainButtons.map((button) => (
							<Button
								variant='default'
								color='gray.1'
								w={rem(300)}
								href={button.link}
								component='a'
							>
								{button.label}
							</Button>
						))}
						<Button
							variant='default'
							color='gray.1'
							w={rem(300)}
							onClick={() => setIsMenuOpen((prev) => !prev)}
							rightIcon={
								isMenuOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />
							}
						>
							{t('docFunctionalities')}
						</Button>
					</Box>
					<Box
						sx={() => ({
							...props,
							height: '60px',
							fontSize: '14px',
						})}
					>
						<ScrollArea.Autosize
							mah={292}
							w='300px'
							mt={5}
							mb={2}
							offsetScrollbars={true}
							type='always'
						>
							{isMenuOpen &&
								menuButtons.map((button) => (
									<Button
										variant='light'
										color='gray.4'
										mt={5}
										w={rem(300)}
										component='a'
										href={button.link}
									>
										{button.label}
									</Button>
								))}
						</ScrollArea.Autosize>
					</Box>
				</div>
			</aside>
		</MantineProvider>
	);
};
