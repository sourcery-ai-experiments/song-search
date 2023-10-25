const fecthApiData = async (
  searchTerm: string,
  token: string
): Promise<any> => {
  try {
    const response = await fetch(
      `https://api.spotify.com/v1/search?type=track&q=${searchTerm}&limit=10`,
      {
        headers: {
          Authorization: "Bearer " + `${token}`,
        },
      }
    );
    const data = await response.json();
    return data;
  } catch (error) {
    return;
  }
};
export { fecthApiData };
