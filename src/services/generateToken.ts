const generateToken = async () => {

    try {
        // POST request using fetch with set headers
        const urlencoded = new URLSearchParams();
        urlencoded.append("grant_type", "client_credentials");
        urlencoded.append("client_id", process.env.REACT_APP_SPOTIFY_CLIENT_ID || '' );
        urlencoded.append("client_secret", process.env.REACT_APPP_SPOTIFY_CLIENT_SECRET || '');
        const requestOptions = {
            method: 'POST',
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
            },
            body: urlencoded
        };
        const data = await fetch('https://accounts.spotify.com/api/token', requestOptions)
        const responseData = await data.json();
        return responseData;
    } catch (error) {
        return;
    }
}

const getToken = async () => {
    // here we obtain the stored token on localStorage
    const localStorageToken = localStorage.getItem('token');

    //we verify if the token exists and if it is valid
    if (localStorageToken) {
        const newObjectToken = JSON.parse(localStorageToken);
        if (Date.now() < newObjectToken.tokenExpiryDate) {
            return newObjectToken.access_token;
        }
    }

    // here we generate a new token and calculate the expiration date
    const token = await generateToken();
    const tokenExpiryDate = Date.now() + token.expires_in * 60;


    // we created a object new and save of token and also tokenExpiryDate and asigned on localstorage 
    const newToken = {
        access_token: token.access_token,
        tokenExpiryDate: tokenExpiryDate
    };

    localStorage.setItem('token', JSON.stringify(newToken));

    return newToken.access_token;
};
export { getToken };