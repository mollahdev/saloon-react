/**
 * External dependencies 
 */ 
import LockPersonOutlinedIcon from '@mui/icons-material/LockPersonOutlined';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { compose } from '@wordpress/compose';
import { withSelect } from '@wordpress/data';
import { useState, useEffect } from "react";
import { Navigate } from "react-router-dom"
import { Container } from "@mui/system";
import { doAction } from '@wordpress/hooks';
import { SvgIcon, IconButton, Card, CardContent, TextField, Typography, FormControl, 
    InputAdornment, OutlinedInput, InputLabel, FormGroup, FormControlLabel, Checkbox, Grid, 
    Button, Link
} from "@mui/material";
/**
 * Internal dependencies 
 */ 
import { PageWrapper, LockIconWrap } from "frontend/dashboard-login/elements";
import { UserInterface } from 'types/common';

interface DashboardLoginProps {
    title: string;
    menu?: object;
    user: UserInterface,
}

const DashboardLogin: React.FC<DashboardLoginProps> = ( props ) => {
    const { user, title } = props;
    const [showPassword, setShowPassword] = useState(false);

    useEffect(() => {
        doAction( 'set-page-title' , title)
    }, [])

    if( user.login ) {
        return <Navigate to="/admin" replace/>
    }

    const handleClickShowPassword = () => setShowPassword((show) => !show);
    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    };

    return(
        <PageWrapper>
            <Container maxWidth="xs">
                <LockIconWrap>
                    <SvgIcon sx={{color: 'white'}} fontSize="large" component={LockPersonOutlinedIcon}/>
                </LockIconWrap>
                <Typography sx={{fontWeight: 500}} align="center" variant="h5" my={2}>Sign In</Typography>
                <Card>
                    <CardContent sx={{padding: '30px 20px'}}>
                        <form>
                            <Grid sx={{display: 'flex', gap: '20px', flexDirection: 'column'}}>
                                <TextField type="email" required variant="outlined" label="Email Address" fullWidth/>
                                <FormControl required variant="outlined" fullWidth>
                                    <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                                    <OutlinedInput
                                        id="outlined-adornment-password"
                                        type={showPassword ? 'text' : 'password'}
                                        endAdornment={
                                        <InputAdornment position="end">
                                            <IconButton
                                                aria-label="toggle password visibility"
                                                onClick={handleClickShowPassword}
                                                onMouseDown={handleMouseDownPassword}
                                                edge="end"
                                            >
                                                {showPassword ? <VisibilityOff /> : <Visibility />}
                                            </IconButton>
                                        </InputAdornment>
                                        }
                                        label="Password"
                                    />
                                </FormControl>
                                <FormGroup>
                                    <FormControlLabel sx={{userSelect: 'none'}} control={<Checkbox />} label="Remember Password" />
                                </FormGroup>
                                <Button type="submit" size="large" variant="contained">Sign In</Button>
                            </Grid>
                        </form>
                    </CardContent>
                </Card>
                <Typography mt={2}>
                    <Link href="#">Forget Password</Link>
                </Typography>
            </Container>
        </PageWrapper>
    )
}


const applyWithSelect = withSelect( (select: Function) => {
    const global = select('global');
    return {
        user: global.getCurrentUser()
    }
} )

export default compose(
    applyWithSelect
)( DashboardLogin ) as React.FC;