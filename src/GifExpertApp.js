import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {

	// Uso del Hook useState para modificar dinamicamente la lista
	const [categories, setCategories] = useState(['Regular Show']);

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
					categories.map(category => (
						<GifGrid
							key = {category}
							category = {category}/>
					))
				}
			</ol>
		</>
	);
}