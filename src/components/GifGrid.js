import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'
import { GifGridItem } from './GifGridItem';
import PropTypes from 'prop-types';

export const GifGrid = ( {category }) => {

	// Con desestructuracion
	const { data:images, loading} = useFetchGifs( category );

	return (
		<>
			<h3 className="animate__animated animate__fadeIn">{ category }</h3>

			{/* Operador ternario, si loading true se muestra cargando*/}
			{/* { loading ? 'Cargando...' : 'Datos cargados'} */}

			{ loading && <p className="animate__animated animate__flash">Cargando...</p>}


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

GifGrid.propTypes = {
	category : PropTypes.string.isRequired
}