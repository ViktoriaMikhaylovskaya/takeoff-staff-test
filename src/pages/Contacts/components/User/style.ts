import styled from 'styled-components';

export const UserContainer = styled.div`
    display: flex;
    gap: 5px;
    position: fixed;
    right: 20px;
    top: 20px;
    z-index: 1;
    align-items: stretch;
    flex-direction: column;
`

export const UserInfo = styled.div`
    display: flex;
    flex-wrap: nowrap;
    align-items: center;
    border: 2px solid #0083ff;
    border-radius: 10px;
    padding: 5px;
`

export const UserName = styled.h3`
    word-wrap: break-word;
    max-width: 100px;
    margin: '0'
`