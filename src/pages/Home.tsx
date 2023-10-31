import React, { useState, useEffect } from "react";
import Search from "../components/atoms/search";
import CardSongSearch from "../components/atoms/cardSong";
import Track from "../models/track.inteface";
import { getListSong } from "../services/requetsToEndpoint";
import { useNavigate } from "react-router-dom";
import { useLazySearchTracksQuery } from "../services/api";

const Home = () => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [songsData, setSongsData] = useState<Track[]>([]);
  const [trigger, { data }] = useLazySearchTracksQuery();
  const navigate = useNavigate();

  const handleSearch = (nameSong: string) => {
    if (nameSong && nameSong.length > 3) {
      setSearchTerm(nameSong);
      trigger(nameSong);
    } else {
      setSearchTerm("");
      setSongsData([]);
    }
  };

  useEffect(() => {
    if (data) {
      const dataSong = getListSong(data);
      setSongsData(dataSong);
    }
  }, [searchTerm, data]);
  const goUrlSongSpotify = (id: string) => {
    navigate(`/details/${id}`);
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
      <Search onSearch={handleSearch} />
      <CardSongSearch tracksData={songsData} onClickSong={goUrlSongSpotify} />
    </div>
  );
};

export default Home;
