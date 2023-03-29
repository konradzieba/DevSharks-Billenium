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
import { useForm } from '@mantine/form';

const avatarColors = ['yellowgreen', 'royalblue', 'lime', 'orange'];

const SignUp = () => {
	const form = useForm({
		initialValues: {
			firstName: '',
			lastName: '',
			email: '',
			password: '',
			password2: '',
		},
		validate: (values) => ({
			firstName:
				values.firstName.trim().length < 2 &&
				'Imię musi zawierać co najmniej 2 znaki',
			lastName:
				values.lastName.trim().length < 2 &&
				'Nazwisko musi zawierać co najmniej 2 znaki',

			email: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(values.email)
				? null
				: 'Invalid email',

			password:
				values.password.trim().length < 6 &&
				'Hasło musi zawierać co najmniej 6 znaków',
			password2:
				values.password2 === values.password
					? null
					: 'Podane hasła nie są takie same',
		}),
	});

	const navigate = useNavigate();
	const { createUser } = UserAuth();

	const suggestedEmails =
		form.values.email.trim().length > 0 && !form.values.email.includes('@')
			? ['gmail.com', 'outlook.com', 'yahoo.com', 'wp.pl', 'o2.pl'].map(
					(provider) => `${form.values.email}@${provider}`
			  )
			: [];

	const handleSubmit = async (values) => {
		try {
			await createUser(form.values.email, form.values.password);
			await addDoc(collection(db, 'users'), {
				email: values.email,
				firstName: values.firstName,
				lastName: values.lastName,
				avatarUrl: '',
				avatarColor: avatarColors[Math.floor(Math.random() * avatarColors.length)],
			});
			navigate('/kanban');
		} catch (e) {
			e.message === 'Firebase: Error (auth/email-already-in-use).' &&
				form.setErrors({ email: 'Użytkownik o takim adresie już istnieje' });
		}
	};

	return (
		<MantineProvider theme={{ colorScheme: 'dark' }}>
			<form
				onSubmit={form.onSubmit((values) => {
					form.setValues(values);
					handleSubmit(values);
				})}
			>
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
							{...form.getInputProps('firstName')}
						/>
						<TextInput
							label='Nazwisko'
							placeholder='Wpisz nazwisko'
							required
							mt='md'
							{...form.getInputProps('lastName')}
						/>
						<Autocomplete
							label='Email'
							placeholder='Wpisz e-mail'
							mt='md'
							required
							data={suggestedEmails}
							maxDropdownHeight={125}
							{...form.getInputProps('email')}
						/>
						<PasswordInput
							label='Hasło'
							placeholder='Wpisz hasło'
							required
							mt='md'
							onChange={(e) => {}}
							{...form.getInputProps('password')}
						/>
						<PasswordInput
							label='Potwierdź hasło'
							placeholder='Potwierdz hasło'
							required
							mt='md'
							onChange={(e) => {}}
							{...form.getInputProps('password2')}
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
