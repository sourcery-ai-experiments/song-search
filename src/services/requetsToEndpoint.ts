import { getToken } from "./generateToken";
import Track from "../models/track.inteface";

const dataUpload = async (searchTerm?: string) => {
  //console.log(searchTerm)
  const songList: Track[] = [];
  //creamos una variable y le asignamos el valor de la funcion getToken
  const result = await getToken();
  console.log(searchTerm);
  
    if (searchTerm && searchTerm.length > 3) {
      try {
        //aqui realizamos la conexion de la api y tambien realizamos la peticion del endpoint
        const response = await fetch(
          `https://api.spotify.com/v1/search?type=track&q=${searchTerm}&limit=10`,
          {
            headers: {
              Authorization: "Bearer " + `${result}`,
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
        // Aquí puedes manejar los errores de la solicitud
        console.error("Error fetching data:", error);
        console.log("verificar el token");
      }
    }
    else {
      return songList;
    }
  
  return songList;
};
export { dataUpload };
