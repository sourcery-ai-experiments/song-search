import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Song from "../models/song.interface";
import { getSong } from "../services/requetsToEndpointSong";
import CardSongDetails from "../components/molecules/cardSongDetails";
import { useGetSearchTrackQuery } from "../services/api";

const SongDataDetails = () => {
  const { index } = useParams();
  const dataSong = useGetSearchTrackQuery(index);
  const [song, setSong] = useState<Song>({album:'',artist: '',name: '', imageUrl: '', duration:0, songUrl:''});

  useEffect(() => {
    const fetchSongData = () => {
        const dataSongDetail= getSong(dataSong)
        setSong(dataSongDetail);
    };
    if (dataSong) {
      fetchSongData();
    }
  }, [dataSong]);
  return (
    <div>
      <CardSongDetails songDetail={song} />
    </div>
  );
};

export default SongDataDetails;