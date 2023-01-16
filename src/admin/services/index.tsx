/**
 * External dependencies 
 */ 
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import SettingsIcon from '@mui/icons-material/Settings';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import AddIcon from '@mui/icons-material/Add';
/**
 * Internal dependencies 
 */ 
import { ServiceArchiveWrapper, AddNewServiceBtn } from 'admin/services/element';
import blackMast from 'images/black-mask.png';

const Services: React.FC = () => {
    return (
        <ServiceArchiveWrapper>
            <Card>
                <CardMedia
                    sx={{ height: 140 }}
                    image={blackMast}
                    title="green iguana"
                />
                <CardContent sx={{pb: '3px'}}>
                    <Stack direction="row" spacing={1} sx={{mb: 1}}>
                        <Chip label="Price $35" />
                        <Chip label="Duration 45 mins" variant="outlined" />
                    </Stack>
                    <Typography gutterBottom variant="h6" component="h3"> Haircut & Beared Trim</Typography>
                    <Typography variant="body2" color="text.secondary">
                        Lizards are a widespread group of squamate reptiles, with over 6,000
                        species, ranging across all continents except Antarctica
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small" sx={{display: 'flex', alignItems: 'center', gap: '5px'}}>
                        <SettingsIcon/>Settings</Button>
                </CardActions>
            </Card>
            <Card>
                <CardMedia
                    sx={{ height: 140 }}
                    image={blackMast}
                    title="green iguana"
                />
                <CardContent sx={{pb: '3px'}}>
                    <Stack direction="row" spacing={1} sx={{mb: 1}}>
                        <Chip label="Price $35" />
                        <Chip label="Duration 45 mins" variant="outlined" />
                    </Stack>
                    <Typography gutterBottom variant="h6" component="h3"> Haircut & Beared Trim</Typography>
                    <Typography variant="body2" color="text.secondary">
                        Lizards are a widespread group of squamate reptiles, with over 6,000
                        species, ranging across all continents except Antarctica
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small" sx={{display: 'flex', alignItems: 'center', gap: '5px'}}>
                        <SettingsIcon/>Settings</Button>
                </CardActions>
            </Card>
            <Card>
                <CardMedia
                    sx={{ height: 140 }}
                    image={blackMast}
                    title="green iguana"
                />
                <CardContent sx={{pb: '3px'}}>
                    <Stack direction="row" spacing={1} sx={{mb: 1}}>
                        <Chip label="Price $35" />
                        <Chip label="Duration 45 mins" variant="outlined" />
                    </Stack>
                    <Typography gutterBottom variant="h6" component="h3"> Haircut & Beared Trim</Typography>
                    <Typography variant="body2" color="text.secondary">
                        Lizards are a widespread group of squamate reptiles, with over 6,000
                        species, ranging across all continents except Antarctica
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small" sx={{display: 'flex', alignItems: 'center', gap: '5px'}}>
                        <SettingsIcon/>Settings</Button>
                </CardActions>
            </Card>
            <AddNewServiceBtn variant="extended" color="info" aria-label="add">
                <AddIcon sx={{ mr: 1 }} />Add New
            </AddNewServiceBtn>
        </ServiceArchiveWrapper>
    )
}

export default Services