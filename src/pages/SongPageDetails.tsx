import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Song from "../models/song.interface";
import { getSong } from "../services/requetsToEndpointSong";
import CardSongDetails from "../components/molecules/cardSongDetails";

const SongDataDetails = () => {
  const { index } = useParams();
  const [song, setSong] = useState<Song[]>([]);
  useEffect(() => {
    const dataSong = async () => {
      try {
        const data = await getSong(index);
        setSong(data);
      } catch (error) {
        console.log(error);
      }
    };
    dataSong();
  }, [index]);

  return (
    <div>
      <CardSongDetails songs={song} />
    </div>
  );
};

export default SongDataDetails;