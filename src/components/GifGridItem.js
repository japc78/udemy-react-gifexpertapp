import React from 'react'

// Con props ya pasadas de manera independiente.
// export const GifGridItem = ( props ) => {
// 	console.log(props);

// De una manera mas amigable para la lectura del codigo
export const GifGridItem = ( {id, title, url} ) => {
	console.log({id, title, url});

	return (
		<div>
			<img src={url} alt={title}/>
			<p>{title}</p>
		</div>
	)
}
