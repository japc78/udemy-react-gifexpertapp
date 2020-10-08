import React from 'react';
import '@testing-library/jest-dom'
import { shallow } from 'enzyme'
import { AddCategory } from '../../components/AddCategory';

describe('Pruebas en componente <AddCategory />', () => {

	const setCategories = jest.fn();
	let wrapper = shallow( <AddCategory setCategories = {setCategories} />);
	let input = wrapper.find('input');

	//Resetar valores en cada test
	beforeEach( () => {
		jest.clearAllMocks();
		wrapper = shallow( <AddCategory setCategories = {setCategories} />);
		input = wrapper.find('input');
	});


	test('Debe de mostrarse correctamente', () => {
		expect( wrapper ).toMatchSnapshot();
	})

	test('Debe de cambiar la caja de texto', () => {
		const value = 'Hola Mundo';

		//Le pasamos el valor value al evento llamado en el componente AddCategory en el evento onChange, se simula que se le envia un valor.
		//Es lo mismo que
		// target: {
		// 	value: value
		// }
		input.simulate('change', { target : { value }});

		expect(wrapper.find('p').text().trim()).toBe( value );
	})

	test('No debe de postear la informacion con submit', () => {
		//Simulate primer parametro el evento, el segundo los parametros que van hacer transformados en el evento.
		//preventDefault(){} funcion enviada  dentro del objeto.

		wrapper.find('form').simulate('submit', {
			preventDefault: () => {}
		});


		// Lo mismo pero en forma corta
		// wrapper.find('form').simulate('submit', {preventDefault(){}});

		// Prueba en la que se indica que no llego a pasar el evento esperado, es decir llamar a la funcion setCategories.
		expect( setCategories ).not.toHaveBeenCalled();
	})

	test('Debe de llamar el setCategories y limpiar la caja de texto', () => {
		// 1. Simular el inputChange
		const value = 'Rick and Morty';
		input.simulate('change', { target : { value }});

		// 2. Simular el submit
		wrapper.find('form').simulate('submit', { preventDefault(){} });

		// 3. setCategories se debe haber llamado
		// expect( setCategories ).toHaveBeenCalled();

		// Se comprueba que es llamada solo una vez
		expect( setCategories ).toHaveBeenCalledTimes(1);

		// Se comprueba que es llamada como una funcion
		expect( setCategories ).toHaveBeenCalledWith( expect.any(Function));


		// 4. el valor del input debe estar vacio
		// console.log(input.text());
		expect(input.prop('value')).toBe('');

	})



})
