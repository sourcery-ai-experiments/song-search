import { getToken } from "./generateToken";
import Track from "../models/track.inteface";

const getListSong = async (searchTerm?: string): Promise<Track[]> =>  {
  const songList: Track[] = [];
  //we create a variable and to asigned the value of the getToken fuction
  const token = await getToken();
  
    if (searchTerm && searchTerm.length > 3) {
      try {
        //here connets de API and also we does petition of the endpoint
        const response = await fetch(
          `https://api.spotify.com/v1/search?type=track&q=${searchTerm}&limit=10`,
          {
            headers: {
              Authorization: "Bearer " + `${token}`,
            },
          }
        );
        const data = await response.json();
        data.tracks.items.map((item: { name: any; album: { images: { url: any; }[]; }; artists: { name: any; }[]; }) => {
          songList.push({
            imageSong: item.album.images[1].url,
            nameSong: item.name,
            nameArtist: item.artists[0].name,
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
