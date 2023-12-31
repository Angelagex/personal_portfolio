"use server"

const SpotifyWebApi = require('spotify-web-api-node');


const spotifyApi = new SpotifyWebApi({
    clientId: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET,
    redirectUri: process.env.REDIRECT_URI
});

const refresh_token = process.env.REFRESH_TOKEN

export async function getDiscordStatus() {
    const fetchData = await fetch('https://api.lanyard.rest/v1/users/448913483833147403')
    const { data: { discord_status } } = await fetchData.json()
    return discord_status
}

export async function getSpotifyInfo() {
    spotifyApi.setRefreshToken(refresh_token);
    const { body } = await spotifyApi.refreshAccessToken();
    spotifyApi.setAccessToken(body.access_token);

    const recentTracks = await spotifyApi.getMyRecentlyPlayedTracks({
        limit: 1,
    });

    return recentTracks.body.items[0].track
}

export async function getWeatherInfo() {
    
    const fetchData = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=Bogota,CO&units=metric&&lang=es&appid=${process.env.WEATHER_API_KEY}`)    
    return fetchData.json()
    
}