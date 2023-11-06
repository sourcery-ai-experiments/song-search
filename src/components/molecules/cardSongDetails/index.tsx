import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import convertTime from "../../../utils/convertTime";
import CardSongDetailsProps from "./interface";
import { useTranslation } from "react-i18next";
import SelectLanguage from "../selectLanguage";
import { SelectChangeEvent } from "@mui/material/Select";

const CardSongDetails = ({ songDetail }: CardSongDetailsProps) => {
    const { t, i18n } = useTranslation();
    
    const changeLanguage = (e: SelectChangeEvent<string>) => {
        const selectedLanguage = e.target.value;
        i18n.changeLanguage(selectedLanguage);
    };

    if (!songDetail) {
        return null;
    }

    return (
        <div>
            <SelectLanguage language={i18n.language} changeLanguage={changeLanguage}/>
            <Card
                sx={{
                    display: "flex",
                    margin: "auto",
                    maxWidth: 550,
                    background: "#fffdfccc",
                }}
            >
                <Box sx={{ display: "flex", flexDirection: "column" }}>
                    <CardContent
                        sx={{
                            flex: "1 0 auto",
                            alignContent: "center",
                            alignItems: "center",
                            padding: "30px",
                        }}
                    >
                        <Typography
                            component="div"
                            variant="h5"
                            sx={{ fontWeight: "bold" }}
                        >
                            {t("album")}: {songDetail.album}
                        </Typography>
                        <Typography
                            variant="h6"
                            color="text.secondary"
                            component="div"
                            sx={{ fontWeight: "bold" }}
                        >
                            {t("artist")}: {songDetail.artist}
                        </Typography>
                        <Typography
                            variant="h6"
                            color="text.secondary"
                            component="div"
                            sx={{ fontWeight: "bold" }}
                        >
                            {t("title")}: {songDetail.name}
                        </Typography>
                        <Typography
                            variant="h6"
                            color="text.secondary"
                            component="div"
                            sx={{ fontWeight: "bold" }}
                        >
                            {t("duration")}: {convertTime(songDetail.duration)}
                        </Typography>
                    </CardContent>
                    <Box sx={{ display: "flex", margin: "auto" }}>
                        <IconButton
                            sx={{
                                borderRadius: "25px",
                                height: "50px",
                                marginBottom: "20px",
                            }}
                            onClick={() => {
                                window.open(songDetail.songUrl);
                            }}
                        >
                            <p>{t("listen")}</p>
                            <PlayArrowIcon sx={{ height: 38, width: 38 }} />
                        </IconButton>
                    </Box>
                </Box>
                <CardMedia
                    component="img"
                    sx={{ width: 300 }}
                    src={songDetail.imageUrl}
                />
            </Card>
        </div>
    );
};

export default CardSongDetails;