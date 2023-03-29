import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { UserAuth } from '../../context/AuthContext';
import { addDoc, collection } from 'firebase/firestore';
import { db } from '../../firebase';
import {
	Container,
	Title,
	Text,
	Anchor,
	Paper,
	PasswordInput,
	Button,
	MantineProvider,
	Autocomplete,
	TextInput,
} from '@mantine/core';

const avatarColors = ['yellowgreen', 'royalblue', 'lime', 'orange'];

const SignUp = () => {
	const [input, setInput] = useState({
		firstName: '',
		lastName: '',
		email: '',
		password: '',
		password2: '',
	});
	const [error, setError] = useState({
		firstName: null,
		lastName: null,
		email: null,
		password: null,
		password2: null,
	});

	const navigate = useNavigate();
	const { createUser } = UserAuth();

	const suggestedEmails =
		input.email.trim().length > 0 && !input.email.includes('@')
			? ['gmail.com', 'outlook.com', 'yahoo.com', 'wp.pl', 'o2.pl'].map(
					(provider) => `${input.email}@${provider}`
			  )
			: [];

	const handleSubmit = async (e) => {
		e.preventDefault();
		setError({
			firstName: null,
			lastName: null,
			email: null,
			password: null,
			password2: null,
		});
		try {
			await createUser(input.email, input.password);
			await addDoc(collection(db, 'users'), {
				email: input.email,
				firstName: input.firstName,
				lastName: input.lastName,
				avatarUrl: '',
				avatarColor: avatarColors[Math.floor(Math.random() * avatarColors.length)],
			});
			navigate('/kanban');
		} catch (e) {
			setError(e.message);
			console.log(e.message);
		}
	};
	return (
		<MantineProvider theme={{ colorScheme: 'dark' }}>
			<form onSubmit={handleSubmit}>
				<Container size={420} py={100}>
					<Title
						align='center'
						sx={(theme) => ({
							fontFamily: `Lato, ${theme.fontFamily}`,
							fontWeight: 700,
						})}
					>
						Panel rejestracji
					</Title>
					<Text color='dimmed' size='sm' align='center' mt={5}>
						Masz już konto?{' '}
						<Link to='/'>
							<Anchor size='sm' component='button'>
								Zaloguj się
							</Anchor>
						</Link>
					</Text>
					<Paper withBorder shadow='md' p={30} mt={20} radius='md'>
						<TextInput
							label='Imię'
							placeholder='Wpisz imię'
							required
							mt='md'
							onChange={(e) => {
								setInput({ ...input, firstName: e.target.value });
							}}
						/>
						<TextInput
							label='Nazwisko'
							placeholder='Wpisz nazwisko'
							required
							mt='md'
							onChange={(e) => {
								setInput({ ...input, lastName: e.target.value });
							}}
						/>
						<Autocomplete
							value={input.email}
							onChange={(value) => {
								setInput({ ...input, email: value });
							}}
							label='Email'
							placeholder='Wpisz e-mail'
							mt='md'
							required
							data={suggestedEmails}
							maxDropdownHeight={125}
							// error={userNotFoundError || invalidEmailError}
						/>
						<PasswordInput
							label='Hasło'
							placeholder='Wpisz hasło'
							required
							mt='md'
							onChange={(e) => {
								setInput({ ...input, password: e.target.value });
							}}
							// error={passwordError}
						/>
						<PasswordInput
							label='Potwierdź hasło'
							placeholder='Potwierdz hasło'
							required
							mt='md'
							onChange={(e) => {
								setError('');
								setInput({ ...input, password2: e.target.value });
							}}
							// error={passwordError}
						/>
						<Button type='submit' fullWidth mt='xl'>
							Zarejestruj się
						</Button>
					</Paper>
				</Container>
			</form>
		</MantineProvider>
	);
};

export default SignUp;
