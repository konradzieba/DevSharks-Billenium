import {
	UnstyledButton,
	Menu,
	Button,
	Box,
	rem,
	MantineProvider,
	ScrollArea,
	Group,
} from '@mantine/core';
import './styles.scss';
import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'tabler-icons-react';

const mainButtons = [
	{
		label: 'Start',
		link: '#',
	},
	{
		label: 'Technologie',
		link: '#Technologies',
	},
	{
		label: 'Instalacja',
		link: '#Installation',
	},
];

const menuButtons = [
	{
		label: 'Zmiana języka',
		link: '#LanguageChange',
	},
	{
		label: 'Logowanie',
		link: '#SignIn',
	},
	{
		label: 'Rejestracja',
		link: '#SignUp',
	},
	{
		label: 'Zmiana avatara',
		link: '#AssignAvatar',
	},
	{
		label: 'Tworzenie kolumny',
		link: '#CreateColumn',
	},
	{
		label: 'Zmiana nazwy kolumny',
		link: '#ChangeColumnName',
	},
	{
		label: 'Zmiana limitu zadań w kolumnie',
		link: '#ChangeTaskLimitInColumn',
	},
	{
		label: 'Tworzenie grupy',
		link: '#CreateGroup',
	},
	{
		label: 'Zmiana nazwy grupy',
		link: '#ChangeGroupName',
	},
	{
		label: 'Tworzenie zadania',
		link: '#CreateTask',
	},
	{
		label: 'Zmiana nazwy zadania',
		link: '#ChangeTaskName',
	},
	{
		label: 'Zmiana koloru zadania',
		link: '#ChangeTaskColor',
	},
	{
		label: 'Status zbugowane',
		link: '#TaskBugStatus',
	},
	{
		label: 'Podzadania',
		link: '#Subtasks',
	},
	{
		label: 'Limit przydzielonych zadań',
		link: '#AssignUserLimit',
	},
	{
		label: 'Przypisanie użytkownika do zadania',
		link: '#AssignUserToTask',
	},
	{
		label: 'Usuwanie kolumny, grupy i zadania',
		link: '#Delete',
	},
];

const props = {
	margin: '0 auto',
	padding: 0,
	display: 'flex',
	flexDirection: 'column',
	gap: '5px',
};

export const AsideMenu = () => {
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
							Funkcjonalności
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
