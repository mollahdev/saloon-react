import styled from "@emotion/styled";

export const PageWrapper = styled('div')`
    background-color: #f0f0f1;
    min-height: 100vh;
    display: flex;
    padding-top: 10vh;
`

export const LockIconWrap = styled('span')`
    --size: 70px;
    display: inline-block;
    background-color: #9c27b0;
    width: var(--size);
    height: var(--size);
    border-radius: var(--size);
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
`