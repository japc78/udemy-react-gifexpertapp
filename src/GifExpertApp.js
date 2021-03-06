import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = ({ defaultCategories = [] }) => {

	// Uso del Hook useState para modificar dinamicamente la lista
	// const [categories, setCategories] = useState(['Regular Show']);
	const [categories, setCategories] = useState( defaultCategories );

	return (
		<>
			<h2>GifExpertApp</h2>
			<AddCategory setCategories = { setCategories }/>
			<hr/>

			<div>
				{
					categories.map(category => (
						<GifGrid
							key = {category}
							category = {category}/>
					))
				}
			</div>
		</>
	);
}