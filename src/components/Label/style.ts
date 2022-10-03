import styled from 'styled-components';

export const LabelContainer = styled.label<{ marginBottom?: string }>`
    display: flex;
    justify-content: space-between;
    width: 100%;
    align-items: center;
    gap: 20px;
    margin-bottom: ${({ marginBottom }) => marginBottom ? marginBottom : '0'};
    font-size: 20px;
`