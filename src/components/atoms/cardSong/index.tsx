
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardSongSearchProps from "./interface";

const CardSongSearch = ({ tracksData, onClickSong }:CardSongSearchProps) => {
    return (
      <>
        <div style={{ marginTop: "20px" }}>
          {tracksData.length > 0 &&
            tracksData.map((track, index) => (
              <div key={index}>
                <Card
                  sx={{ maxWidth: 345 }}
                  onClick={() => {
                    onClickSong(track.id);
                  }}
                >
                  <CardMedia
                    component="img"
                    height="300"
                    src={track.imageUrl}
                    alt={track.name}
                  />
                  <CardContent>
                    <Typography variant="h5" color="black">
                      {track.artist}
                    </Typography>
                    <Typography variant="h6" color="black">
                      {track.name}
                    </Typography>
                  </CardContent>
                </Card>
                <br />
              </div>
            ))}
        </div>
      </>
    );
  };

  export default CardSongSearch;

