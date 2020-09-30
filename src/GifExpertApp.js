import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory';

export const GifExpertApp = () => {

	// Uso del Hook useState para modificar dinamicamente la lista
	const [categories, setCategories] = useState(['One Pusch', 'Samurai X', 'Dragon Ball']);

	/*
	// Tarea. Agregar un elemento nuevo al arrary mediante esta funcion.
	const handleAdd = () => {
		// setCategories( [...categories, 'Regular Show'] );

		//Recibe un callback, c es categorias, regresa un nuevo array con todas las categorias y luego la add.

		//setCategories puede tener un callback en el cual el primer argumetno es el valor del estado anterior, en este caso c es el array de categories, y luego tiene que retornar el nuevo estado. En este acaso el array con spread + el nuevo elmento.
		setCategories(c => [...c, 'Regular Show']);
	};
 	*/

	return (
		<>
			<h2>GifExpertApp</h2>
			<AddCategory setCategories = { setCategories }/>
			<hr/>

			<ol>
				{
					categories.map(category => {
						return <li key={category}>{category}</li>
					})
				}
			</ol>
		</>
	);
}