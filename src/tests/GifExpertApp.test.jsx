import { render } from '@testing-library/react';
import { GifExpertApp } from '../GifExpertApp';

describe('Pruebas es <GifExpertApp  />', () => {
	test('Debe de agregar categorias correctamente', () => {
		const newCategory = 'Goku';
		render(<GifExpertApp />);
	});
});
