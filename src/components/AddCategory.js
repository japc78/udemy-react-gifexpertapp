import React, { useState } from 'react';
import PropTypes from 'prop-types';

export const AddCategory = ( { setCategories } ) => {

	const [inputValue, setInputValue] = useState('');

	const handleInputChange = (e) => {
		setInputValue(e.target.value);
		// console.log(e.target);
		// Comprobamos a la hora de hacer test para por el manejador
		// console.log('handleInputChange llamado');
	}

	const handleSubmit = (e) => {
		e.preventDefault();
		// Comprobamos a la hora de hacer test que simula el submit
		// console.log('Pass: handleSubmit', inputValue);

		if (inputValue.trim().length > 2) {
			setCategories(c => [inputValue, ...c]);
			setInputValue('');
			// console.log('Submit hecho!');
		}

	}

	return (
		<form onSubmit= {handleSubmit}>
			{/* Se añade para comprobar que el valor del input cambio en el evento onChange */}
			<p>{ inputValue }</p>
			<h2>Add Category</h2>
			<input
				type="text"
				value = {inputValue}
				onChange = {handleInputChange}
			/>
		</form>
	)
}

AddCategory.propTypes = {
	setCategories : PropTypes.func.isRequired
}
