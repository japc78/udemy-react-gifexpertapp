import React from 'react';
import '@testing-library/jest-dom'

import { shallow } from 'enzyme'
import { GifGrid } from '../../components/GifGrid';
import { useFetchGifs } from '../../hooks/useFetchGifs';
jest.mock('../../hooks/useFetchGifs')

describe('Purebas en componente <GifGrid />', () => {

	const category = 'Rick and Morty';

	test('Debe de mostrarse correctamente', () => {

		useFetchGifs.mockReturnValue({
			data: [],
			loading: true
		})

		const wrapper = shallow(<GifGrid category = {category} />);
		expect( wrapper ).toMatchSnapshot();
	});

	test('Debe de mostrar items cuando se cargan imagenes useFechGifs', () => {

		const gifs = [
			{
				id: 'ABC',
				url: 'https://localhost/testing/url.jpg',
				title: 'Elemento de prueba'
			},
			{
				id: 'DEF',
				url: 'https://localhost/testing/url2.jpg',
				title: 'Elemento de prueba 2'
			}
		]

		useFetchGifs.mockReturnValue({
			data: gifs,
			loading: false
		})

		const wrapper = shallow(<GifGrid category = {category} />);
		expect( wrapper ).toMatchSnapshot();

		// Se comprueba que el loading no exista
		expect( wrapper.find('p').exists()).toBe(false);

		// Se comprueba que se pinta dos componentes del GifGridItem que coincide con el array gifs de prueba
		expect( wrapper.find('GifGridItem').length).toBe(gifs.length);

	})

})
