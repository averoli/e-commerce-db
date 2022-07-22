const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '37fbd297b8msheea969a0ba3851dp1e0986jsn59c6a94559a3',
		'X-RapidAPI-Host': 'hapi-books.p.rapidapi.com'
	}
};

fetch('https://hapi-books.p.rapidapi.com/book/56597885', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));