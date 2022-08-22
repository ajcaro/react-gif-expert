import { screen, render } from '@testing-library/react';
import { GifGrid } from '../../components/GifGrid';
import useFetchGifs from '../../hooks/useFetchGifs';

jest.mock('../../hooks/useFetchGifs');

describe('Pruebas en <GifGrid />', () => {
	const category = 'Goku';
	test('Debe de mostrar el loading inicialmente', () => {
		useFetchGifs.mockReturnValue({
			images: [],
			isLoading: true,
		});

		render(<GifGrid category={category} />);

		expect(screen.getByText('Cargando ...')).toBeTruthy();
		expect(screen.getByText(category)).toBeTruthy();
	});

	test('Debe de mostrar itemos cuando se cargan las imágenes mediante useFetcGifs', () => {
		const gifs = [
			{
				id: 'ABC',
				title: 'Goku',
				url: 'https://localhost/goku.jpg',
			},
			{
				id: '123',
				title: 'Naruto',
				url: 'https://localhost/naruto.jpg',
			},
		];

		useFetchGifs.mockReturnValue({
			images: gifs,
			isLoading: false,
		});
		render(<GifGrid category={category} />);

		expect(screen.getAllByRole('img').length).toBe(2);
	});
});
