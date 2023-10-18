/* eslint-disable jsx-a11y/alt-text */
import React, { useState, useEffect } from "react";
import {dataUpload} from "../../services/requetsToEndpoint";
import Track from "../../models/track.inteface";

//creamos una variable y le asignamos datos de resquestToEndpoint 


const CardSong = () => {
    //usamos useState para cambiar el estado de los datos que queremos obtener
    const [songData, setSongData] = useState<Track>();
    
    //usamos useEffect para realizar solicitud a fecth
    useEffect(() => {
        const fetchData = async () => {
            const data  = await dataUpload();
            console.log(data);
            setSongData({
                nameArtist: data?.nameArtist,
                nameSong: data?.nameSong,
                imageSong: data?.imageSong,
            });
        };
        fetchData();
    }, []);

    //componente que pinta con los datos obtenidos del useState y useEffect
    const CardSongSearch = () => {
        
        //si songData es null o undefine vamos a crear un objeto vacio de tipo Track
        const { nameArtist, nameSong, imageSong }: Track = songData || {} as Track;
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
