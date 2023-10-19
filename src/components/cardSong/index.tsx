/* eslint-disable jsx-a11y/alt-text */
import React, { useState, useEffect } from "react";
import { dataUpload } from "../../services/requetsToEndpoint";
import Track from "../../models/track.inteface";
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

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
            <>
                <div style={{display:'inline-block', 
                marginTop: '20px'}}>
                    {songData.length > 0 ? (
                        songData.map((track, index) => (
                            <div key={index}>
                                <Card sx={{ maxWidth: 345 }}>
                                    <CardMedia
                                        component="img"
                                        height="300"
                                        src={track.imageSong} alt={track.nameSong}
                                    />
                                    <CardContent>
                                        <Typography variant="h5" color="black">
                                            {track.nameArtist}
                                        </Typography>
                                        <Typography variant="h6" color="black">
                                            {track.nameSong}
                                        </Typography>
                                    </CardContent>
                                </Card>
                                <br />
                            </div>
                        ))
                    ) : (
                        <div></div>
                    )}
                </div>
            </>
        );
    };

    return <CardSongSearch />;
};

export default CardSong;
