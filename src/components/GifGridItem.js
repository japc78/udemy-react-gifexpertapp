import React from 'react'
import PropTypes from 'prop-types'


// Con props ya pasadas de manera independiente.
// export const GifGridItem = ( props ) => {
// 	console.log(props);

// De una manera mas amigable para la lectura del codigo
export const GifGridItem = ( {title, url} ) => {
	// console.log({id, title, url});

	return (
		<div className='card animate__animated animate__fadeIn'>
			<img src={url} alt={title}/>
			<p>{title}</p>
		</div>
	);
}


GifGridItem.propTypes = {
	title : PropTypes.string.isRequired,
	url : PropTypes.string.isRequired
}
