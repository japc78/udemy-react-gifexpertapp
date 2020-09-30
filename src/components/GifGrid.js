import React, { useState, useEffect } from 'react'
import { GifGridItem } from './GifGridItem';

export const GifGrid = ( {category }) => {

	const [images, setImages] = useState([]);

	// Es igual ComponentDidmount del modo antiguo de React con Clases, es decir el componente solo se va renderizar la primera vez.
	// Se utiliza el hook useEffect que como primer parametro es un callback que sera la funcion
	// que hace la peticion y como segundo parametro un array de dependencias, en este caso vacio
	// para que solo se dispare una sola vez.
	useEffect(() => {
		getGifs();
	},[]);

	const getGifs = async () => {
		const url = 'https://api.giphy.com/v1/gifs/search?q=Regular show&limit=10&api_key=LtkGU0ZbRcWCOsCJNT1RceZ9iE6w2Pw6'
		const respuesta = await fetch( url );
		const { data } = await respuesta.json();

		const gifs = data.map (img => {
			return {
				id: img.id,
				title: img.title,
				//la ? indica que si existe la url la traiga sino que no la pinte.
				url: img.images?.downsized_medium.url
			}
		})

		// console.log(data);
		// console.log(gifs);
		setImages( gifs );
	}

	// getGifs();

	return (
		<div>
			<h3>{ category }</h3>
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
	)
}
