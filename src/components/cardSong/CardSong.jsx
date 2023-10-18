import React, { useState, useEffect } from "react";
import { getToken } from "../../services/generateToken";
//creamos una variable y le asignamos el valor de la funcion getToken 
const  retsul = await getToken();

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
                                `${retsul}`,
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
