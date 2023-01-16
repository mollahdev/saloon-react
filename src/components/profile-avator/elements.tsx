import styled from '@emotion/styled';
import { Box, Button } from '@mui/material';
import { Link } from 'react-router-dom';

export const Wrapper = styled(Box)((props: {open: boolean}) => ({
    "--border-radius": "4px",
    display: "flex",
    alignItems: "center",
    gap: "2px",
    padding: "3px",
    borderRadius: "var(--border-radius)",
    cursor: 'pointer',
    userSelect: 'none',
    svg: {
        opacity: .5
    },
    ...(props.open && {
        backgroundColor: "#fff"
    }),
}));


export const Image = styled('img')`
    border-radius: var(--border-radius, 4px);
`

export const DropdownContainer = styled(Box)((props: {open: boolean}) => {
    return {
        display: props.open ? 'block' : 'none',
        position: 'fixed',
        top: '56px',
        right: '14px',
        backgroundColor: '#fff',
        zIndex: 99,
        width: '270px',
        padding: '5px',
        border: '1px solid #eee',
        boxShadow: "-1px 20px 30px rgba(0,0,0, .1)",
        borderRadius: "0 0 10px 10px"
    }
})

export const LinkWrapper = styled(Link)`
    --color: #101010;
    text-decoration: none;
    display: inline-block;
    text-align: center;
    padding: 20px 10px;
    color: var(--color);
    border: 1px solid #eee;
    margin: -.5px;

    &:hover label{
        color: var(--color);
    }

    label {
        margin-top: 5px;
        cursor: pointer;
    }

    &:nth-of-type(1) {
        --color: #4285F4;
    }
    
    &:nth-of-type(6) {
        --color: #DB4437;
    }
    
    &:nth-of-type(3) {
        --color: #F4B400;
    }
    
    &:nth-of-type(4) {
        --color: #0F9D58;
    }
    
    &:nth-of-type(5) {
        --color: purple;
    }
`

export const LogOutBtn = styled(Button)`
    display: flex;
    background: #eeee;
    width: calc(100% + 1px);
    border: 1px solid #eee;
    border-radius: 0%;
    margin-left: -.5px;
    text-transform: capitalize;
    gap: 10px;
    height: 45px;
    color: #5a74ff;

    svg {
        color: red
    }

    &:focus {
        background-color: #eee;
    }
`