import styled from "@emotion/styled";
import { Box } from "@mui/system";

export const BootWrapper = styled(Box)`
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 1;
    animation: fade 2s linear infinite;

    img {
        filter: invert(1);
    }

    p {
        text-align: center;
        font-size: 20px;
        text-transform: uppercase;
        font-family: arial;
    }
`