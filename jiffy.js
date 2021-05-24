// here we put our URL into fetch
fetch("https://api.giphy.com/v1/gifs/search?api_key=Jar9pAn2Ia0OVPjpsRuwSB3pQUXiq4bU=doggo&limit=50&offset=0&rating=PG-13&lang=en")
    // here we use .then() to handle the response
    .then(response => { 
    // here we need to convert our response to json 
	return response.json();
    // we use .then() again to handle the json data
    }).then(json => {
	// here we grab the first result from our images array
    const gif = json.data[0]
    // here we look beside of the first result and grab the original mp4 source
    const src = gif.images.original.mp4
    console.log(src)
    }) 
    .catch(error => {
    // lastly we can use .catch() to do something in case our fetch fails
});