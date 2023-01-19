import styled from "@emotion/styled";
import { Box } from "@mui/material";
import Fab from '@mui/material/Fab';

export const ServiceArchiveWrapper = styled(Box)`
    --padding: 40px;
    padding: var(--padding);
    max-width: 1000px;
    margin: 0 auto;

    @media (max-width: 900px) {
        --padding: 15px;
    }

    .archive-content {
        display: grid;
        gap: 20px;
        grid-template-columns: repeat(auto-fit, minmax(235px, 400px));
    }
`

export const AddNewServiceBtn = styled(Fab)`
    position: fixed;
    right: var(--padding);
    bottom: var(--padding);
`

export const GeneralWrapper = styled(Box)`
    --padding: 40px;
    padding: var(--padding);
    max-width: 1000px;
    margin: 0 auto;
    @media (max-width: 900px) {
        --padding: 15px;
    }
`

export const CreateForm = styled(Box)<{noValidate: boolean, autoComplete: string}>`
    background-color: #fff;
    padding: 15px;
    margin-top: 10px;
    border-radius: 6px;
    
    .form-content {
        display: grid;
        gap: 20px;
        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
        margin: 10px 0 25px 0;
    }
`