import Track from "../models/track.interface";

const getListSong = (dataSong: any): Track[] => {

  const songList: Track[] = [];
  if (dataSong) {
    try {
      dataSong.tracks.items.map((item: { id: any; name: any; album: { images: { url: any; }[]; }; artists: { name: any; }[]; }) => {
        songList.push({
          id: item.id,
          imageUrl: item.album.images[1].url,
          name: item.name,
          artist: item.artists[0].name,
        });
        return dataSong;});
    } catch (error) {
      return songList;
    }
  }
  else {
    return songList;
  }
  return songList;
};
export { getListSong };
