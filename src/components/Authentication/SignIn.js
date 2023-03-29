import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { UserAuth } from '../../context/AuthContext';
import {
	Container,
	Title,
	Text,
	Anchor,
	Paper,
	TextInput,
	PasswordInput,
	Group,
	Checkbox,
	Button,
	MantineProvider,
} from '@mantine/core';

const SignIn = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [isEmailValid, setIsEmailValid] = useState(true);
	const [isPasswordValid, setIsPasswordValid] = useState(true);
	const [error, setError] = useState('');
	const navigate = useNavigate();
	const { signIn } = UserAuth();

	// create boolean const to check if email is in database
	// create boolean const to check if password is in database
	const invalidEmailError =
		error === 'Firebase: Error (auth/invalid-email).'
			? 'Nieprawidłowy e-mail'
			: false;

	const userNotFoundError =
		error === 'Firebase: Error (auth/user-not-found).'
			? 'Użytkownik o takim adresie e-mail nie istnieje.'
			: false;

	const passwordError =
		error === 'Firebase: Error (auth/wrong-password).'
			? 'Nieprawidłowe hasło'
			: false;

	const handleSubmit = async (e) => {
		e.preventDefault();
		console.log('hej');
		setError('');
		try {
			await signIn(email, password);
			navigate('/kanban');
		} catch (e) {
			setError(e.message);
			console.log(e.message);
		}
	};
	return (
		<MantineProvider theme={{ colorScheme: 'dark' }}>
			<form onSubmit={handleSubmit}>
				<Container size={420} my={100}>
					<Title
						align='center'
						sx={(theme) => ({
							fontFamily: `Lato, ${theme.fontFamily}`,
							fontWeight: 700,
						})}
					>
						Panel logowania
					</Title>
					<Text color='dimmed' size='sm' align='center' mt={5}>
						Nie masz konta?{' '}
						<Link to='/signup'>
							<Anchor size='sm' component='button'>
								Utwórz konto
							</Anchor>
						</Link>
					</Text>

					<Paper withBorder shadow='md' p={30} mt={20} radius='md'>
						<TextInput
							label='Email'
							placeholder='Wpisz e-mail'
							required
							onChange={(e) => {
								setError('');
								setEmail(e.target.value);
							}}
							error={userNotFoundError || invalidEmailError}
						/>
						<PasswordInput
							label='Hasło'
							placeholder='Wpisz hasło'
							required
							mt='md'
							onChange={(e) => {
								setError('');
								setPassword(e.target.value);
							}}
							error={passwordError}
						/>
						<Button type='submit' fullWidth mt='xl'>
							Zaloguj się
						</Button>
					</Paper>
				</Container>
			</form>
		</MantineProvider>
	);
};

export default SignIn;
