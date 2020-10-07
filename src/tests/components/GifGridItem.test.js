import React from 'react'
import '@testing-library/jest-dom'
const { shallow } = require('enzyme')
const { GifGridItem } = require('../../components/GifGridItem')

describe('Pruebas en <GifGridItem />', () => {

	const title = 'Un titulo';
	const url = 'https://media2.giphy.com/media/AT6LbRAazEoPm/giphy.gif'
	const wrapper = shallow( <GifGridItem title = {title} url = {url} /> )


	test('Debe de mostrar el componente correctamente', () => {
		expect( wrapper ).toMatchSnapshot();
	})

	test('Debe de tener tag <p> con el titulo ', () => {
		const p = wrapper.find('p');
		expect( p.text().trim() ).toBe( title );
	})

	test('Debe tener la imagen igual al url y alt de los props ', () => {
		const img = wrapper.find('img');

		// Ver el componente completo con .html()
		// console.log(img.html());

		// Los atributos del component son props y podemos acceder a ellas.
		// console.log(img.props());
		// console.log(img.prop('src'));

		expect(img.prop('src')).toBe(url)
		expect(img.prop('alt')).toBe(title)
	})

	test('Debe de tener animate__fadeIn', () => {
		const div = wrapper.find('div')
		// console.log(div.props());

		expect(div.prop('className')).toContain("animate__fadeIn")
	})



})
