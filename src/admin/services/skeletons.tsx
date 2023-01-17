import Skeleton from '@mui/material/Skeleton';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Stack from '@mui/material/Stack';
import { Fragment } from 'react';

const Skeletons: React.FC = () => {
    return (
        <Fragment>
            <Card>
                <Skeleton variant="rectangular" height={140} />
                <CardContent sx={{pb:0}}>
                    <Stack direction="row" spacing={1} sx={{mb: 1}}>
                        <Skeleton sx={{borderRadius: '100px'}} variant="rectangular" width={70} height={35} />
                        <Skeleton sx={{borderRadius: '100px'}} variant="rectangular" width={140} height={35} />
                    </Stack>
                    <Skeleton sx={{mb: 2}} variant="rectangular" height={20} />
                    <Skeleton sx={{mb: 1}} variant="rectangular" height={10} />
                    <Skeleton sx={{mb: 1}} variant="rectangular" height={10} />
                    <Skeleton sx={{mb: 1}} variant="rectangular" height={10} />
                    <Skeleton sx={{mb: 1}} variant="rectangular" width="80%" height={10} />
                </CardContent>
            </Card>
            
            <Card>
                <Skeleton variant="rectangular" height={140} />
                <CardContent sx={{pb:0}}>
                    <Stack direction="row" spacing={1} sx={{mb: 1}}>
                        <Skeleton sx={{borderRadius: '100px'}} variant="rectangular" width={70} height={35} />
                        <Skeleton sx={{borderRadius: '100px'}} variant="rectangular" width={140} height={35} />
                    </Stack>
                    <Skeleton sx={{mb: 2}} variant="rectangular" height={20} />
                    <Skeleton sx={{mb: 1}} variant="rectangular" height={10} />
                    <Skeleton sx={{mb: 1}} variant="rectangular" height={10} />
                    <Skeleton sx={{mb: 1}} variant="rectangular" height={10} />
                    <Skeleton sx={{mb: 1}} variant="rectangular" width="80%" height={10} />
                </CardContent>
            </Card>
        </Fragment>
    )
}

export default Skeletons;