import { useState } from 'react';

export const AddCategory = ({ onNewCategory }) => {
	const [inputValue, setInputValue] = useState('');

	const onInputChange = event => {
		setInputValue(event.target.value);
	};

	const onSubmit = e => {
		e.preventDefault();
		if (inputValue.trim().length <= 1) return;

		//setCategories(current => [inputValue, ...current]);
		onNewCategory(inputValue.trim());
		setInputValue('');
	};

	return (
		<form onSubmit={onSubmit}>
			<input
				type='text'
				placeholder='Buscar Gifs'
				value={inputValue}
				onChange={onInputChange}
			/>
		</form>
	);
};
