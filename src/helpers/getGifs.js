

export const getGifs = async (category) => {
	const url = `https://api.giphy.com/v1/gifs/search?q=${ encodeURI(category) }&limit=10&api_key=LtkGU0ZbRcWCOsCJNT1RceZ9iE6w2Pw6`
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
	return gifs;
}