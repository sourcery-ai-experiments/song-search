import { getToken } from "./generateToken";
import Track from "../models/track.inteface";
import { fecthApiData } from "./requestApiData";

const getListSong = async (searchTerm?: string): Promise<Track[]> =>  {
  const songList: Track[] = [];
  //we create a variable and to asigned the value of the getToken fuction
  const token = await getToken();
  
    if (searchTerm && searchTerm.length > 3) {
      try {
        //here connets de API and also we does petition of the endpoint
        const data =await fecthApiData(searchTerm, token);
        data.tracks.items.map((item: { id:any; name: any; album: { images: { url: any; }[]; }; artists: { name: any; }[]; }) => {
          songList.push({
            id:item.id,
            imageUrl: item.album.images[1].url,
            name: item.name,
            artist: item.artists[0].name,
          });
        });
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    else {
      return songList;
    }
  return songList;
};
export { getListSong };
