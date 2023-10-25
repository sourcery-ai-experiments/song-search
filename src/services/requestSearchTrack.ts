const SearchTrack = async (index: string, token: string): Promise<any> => {
  try {
    const response = await fetch(`https://api.spotify.com/v1/tracks/${index}`, {
      headers: {
        Authorization: "Bearer " + token,
      },
    });
    const data = await response.json();
    return data;
  } catch (error) {
    return ;
  }
};
export default SearchTrack;
