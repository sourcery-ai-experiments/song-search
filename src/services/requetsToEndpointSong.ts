import { getToken } from "./generateToken";
import Song from "../models/song.interface";
import  SearchTrack  from "./requestSearchTrack";

const getSong = async (searchTerm?: string): Promise<Song[]> =>  {
  const songSearch: Song[] = [];
  //we create a variable and to asigned the value of the getToken fuction
  const token = await getToken();
  
    if (searchTerm) {
      try {
        //here you connect to the API and make a request to the endpoint
        const data = await SearchTrack(searchTerm, token);
          songSearch.push({
            album:data.album.name,
            imageUrl: data.album.images[1].url,
            name:data.name,
            artist: data.artists[0].name,
            duration: data.duration_ms,
            songUrl: data.external_urls.spotify
          });
        
      } catch (error) {
        console.log(error);
      }
    }
    else {
      return songSearch;
    }
  return songSearch;
};
export { getSong };
