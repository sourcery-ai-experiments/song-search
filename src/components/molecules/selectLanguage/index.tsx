import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import { languages } from "../../../utils/languages";
function SelectLanguage(props: any) {
    return (
        <>
            <Select  value={props.language} onChange={props.changeLanguage}>
            {
                languages.map(({code, label})=>(
                <MenuItem key={code} value={code}>{label}</MenuItem>
                ))
            }
            </Select>
        </>
    );
}

export default SelectLanguage;
