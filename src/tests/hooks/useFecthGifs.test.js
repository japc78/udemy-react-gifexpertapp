import '@testing-library/jest-dom';
import { renderHook } from '@testing-library/react-hooks';

import { useFetchGifs } from '../../hooks/useFetchGifs';

describe('Pruebas en el hoook useFechtGifs', () => {

	test('Debe de retornar el estado inicial', async() => {

		const category = 'Rick and Morty';

		// const { data, loading} = useFetchGifs( category );


		// const response = renderHook( () => useFetchGifs( category ));
		// console.log(response);

		// Se entraen los datos
		const { result, waitForNextUpdate } = renderHook( () => useFetchGifs( category ));
		const { data, loading } = result.current;

		console.log(data, loading);
		await waitForNextUpdate();

		expect( data ).toEqual([]);
		expect( loading).toBeTruthy();
	});

	test('Debe de retornar un array de imagenes y el loading en false', async() => {
		const category = 'Rick and Morty';

		const { result, waitForNextUpdate } = renderHook( () => useFetchGifs( category ));
		await waitForNextUpdate();
		const { data, loading } = result.current;

		expect( data.length ).toBe(10);
		expect( loading).toBeFalsy();

	})


})
