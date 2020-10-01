import React, { useState, useEffect } from 'react'
import { getGifs } from '../helpers/getGifs';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ( {category }) => {

	const [images, setImages] = useState([]);

	// Es igual ComponentDidmount del modo antiguo de React con Clases, es decir el componente solo se va renderizar la primera vez.
	// Se utiliza el hook useEffect que como primer parametro es un callback que sera la funcion
	// que hace la peticion y como segundo parametro un array de dependencias, en este caso vacio
	// para que solo se dispare una sola vez.
	useEffect(() => {
		getGifs(category)

			// .then(imgs => setImages(imgs));
			// Lo mismo pero mas simplificado.
			.then(setImages);
	},[category]);



	// getGifs();

	return (
		<>
			<h3>{ category }</h3>
			<div className="card-grid">
					{
						// images.map(img => (
						// 	<li key = {img.id}> {img.title} </li>
						// ))

						// Con destructuracion
						images.map( img => (
							<GifGridItem
								key = {img.id}
								// img = {img}

								// Se envian las props diretamente con desestructuracion de manera independiente
								{...img}
							/>
						))}
			</div>
		</>
	)
}
