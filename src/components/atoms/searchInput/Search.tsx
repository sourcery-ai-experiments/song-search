import React, { useState } from 'react';
import CardSong from '../../cardSong';
import SearchIcon from '@mui/icons-material/Search';
import IconButton from '@mui/material/IconButton/IconButton';
import { Input } from '@mui/material';


const Search = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [showCards, setShowCards] = useState(false);

    const handleSearch = () => {
        // Cambiar el estado para mostrar las tarjetas
        setShowCards(true);
    };
    return (
        <div>
            <div>
                <h2>Search Song</h2>
                <Input 
                    
                    placeholder="Search Song"
                    value={searchTerm}
                    onChange={(e) => {setSearchTerm(e.target.value); handleSearch()}}
                    startAdornment={
                        <IconButton color="primary" aria-label="upload picture" component="span" onClick={handleSearch}>
                            <SearchIcon />
                        </IconButton>
                    }
                />
            </div>
            <div>
                {/* Renderizar CardSong solo si showCards es true */}
                {showCards && <CardSong searchTerm={searchTerm.length >3 ? searchTerm : '' } />}
            </div>
        </div>
    );
};

export default Search;
