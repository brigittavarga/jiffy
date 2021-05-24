function createVideo (src) {
    const video = document.createElement("video")
    // here we can set attributes on our created element using the . notation 
    video.src = src
    video.autoplay = true
    video.loop = true

    console.log(video)
    // when we use return we tell the function to give us something back
    return video

}

// here we put our URL into fetch
fetch("https://api.giphy.com/v1/gifs/search?api_key=Jar9pAn2Ia0OVPjpsRuwSB3pQUXiq4bU&q=doggo&limit=50&offset=0&rating=PG-13&lang=en")
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

    const video = createVideo(src)

    // we grab our videos element and then append our newly created video to it
    const videosEl = document.querySelector(".videos")
    videosEl.appendChild("video")

    }) 
    .catch(error => {
    // lastly we can use .catch() to do something in case our fetch fails
});