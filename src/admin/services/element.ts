import styled from "@emotion/styled";
import { Box } from "@mui/material";
import Fab from '@mui/material/Fab';

export const ServiceArchiveWrapper = styled(Box)`
    --padding: 40px;
    padding: var(--padding);
    display: grid;
    gap: 20px;
    grid-template-columns: repeat(auto-fit, minmax(235px, 400px));

    @media (max-width: 900px) {
        --padding: 15px;
    }
`

export const AddNewServiceBtn = styled(Fab)`
    position: fixed;
    right: var(--padding);
    bottom: var(--padding);
`