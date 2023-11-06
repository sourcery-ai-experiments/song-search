import Song from "../models/song.interface";

const getSong = ({ data }: any): Song => {
  const songSearch:  Song  = {album:'',artist: '',name: '', imageUrl: '', duration:0, songUrl:''};
  if (data) {
    try {
      //we assign the values ​​directly
      songSearch.album = data.album.name;
      songSearch.imageUrl = data.album.images[1].url;
      songSearch.name = data.name;
      songSearch.artist = data.artists[0].name;
      songSearch.duration = parseInt(data.duration_ms);
      songSearch.songUrl = data.external_urls.spotify;
      
    } catch (error) {
      console.log(error);
    }
  } else {
    return songSearch;
  }
  return songSearch;
};
export { getSong };
