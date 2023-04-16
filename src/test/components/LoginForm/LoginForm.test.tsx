import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import LoginForm from '../../../components/LoginForm/LoginForm';

describe('Login form', () => {
	test('renders login form elements', () => {
		const handleLogin = jest.fn();
		render(<LoginForm onLogin={handleLogin} />);

		expect(screen.getByLabelText(/username/i)).toBeInTheDocument();
		expect(screen.getByLabelText(/password/i)).toBeInTheDocument();
		expect(screen.getByRole('button', { name: /login/i })).toBeInTheDocument();
	});

	test('submitting form with valid username and password calls onSubmit handler', () => {
		const handleLogin = jest.fn();
		render(<LoginForm onLogin={handleLogin} />);

		const usernameInput = screen.getByLabelText(/username/i);
		userEvent.type(usernameInput, 'testuser');

		const passwordInput = screen.getByLabelText(/password/i);
		userEvent.type(passwordInput, 'testpass');

		const submitButton = screen.getByRole('button', { name: /login/i });
		fireEvent.click(submitButton);

		expect(handleLogin).toHaveBeenCalledTimes(1);
		expect(handleLogin).toHaveBeenCalledWith(
			'testuser',
			'testpass'
		);
	});

	test('submitting form with invalid username or password shows error message', async () => {
		const handleLogin = jest.fn().mockRejectedValue(new Error('Invalid username or password'));
		render(<LoginForm onLogin={handleLogin} />);

		const usernameInput = screen.getByLabelText(/username/i);
		userEvent.type(usernameInput, 'invaliduser');

		const passwordInput = screen.getByLabelText(/password/i);
		userEvent.type(passwordInput, 'invalidpass');

		const submitButton = screen.getByRole('button', { name: /login/i });
		fireEvent.click(submitButton);

		const errorMessage = await screen.findByText(/invalid username or password/i);
		expect(errorMessage).toBeInTheDocument();
	});
});
