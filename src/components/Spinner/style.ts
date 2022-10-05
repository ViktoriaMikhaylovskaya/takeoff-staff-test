import styled, { keyframes } from 'styled-components';

export const rotateOne = keyframes`
    0% {
      transform: rotateX(35deg) rotateY(-45deg) rotateZ(0deg);
    }
    100% {
      transform: rotateX(35deg) rotateY(-45deg) rotateZ(360deg);
    }
`

export const rotateTwo = keyframes`
    0% {
        transform: rotateX(50deg) rotateY(10deg) rotateZ(0deg);
    }
    100% {
        transform: rotateX(50deg) rotateY(10deg) rotateZ(360deg);
    }
`

export const rotateThree = keyframes`
    0% {
        transform: rotateX(35deg) rotateY(55deg) rotateZ(0deg);
    }
    100% {
        transform: rotateX(35deg) rotateY(55deg) rotateZ(360deg);
    }
`

export const SpinnerContainer = styled.div`
    position: absolute;
    top: calc(50% - 32px);
    left: calc(50% - 32px);
    width: 64px;
    height: 64px;
    border-radius: 50%;
    perspective: 800px;
`

export const ElementOne = styled.div`
    position: absolute;
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    left: 0%;
    top: 0%;
    animation: ${rotateOne} 1s linear infinite;
    border-bottom: 3px solid #141461;
`

export const ElementTwo = styled.div`
    position: absolute;
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    right: 0%;
    top: 0%;
    animation: ${rotateTwo} 1s linear infinite;
    border-right: 3px solid #141461;
`

export const ElementThree = styled.div`
    position: absolute;
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    right: 0%;
    bottom: 0%;
    animation: ${rotateThree} 1s linear infinite;
    border-top: 3px solid #141461;
`
