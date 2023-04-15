import React, { useState } from "react"

type LoginFormProps = {
	onLogin: (username: string, password: string) => void;
}

const LoginForm: React.FC<LoginFormProps> = ({ onLogin }) => {
	const [username, setUsername] = useState('')
	const [password, setPassword] = useState('')
	const [error, setError] = useState('')

	const handleUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setUsername(event.target.value)
	}

	const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setPassword(event.target.value)
	}

	const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault()
		try {
			onLogin(username, password)
		} catch (error: any) {
			setError(error.message)
		}

	}

	return (
		<form onSubmit={handleSubmit}>
			{error ? <div className='error'>{error}</div> : null}
			<label>
				Username:
				<input type='text' value={username} onChange={handleUsernameChange} />
			</label>
			<br />
			<label>
				Password:
				<input type='password' value={password} onChange={handlePasswordChange} />
			</label>
			<br />
			<button type='submit'>Login</button>
		</form>
	)
}

export default LoginForm