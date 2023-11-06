import Track from "../../../models/track.interface";
interface CardSongSearchProps {
    tracksData: Track[];
    onClickSong: (id: string) => void;
  }
  export default CardSongSearchProps;