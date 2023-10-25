// Home.js
import React, { useState, useEffect } from "react";
import Search from '../components/atoms/search';
import CardSongSearch from '../components/atoms/cardSong';
import Track from '../models/track.inteface';
import { getListSong } from '../services/requetsToEndpoint';
import { useNavigate } from 'react-router-dom';


const Home = () => {
    const [searchTerm, setSearchTerm] = useState<string>('');
    const handleSearch = (nameSong: string) => {
        setSearchTerm(nameSong);
    };

    const [songData, setSongData] = useState<Track[]>([]);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await getListSong(searchTerm);
                setSongData(data);
            } catch (error) {
                console.log(error);
            }
        };
        fetchData();
    }, [searchTerm]);

    const navigate = useNavigate();

    const goUrlSongSpotify = (Id: string) => {
        navigate(`/details/${Id}`);
    };

    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', }}>
            <Search onSearch={handleSearch} />
            <CardSongSearch tracksData={songData} onClickSong={goUrlSongSpotify} />
        </div>
    );
}

export default Home;
