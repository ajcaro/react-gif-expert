import { fireEvent, render, screen } from '@testing-library/react';
import { AddCategory } from '../../../src/components/AddCategory';

describe('Pruebas en <AddCategory />', () => {
	test('Debe de cambiat el valor en la caja de texto', () => {
		render(<AddCategory onNewCategory={() => {}} />);
		const input = screen.getByRole('textbox');

		fireEvent.input(input, { target: { value: 'Goku' } });

		expect(input.value).toBe('Goku');
		//screen.debug();
	});

	test('Debe de llamar a onNewCategory si el input tiene un valor', () => {
		const inputValue = 'Goku';

		const onNewCategory = jest.fn();

		render(<AddCategory onNewCategory={onNewCategory} />);

		const input = screen.getByRole('textbox');
		const form = screen.getByRole('form');

		fireEvent.input(input, { target: { value: inputValue } });
		fireEvent.submit(form);

		expect(input.value).toBe('');

		expect(onNewCategory).toHaveBeenCalled();
		expect(onNewCategory).toHaveBeenCalledTimes(1);
		expect(onNewCategory).toHaveBeenCalledWith(inputValue);

		//screen.debug();
	});

	test('No debe de llamar el onNewCategory si el input está vacio', () => {
		const inputValue = '';
		const onNewCategory = jest.fn();
		render(<AddCategory onNewCategory={onNewCategory} />);
		const input = screen.getByRole('textbox');
		const form = screen.getByRole('form');

		fireEvent.input(input, { target: { value: inputValue } });
		fireEvent.submit(form);

		expect(onNewCategory).not.toHaveBeenCalled();
	});
});
