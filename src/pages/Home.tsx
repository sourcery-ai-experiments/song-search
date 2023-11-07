import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { SelectChangeEvent } from "@mui/material/Select";
import { useNavigate } from "react-router-dom";

import Track from "../models/track.interface";

import { getListSong } from "../services/requetsToEndpoint";
import { useLazySearchTracksQuery } from "../services/api";
import SelectLanguage from "../components/molecules/selectLanguage";
import { SearchInput, CardSongSearch } from "../components/atoms";

const Home = () => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [songsData, setSongsData] = useState<Track[]>([]);
  const [trigger, { data }] = useLazySearchTracksQuery();

  const navigate = useNavigate();
  const { i18n } = useTranslation();

  useEffect(() => {
    if (data) {
      const dataSong = getListSong(data);
      setSongsData(dataSong);
    }
  }, [searchTerm, data]);

  const goUrlSongSpotify = (id: string) => {
    navigate(`/details/${id}`);
  };

  const changeLanguage = (e: SelectChangeEvent<string>) => {
    const selectedLanguage = e.target.value;
    i18n.changeLanguage(selectedLanguage);
  };

  const handleSearch = (nameSong: string) => {
    if (nameSong && nameSong.length > 3) {
      setSearchTerm(nameSong);
      trigger(nameSong);
    } else {
      setSearchTerm("");
      setSongsData([]);
    }
  };
  return (
    <>
      <SelectLanguage
        language={i18n.language}
        changeLanguage={changeLanguage}
      />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <SearchInput onSearch={handleSearch} />
        <CardSongSearch tracksData={songsData} onClickSong={goUrlSongSpotify} />
      </div>
    </>
  );
};

export default Home;
