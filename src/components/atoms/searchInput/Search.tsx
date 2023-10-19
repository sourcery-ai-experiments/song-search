import React, { useState } from 'react';
import CardSong from '../../cardSong';
import SearchIcon from '@mui/icons-material/Search';
import IconButton from '@mui/material/IconButton/IconButton';
import InputBase from '@mui/material/InputBase';
//estilos para el propis para el componente InpuBase
const style = {
    background: 'linear-gradient(45deg, #f2f2f2 30%, #f2f2f2 90%)',
    borderRadius: 25,
    color: 'black'
};

const Search = () => {

    const [searchTerm, setSearchTerm] = useState('');
    const [showCards, setShowCards] = useState(false);

    const handleSearch = () => {
        // Cambiar el estado para mostrar las tarjetas
        setShowCards(true);
    };
    return (
        <div>
            <div >
                <h2>Search Song</h2>
                <InputBase
                    style={style}
                    sx={{ ml: 1, flex: 1 }}
                    placeholder="Search Song"
                    value={searchTerm}
                    onChange={(e) => { setSearchTerm(e.target.value); handleSearch() }}
                    startAdornment={
                        <IconButton color="default" aria-label="upload picture" component="span" onClick={handleSearch}>
                            <SearchIcon />
                        </IconButton>}
                />
            </div>
            <div>
                {showCards && <CardSong searchTerm={searchTerm.length > 3 ? searchTerm : ''} />}
            </div>
        </div>
    );
};

export default Search;
