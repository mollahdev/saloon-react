/**
 * External dependencies 
 */ 
import { Link } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Button from '@mui/material/Button';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import Typography from '@mui/material/Typography';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import Box from '@mui/material/Box';
import InputAdornment from '@mui/material/InputAdornment';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import OutlinedInput from '@mui/material/OutlinedInput';
import SaveIcon from '@mui/icons-material/Save';

/**
 * Internal dependencies 
 */ 
import { GeneralWrapper, CreateForm } from 'admin/services/element';
import ImageUpload from 'components/image-upload';

const Create: React.FC = () => {

    
    const handleChange = (event: SelectChangeEvent) => {
    };

    return (
        <GeneralWrapper>
            <Link to="/admin/services"><Button variant="text" startIcon={<ChevronLeftIcon />}>Back</Button></Link>
            <CreateForm component="form" noValidate autoComplete="off">
                <Typography variant="h6">Photo</Typography>
                <div className="form-content">
                    <ImageUpload/>
                </div>

                <Typography variant="h6">General</Typography>
                <div className="form-content">
                    <TextField size='medium' label="Service Name" variant="outlined" />
                    <TextField label="Default Price" variant="outlined" type="number"/>
                    <FormControl fullWidth>
                        <InputLabel id="duration-label">Duration</InputLabel>
                        <Select labelId="duration-label" label="Duration" onChange={handleChange}>
                            <MenuItem value={15}>15 Minutes</MenuItem>
                            <MenuItem value={30}>30 Minutes</MenuItem>
                            <MenuItem value={45}>45 Minutes</MenuItem>
                            <MenuItem value={60}>60 Minutes</MenuItem>
                        </Select>
                    </FormControl>
                </div>
                
                <Typography variant="h6">Advanced Pricing</Typography>
                <div className="form-content">
                    <Box>
                        <FormControlLabel sx={{mb: 2}}
                            control={
                                <Switch onChange={handleChange} name="individual_price_status" />
                            }
                            label="Enable Individual Price"
                        />
                        <Box sx={{display: 'grid', gap: 1}}>
                            <OutlinedInput
                                startAdornment={<InputAdornment position="start">MD Ashraful Mollah :</InputAdornment>}
                                placeholder='Enter price'
                                type='number'
                            />
                            <OutlinedInput
                                startAdornment={<InputAdornment position="start">MD Ashraful Mollah :</InputAdornment>}
                                placeholder='Enter price'
                                type='number'
                            />
                            <OutlinedInput
                                startAdornment={<InputAdornment position="start">MD Ashraful Mollah :</InputAdornment>}
                                placeholder='Enter price'
                                type='number'
                            />
                        </Box>
                    </Box>
                    <Box>
                        <FormControlLabel sx={{mb: 2}}
                            control={
                                <Switch onChange={handleChange} name="vip_price_status" />
                            }
                            label="Enable VIP Price"
                        />
                        <Box sx={{display: 'grid', gap: 1}}>
                            <OutlinedInput
                                startAdornment={<InputAdornment position="start">Ashraful Mollah :</InputAdornment>}
                                placeholder='Enter price'
                                type='number'
                            />
                            <OutlinedInput
                                startAdornment={<InputAdornment position="start">Ashraful Mollah :</InputAdornment>}
                                placeholder='Enter price'
                                type='number'
                            />
                            <OutlinedInput
                                startAdornment={<InputAdornment position="start">Ashraful Mollah :</InputAdornment>}
                                placeholder='Enter price'
                                type='number'
                            />
                        </Box>
                    </Box>
                </div>
                <Alert severity="info">
                    <AlertTitle>Pricing Info</AlertTitle>
                    <strong>VIP</strong> pricing priority is more than <strong>individual</strong>. And <strong>Individual</strong> pricing priority is more than <strong>default</strong> pricing.
                </Alert>
                <FormControlLabel sx={{mt: 2}}
                    control={
                        <Switch onChange={handleChange} name="status" />
                    }
                    label="Active"
                />
                <Button
                    startIcon={<SaveIcon />}
                    variant="contained"
                    fullWidth
                    size='large'
                    sx={{mt: 2}}
                >
                    <span>Save</span>
                </Button>
            </CreateForm>
        </GeneralWrapper>
    )
}

export default Create