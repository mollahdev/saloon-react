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

/**
 * Internal dependencies 
 */ 
import { GeneralWrapper, CreateForm } from 'admin/services/element';

const Create: React.FC = () => {

    
    const handleChange = (event: SelectChangeEvent) => {
    };

    return (
        <GeneralWrapper>
            <Link to="/admin/services"><Button variant="text" startIcon={<ChevronLeftIcon />}>Back</Button></Link>
            <CreateForm component="form" noValidate autoComplete="off">
                <Typography variant="h6">General</Typography>
                <div className="form-content">
                    <TextField size='medium' label="Service Name" variant="outlined" />
                    <TextField label="Default Price" type="number"/>
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
                
                <Typography variant="h6">Advanced</Typography>
                <div className="form-content">
                    <TextField size='medium' label="Service Name" variant="outlined" />
                    <TextField label="Default Price" type="number"/>
                    <TextField label="Default Price" type="number"/>
                    <TextField label="Default Price" type="number"/>
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
            </CreateForm>
        </GeneralWrapper>
    )
}

export default Create