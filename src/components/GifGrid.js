import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'
// import { getGifs } from '../helpers/getGifs';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ( {category }) => {

	// Con desestructuracion
	const { data:images, loading} = useFetchGifs( category );

	return (
		<>
			<h3>{ category }</h3>

			{/* Operador ternario, si loading true se muestra cargando*/}
			{/* { loading ? 'Cargando...' : 'Datos cargados'} */}

			{ loading && <p>Cargando...</p>}


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
