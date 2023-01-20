import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Wrapper } from "components/image-upload/element";

const ImageUpload: React.FC = () => {
    return(
        <Wrapper>
            <Typography variant="h6">Choose Image</Typography>
            <Button variant="contained" component="label">
                Upload
                <input hidden accept="image/*" type="file" />
            </Button>
        </Wrapper>   
    )
}

export default ImageUpload;