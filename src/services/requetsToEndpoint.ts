import { getToken } from "./generateToken"

const dataUpload = async () => {
    //creamos una variable y le asignamos el valor de la funcion getToken
    const result =await  getToken();
    try {
        //aqui realizamos la conexion de la api y tambien realizamos la peticion del endpoint
        const response = await fetch(
            "https://api.spotify.com/v1/search?type=track&q=perfecta&limit=2",
            {
                headers: {
                    Authorization:
                        "Bearer " +
                        `${result}`,
                },
            }
        );
        const data = await response.json();
        // Actualizar el estado con los datos de la API
        const setSongData = {
            nameArtist: data.tracks.items[0].artists[0].name,
            nameSong: data.tracks.items[0].name,
            imageSong: data.tracks.items[0].album.images[1].url,
            
        };
        console.log(typeof setSongData);
        return setSongData;
    }
    catch (error) {
        // Aquí puedes manejar los errores de la solicitud
        console.error("Error fetching data:", error);
        console.log('verificar el token');
    };
}

export  {dataUpload};
