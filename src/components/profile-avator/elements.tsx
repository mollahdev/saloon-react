import styled from '@emotion/styled';

export const Wrapper = styled('div')((props: {open: boolean}) => ({
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
        backgroundColor: "#F2EEFF"
    }),
}));


export const Image = styled('img')`
    border-radius: var(--border-radius, 4px);
`