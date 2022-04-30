import styled from 'styled-components';
import imgBg from '../../images/pizza-3.jpg'

export const HeroContainer = styled.div `
    background: linear-gradient(to right, rgba(0, 0 ,0 ,0.7), rgba(0, 0, 0, 0.1)), url(${imgBg});
    height: 90vh;
    width: 100vw;
    background-position: center;
    background-size:cover;
`
export const HeroContent = styled.div`
    height: calc(100vh-80px);
    max-height: 100%;
    width: 100vw;
    padding: 0rem calc((100vw-1300px) /2);
  
`

export const HeroItems = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    height: 100vh;
    max-height: 100%;
    padding: 0 2rem;
    width: 650px;
    color: #fff;
    text-transform: uppercase;
    line-height: 1;
    font-weight: bold;

    @media screen and (max-width: 650px){
        width: 100%;
    }
`

export const HeroH1 = styled.h1`
    font-size: clamp(2.5rem, 10vw, 5rem);
    box-shadow: 3px 5px #e9ba23;
    margin-bottom: 1rem;
    letter-spacing: 3px;
`


export const HeroP = styled.p`
    font-size: clamp(2rem, 2.5vw, 3rem);
    margin-bottom: 2rem;
`
export const HeroBtn = styled.p`
    font-size: 1.4rem;
    padding: 1rem 4rem;
    border: none;
    background: #e31837;
    color: #fff;
    transition: ease-out 0.3s;
    box-shadow: inset 0 0 0 0 #fff;
    border-radius: 4px;
    outline: none;

&:hover {
    box-shadow: inset 300px 0 0 0 #fff;
    color: #1C1C1C;
    cursor: pointer;
}

`
