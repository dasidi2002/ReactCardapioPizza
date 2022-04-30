import styled from "styled-components";

import FeaturePic from '../../images/FeaturePic.jpg'

export const FeatureContainer = styled.div`

    background: linear-gradient(to right, rgba(0, 0 ,0 ,0.7), rgba(0, 0, 0, 0.1)), url(${FeaturePic});
    height: 100vh; 
    width: 100vw;
    max-height: 500px;
    background-position: center;
    background-size: cover;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: #fff;
    text-align: center;
    padding: 0 1rem;

    h1{
        font-size: clamp(2rem, 4vw,3rem);
    }

    p{
        margin-bottom: 1rem;
        font-size: clamp(2rem, 2vw,2rem); 
    }

`
export const FeatureButtom = styled.button`

    font-size: 1.4rem;
    padding: 0.6rem 3rem;
    border: none;
    background: rgba(140, 242, 120, 1);
    color: #000;
    transition: 0.2s ease-out;
    font-weight: 700;

    &:hover {
        color : #fff;
        background: #e31837;
        transition: 0.2s ease-out;
        cursor: pointer;
    }

`