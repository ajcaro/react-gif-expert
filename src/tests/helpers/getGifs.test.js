import { getGifs } from '../../helpers/getGifs';

describe('Pruebas en getGifs()', () => {
	test('Debe deretornar un arreglo de figs', async () => {
		const gifs = await getGifs('Goku');
		// console.log(gifs);
		expect(gifs.length).toBeGreaterThan(0);
		expect(gifs[0]).toEqual({
			id: expect.any(String),
			title: expect.any(String),
			url: expect.any(String),
		});
	});
});
