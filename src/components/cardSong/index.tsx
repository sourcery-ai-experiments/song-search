/* eslint-disable jsx-a11y/alt-text */
import React, { useState, useEffect } from "react";
import { dataUpload } from "../../services/requetsToEndpoint";
import Track from "../../models/track.inteface";

// Creamos una prop para pasar el término de búsqueda
interface CardSongProps {
    searchTerm: string;
}

const CardSong = ({ searchTerm }: CardSongProps) => {
    const [songData, setSongData] = useState<Track[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            const data = await dataUpload(searchTerm);
            setSongData(data);
        };
        fetchData();
    }, [searchTerm]);

    const CardSongSearch = () => {
        return (
            <div>
                {songData.length > 0 ? (
                    songData.map((track, index) => (
                        <div key={index}>
                            <h3>{track.nameArtist}</h3>
                            <img src={track.imageSong} alt={track.nameSong} />
                            <h2>{track.nameSong}</h2>
                        </div>
                    ))
                ) : (
                    <div></div>
                )}
            </div>
        );
    };

    return <CardSongSearch />;
};

export default CardSong;
