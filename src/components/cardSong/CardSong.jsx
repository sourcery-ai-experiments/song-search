import React, { useState, useEffect } from "react";

const generateToken = async () => {
    // POST request using fetch with set headers
    var urlencoded = new URLSearchParams();
    urlencoded.append("grant_type", "client_credentials");
    urlencoded.append("client_id", "d65bb2879c7e4c2885d3e192a4ad92a4");
    urlencoded.append("client_secret", "87f2e0b1b7b44f7a91cb3b0679ec6277");
    const requestOptions = {
        method: 'POST',
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
        },
        body: urlencoded
    };
    const data = await fetch('https://accounts.spotify.com/api/token', requestOptions)
    const responseData = await data.json()
    console.log(responseData);
}

const retsul = generateToken();
console.log(retsul);


const CardSong = () => {
    //usamos useState para cambiar el estado de los datos que queremos obtener
    const [songData, setSongData] = useState({
        nameArtist: "",
        nameSong: "",
        imageSong: ""
    });
    //usamos useEffect para realizar solicitud a fecth
    useEffect(() => {
        const dataUpload = async () => {
            try {
                //aqui realizamos la conexion de la api y tambien realizamos la peticion del endpoint
                const response = await fetch(
                    "https://api.spotify.com/v1/search?type=track&q=mariposa traicionera&limit=2",
                    {
                        headers: {
                            Authorization:
                                "Bearer " +
                                "BQDM4tQSDUQOUbKe03D5Xv9COlQFog5wxeRJOuZft97lV8iPrNv5r88mY_CTxwgtLMD8DZCMIz_FAM-flXL2G7mwWeunuUS5gHPgnWqxiJA1koW7RsU",
                        },
                    }
                );
                const data = await response.json();
                // Actualizar el estado con los datos de la API
                setSongData({
                    nameArtist: data.tracks.items[0].artists[0].name,
                    nameSong: data.tracks.items[0].name,
                    imageSong: data.tracks.items[0].album.images[1].url,
                });
            }
            catch (error) {
                // Aquí puedes manejar los errores de la solicitud
                console.error("Error fetching data:", error);
                console.log('verificar el token');
            };
        }
        dataUpload()
    }, []);

    //componente que pinta con los datos obtenidos del useState y useEffect
    const CardSongSearch = () => {

        const { nameArtist, nameSong, imageSong } = songData;
        return (
            <div>
                <h3>{nameArtist}</h3>
                <img src={imageSong} />
                <h2>{nameSong}</h2>
            </div>
        )
    }

    return <CardSongSearch />
};

export default CardSong;
