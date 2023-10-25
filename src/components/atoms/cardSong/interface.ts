import Track from "../../../models/track.inteface";
interface CardSongSearchProps {
    tracksData: Track[];
    onClickSong: (id: string) => void;
  }
  export default CardSongSearchProps;